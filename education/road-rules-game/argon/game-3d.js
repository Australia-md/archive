/* ============================================================================
 * Australia.md — Three.js (3D.js) Australian Road Rules & 2026 Licence Engine
 * Left-Hand Traffic 3D Simulator + 5-Locale HUD + 2026 Licence Calculator
 * ============================================================================ */

(function () {
  "use strict";

  const DATA = window.AU_ROAD_DATA;
  let currentLang = "en";
  let currentScenarioIdx = 0;
  let wallet = 2500;
  let demerits = 0;
  let scoreCorrect = 0;
  let cameraMode = "chase"; // "chase" | "top" | "cockpit"

  // Driving state machine: "APPROACHING" | "DECISION" | "MANOEUVRE" | "RESULT"
  let drivePhase = "APPROACHING";
  let currentSpeed = 60;
  let activeAnim = null;
  let animProgress = 0;

  // Three.js Globals
  let scene, camera, renderer, clock;
  let playerCar, scenarioGroup, npcVehicle, tramMesh, policeLightsGroup;
  let indicatorLeftMesh, indicatorRightMesh, brakeLightsMesh;

  // DOM Elements
  const elTitle = document.getElementById("ui-title");
  const elSubtitle = document.getElementById("ui-subtitle");
  const elStateLabel = document.getElementById("ui-state-label");
  const elStateBadge = document.getElementById("ui-state-badge");
  const elWalletLabel = document.getElementById("ui-wallet-label");
  const elWalletValue = document.getElementById("ui-wallet-value");
  const elDemeritLabel = document.getElementById("ui-demerit-label");
  const elDemeritValue = document.getElementById("ui-demerit-value");
  const elStageLabel = document.getElementById("ui-stage-label");
  const elStageValue = document.getElementById("ui-stage-value");
  const elLicenceBtn = document.getElementById("btn-licence-modal");
  const elRestartBtn = document.getElementById("btn-restart");

  const elSpeedDial = document.getElementById("speed-dial");
  const elSpeedNum = document.getElementById("speed-num");
  const elDriveStatus = document.getElementById("drive-status-badge");
  const elDriveRoadDesc = document.getElementById("drive-road-desc");

  const elScenarioCard = document.getElementById("scenario-card");
  const elScenarioStep = document.getElementById("scenario-step");
  const elScenarioState = document.getElementById("scenario-state-pill");
  const elScenarioTitle = document.getElementById("scenario-title");
  const elScenarioPrompt = document.getElementById("scenario-prompt");
  const elOptionsList = document.getElementById("options-list");
  const elFeedbackBox = document.getElementById("feedback-box");
  const elFeedbackVerdict = document.getElementById("feedback-verdict");
  const elFeedbackText = document.getElementById("feedback-text");
  const elFeedbackSource = document.getElementById("feedback-source");
  const elNextBtn = document.getElementById("btn-next-scenario");
  const elFlashOverlay = document.getElementById("flash-overlay");

  // ==========================================================================
  // 1. INITIALIZE THREE.JS 3D AUSTRALIAN LEFT-HAND ROAD SCENE
  // ==========================================================================
  function init3D() {
    const container = document.getElementById("canvas-container");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0c1628);
    scene.fog = new THREE.FogExp2(0x0c1628, 0.0065);

    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      400
    );

    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x1e293b, 0.85);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.15);
    dirLight.position.set(-35, 65, 45);
    dirLight.castShadow = true;
    scene.add(dirLight);

    buildBaseEnvironment();
    playerCar = buildPlayerCar();
    scene.add(playerCar);

    scenarioGroup = new THREE.Group();
    scene.add(scenarioGroup);

    window.addEventListener("resize", onWindowResize);
    loadScenario(0);
    animate();
  }

  // Build Australian Road Base (Left-Hand Traffic: South-to-North is X = -3.6, North-to-South is X = +3.6)
  function buildBaseEnvironment() {
    const envGroup = new THREE.Group();

    // Grass / Outback Verge
    const groundGeo = new THREE.PlaneGeometry(360, 460);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x132620 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    envGroup.add(ground);

    // Main 4-Lane Asphalt Road (Width 15m: X from -7.5 to +7.5)
    const roadGeo = new THREE.PlaneGeometry(15, 420);
    const roadMat = new THREE.MeshPhongMaterial({ color: 0x1e2530, shininess: 12 });
    const road = new THREE.Mesh(roadGeo, roadMat);
    road.rotation.x = -Math.PI / 2;
    envGroup.add(road);

    // Cross-Street Asphalt at Z = 0 (Intersection Width 14m)
    const crossGeo = new THREE.PlaneGeometry(160, 14);
    const crossRoad = new THREE.Mesh(crossGeo, roadMat);
    crossRoad.rotation.x = -Math.PI / 2;
    crossRoad.position.set(0, 0.01, 0);
    envGroup.add(crossRoad);

    // White Continuous Outer Edge Lines
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0xe2e8f0 });
    [-7.1, 7.1].forEach((xPos) => {
      const seg1 = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 180), edgeMat);
      seg1.rotation.x = -Math.PI / 2;
      seg1.position.set(xPos, 0.02, 97);
      envGroup.add(seg1);

      const seg2 = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 180), edgeMat);
      seg2.rotation.x = -Math.PI / 2;
      seg2.position.set(xPos, 0.02, -97);
      envGroup.add(seg2);
    });

    // Dashed Lane Sub-Dividers (Left side X = -3.7, Right side X = +3.7)
    const dashMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
    for (let z = -170; z <= 170; z += 9) {
      if (Math.abs(z) < 12) continue;
      [-3.7, 3.7].forEach((xPos) => {
        const d = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 3.5), dashMat);
        d.rotation.x = -Math.PI / 2;
        d.position.set(xPos, 0.02, z);
        envGroup.add(d);
      });
    }

    // Roadside Streetlights & Gum Trees
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x475569 });
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
    const leafMat = new THREE.MeshLambertMaterial({ color: 0x1e4631 });

    for (let z = -160; z <= 160; z += 28) {
      if (Math.abs(z) < 18) continue;
      [-10.5, 10.5].forEach((xSide) => {
        // Streetlight pole
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 7.5, 8), poleMat);
        pole.position.set(xSide, 3.75, z);
        envGroup.add(pole);

        const lamp = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 0.2, 0.4),
          new THREE.MeshBasicMaterial({ color: 0xfef08a })
        );
        lamp.position.set(xSide > 0 ? xSide - 0.8 : xSide + 0.8, 7.4, z);
        envGroup.add(lamp);

        // Eucalyptus tree further out
        const treeX = xSide > 0 ? xSide + 6 : xSide - 6;
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 3.2, 7), trunkMat);
        trunk.position.set(treeX, 1.6, z + 10);
        envGroup.add(trunk);

        const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 1), leafMat);
        crown.position.set(treeX, 4.4, z + 10);
        envGroup.add(crown);
      });
    }

    scene.add(envGroup);
  }

  // Build Player's 3D Car (Right-Hand Drive Australian Vehicle)
  function buildPlayerCar() {
    const car = new THREE.Group();

    // Lower Chassis
    const bodyGeo = new THREE.BoxGeometry(2.0, 0.75, 4.3);
    const bodyMat = new THREE.MeshPhongMaterial({ color: 0x2563eb, shininess: 80 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.65;
    car.add(body);

    // Cabin / Greenhouse
    const cabinGeo = new THREE.BoxGeometry(1.72, 0.65, 2.2);
    const cabinMat = new THREE.MeshPhongMaterial({ color: 0x0f172a, shininess: 100 });
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(0, 1.3, 0.15);
    car.add(cabin);

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 16);
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111827 });
    [
      [-1.02, 0.38, -1.35],
      [1.02, 0.38, -1.35],
      [-1.02, 0.38, 1.35],
      [1.02, 0.38, 1.35]
    ].forEach((pos) => {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(pos[0], pos[1], pos[2]);
      car.add(w);
    });

    // Headlights (Front is -Z)
    const hlMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3 });
    [-0.68, 0.68].forEach((x) => {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.18, 0.08), hlMat);
      hl.position.set(x, 0.72, -2.16);
      car.add(hl);
    });

    // Brake Lights (Rear is +Z)
    brakeLightsMesh = new THREE.Group();
    const blMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    [-0.68, 0.68].forEach((x) => {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.18, 0.08), blMat);
      bl.position.set(x, 0.75, 2.16);
      brakeLightsMesh.add(bl);
    });
    car.add(brakeLightsMesh);

    // Turn Indicators (Amber)
    const indMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    indicatorLeftMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 4.36), indMat);
    indicatorLeftMesh.position.set(-0.92, 0.68, 0);
    indicatorLeftMesh.visible = false;
    car.add(indicatorLeftMesh);

    indicatorRightMesh = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 4.36), indMat);
    indicatorRightMesh.position.set(0.92, 0.68, 0);
    indicatorRightMesh.visible = false;
    car.add(indicatorRightMesh);

    // Police / Enforcement Lightbar (Hidden unless infringement occurs)
    policeLightsGroup = new THREE.Group();
    const redSirens = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.18, 0.28),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    redSirens.position.set(-0.35, 1.72, 0.1);
    const blueSirens = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.18, 0.28),
      new THREE.MeshBasicMaterial({ color: 0x0066ff })
    );
    blueSirens.position.set(0.35, 1.72, 0.1);
    policeLightsGroup.add(redSirens, blueSirens);
    policeLightsGroup.visible = false;
    car.add(policeLightsGroup);

    return car;
  }

  // Helper: Create 3D Regulatory Sign with Crisp CanvasTexture Text
  function createRoadSign(x, z, headerText, subText, bgColor, textColor) {
    const signGroup = new THREE.Group();
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 3.4, 8),
      new THREE.MeshLambertMaterial({ color: 0x94a3b8 })
    );
    post.position.y = 1.7;
    signGroup.add(post);

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = bgColor || "#ffffff";
    ctx.fillRect(0, 0, 512, 320);
    ctx.lineWidth = 14;
    ctx.strokeStyle = textColor || "#0f172a";
    ctx.strokeRect(12, 12, 488, 296);

    ctx.fillStyle = textColor || "#0f172a";
    ctx.textAlign = "center";
    ctx.font = "bold 44px sans-serif";
    ctx.fillText(headerText, 256, 130);

    if (subText) {
      ctx.font = "bold 32px sans-serif";
      ctx.fillStyle = "#dc2626";
      ctx.fillText(subText, 256, 215);
    }

    const tex = new THREE.CanvasTexture(canvas);
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 1.65, 0.12),
      new THREE.MeshBasicMaterial({ map: tex })
    );
    board.position.y = 3.5;
    signGroup.add(board);

    signGroup.position.set(x, 0, z);
    return signGroup;
  }

  // Helper: Build 3D Traffic Light Gantry
  function createTrafficLight(x, z, activeColor) {
    const tlGroup = new THREE.Group();
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.14, 5.2, 8),
      new THREE.MeshLambertMaterial({ color: 0x334155 })
    );
    pole.position.y = 2.6;
    tlGroup.add(pole);

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 1.9, 0.45),
      new THREE.MeshLambertMaterial({ color: 0x090d16 })
    );
    box.position.y = 4.6;
    tlGroup.add(box);

    const colors = [
      { name: "red", hex: 0xef4444, y: 5.15 },
      { name: "yellow", hex: 0xf59e0b, y: 4.6 },
      { name: "green", hex: 0x10b981, y: 4.05 }
    ];
    colors.forEach((c) => {
      const isLit = c.name === activeColor;
      const lens = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 12, 12),
        new THREE.MeshBasicMaterial({ color: isLit ? c.hex : 0x1e293b })
      );
      lens.position.set(0, c.y, 0.22);
      tlGroup.add(lens);
    });

    tlGroup.position.set(x, 0, z);
    return tlGroup;
  }

  // ==========================================================================
  // 2. BUILD SCENARIO-SPECIFIC 3D GEOMETRY
  // ==========================================================================
  function buildScenario3D(scen) {
    while (scenarioGroup.children.length > 0) {
      scenarioGroup.remove(scenarioGroup.children[0]);
    }
    npcVehicle = null;
    tramMesh = null;
    policeLightsGroup.visible = false;
    indicatorLeftMesh.visible = false;
    indicatorRightMesh.visible = false;

    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
    const yellowMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });

    // Centre Dividing Line Setup based on Scenario
    if (scen.sceneType === "double_continuous_lines") {
      // Unbroken Double Continuous White Centre Lines all the way through
      [-0.18, 0.18].forEach((xOffset) => {
        const line = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 180), whiteMat);
        line.rotation.x = -Math.PI / 2;
        line.position.set(xOffset, 0.03, 0);
        scenarioGroup.add(line);
      });
      // Driveway entrance on the Right-Hand Side (X = +9.5, Z = 0)
      const drivePad = new THREE.Mesh(
        new THREE.BoxGeometry(6, 0.08, 7),
        new THREE.MeshLambertMaterial({ color: 0x475569 })
      );
      drivePad.position.set(10.2, 0.02, 0);
      scenarioGroup.add(drivePad);

      scenarioGroup.add(
        createRoadSign(9.2, -4.5, "HOTEL ENTRY", "QLD: DOUBLE LINE", "#ffffff", "#0f172a")
      );
      scenarioGroup.add(
        createRoadSign(-8.8, 7.5, "QLD ROAD RULE", "NO CROSSING DOUBLE LINE", "#fef2f2", "#991b1b")
      );
    } else if (scen.sceneType === "painted_island_50m") {
      // Striped Single-Line Painted Island in the centre (Z from +28 down to +8)
      const islandOutline = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 20), whiteMat);
      islandOutline.rotation.x = -Math.PI / 2;
      islandOutline.position.set(0, 0.025, 18);
      scenarioGroup.add(islandOutline);

      const innerAsphalt = new THREE.Mesh(
        new THREE.PlaneGeometry(1.75, 19.6),
        new THREE.MeshBasicMaterial({ color: 0x1e2530 })
      );
      innerAsphalt.rotation.x = -Math.PI / 2;
      innerAsphalt.position.set(0, 0.028, 18);
      scenarioGroup.add(innerAsphalt);

      // Diagonal Chevrons inside the painted island
      for (let z = 10; z <= 26; z += 2.5) {
        const chev = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.25), whiteMat);
        chev.rotation.x = -Math.PI / 2;
        chev.rotation.z = 0.45;
        chev.position.set(0, 0.032, z);
        scenarioGroup.add(chev);
      }

      scenarioGroup.add(
        createRoadSign(-8.8, 8.5, "PAINTED ISLAND", "SINGLE LINE: MAX 50M", "#ffffff", "#0f172a")
      );
    } else {
      // Standard Dividing Lines (Broken approaching intersection or Double before stop line)
      for (let z = -150; z <= 150; z += 7) {
        if (Math.abs(z) < 9) continue;
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 3.6), whiteMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.set(0, 0.03, z);
        scenarioGroup.add(dash);
      }
    }

    // Stop Line at Z = 8.5 for Left-Hand Lanes (X from -7.1 to 0)
    const stopLine = new THREE.Mesh(new THREE.PlaneGeometry(7.0, 0.45), whiteMat);
    stopLine.rotation.x = -Math.PI / 2;
    stopLine.position.set(-3.55, 0.035, 8.5);
    scenarioGroup.add(stopLine);

    // Scenario-Specific 3D Props
    if (scen.sceneType === "traffic_light_no_sign") {
      scenarioGroup.add(createTrafficLight(-8.2, 7.5, "green"));
      scenarioGroup.add(createTrafficLight(-1.2, -7.5, "green"));
      scenarioGroup.add(
        createRoadSign(-8.8, 11.5, "NSW LIGHTS", "NO U-TURN SIGN POSTED", "#eff6ff", "#1e3a8a")
      );
    } else if (scen.sceneType === "traffic_light_vic_uturn") {
      scenarioGroup.add(createTrafficLight(-8.2, 7.5, "green"));
      scenarioGroup.add(createTrafficLight(-1.2, -7.5, "green"));
      scenarioGroup.add(
        createRoadSign(-8.8, 11.5, "VICTORIA (VIC)", "DEFAULT U-TURN LEGAL", "#fefce8", "#1e3a8a")
      );
    } else if (scen.sceneType === "uturn_giveway_sliplane") {
      // Slip lane silver car on the right side turning into +Z southbound lane
      npcVehicle = buildSimpleNPCCar(0xe2e8f0);
      npcVehicle.position.set(6.2, 0, 2.5);
      npcVehicle.rotation.y = -Math.PI / 4;
      scenarioGroup.add(npcVehicle);

      scenarioGroup.add(
        createRoadSign(7.5, 5.5, "GIVE WAY", "SLIP LANE VEHICLE", "#ffffff", "#dc2626")
      );
      scenarioGroup.add(
        createRoadSign(-8.8, 10.5, "MEDIAN BREAK", "U-TURN YIELDS TO ALL", "#ffffff", "#0f172a")
      );
    } else if (scen.sceneType === "melbourne_tram_stop") {
      // Yellow Tram Track Lines
      [-1.8, -0.4].forEach((xTrack) => {
        const rail = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 160), yellowMat);
        rail.rotation.x = -Math.PI / 2;
        rail.position.set(xTrack, 0.035, 0);
        scenarioGroup.add(rail);
      });

      // 3D Melbourne Iconic Green & Gold Tram stopped at Z = 2
      tramMesh = new THREE.Group();
      const tramBody = new THREE.Mesh(
        new THREE.BoxGeometry(2.35, 2.7, 11.5),
        new THREE.MeshPhongMaterial({ color: 0x15803d })
      );
      tramBody.position.y = 1.65;
      tramMesh.add(tramBody);

      const goldStripe = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.45, 11.55),
        new THREE.MeshBasicMaterial({ color: 0xfacc15 })
      );
      goldStripe.position.y = 1.45;
      tramMesh.add(tramMesh ? goldStripe : goldStripe);

      // Open Passenger Doors Indicator on Left Side of Tram
      const doorWarn = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 1.8, 2.2),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      doorWarn.position.set(-1.25, 1.3, 1.5);
      tramMesh.add(doorWarn);

      tramMesh.position.set(-1.2, 0, 1.0);
      scenarioGroup.add(tramMesh);

      scenarioGroup.add(
        createRoadSign(-8.8, 9.5, "TRAM STOP (VIC)", "STOP BEHIND / 10 KM/H", "#fefce8", "#15803d")
      );
    } else if (scen.sceneType === "school_zone_dragons_teeth") {
      // Paint NSW Dragon's Teeth Triangles along the left-hand lane edges
      for (let z = -10; z <= 28; z += 3.2) {
        [-6.6, -4.1].forEach((xEdge) => {
          const tooth = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 0.75), whiteMat);
          tooth.rotation.x = -Math.PI / 2;
          tooth.rotation.z = Math.PI / 4;
          tooth.position.set(xEdge, 0.036, z);
          scenarioGroup.add(tooth);
        });
      }
      scenarioGroup.add(
        createRoadSign(-8.8, 9.5, "SCHOOL ZONE", "40 KM/H · SIGNAL 5 SEC", "#fef2f2", "#dc2626")
      );
    } else if (scen.sceneType === "licensing_centre_test_trap") {
      scenarioGroup.add(
        createRoadSign(-8.8, 9.5, "SERVICE NSW / TMR", "FAILED TEST = NO DRIVE", "#eff6ff", "#1d4ed8")
      );
      npcVehicle = buildSimpleNPCCar(0xf59e0b);
      npcVehicle.position.set(-5.5, 0, 1.5);
      scenarioGroup.add(npcVehicle);
    }
  }

  function buildSimpleNPCCar(hexColor) {
    const g = new THREE.Group();
    const b = new THREE.Mesh(
      new THREE.BoxGeometry(1.95, 0.72, 4.1),
      new THREE.MeshPhongMaterial({ color: hexColor })
    );
    b.position.y = 0.62;
    g.add(b);
    const c = new THREE.Mesh(
      new THREE.BoxGeometry(1.65, 0.6, 2.0),
      new THREE.MeshPhongMaterial({ color: 0x1e293b })
    );
    c.position.set(0, 1.25, 0);
    g.add(c);
    return g;
  }

  // ==========================================================================
  // 3. SCENARIO LOADING, MULTILINGUAL UI & DECISION FLOW
  // ==========================================================================
  function loadScenario(index) {
    currentScenarioIdx = index;
    const scen = DATA.scenarios[currentScenarioIdx];
    buildScenario3D(scen);

    // Place player car in the Australian Left-Hand Lane (X = -2.2 for right-turning/U-turning lane, or -5.2 for kerb lane)
    const startX =
      scen.sceneType === "melbourne_tram_stop" || scen.sceneType === "school_zone_dragons_teeth"
        ? -5.1
        : -2.0;

    playerCar.position.set(startX, 0, 58);
    playerCar.rotation.set(0, 0, 0);

    drivePhase = "APPROACHING";
    currentSpeed = scen.speedLimit;
    activeAnim = null;
    animProgress = 0;

    elScenarioCard.classList.add("hidden");
    elFeedbackBox.className = "feedback-box";
    updateHUDText();
  }

  function updateHUDText() {
    const t = DATA.ui[currentLang];
    const scen = DATA.scenarios[currentScenarioIdx];
    const loc = scen.i18n[currentLang];

    document.documentElement.lang = currentLang === "en" ? "en-AU" : currentLang;

    elTitle.textContent = t.title;
    elSubtitle.textContent = t.subtitle;
    elStateLabel.textContent = t.stateLabel;
    elStateBadge.textContent = scen.state;
    elStateBadge.className = "state-tag state-" + scen.state;

    elWalletLabel.textContent = t.walletLabel;
    elWalletValue.textContent = "A$" + wallet.toLocaleString();
    elWalletValue.style.color = wallet < 1500 ? "#f87171" : "#34d399";

    elDemeritLabel.textContent = t.demeritLabel;
    elDemeritValue.textContent = demerits + " / 13";
    elDemeritValue.style.color = demerits >= 9 ? "#f87171" : "#fbbf24";

    elStageLabel.textContent = t.stageLabel;
    elStageValue.textContent = (currentScenarioIdx + 1) + " / " + DATA.scenarios.length;

    elLicenceBtn.textContent = "🪪 " + t.licenceBtn;
    elRestartBtn.textContent = "↺ " + t.restartBtn;

    document.getElementById("cam-chase").textContent = t.camChase;
    document.getElementById("cam-top").textContent = t.camTop;
    document.getElementById("cam-cockpit").textContent = t.camCockpit;

    elDriveRoadDesc.textContent = loc.roadDesc;

    if (drivePhase === "APPROACHING") {
      elDriveStatus.textContent = t.statusDriving;
      elDriveStatus.style.color = "#10b981";
    } else if (drivePhase === "DECISION") {
      elDriveStatus.textContent = t.statusDecision;
      elDriveStatus.style.color = "#f59e0b";
    } else {
      elDriveStatus.textContent = t.statusAction;
      elDriveStatus.style.color = "#60a5fa";
    }

    // Populate Scenario Decision Card
    elScenarioStep.textContent = t.stageLabel + " " + scen.id + " · " + scen.signText;
    elScenarioState.textContent = scen.state;
    elScenarioState.className = "state-tag state-" + scen.state;
    elScenarioTitle.textContent = loc.title;
    elScenarioPrompt.textContent = loc.prompt;

    // Render Options if we haven't answered yet
    if (drivePhase === "DECISION" || drivePhase === "APPROACHING") {
      elOptionsList.innerHTML = "";
      loc.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML =
          '<span class="opt-key">' +
          (idx + 1) +
          "</span><span>" +
          opt.text +
          "</span>";
        btn.addEventListener("click", () => handleOptionSelect(idx));
        elOptionsList.appendChild(btn);
      });
    }

    elNextBtn.textContent =
      currentScenarioIdx < DATA.scenarios.length - 1 ? t.nextBtn : t.finishBtn;

    renderLicenceCalculator();
  }

  function handleOptionSelect(selectedIndex) {
    if (drivePhase !== "DECISION") return;
    drivePhase = "MANOEUVRE";

    const t = DATA.ui[currentLang];
    const scen = DATA.scenarios[currentScenarioIdx];
    const loc = scen.i18n[currentLang];
    const chosenOpt = loc.options[selectedIndex];

    // Disable buttons & highlight correct/wrong
    const buttons = elOptionsList.querySelectorAll(".option-btn");
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (loc.options[idx].correct) {
        btn.classList.add("correct");
      } else if (idx === selectedIndex && !chosenOpt.correct) {
        btn.classList.add("wrong");
      }
    });

    // Trigger 3D car animation
    activeAnim = chosenOpt.anim;
    animProgress = 0;

    if (
      activeAnim === "uturn_illegal" ||
      activeAnim === "uturn_legal" ||
      activeAnim === "yield_then_uturn" ||
      activeAnim === "right_driveway_illegal" ||
      activeAnim === "island_legal"
    ) {
      indicatorRightMesh.visible = true;
    } else if (activeAnim === "school_legal") {
      indicatorRightMesh.visible = true;
    }

    if (chosenOpt.correct) {
      scoreCorrect++;
      elFeedbackBox.className = "feedback-box visible pass";
      elFeedbackVerdict.className = "feedback-verdict pass";
      elFeedbackVerdict.textContent = "✓ " + t.verdictPass;
    } else {
      wallet = Math.max(0, wallet - scen.fine);
      demerits = Math.min(13, demerits + scen.demerits);
      policeLightsGroup.visible = true;
      elFlashOverlay.classList.remove("police-flash");
      void elFlashOverlay.offsetWidth;
      elFlashOverlay.classList.add("police-flash");

      elFeedbackBox.className = "feedback-box visible fail";
      elFeedbackVerdict.className = "feedback-verdict fail";
      elFeedbackVerdict.textContent =
        "⚠ " +
        t.verdictFail +
        " (-A$" +
        scen.fine +
        " · +" +
        scen.demerits +
        " pts)";
    }

    elFeedbackText.textContent = loc.explanation;
    elFeedbackSource.innerHTML =
      t.sourcePrefix +
      ' <a href="' +
      scen.sourceUrl +
      '" target="_blank" rel="noopener noreferrer">' +
      scen.sourceTitle +
      "</a>";

    updateHUDText();
  }

  // ==========================================================================
  // 4. 3D ANIMATION LOOP & MANOEUVRE KINEMATICS
  // ==========================================================================
  function animate() {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    const scen = DATA.scenarios[currentScenarioIdx];

    if (drivePhase === "APPROACHING") {
      // Cruise forward in left-hand lane toward decision point at Z = 13.5
      playerCar.position.z -= 20 * dt;
      currentSpeed = scen.speedLimit;
      elSpeedDial.classList.remove("paused");

      if (playerCar.position.z <= 13.5) {
        playerCar.position.z = 13.5;
        drivePhase = "DECISION";
        currentSpeed = 0;
        elSpeedDial.classList.add("paused");
        elScenarioCard.classList.remove("hidden");
        updateHUDText();
      }
    } else if (drivePhase === "MANOEUVRE" && activeAnim) {
      animProgress += dt * 0.72;
      const p = Math.min(animProgress, 1);

      if (activeAnim === "uturn_legal" || activeAnim === "uturn_illegal") {
        // 180-degree U-turn sweep from X = -2.0 (Northbound) to X = +2.2 (Southbound)
        currentSpeed = 28;
        if (p < 0.35) {
          const t = p / 0.35;
          playerCar.position.z = 13.5 - t * 11.5;
        } else if (p < 0.8) {
          const t = (p - 0.35) / 0.45;
          const angle = t * Math.PI;
          playerCar.position.x = 0.1 - Math.cos(angle) * 2.1;
          playerCar.position.z = 2.0 - Math.sin(angle) * 3.8;
          playerCar.rotation.y = -angle;
        } else {
          const t = (p - 0.8) / 0.2;
          playerCar.position.x = 2.2;
          playerCar.position.z = 2.0 + t * 18;
          playerCar.rotation.y = -Math.PI;
        }
      } else if (activeAnim === "yield_then_uturn") {
        // Slip lane silver car turns first, then player car completes U-turn safely
        if (p < 0.45) {
          currentSpeed = 0;
          if (npcVehicle) {
            const t = p / 0.45;
            npcVehicle.position.x = 6.2 - t * 4.0;
            npcVehicle.position.z = 2.5 + t * 20;
            npcVehicle.rotation.y = 0;
          }
        } else {
          currentSpeed = 26;
          const t = (p - 0.45) / 0.55;
          const angle = t * Math.PI;
          playerCar.position.x = 0.1 - Math.cos(angle) * 2.1;
          playerCar.position.z = 13.5 - t * 8 - Math.sin(angle) * 3.5;
          playerCar.rotation.y = -angle;
        }
      } else if (activeAnim === "right_driveway_illegal") {
        // Cross double continuous centre lines into right-side driveway
        currentSpeed = 25;
        playerCar.position.z = 13.5 - p * 13.5;
        playerCar.position.x = -2.0 + Math.pow(p, 1.5) * 11.5;
        playerCar.rotation.y = -p * (Math.PI / 2);
      } else if (activeAnim === "island_legal") {
        // Enter right-turn lane gracefully after painted island (<50m)
        currentSpeed = 38;
        playerCar.position.z = 13.5 - p * 26;
        playerCar.position.x = -2.0 + Math.sin(p * Math.PI * 0.5) * 1.1;
      } else if (activeAnim === "tram_stop_legal") {
        // Wait behind tram, then pass at 10 km/h once doors close
        if (p < 0.45) {
          currentSpeed = 0;
        } else {
          currentSpeed = 10;
          const t = (p - 0.45) / 0.55;
          playerCar.position.z = 13.5 - t * 25;
        }
      } else if (activeAnim === "tram_illegal_pass" || activeAnim === "speed_illegal") {
        currentSpeed = 55;
        playerCar.position.z = 13.5 - p * 34;
      } else if (activeAnim === "school_legal") {
        currentSpeed = 40;
        playerCar.position.z = 13.5 - p * 26;
      } else if (activeAnim === "park_legal") {
        currentSpeed = 0;
      } else {
        // straight_legal / straight_wrong
        currentSpeed = scen.speedLimit;
        playerCar.position.z = 13.5 - p * 32;
      }

      if (animProgress >= 1) {
        drivePhase = "RESULT";
        currentSpeed = 0;
      }
    }

    elSpeedNum.textContent = Math.round(currentSpeed);

    // Smooth Camera Positioning
    updateCamera(dt);
    renderer.render(scene, camera);
  }

  function updateCamera(dt) {
    let targetPos = new THREE.Vector3();
    let lookAtPos = new THREE.Vector3();

    if (cameraMode === "top") {
      targetPos.set(0, 36, 12);
      lookAtPos.set(0, 0, 2);
    } else if (cameraMode === "cockpit") {
      targetPos.set(playerCar.position.x + 0.35, 1.55, playerCar.position.z - 0.4);
      lookAtPos.set(playerCar.position.x, 1.2, playerCar.position.z - 18);
    } else {
      // Chase Cam (Shifts slightly higher at DECISION point to show road markings & signs clearly)
      if (drivePhase === "DECISION") {
        targetPos.set(playerCar.position.x - 3.8, 7.2, playerCar.position.z + 11.5);
        lookAtPos.set(0, 1.2, 0);
      } else {
        targetPos.set(playerCar.position.x, 4.8, playerCar.position.z + 10.5);
        lookAtPos.set(playerCar.position.x, 1.0, playerCar.position.z - 10);
      }
    }

    camera.position.lerp(targetPos, Math.min(1, dt * 5.5));
    camera.lookAt(lookAtPos);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ==========================================================================
  // 5. 2026 OVERSEAS LICENCE & VISA CALCULATOR LOGIC
  // ==========================================================================
  function renderLicenceCalculator() {
    const t = DATA.ui[currentLang];
    document.getElementById("modal-title").textContent = t.modalTitle;
    document.getElementById("lbl-origin").textContent = t.originLabel;
    document.getElementById("lbl-state").textContent = t.stateSelectLabel;
    document.getElementById("lbl-visa").textContent = t.visaLabel;
    document.getElementById("lbl-tenure").textContent = t.tenureLabel;

    const selOrigin = document.getElementById("sel-origin");
    const currentOriginVal = selOrigin.value || "TW";
    selOrigin.innerHTML = "";
    DATA.licenceMatrix.origins.forEach((o) => {
      const opt = document.createElement("option");
      opt.value = o.code;
      opt.textContent = o.names[currentLang];
      if (o.code === currentOriginVal) opt.selected = true;
      selOrigin.appendChild(opt);
    });

    const selVisa = document.getElementById("sel-visa");
    const curVisa = selVisa.value || "TEMP";
    selVisa.innerHTML =
      '<option value="TEMP"' +
      (curVisa === "TEMP" ? " selected" : "") +
      ">" +
      t.visaTemp +
      "</option>" +
      '<option value="PR"' +
      (curVisa === "PR" ? " selected" : "") +
      ">" +
      t.visaPR +
      "</option>";

    const selTenure = document.getElementById("sel-tenure");
    const curTen = selTenure.value || "OVER3";
    selTenure.innerHTML =
      '<option value="UNDER1"' +
      (curTen === "UNDER1" ? " selected" : "") +
      ">" +
      t.tenureUnder1 +
      "</option>" +
      '<option value="1TO3"' +
      (curTen === "1TO3" ? " selected" : "") +
      ">" +
      t.tenure1to3 +
      "</option>" +
      '<option value="OVER3"' +
      (curTen === "OVER3" ? " selected" : "") +
      ">" +
      t.tenureOver3 +
      "</option>";

    computeLicencePathway();
  }

  function computeLicencePathway() {
    const t = DATA.ui[currentLang];
    const originCode = document.getElementById("sel-origin").value || "TW";
    const stateCode = document.getElementById("sel-state").value || "NSW";
    const visaType = document.getElementById("sel-visa").value || "TEMP";
    const tenureType = document.getElementById("sel-tenure").value || "OVER3";

    const originObj =
      DATA.licenceMatrix.origins.find((o) => o.code === originCode) ||
      DATA.licenceMatrix.origins[0];

    // 1. Residency Deadline Calculation
    let deadlineText = "";
    if (stateCode === "NSW") {
      deadlineText =
        visaType === "TEMP"
          ? "6 Months continuous residence (arrivals on/after 1 Jul 2023). Driving after 6 months without converting = unlicensed driving ($603 first offence, $924 subsequent, $2,200 court max). Issues a 'Q' condition Temporary Overseas Visitor Licence."
          : "3 Months from arriving/residing in NSW (Permanent Residents, AU Citizens, & NZ Licences).";
    } else if (stateCode === "VIC") {
      deadlineText =
        "6 Months continuous residence (applies uniformly to both Temporary Visas and Permanent Residents, counted continuously from the very first day you start living in Victoria).";
    } else {
      deadlineText =
        visaType === "TEMP"
          ? "No Fixed 3- or 6-Month Cap in Queensland for temporary, business, or guardian visas (valid as long as your overseas licence remains current and is not suspended/withdrawn)."
          : "3 Months of living in Queensland (or 3 months since resident visa grant) for Australian citizens and permanent/resident visa holders.";
    }

    // 2. 2026 Test Exemption Status
    let testText = "";
    let testClass = "calc-item";
    if (originObj.tier === "CORE_A") {
      testText =
        "EXEMPT from Theory & Practical Driving Tests for Car (Class C) & Motorcycle (Class R) across NSW, QLD, and VIC (licence must be current or expired < 5 years; Heavy Vehicles require full testing).";
    } else if (originObj.tier === "LIST_B") {
      testClass = "calc-item warn";
      if (stateCode === "NSW") {
        testText =
          "FULL TESTING REQUIRED (From 1 Feb 2026): NSW abolished Experienced Driver ('List B') exemptions. Must pass Driver Knowledge Test (DKT) + Hazard Perception Test (HPT) + Practical Driving Test.";
      } else if (stateCode === "VIC") {
        testText =
          "FULL TESTING REQUIRED (Classified 'NON' by VicRoads): Must pass Road Law Knowledge Test + Hazard Perception Test (HPT) + Practical Drive Test ($22.10 conversion appointment fee).";
      } else {
        testText =
          "QLD Regulatory Note: Retained on QLD's published 31 Oct 2026 Exempt Countries Schedule (41 countries), though QLD enacted the Transport Legislation Amendment Regulation 2026 removing EDRC provisions after 29 Nov 2025—verify directly with TMR before booking.";
      }
    } else {
      testClass = "calc-item danger";
      testText =
        "FULL TESTING REQUIRED in NSW, QLD, and VIC (Theory/DKT/PrepL + Hazard Perception + Practical Driving Test)." +
        (originObj.code === "HK" && stateCode === "QLD"
          ? " Note for HK licences: Requires official Certificate of Driving Licence Particulars (Form TD-320) for upgrades as HK licences lack an issue date."
          : "");
    }

    // 3. Translation Rule
    let transText = "";
    if (stateCode === "NSW") {
      transText =
        "STRICT NSW RULE (No standard private NAATI!): Service NSW ONLY accepts translations from Multicultural NSW, Dept of Home Affairs, the Consulate-General of the Republic of Korea (for Korean licences), or Taipei Economic and Cultural Office — TECO (for Taiwan licences).";
    } else if (stateCode === "VIC") {
      transText =
        "NAATI-approved English translation OR a compliant UN Convention International Driving Permit (IDP) issued by the same country as your overseas licence.";
    } else {
      transText =
        "Recognised English translation from an approved NAATI translator (bring original identity documents; photocopies refused).";
    }

    // 4. Licence Tenure Stage & Failed Test Warning
    let stageStr =
      tenureType === "UNDER1"
        ? "Converts to Provisional P1 (Red P — 0.00 BAC)"
        : tenureType === "1TO3"
        ? "Converts to Provisional P2 (Green P — 0.00 BAC)"
        : "Converts to Unrestricted / Full (Open) Licence (0.05 BAC)";

    let classText =
      stageStr +
      " — CRITICAL WARNING: If you fail a practical driving test in NSW, QLD, or VIC, your right to drive on your overseas licence is WITHDRAWN IMMEDIATELY (you cannot drive yourself home).";

    const container = document.getElementById("calc-results");
    container.innerHTML =
      '<div class="calc-item"><h4>' +
      t.resDeadlineTitle +
      "</h4><p>" +
      deadlineText +
      "</p></div>" +
      '<div class="' +
      testClass +
      '"><h4>' +
      t.resTestTitle +
      "</h4><p>" +
      testText +
      "</p></div>" +
      '<div class="calc-item warn"><h4>' +
      t.resTransTitle +
      "</h4><p>" +
      transText +
      "</p></div>" +
      '<div class="calc-item danger"><h4>' +
      t.resClassTitle +
      "</h4><p>" +
      classText +
      "</p></div>";
  }

  // ==========================================================================
  // 6. EVENT LISTENERS & INITIALIZATION
  // ==========================================================================
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentLang = btn.getAttribute("data-lang");
      updateHUDText();
    });
  });

  document.querySelectorAll(".cam-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cam-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      cameraMode = btn.getAttribute("data-cam");
    });
  });

  elNextBtn.addEventListener("click", () => {
    if (currentScenarioIdx < DATA.scenarios.length - 1) {
      loadScenario(currentScenarioIdx + 1);
    } else {
      // Show Licence Modal & Final Score Banner
      const modal = document.getElementById("licence-modal");
      modal.classList.remove("hidden");
    }
  });

  elRestartBtn.addEventListener("click", () => {
    wallet = 2500;
    demerits = 0;
    scoreCorrect = 0;
    loadScenario(0);
  });

  elLicenceBtn.addEventListener("click", () => {
    document.getElementById("licence-modal").classList.remove("hidden");
    renderLicenceCalculator();
  });

  document.getElementById("btn-close-modal").addEventListener("click", () => {
    document.getElementById("licence-modal").classList.add("hidden");
  });

  ["sel-origin", "sel-state", "sel-visa", "sel-tenure"].forEach((id) => {
    document.getElementById(id).addEventListener("change", computeLicencePathway);
  });

  window.addEventListener("DOMContentLoaded", init3D);
})();
