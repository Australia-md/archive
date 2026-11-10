/* ============================================================================
 * three-lite.js — Self-Contained 3D Perspective & Scene Graph Engine (THREE API)
 * Provides zero-CDN, offline-ready 3D rendering for game-3d.js & Australia.md
 * ============================================================================ */
(function (global) {
  if (global.THREE) return;

  class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    set(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
  }

  class Color {
    constructor(hex = 0x000000) {
      this.set(hex);
    }
    set(val) {
      if (typeof val === "number") {
        this.hex = val;
        this.css = "#" + val.toString(16).padStart(6, "0");
      } else {
        this.css = String(val);
        this.hex = parseInt(this.css.replace("#", ""), 16) || 0;
      }
      return this;
    }
  }

  class FogExp2 {
    constructor(hex, density) {
      this.color = new Color(hex);
      this.density = density;
    }
  }

  class Clock {
    constructor() {
      this.last = performance.now();
    }
    getDelta() {
      const now = performance.now();
      const dt = (now - this.last) / 1000;
      this.last = now;
      return dt;
    }
  }

  class Object3D {
    constructor() {
      this.position = new Vector3(0, 0, 0);
      this.rotation = new Vector3(0, 0, 0);
      this.scale = new Vector3(1, 1, 1);
      this.children = [];
      this.parent = null;
      this.visible = true;
    }
    add(...objs) {
      objs.forEach((o) => {
        if (!o) return;
        o.parent = this;
        this.children.push(o);
      });
    }
    remove(obj) {
      const idx = this.children.indexOf(obj);
      if (idx !== -1) {
        obj.parent = null;
        this.children.splice(idx, 1);
      }
    }
  }

  class Scene extends Object3D {
    constructor() {
      super();
      this.background = new Color(0x0c1628);
      this.fog = null;
    }
  }

  class Group extends Object3D {}

  class PerspectiveCamera extends Object3D {
    constructor(fov = 55, aspect = 1.77, near = 0.1, far = 400) {
      super();
      this.fov = fov;
      this.aspect = aspect;
      this.near = near;
      this.far = far;
      this.target = new Vector3(0, 0, 0);
    }
    lookAt(v) {
      this.target.copy(v);
    }
    updateProjectionMatrix() {}
  }

  class Geometry {
    constructor(type, params) {
      this.type = type;
      this.params = params;
    }
  }

  class BoxGeometry extends Geometry {
    constructor(w = 1, h = 1, d = 1) {
      super("box", { w, h, d });
    }
  }
  class PlaneGeometry extends Geometry {
    constructor(w = 1, h = 1) {
      super("plane", { w, h });
    }
  }
  class CylinderGeometry extends Geometry {
    constructor(rt = 1, rb = 1, h = 1, seg = 8) {
      super("cylinder", { rt, rb, h, seg });
    }
  }
  class SphereGeometry extends Geometry {
    constructor(r = 1) {
      super("sphere", { r });
    }
  }
  class DodecahedronGeometry extends Geometry {
    constructor(r = 1) {
      super("sphere", { r });
    }
  }

  class CanvasTexture {
    constructor(canvas) {
      this.image = canvas;
    }
  }

  class Material {
    constructor(opts = {}) {
      this.color = new Color(opts.color !== undefined ? opts.color : 0xffffff);
      this.map = opts.map || null;
    }
  }

  class Mesh extends Object3D {
    constructor(geometry, material) {
      super();
      this.geometry = geometry;
      this.material = material;
    }
  }

  class Light extends Object3D {
    constructor() {
      super();
      this.isLight = true;
    }
  }

  class WebGLRenderer {
    constructor() {
      this.domElement = document.createElement("canvas");
      this.ctx = this.domElement.getContext("2d");
      this.shadowMap = { enabled: false };
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = 1;
    }
    setPixelRatio(dpr) {
      this.dpr = dpr || 1;
      this.setSize(this.width, this.height);
    }
    setSize(w, h) {
      this.width = w;
      this.height = h;
      this.domElement.width = w * this.dpr;
      this.domElement.height = h * this.dpr;
      this.domElement.style.width = w + "px";
      this.domElement.style.height = h + "px";
    }

    render(scene, camera) {
      const ctx = this.ctx;
      const W = this.width;
      const H = this.height;
      ctx.save();
      ctx.scale(this.dpr, this.dpr);

      // Sky & Horizon Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, H * 0.55);
      skyGrad.addColorStop(0, "#070d19");
      skyGrad.addColorStop(1, "#13233f");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, H);

      // Camera Basis Vectors
      const camPos = camera.position;
      const tgt = camera.target;
      let fx = tgt.x - camPos.x;
      let fy = tgt.y - camPos.y;
      let fz = tgt.z - camPos.z;
      const flen = Math.hypot(fx, fy, fz) || 1;
      fx /= flen;
      fy /= flen;
      fz /= flen;

      // Up hint (if looking straight down in top cam, use -Z as up)
      let ux = 0,
        uy = 1,
        uz = 0;
      if (Math.abs(fy) > 0.96) {
        ux = 0;
        uy = 0;
        uz = -1;
      }

      // Right = Forward x Up
      let rx = fy * uz - fz * uy;
      let ry = fz * ux - fx * uz;
      let rz = fx * uy - fy * ux;
      const rlen = Math.hypot(rx, ry, rz) || 1;
      rx /= rlen;
      ry /= rlen;
      rz /= rlen;

      // True Up = Right x Forward
      const tux = ry * fz - rz * fy;
      const tuy = rz * fx - rx * fz;
      const tuz = rx * fy - ry * fx;

      const focal = (H * 0.5) / Math.tan((camera.fov * 0.5 * Math.PI) / 180);

      function projectPoint(wx, wy, wz) {
        const dx = wx - camPos.x;
        const dy = wy - camPos.y;
        const dz = wz - camPos.z;

        const cx = dx * rx + dy * ry + dz * rz;
        const cy = dx * tux + dy * tuy + dz * tuz;
        const cz = dx * fx + dy * fy + dz * fz;

        if (cz <= 0.25) return null;
        const invZ = focal / cz;
        return {
          x: W * 0.5 + cx * invZ,
          y: H * 0.5 - cy * invZ,
          z: cz,
          scale: invZ
        };
      }

      // Collect all visible meshes with world transforms
      const drawList = [];

      function traverse(node, px, py, pz, ryParent, layerOrder) {
        if (!node || !node.visible || node.isLight) return;
        const cosP = Math.cos(ryParent);
        const sinP = Math.sin(ryParent);
        const wx = px + node.position.x * cosP + node.position.z * sinP;
        const wy = py + node.position.y;
        const wz = pz - node.position.x * sinP + node.position.z * cosP;
        const totalRy = ryParent + (node.rotation ? node.rotation.y : 0);

        if (node instanceof Mesh && node.geometry) {
          const dx = wx - camPos.x;
          const dy = wy - camPos.y;
          const dz = wz - camPos.z;
          const depth = dx * fx + dy * fy + dz * fz;
          drawList.push({
            mesh: node,
            wx,
            wy,
            wz,
            ry: totalRy,
            rx: node.rotation.x,
            rz: node.rotation.z,
            depth,
            isGround: wy <= 0.06 && Math.abs(node.rotation.x + Math.PI / 2) < 0.1,
            layerOrder
          });
        }
        for (let i = 0; i < node.children.length; i++) {
          traverse(node.children[i], wx, wy, wz, totalRy, layerOrder + i * 0.001);
        }
      }

      traverse(scene, 0, 0, 0, 0, 0);

      // Sort: Ground planes first (by wy ascending so markings sit on top of asphalt), then 3D objects back-to-front
      drawList.sort((a, b) => {
        if (a.isGround && b.isGround) {
          return a.wy - b.wy;
        }
        if (a.isGround !== b.isGround) {
          return a.isGround ? -1 : 1;
        }
        return b.depth - a.depth;
      });

      function drawQuad3D(pts, fillCss, strokeCss) {
        // Clip near plane
        const projected = [];
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          const dx = p[0] - camPos.x;
          const dy = p[1] - camPos.y;
          const dz = p[2] - camPos.z;
          let cz = dx * fx + dy * fy + dz * fz;
          const cx = dx * rx + dy * ry + dz * rz;
          const cy = dx * tux + dy * tuy + dz * tuz;
          if (cz < 0.4) cz = 0.4;
          const invZ = focal / cz;
          projected.push([W * 0.5 + cx * invZ, H * 0.5 - cy * invZ]);
        }

        ctx.beginPath();
        ctx.moveTo(projected[0][0], projected[0][1]);
        for (let i = 1; i < projected.length; i++) {
          ctx.lineTo(projected[i][0], projected[i][1]);
        }
        ctx.closePath();
        ctx.fillStyle = fillCss;
        ctx.fill();
        if (strokeCss) {
          ctx.strokeStyle = strokeCss;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      function shadeHex(hex, factor) {
        const r = Math.min(255, Math.round(((hex >> 16) & 255) * factor));
        const g = Math.min(255, Math.round(((hex >> 8) & 255) * factor));
        const b = Math.min(255, Math.round((hex & 255) * factor));
        return "rgb(" + r + "," + g + "," + b + ")";
      }

      for (let i = 0; i < drawList.length; i++) {
        const item = drawList[i];
        const g = item.mesh.geometry;
        const mat = item.mesh.material;
        const hex = mat && mat.color ? mat.color.hex : 0xffffff;
        const css = mat && mat.color ? mat.color.css : "#ffffff";

        if (g.type === "plane" && item.isGround) {
          const hw = g.params.w * 0.5;
          const hh = g.params.h * 0.5;
          const ang = item.rz || 0;
          const ca = Math.cos(ang);
          const sa = Math.sin(ang);

          // Slice very long ground planes into segments for accurate perspective clipping
          const slices = hh > 25 ? 16 : 1;
          const stepH = (hh * 2) / slices;
          for (let s = 0; s < slices; s++) {
            const z0 = -hh + s * stepH;
            const z1 = z0 + stepH;
            const localCorners = [
              [-hw, z0],
              [hw, z0],
              [hw, z1],
              [-hw, z1]
            ];
            const worldPts = localCorners.map(([lx, lz]) => [
              item.wx + lx * ca - lz * sa,
              item.wy,
              item.wz + lx * sa + lz * ca
            ]);
            // Skip slice if completely behind camera
            const anyFront = worldPts.some(
              (wp) =>
                (wp[0] - camPos.x) * fx +
                  (wp[1] - camPos.y) * fy +
                  (wp[2] - camPos.z) * fz >
                0.6
            );
            if (anyFront) {
              drawQuad3D(worldPts, css, null);
            }
          }
        } else if (g.type === "box") {
          const hw = g.params.w * 0.5;
          const hh = g.params.h * 0.5;
          const hd = g.params.d * 0.5;
          const cy = Math.cos(item.ry);
          const sy = Math.sin(item.ry);

          function toWorld(lx, ly, lz) {
            return [
              item.wx + lx * cy + lz * sy,
              item.wy + ly,
              item.wz - lx * sy + lz * cy
            ];
          }

          // If this box has a CanvasTexture road sign map, draw the sign board & image
          if (mat && mat.map && mat.map.image) {
            const pCenter = projectPoint(item.wx, item.wy, item.wz);
            if (pCenter && pCenter.z > 1.2 && pCenter.z < 140) {
              const sw = Math.max(24, g.params.w * pCenter.scale);
              const sh = Math.max(16, g.params.h * pCenter.scale);
              ctx.drawImage(
                mat.map.image,
                pCenter.x - sw * 0.5,
                pCenter.y - sh * 0.5,
                sw,
                sh
              );
            }
            continue;
          }

          const v = [
            toWorld(-hw, -hh, -hd),
            toWorld(hw, -hh, -hd),
            toWorld(hw, hh, -hd),
            toWorld(-hw, hh, -hd),
            toWorld(-hw, -hh, hd),
            toWorld(hw, -hh, hd),
            toWorld(hw, hh, hd),
            toWorld(-hw, hh, hd)
          ];

          const allBehind = v.every(
            (pt) =>
              (pt[0] - camPos.x) * fx +
                (pt[1] - camPos.y) * fy +
                (pt[2] - camPos.z) * fz <
              0.5
          );
          if (allBehind) continue;

          // Draw Sides, Front/Back, and Top with directional shading
          drawQuad3D([v[0], v[1], v[2], v[3]], shadeHex(hex, 0.82), "rgba(15,23,42,0.35)");
          drawQuad3D([v[4], v[5], v[6], v[7]], shadeHex(hex, 0.92), "rgba(15,23,42,0.35)");
          drawQuad3D([v[0], v[4], v[7], v[3]], shadeHex(hex, 0.72), null);
          drawQuad3D([v[1], v[5], v[6], v[2]], shadeHex(hex, 0.76), null);
          drawQuad3D([v[3], v[2], v[6], v[7]], shadeHex(hex, 1.12), "rgba(255,255,255,0.12)");
        } else if (g.type === "cylinder") {
          const pBot = projectPoint(item.wx, item.wy - g.params.h * 0.5, item.wz);
          const pTop = projectPoint(item.wx, item.wy + g.params.h * 0.5, item.wz);
          if (pBot && pTop && pBot.z < 160) {
            ctx.strokeStyle = css;
            ctx.lineWidth = Math.max(1.5, g.params.rt * 2 * pBot.scale);
            ctx.beginPath();
            ctx.moveTo(pBot.x, pBot.y);
            ctx.lineTo(pTop.x, pTop.y);
            ctx.stroke();
          }
        } else if (g.type === "sphere") {
          const p = projectPoint(item.wx, item.wy, item.wz);
          if (p && p.z > 0.8 && p.z < 160) {
            const rad = Math.max(2, g.params.r * p.scale);
            ctx.beginPath();
            ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
            ctx.fillStyle = css;
            ctx.fill();
          }
        }
      }

      ctx.restore();
    }
  }

  global.THREE = {
    Vector3,
    Color,
    FogExp2,
    Clock,
    Scene,
    Group,
    PerspectiveCamera,
    BoxGeometry,
    PlaneGeometry,
    CylinderGeometry,
    SphereGeometry,
    DodecahedronGeometry,
    CanvasTexture,
    MeshBasicMaterial: Material,
    MeshLambertMaterial: Material,
    MeshPhongMaterial: Material,
    HemisphereLight: Light,
    DirectionalLight: Light,
    Mesh,
    WebGLRenderer
  };
})(window);
