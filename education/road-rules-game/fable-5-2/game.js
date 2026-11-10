"use strict";(()=>{var Zl=0,po=1,Jl=2;var Ss=1,Kl=2,zi=3,ei=0,Ot=1,yn=2,ui=0,ki=1,mo=2,go=3,_o=4,$l=5;var di=100,Ql=101,jl=102,ec=103,tc=104,nc=200,ic=201,sc=202,rc=203,xo=204,vo=205,ac=206,oc=207,lc=208,cc=209,hc=210,uc=211,dc=212,fc=213,pc=214,lr=0,cr=1,hr=2,Ii=3,ur=4,dr=5,fr=6,pr=7,yo=0,mc=1,gc=2,Sn=0,So=1,Mo=2,bo=3,wo=4,To=5,Eo=6,Ao=7;var Ro=300,fi=301,Vi=302,Vr=303,Gr=304,mr=1e3,pn=1001,gr=1002,bt=1003,_c=1004;var Ms=1005;var Ut=1006,Hr=1007;var Dn=1008;var Ht=1009,Co=1010,Io=1011,Gi=1012,Wr=1013,an=1014,on=1015,ln=1016,qr=1017,Xr=1018,pi=1020,Po=35902,Lo=35899,No=1021,Do=1022,cn=1023,Pn=1026,Un=1027,Uo=1028,Yr=1029,ti=1030,Zr=1031;var Jr=1033,bs=33776,ws=33777,Ts=33778,Es=33779,Kr=35840,$r=35841,Qr=35842,jr=35843,ea=36196,ta=37492,na=37496,ia=37488,sa=37489,As=37490,ra=37491,aa=37808,oa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,_a=37819,xa=37820,va=37821,ya=36492,Sa=36494,Ma=36495,ba=36283,wa=36284,Rs=36285,Ta=36286;var ts=2300,_r=2301,ar=2302,ao=2303,oo=2400,lo=2401,co=2402;var xc=3200;var Ea=0,vc=1,Fn="",Nt="srgb",ns="srgb-linear",is="linear",Ke="srgb";var or=7680;var yc=519,Sc=512,Mc=513,bc=514,Fo=515,wc=516,Tc=517,Oo=518,Bo=519,Ec=35044;var zo="300 es",jt=2e3,Pi=2001;function Hh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ac(){let i=ss("canvas");return i.style.display="block",i}var Tl={},Li=null;function ko(...i){let e="THREE."+i.shift();Li?Li("log",e,...i):console.log(e,...i)}function Rc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Rc(i);let e="THREE."+i.shift();if(Li)Li("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=Rc(i);let e="THREE."+i.shift();if(Li)Li("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function es(...i){let e=i.join(" ");e in Tl||(Tl[e]=!0,Ie(...i))}function Cc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ic={[lr]:lr,[hr]:fr,[ur]:ur,[Ii]:dr,[cr]:cr,[fr]:hr,[pr]:pr,[dr]:Ii},gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ba=Math.PI/180,xr=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function qh(i,e){return(i%e+e)%e}function za(i,e,t){return(1-t)*i+t*e}function Pc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xh(i,e){if(e.constructor===Float32Array)return i;let t=Vo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Yh(i,e){if(e.constructor===Float32Array)return i;let t=Vo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Xo=class Xo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xo.prototype.isVector2=!0;var Xe=Xo,_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],x=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==m||h!==x){let p=l*u+c*m+h*x+f*S;p<0&&(u=-u,m=-m,x=-x,S=-S,p=-p);let d=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,l=l*d+u*o,c=c*d+m*o,h=h*d+x*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+x*o,f=f*d+S*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*m-c*u,e[t+1]=l*x+h*u+c*f-o*m,e[t+2]=c*x+h*m+o*u-l*f,e[t+3]=h*x-o*f-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*x,this._y=c*m*f-u*h*x,this._z=c*h*x+u*m*f,this._w=c*h*f-u*m*x;break;case"YXZ":this._x=u*h*f+c*m*x,this._y=c*m*f-u*h*x,this._z=c*h*x-u*m*f,this._w=c*h*f+u*m*x;break;case"ZXY":this._x=u*h*f-c*m*x,this._y=c*m*f+u*h*x,this._z=c*h*x+u*m*f,this._w=c*h*f-u*m*x;break;case"ZYX":this._x=u*h*f-c*m*x,this._y=c*m*f+u*h*x,this._z=c*h*x-u*m*f,this._w=c*h*f+u*m*x;break;case"YZX":this._x=u*h*f+c*m*x,this._y=c*m*f+u*h*x,this._z=c*h*x-u*m*f,this._w=c*h*f-u*m*x;break;case"XZY":this._x=u*h*f-c*m*x,this._y=c*m*f-u*h*x,this._z=c*h*x+u*m*f,this._w=c*h*f+u*m*x;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yo=class Yo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yo.prototype.isVector3=!0;var z=Yo,ka=new z,El=new _n,Zo=class Zo{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],x=n[8],S=s[0],p=s[3],d=s[6],M=s[1],A=s[4],w=s[7],E=s[2],T=s[5],g=s[8];return r[0]=a*S+o*M+l*E,r[3]=a*p+o*A+l*T,r[6]=a*d+o*w+l*g,r[1]=c*S+h*M+f*E,r[4]=c*p+h*A+f*T,r[7]=c*d+h*w+f*g,r[2]=u*S+m*M+x*E,r[5]=u*p+m*A+x*T,r[8]=u*d+m*w+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,x=t*f+n*u+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=f*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=u*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=m*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(e,t)),this}rotate(e){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zo.prototype.isMatrix3=!0;var Le=Zo,Va=new Le,Al=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zh(){let i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:e,whitePoint:n,transfer:is,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var qe=Zh();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gi,vr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=ss("canvas")),gi.width=e.width,gi.height=e.height;let s=gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=In(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jh=0,Ni=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ga(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Kh=0,Ha=new z,Ft=class i extends gn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pn,s=pn,r=Ut,a=Dn,o=cn,l=Ht,c=i.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Cs(),this.name="",this.source=new Ni(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Ro;Ft.DEFAULT_ANISOTROPY=1;var Jo=class Jo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],x=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,w=(m+1)/2,E=(d+1)/2,T=(h+u)/4,g=(f+S)/4,y=(x+p)/4;return A>w&&A>E?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=g/n):w>E?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=g/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-x)*(p-x)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(f-S)/M,this.z=(u-h)/M,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jo.prototype.isVector4=!0;var at=Jo,yr=class extends gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ft({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ni(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends yr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rs=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sr=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kr=class kr{constructor(e,t,n,s,r,a,o,l,c,h,f,u,m,x,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,m,x,S,p)}set(e,t,n,s,r,a,o,l,c,h,f,u,m,x,S,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=x,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),a=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,m=a*f,x=o*h,S=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=u-S*c,t[9]=-o*l,t[2]=S-u*c,t[6]=x+m*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,m=l*f,x=c*h,S=c*f;t[0]=u+S*o,t[4]=x*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=S+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,m=l*f,x=c*h,S=c*f;t[0]=u-S*o,t[4]=-a*f,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,m=a*f,x=o*h,S=o*f;t[0]=l*h,t[4]=x*c-m,t[8]=u*c+S,t[1]=l*f,t[5]=S*c+u,t[9]=m*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=S-u*f,t[8]=x*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*f+x,t[10]=u-S*f}else if(e.order==="XZY"){let u=a*l,m=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+S,t[5]=a*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=o*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($h,e,Qh)}lookAt(e,t,n){let s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),zn.crossVectors(n,Wt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),zn.crossVectors(n,Wt)),zn.normalize(),ks.crossVectors(Wt,zn),s[0]=zn.x,s[4]=ks.x,s[8]=Wt.x,s[1]=zn.y,s[5]=ks.y,s[9]=Wt.y,s[2]=zn.z,s[6]=ks.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],x=n[2],S=n[6],p=n[10],d=n[14],M=n[3],A=n[7],w=n[11],E=n[15],T=s[0],g=s[4],y=s[8],D=s[12],P=s[1],N=s[5],O=s[9],H=s[13],C=s[2],G=s[6],X=s[10],V=s[14],te=s[3],q=s[7],Q=s[11],j=s[15];return r[0]=a*T+o*P+l*C+c*te,r[4]=a*g+o*N+l*G+c*q,r[8]=a*y+o*O+l*X+c*Q,r[12]=a*D+o*H+l*V+c*j,r[1]=h*T+f*P+u*C+m*te,r[5]=h*g+f*N+u*G+m*q,r[9]=h*y+f*O+u*X+m*Q,r[13]=h*D+f*H+u*V+m*j,r[2]=x*T+S*P+p*C+d*te,r[6]=x*g+S*N+p*G+d*q,r[10]=x*y+S*O+p*X+d*Q,r[14]=x*D+S*H+p*V+d*j,r[3]=M*T+A*P+w*C+E*te,r[7]=M*g+A*N+w*G+E*q,r[11]=M*y+A*O+w*X+E*Q,r[15]=M*D+A*H+w*V+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],m=e[14],x=e[3],S=e[7],p=e[11],d=e[15],M=l*m-c*u,A=o*m-c*f,w=o*u-l*f,E=a*m-c*h,T=a*u-l*h,g=a*f-o*h;return t*(S*M-p*A+d*w)-n*(x*M-p*E+d*T)+s*(x*A-S*E+d*g)-r*(x*w-S*T+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],m=e[11],x=e[12],S=e[13],p=e[14],d=e[15],M=t*o-n*a,A=t*l-s*a,w=t*c-r*a,E=n*l-s*o,T=n*c-r*o,g=s*c-r*l,y=h*S-f*x,D=h*p-u*x,P=h*d-m*x,N=f*p-u*S,O=f*d-m*S,H=u*d-m*p,C=M*H-A*O+w*N+E*P-T*D+g*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return e[0]=(o*H-l*O+c*N)*G,e[1]=(s*O-n*H-r*N)*G,e[2]=(S*g-p*T+d*E)*G,e[3]=(u*T-f*g-m*E)*G,e[4]=(l*P-a*H-c*D)*G,e[5]=(t*H-s*P+r*D)*G,e[6]=(p*w-x*g-d*A)*G,e[7]=(h*g-u*w+m*A)*G,e[8]=(a*O-o*P+c*y)*G,e[9]=(n*P-t*O-r*y)*G,e[10]=(x*T-S*w+d*M)*G,e[11]=(f*w-h*T-m*M)*G,e[12]=(o*D-a*N-l*y)*G,e[13]=(t*N-n*D+s*y)*G,e[14]=(S*A-x*E-p*M)*G,e[15]=(h*E-f*A+u*M)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,x=r*f,S=a*h,p=a*f,d=o*f,M=l*c,A=l*h,w=l*f,E=n.x,T=n.y,g=n.z;return s[0]=(1-(S+d))*E,s[1]=(m+w)*E,s[2]=(x-A)*E,s[3]=0,s[4]=(m-w)*T,s[5]=(1-(u+d))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(x+A)*g,s[9]=(p-M)*g,s[10]=(1-(u+S))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_i.set(s[0],s[1],s[2]).length(),o=_i.set(s[4],s[5],s[6]).length(),l=_i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);let c=1/a,h=1/o,f=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=jt,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===jt)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Pi)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jt,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===jt)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===Pi)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kr.prototype.isMatrix4=!0;var rt=kr,_i=new z,tn=new rt,$h=new z(0,0,0),Qh=new z(1,1,1),zn=new z,ks=new z,Wt=new z,Cl=new rt,Il=new _n,Ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jh=0,Pl=new z,xi=new _n,Tn=new rt,Vs=new z,Ki=new z,eu=new z,tu=new _n,Ll=new z(1,0,0),Nl=new z(0,1,0),Dl=new z(0,0,1),Ul={type:"added"},nu={type:"removed"},vi={type:"childadded",child:null},Wa={type:"childremoved",child:null},It=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Ln,n=new _n,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Le}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Ki,Vs,this.up):Tn.lookAt(Vs,Ki,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(Tn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),vi.child=e,this.dispatchEvent(vi),vi.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,tu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new z(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},iu={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let p=t.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=qh(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return qe.workingToColorSpace(Ct.copy(this),e),Math.round(Ye(Ct.r*255,0,255))*65536+Math.round(Ye(Ct.g*255,0,255))*256+Math.round(Ye(Ct.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ct.copy(this),t);let n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Nt){qe.workingToColorSpace(Ct.copy(this),e);let t=Ct.r,n=Ct.g,s=Ct.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Gs);let n=za(kn.h,Gs.h,t),s=za(kn.s,Gs.s,t),r=za(kn.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ct=new ze;ze.NAMES=Lc;var os=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ls=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},nn=new z,En=new z,Xa=new z,An=new z,yi=new z,Si=new z,Fl=new z,Ya=new z,Za=new z,Ja=new z,Ka=new at,$a=new at,Qa=new at,Wn=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),En.subVectors(n,t),Xa.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(En),l=nn.dot(Xa),c=En.dot(En),h=En.dot(Xa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ka.setScalar(0),$a.setScalar(0),Qa.setScalar(0),Ka.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ka,r.x),a.addScaledVector($a,r.y),a.addScaledVector(Qa,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),En.subVectors(e,t),nn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),nn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;yi.subVectors(s,n),Si.subVectors(r,n),Ya.subVectors(e,n);let l=yi.dot(Ya),c=Si.dot(Ya);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,s);let h=yi.dot(Za),f=Si.dot(Za);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(yi,a);Ja.subVectors(e,r);let m=yi.dot(Ja),x=Si.dot(Ja);if(x>=0&&m<=x)return t.copy(r);let S=m*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Si,o);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Fl.subVectors(r,s),o=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Fl,o);let d=1/(p+S+u);return a=S*d,o=u*d,t.copy(n).addScaledVector(yi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ws.subVectors(this.max,$i),Mi.subVectors(e.a,$i),bi.subVectors(e.b,$i),wi.subVectors(e.c,$i),Vn.subVectors(bi,Mi),Gn.subVectors(wi,bi),ai.subVectors(Mi,wi);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!ja(t,Mi,bi,wi,Ws)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,Mi,bi,wi,Ws))?!1:(qs.crossVectors(Vn,Gn),t=[qs.x,qs.y,qs.z],ja(t,Mi,bi,wi,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rn=[new z,new z,new z,new z,new z,new z,new z,new z],sn=new z,Hs=new qn,Mi=new z,bi=new z,wi=new z,Vn=new z,Gn=new z,ai=new z,$i=new z,Ws=new z,qs=new z,oi=new z;function ja(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ft=new z,Xs=new Xe,su=0,mn=class extends gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:su++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=e!==void 0?Vo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Xh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yh(e,this.array)}};var cs=class extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hs=class extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Mt=class extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ru=new qn,Qi=new z,eo=new z,Ui=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ru.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);let t=Qi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(eo)),this.expandByPoint(Qi.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},au=0,Qt=new rt,to=new It,Ti=new z,qt=new qn,ji=new qn,St=new z,xn=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?hs:cs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(qt.min,ji.min),qt.expandByPoint(St),St.addVectors(qt.max,ji.max),qt.expandByPoint(St)):(qt.expandByPoint(ji.min),qt.expandByPoint(ji.max))}qt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)St.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),St.add(Ti)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new z,l[D]=new z;let h=new z,f=new z,u=new z,m=new Xe,x=new Xe,S=new Xe,p=new z,d=new z;function M(D,P,N){c[D]=c[P]=c[N]=1,h.fromBufferAttribute(n,D),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,N),m.fromBufferAttribute(r,D),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,N),f.sub(h),u.sub(h),x.sub(m),S.sub(m);let O=1/(x.x*S.y-S.x*x.y);isFinite(O)&&(p.copy(f).multiplyScalar(S.y).addScaledVector(u,-x.y).multiplyScalar(O),d.copy(u).multiplyScalar(x.x).addScaledVector(f,-S.x).multiplyScalar(O),o[D].add(p),o[P].add(p),o[N].add(p),l[D].add(d),l[P].add(d),l[N].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,P=A.length;D<P;++D){let N=A[D],O=N.start,H=N.count;for(let C=O,G=O+H;C<G;C+=3)M(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let w=new z,E=new z,T=new z,g=new z;function y(D){T.fromBufferAttribute(s,D),g.copy(T);let P=o[D];w.copy(P),w.sub(T.multiplyScalar(T.dot(P))).normalize(),E.crossVectors(g,P);let O=E.dot(l[D])<0?-1:1;a.setXYZW(D,w.x,w.y,w.z,O)}for(let D=0,P=n.count;D<P;++D)c[D]&&y(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),S=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)u[x++]=c[m++]}return new mn(u,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var no=new z,ou=new z,lu=new Le,rn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=no.subVectors(n,t).cross(ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(no),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lu.getNormalMatrix(e),s=this.coplanarPoint(no).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},cu=0,Xn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=vo,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cn=new z,io=new z,Ys=new z,Zs=new z,Mr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){io.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Zs.copy(this.origin).sub(io);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Zs.dot(this.direction),l=-Zs.dot(Ys),c=Zs.lengthSq(),h=Math.abs(1-a*a),f,u,m,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let S=1/h;f*=S,u*=S,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(io).addScaledVector(Ys,u),m}intersectSphere(e,t){if(e.radius<0)return null;Cn.subVectors(e.center,this.origin);let n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,S=t.y-a.y,p=t.z-a.z,d=n.x-a.x,M=n.y-a.y,A=n.z-a.z,w=Math.abs(l),E=Math.abs(c),T=Math.abs(h),g,y,D,P,N,O,H,C,G,X,V,te;if(w>=E&&w>=T?(D=l,O=f,G=x,te=d,l>=0?(g=c,y=h,P=u,N=m,H=S,C=p,X=M,V=A):(g=h,y=c,P=m,N=u,H=p,C=S,X=A,V=M)):E>=T?(D=c,O=u,G=S,te=M,c>=0?(g=h,y=l,P=m,N=f,H=p,C=x,X=A,V=d):(g=l,y=h,P=f,N=m,H=x,C=p,X=d,V=A)):(D=h,O=m,G=p,te=A,h>=0?(g=l,y=c,P=f,N=u,H=x,C=S,X=d,V=M):(g=c,y=l,P=u,N=f,H=S,C=x,X=M,V=d)),D===0)return null;let q=g/D,Q=y/D,j=1/D,Me=P-q*O,De=N-Q*O,J=H-q*G,pe=C-Q*G,ve=X-q*te,Ae=V-Q*te,me=ve*pe-Ae*J,Fe=Me*Ae-De*ve,ut=J*De-pe*Me;if(s){if(me<0||Fe<0||ut<0)return null}else if((me<0||Fe<0||ut<0)&&(me>0||Fe>0||ut>0))return null;let Ce=me+Fe+ut;if(Ce===0)return null;let $e=j*(me*O+Fe*G+ut*te);return(Ce>0?$e<0:$e>0)?null:this.at($e/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ol=new rt,li=new Mr,Js=new Ui,Bl=new z,Ks=new z,$s=new z,Qs=new z,so=new z,js=new z,zl=new z,er=new z,ct=class extends It{constructor(e=new xn,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(so.fromBufferAttribute(f,e),a?js.addScaledVector(so,h):js.addScaledVector(so.sub(t),h))}t.add(js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),li.copy(e.ray).recast(e.near),!(Js.containsPoint(li.origin)===!1&&(li.intersectSphere(Js,Bl)===null||li.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(Ol.copy(r).invert(),li.copy(e.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){let p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,E=A;w<E;w+=3){let T=o.getX(w),g=o.getX(w+1),y=o.getX(w+2);s=tr(this,d,e,n,c,h,f,T,g,y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){let M=o.getX(p),A=o.getX(p+1),w=o.getX(p+2);s=tr(this,a,e,n,c,h,f,M,A,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){let p=u[x],d=a[p.materialIndex],M=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=M,E=A;w<E;w+=3){let T=w,g=w+1,y=w+2;s=tr(this,d,e,n,c,h,f,T,g,y),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=x,d=S;p<d;p+=3){let M=p,A=p+1,w=p+2;s=tr(this,a,e,n,c,h,f,M,A,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function hu(i,e,t,n,s,r,a,o){let l;if(e.side===Ot?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ei,o),l===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(er);return c<t.near||c>t.far?null:{distance:c,point:er.clone(),object:i}}function tr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,$s),i.getVertexPosition(c,Qs);let h=hu(i,e,t,n,Ks,$s,Qs,zl);if(h){let f=new z;Wn.getBarycoord(zl,Ks,$s,Qs,f),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,f,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};Wn.getNormal(Ks,$s,Qs,u.normal),h.face=u,h.barycoord=f}return h}var br=class extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,l,c=bt,h=bt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=new Ui,uu=new Xe(.5,.5),nr=new z,Yn=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],m=r[7],x=r[8],S=r[9],p=r[10],d=r[11],M=r[12],A=r[13],w=r[14],E=r[15];if(s[0].setComponents(c-a,m-h,d-x,E-M).normalize(),s[1].setComponents(c+a,m+h,d+x,E+M).normalize(),s[2].setComponents(c+o,m+f,d+S,E+A).normalize(),s[3].setComponents(c-o,m-f,d-S,E-A).normalize(),n)s[4].setComponents(l,u,p,w).normalize(),s[5].setComponents(c-l,m-u,d-p,E-w).normalize();else if(s[4].setComponents(c-l,m-u,d-p,E-w).normalize(),t===jt)s[5].setComponents(c+l,m+u,d+p,E+w).normalize();else if(t===Pi)s[5].setComponents(l,u,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);let t=uu.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(nr.x=s.normal.x>0?e.max.x:e.min.x,nr.y=s.normal.y>0?e.max.y:e.min.y,nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kl=new rt,wr=class i{constructor(){this.coordinateSystem=jt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];kl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Yn),n[s].setFromProjectionMatrix(kl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Yn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var us=class extends Ft{constructor(e=[],t=fi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ds=class extends Ft{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Nn=class extends Ft{constructor(e,t,n=an,s,r,a,o=bt,l=bt,c,h=Pn,f=1){if(h!==Pn&&h!==Un)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ni(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fs=class extends Nn{constructor(e,t=an,n=fi,s,r,a=bt,o=bt,l,c=Pn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ps=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Zn=class i extends xn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(f,2));function x(S,p,d,M,A,w,E,T,g,y,D){let P=w/g,N=E/y,O=w/2,H=E/2,C=T/2,G=g+1,X=y+1,V=0,te=0,q=new z;for(let Q=0;Q<X;Q++){let j=Q*N-H;for(let Me=0;Me<G;Me++){let De=Me*P-O;q[S]=De*M,q[p]=j*A,q[d]=C,c.push(q.x,q.y,q.z),q[S]=0,q[p]=0,q[d]=T>0?1:-1,h.push(q.x,q.y,q.z),f.push(Me/g),f.push(1-Q/y),V+=1}}for(let Q=0;Q<y;Q++)for(let j=0;j<g;j++){let Me=u+j+G*Q,De=u+j+G*(Q+1),J=u+(j+1)+G*(Q+1),pe=u+(j+1)+G*Q;l.push(Me,De,pe),l.push(De,J,pe),te+=6}o.addGroup(m,te,D),m+=te,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Jn=class i extends xn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],m=[],x=0,S=[],p=n/2,d=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Mt(f,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(m,2));function M(){let w=new z,E=new z,T=0,g=(t-e)/n;for(let y=0;y<=r;y++){let D=[],P=y/r,N=P*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,C=H*l+o,G=Math.sin(C),X=Math.cos(C);E.x=N*G,E.y=-P*n+p,E.z=N*X,f.push(E.x,E.y,E.z),w.set(G,g,X).normalize(),u.push(w.x,w.y,w.z),m.push(H,1-P),D.push(x++)}S.push(D)}for(let y=0;y<s;y++)for(let D=0;D<r;D++){let P=S[D][y],N=S[D+1][y],O=S[D+1][y+1],H=S[D][y+1];(e>0||D!==0)&&(h.push(P,N,H),T+=3),(t>0||D!==r-1)&&(h.push(N,O,H),T+=3)}c.addGroup(d,T,0),d+=T}function A(w){let E=x,T=new Xe,g=new z,y=0,D=w===!0?e:t,P=w===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*P,0),u.push(0,P,0),m.push(.5,.5),x++;let N=x;for(let O=0;O<=s;O++){let C=O/s*l+o,G=Math.cos(C),X=Math.sin(C);g.x=D*X,g.y=p*P,g.z=D*G,f.push(g.x,g.y,g.z),u.push(0,P,0),T.x=G*.5+.5,T.y=X*.5*P+.5,m.push(T.x,T.y),x++}for(let O=0;O<s;O++){let H=E+O,C=N+O;w===!0?h.push(C,C+1,H):h.push(C+1,C,H),y+=3}c.addGroup(d,y,w===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class i extends Jn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kn=class i extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,m=[],x=[],S=[],p=[];for(let d=0;d<h;d++){let M=d*u-a;for(let A=0;A<c;A++){let w=A*f-r;x.push(w,-M,0),S.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){let A=M+c*d,w=M+c*(d+1),E=M+1+c*(d+1),T=M+1+c*d;m.push(A,w,T),m.push(w,E,T)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(S,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var hi=class i extends xn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new z,u=new z,m=[],x=[],S=[],p=[];for(let d=0;d<=n;d++){let M=[],A=d/n,w=a+A*o,E=e*Math.cos(w),T=Math.sqrt(e*e-E*E),g=0;d===0&&a===0?g=.5/t:d===n&&l===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){let D=y/t,P=s+D*r;f.x=-T*Math.cos(P),f.y=E,f.z=T*Math.sin(P),x.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),p.push(D+g,1-A),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let A=h[d][M+1],w=h[d][M],E=h[d+1][M],T=h[d+1][M+1];(d!==0||a>0)&&m.push(A,w,T),(d!==n-1||l<Math.PI)&&m.push(w,E,T)}this.setIndex(m),this.setAttribute("position",new Mt(x,3)),this.setAttribute("normal",new Mt(S,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function mi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vl(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pt(i){let e={};for(let t=0;t<i.length;t++){let n=mi(i[t]);for(let s in n)e[s]=n[s]}return e}function Vl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function du(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Go(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Nc={clone:mi,merge:Pt},fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fu,this.fragmentShader=pu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=du(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new at().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Tr=class extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Er=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ar=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ei(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ir(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $n=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rr=class extends $n{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oo,endingEnd:oo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lo:r=e,o=2*t-n;break;case co:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lo:a=e,l=2*n-t;break;case co:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),S=x*x,p=S*x,d=-u*p+2*u*S-u*x,M=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*x+1,A=(-1-m)*p+(1.5+m)*S+.5*x,w=m*p-m*S;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+M*a[c+E]+A*a[l+E]+w*a[f+E];return r}},Cr=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ir=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pr=class extends $n{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),S=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*x;return r}let u=o*2,m=e-1;for(let x=0;x!==o;++x){let S=a[c+x],p=a[l+x],d=m*u+x*2,M=f[d],A=f[d+1],w=e*u+x*2,E=h[w],T=h[w+1],g=gu(n,t,M,E,s);r[x]=Dc(g,S,A,T,p)}return r}};function Dc(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function mu(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function gu(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Dc(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=mu(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Yt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ei(t,this.TimeBufferType),this.values=Ei(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ei(e.times,Array),values:Ei(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ir(e.settings)&&(n.settings={inTangents:Ei(e.settings.inTangents,Array),outTangents:Ei(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ir(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ts:t=this.InterpolantFactoryMethodDiscrete;break;case _r:t=this.InterpolantFactoryMethodLinear;break;case ar:t=this.InterpolantFactoryMethodSmooth;break;case ao:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return ar;case this.InterpolantFactoryMethodBezier:return ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ir(this.settings)&&(Gl(this.settings.inTangents,e),Gl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ir(this.settings)&&(Hl(this.settings.inTangents,e),Hl(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Wh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ar,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let x=0;x!==n;++x){let S=t[f+x];if(S!==t[u+x]||S!==t[m+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ir(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Hl(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=_r;var Qn=class extends Yt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ts;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lr=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};Lr.prototype.ValueTypeName="color";var Nr=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};Nr.prototype.ValueTypeName="number";var Dr=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},ms=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dr(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Yt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=ts;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Yt{constructor(e,t,n,s){super(e,t,n,s)}};Ur.prototype.ValueTypeName="vector";var Fr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Uc=new Fr,Or=class{constructor(e){this.manager=e!==void 0?e:Uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Or.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ro=new rt,Wl=new z,ql=new z,Br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ht,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yn,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ro,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Pi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sr=new z,rr=new _n,fn=new z,xs=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sr,rr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sr,rr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hn=new z,Xl=new Xe,Yl=new Xe,Dt=class extends xs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Xl,Yl),t.subVectors(Yl,Xl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var vs=class extends xs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ho=class extends Br{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ai=-90,Ri=1,Bi=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Ai,Ri,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Ai,Ri,e,t);r.layers=this.layers,this.add(r);let a=new Dt(Ai,Ri,e,t);a.layers=this.layers,this.add(a);let o=new Dt(Ai,Ri,e,t);o.layers=this.layers,this.add(o);let l=new Dt(Ai,Ri,e,t);l.layers=this.layers,this.add(l);let c=new Dt(Ai,Ri,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},zr=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ho="\\[\\]\\.:\\/",_u=new RegExp("["+Ho+"]","g"),Wo="[^"+Ho+"]",xu="[^"+Ho.replace("\\.","")+"]",vu=/((?:WC+[\/:])*)/.source.replace("WC",Wo),yu=/(WCOD+)?/.source.replace("WCOD",xu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Mu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),bu=new RegExp("^"+vu+yu+Su+Mu+"$"),wu=["material","materials","bones","map"],uo=class{constructor(e,t,n){let s=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_u,"")}static parseTrackName(e){let t=bu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nt.Composite=uo;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cg=new Float32Array(1);var Ko=class Ko{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ko.prototype.isMatrix2=!0;var fo=Ko;function qo(i,e,t,n){let s=Tu(n);switch(t){case No:return i*e;case Uo:return i*e/s.components*s.byteLength;case Yr:return i*e/s.components*s.byteLength;case ti:return i*e*2/s.components*s.byteLength;case Zr:return i*e*2/s.components*s.byteLength;case Do:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Jr:return i*e*4/s.components*s.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ts:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $r:case jr:return Math.max(i,16)*Math.max(e,8)/4;case Kr:case Qr:return Math.max(i,8)*Math.max(e,8)/2;case ea:case ta:case ia:case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case As:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ya:case Sa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rs:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tu(i){switch(i){case Ht:case Co:return{byteLength:1,components:1};case Gi:case Io:case ln:return{byteLength:2,components:1};case qr:case Xr:return{byteLength:2,components:4};case an:case Wr:case on:return{byteLength:4,components:1};case Po:case Lo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ih(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Au(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<f.length;m++){let x=f[u],S=f[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,f[u]=S)}f.length=u+1;for(let m=0,x=f.length;m<x;m++){let S=f[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ku=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Td=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ff=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Of=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Iu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Nu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:ku,iridescence_fragment:Vu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Hu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Xu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Ku,common:$u,defaultnormal_vertex:Qu,displacementmap_pars_vertex:ju,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:yd,lights_toon_pars_fragment:Sd,lights_phong_fragment:Md,lights_phong_pars_fragment:bd,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Ed,lights_fragment_maps:Ad,lights_fragment_end:Rd,lightprobes_pars_fragment:Cd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Nd,map_fragment:Dd,map_pars_fragment:Ud,map_particle_fragment:Fd,map_particle_pars_fragment:Od,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:zd,morphinstance_vertex:kd,morphcolor_vertex:Vd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Wd,normal_fragment_begin:qd,normal_fragment_maps:Xd,normal_pars_fragment:Yd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:nf,premultiplied_alpha_fragment:sf,project_vertex:rf,dithering_fragment:af,dithering_pars_fragment:of,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:vf,tonemapping_fragment:yf,tonemapping_pars_fragment:Sf,transmission_fragment:Mf,transmission_pars_fragment:bf,uv_pars_fragment:wf,uv_pars_vertex:Tf,uv_vertex:Ef,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:If,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:Nf,depth_vert:Df,depth_frag:Uf,distance_vert:Ff,distance_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:kf,linedashed_frag:Vf,meshbasic_vert:Gf,meshbasic_frag:Hf,meshlambert_vert:Wf,meshlambert_frag:qf,meshmatcap_vert:Xf,meshmatcap_frag:Yf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Kf,meshphong_frag:$f,meshphysical_vert:Qf,meshphysical_frag:jf,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:ap,sprite_frag:op},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},bn={basic:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Pt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Pt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Pt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Pt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Pt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Pt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Pt([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Pt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};bn.physical={uniforms:Pt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Aa={r:0,b:0,g:0},lp=new rt,sh=new Le;sh.set(-1,0,0,0,1,0,0,0,1);function cp(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let w=M.backgroundBlurriness>0;A=e.get(A,w)}return A}function x(M){let A=!1,w=m(M);w===null?p(a,o):w&&w.isColor&&(p(w,1),A=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){let w=m(A);w&&w.isCubeTexture?(c===void 0&&(c=new ct(new Zn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:mi(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lp.makeRotationFromEuler(A.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sh),c.material.toneMapped=qe.getTransfer(w.colorSpace)!==Ke,(h!==w||f!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ct(new Kn(2,2),new vn({name:"BackgroundMaterial",uniforms:mi(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=qe.getTransfer(w.colorSpace)!==Ke,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(Aa,Go(i)),t.buffers.color.setClear(Aa.r,Aa.g,Aa.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:x,addToRenderList:S,dispose:d}}function hp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,H,C,G){let X=!1,V=f(N,C,H,O);r!==V&&(r=V,c(r.object)),X=m(N,C,H,G),X&&x(N,C,H,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(N,O,H,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function f(N,O,H,C){let G=C.wireframe===!0,X=n[O.id];X===void 0&&(X={},n[O.id]=X);let V=N.isInstancedMesh===!0?N.id:0,te=X[V];te===void 0&&(te={},X[V]=te);let q=te[H.id];q===void 0&&(q={},te[H.id]=q);let Q=q[G];return Q===void 0&&(Q=u(l()),q[G]=Q),Q}function u(N){let O=[],H=[],C=[];for(let G=0;G<t;G++)O[G]=0,H[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:C,object:N,attributes:{},index:null}}function m(N,O,H,C){let G=r.attributes,X=O.attributes,V=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let j=G[q],Me=X[q];if(Me===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),j===void 0||j.attribute!==Me||Me&&j.data!==Me.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function x(N,O,H,C){let G={},X=O.attributes,V=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let j=X[q];j===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(j=N.instanceColor));let Me={};Me.attribute=j,j&&j.data&&(Me.data=j.data),G[q]=Me,V++}r.attributes=G,r.attributesNum=V,r.index=C}function S(){let N=r.newAttributes;for(let O=0,H=N.length;O<H;O++)N[O]=0}function p(N){d(N,0)}function d(N,O){let H=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;H[N]=1,C[N]===0&&(i.enableVertexAttribArray(N),C[N]=1),G[N]!==O&&(i.vertexAttribDivisor(N,O),G[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let H=0,C=O.length;H<C;H++)O[H]!==N[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function A(N,O,H,C,G,X,V){V===!0?i.vertexAttribIPointer(N,O,H,G,X):i.vertexAttribPointer(N,O,H,C,G,X)}function w(N,O,H,C){S();let G=C.attributes,X=H.getAttributes(),V=O.defaultAttributeValues;for(let te in X){let q=X[te];if(q.location>=0){let Q=G[te];if(Q===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let j=Q.normalized,Me=Q.itemSize,De=e.get(Q);if(De===void 0)continue;let J=De.buffer,pe=De.type,ve=De.bytesPerElement,Ae=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===Wr;if(Q.isInterleavedBufferAttribute){let me=Q.data,Fe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ut=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)d(q.location+Ce,me.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)p(q.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ce=0;Ce<q.locationSize;Ce++)A(q.location+Ce,Me/q.locationSize,pe,j,Fe*ve,(ut+Me/q.locationSize*Ce)*ve,Ae)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)d(q.location+me,Q.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<q.locationSize;me++)p(q.location+me);i.bindBuffer(i.ARRAY_BUFFER,J);for(let me=0;me<q.locationSize;me++)A(q.location+me,Me/q.locationSize,pe,j,Me*ve,Me/q.locationSize*me*ve,Ae)}}else if(V!==void 0){let j=V[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(q.location,j);break;case 3:i.vertexAttrib3fv(q.location,j);break;case 4:i.vertexAttrib4fv(q.location,j);break;default:i.vertexAttrib1fv(q.location,j)}}}}M()}function E(){D();for(let N in n){let O=n[N];for(let H in O){let C=O[H];for(let G in C){let X=C[G];for(let V in X)h(X[V].object),delete X[V];delete C[G]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let H in O){let C=O[H];for(let G in C){let X=C[G];for(let V in X)h(X[V].object),delete X[V];delete C[G]}}delete n[N.id]}function g(N){for(let O in n){let H=n[O];for(let C in H){let G=H[C];if(G[N.id]===void 0)continue;let X=G[N.id];for(let V in X)h(X[V].object),delete X[V];delete G[N.id]}}}function y(N){for(let O in n){let H=n[O],C=N.isInstancedMesh===!0?N.id:0,G=H[C];if(G!==void 0){for(let X in G){let V=G[X];for(let te in V)h(V[te].object),delete V[te];delete G[X]}delete H[C],Object.keys(H).length===0&&delete n[O]}}}function D(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:M}}function up(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function dp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==cn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let y=g===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ht&&g!==on&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:w,maxSamples:E,samples:T}}function fp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new rn,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){let x=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,A=M*4,w=d.clippingState||null;l.value=w,w=h(x,u,A,m);for(let E=0;E!==A;++E)w[E]=t[E];d.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,m,x){let S=f!==null?f.length:0,p=null;if(S!==0){if(p=l.value,x!==!0||p===null){let d=m+S*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,w=m;A!==S;++A,w+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}var Ls=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new us(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zn(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:ui});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Ut),new Bi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Fc=256,pp=3,mp=20,rh=256,ah=16,gp=3,_p=new z,xp=new ze,Ca=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bi(1,10,null),this._boxMesh=new ct(new Zn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=_p}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(xp));let p=new Bi(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=x,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fc,Pc(e))}_fromTexture(e,t){e.mapping===fi||e.mapping===Vi?this._setSize(e.image.length===0?Fc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Oc(e,!1,!1),n=Math.log2(e)-pp;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Oc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fi||e.mapping===Vi?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=vp(),this._integrationMaterial=yp());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ah);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-gp)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(rh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Oc(i,e,t){return new Ls(i,{minFilter:Dn,generateMipmaps:e,type:ln,colorSpace:ns,depthBuffer:t})}function Ns(i,e,t){return new vn({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Ot,blending:ui,depthTest:!1,depthWrite:!1})}function vp(){return Ns("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yp(){return Ns("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ah}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Sp(){return Ns("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bc(){return Ns("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zc(){return Ns("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Vr||m===Gr)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let S=new Ls(x.height);return S.fromEquirectangularTexture(i,u),e.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,x=m===Vr||m===Gr,S=m===fi||m===Vi;if(x||S){let p=t.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Ca(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return x&&M&&M.height>0||S&&M&&l(M)?(n===null&&(n=new Ca(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Vr?u.mapping=fi:m===Gr&&(u.mapping=Vi),u}function l(u){let m=0,x=6;for(let S=0;S<x;S++)u[S]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function bp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let S=r.get(x);S&&(e.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(x){let S=x.attributes;for(let p in S)e.update(S[p],i.ARRAY_BUFFER)}function f(x){let S=x.index,p=x.attributes.position,d=0;if(p===void 0)return;let M=S!==null?S.array.length:p.array.length/3-1,A=p.count>=65535?hs:cs,w=new A(Math.ceil(M/3)*6,1),E=w.array;if(S!==null){let g=S.array;d=S.version;for(let y=0,D=0;y<M;y+=3){let P=g[y+0],N=g[y+1],O=g[y+2];E[D++]=P,E[D++]=N,E[D++]=N,E[D++]=O,E[D++]=O,E[D++]=P}}else{d=p.version;for(let g=0,y=0;g<M;g+=3){let D=g+0,P=g+1,N=g+2;E[y++]=D,E[y++]=P,E[y++]=P,E[y++]=N,E[y++]=N,E[y++]=D}}w.version=d;let T=r.get(x);T&&e.remove(T),r.set(x,w)}function u(x){let S=r.get(x);if(S){let p=x.index;p!==null&&S.version<p.version&&f(x)}else f(x);return r.get(x)}function m(){for(let x in s){let S=s[x].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Tp(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),t.update(u,n,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ep(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ap(i,e,t){let n=new WeakMap,s=new at;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;m===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let w=o.attributes.position.count*A,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*E*4*f),g=new rs(T,w,E,f);g.type=on,g.needsUpdate=!0;let y=A*4;for(let P=0;P<f;P++){let N=p[P],O=d[P],H=M[P],C=w*E*4*P;for(let G=0;G<N.count;G++){let X=G*y;m===!0&&(s.fromBufferAttribute(N,G),T[C+X+0]=s.x,T[C+X+1]=s.y,T[C+X+2]=s.z,T[C+X+3]=0),x===!0&&(s.fromBufferAttribute(O,G),T[C+X+4]=s.x,T[C+X+5]=s.y,T[C+X+6]=s.z,T[C+X+7]=0),S===!0&&(s.fromBufferAttribute(H,G),T[C+X+8]=s.x,T[C+X+9]=s.y,T[C+X+10]=s.z,T[C+X+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new Xe(w,E)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Rp(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Cp={[So]:"LINEAR_TONE_MAPPING",[Mo]:"REINHARD_TONE_MAPPING",[bo]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[Eo]:"AGX_TONE_MAPPING",[Ao]:"NEUTRAL_TONE_MAPPING",[To]:"CUSTOM_TONE_MAPPING"};function Ip(i,e,t,n,s,r){let a=new Xt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new xn;h.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mt([0,2,0,0,2,0],2));let f=new Tr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ct(h,f),m=new vs(-1,1,1,-1,0,1),x=null,S=null,p=!1,d,M=null,A=[],w=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),l!==null&&l.setSize(E,T);for(let g=0;g<A.length;g++){let y=A[g];y.setSize&&y.setSize(E,T)}},this.setEffects=function(E){A=E,w=A.length>0&&A[0].isRenderPass===!0;let T=a.width,g=a.height;A.length>0&&o===null&&(o=new Xt(T,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(T,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&A.some(D=>D.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Nn(T,g),r===!0&&(c.format=Un,c.type=pi)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let D=0;D<A.length;D++){let P=A[D];P.setSize&&P.setSize(T,g),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(E,T){if(p||E.toneMapping===Sn&&A.length===0)return!1;if(M=T,T!==null){let g=T.width,y=T.height;(a.width!==g||a.height!==y)&&this.setSize(g,y)}return w===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=Sn,!0},this.hasRenderPass=function(){return w},this.end=function(E,T){E.toneMapping=d,p=!0;let g=a,y=o;for(let D=0;D<A.length;D++){let P=A[D];P.enabled!==!1&&(P.render(E,y,g,T),P.needsSwap!==!1&&(g=y,y=y===o?l:o))}if(x!==E.outputColorSpace||S!==E.toneMapping){x=E.outputColorSpace,S=E.toneMapping,f.defines={},qe.getTransfer(x)===Ke&&(f.defines.SRGB_TRANSFER="");let D=Cp[S];D&&(f.defines[D]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(M),E.render(u,m),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var oh=new Ft,lh=new Nn(1,1),ch=new fs(1),hh=new rs,uh=new Sr,dh=new us,kc=[],Vc=[],Gc=new Float32Array(16),Hc=new Float32Array(9),Wc=new Float32Array(4);function Wi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Up(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Wc.set(n),i.uniformMatrix2fv(this.addr,!1,Wc),_t(t,n)}}function Fp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),_t(t,n)}}function Op(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;Gc.set(n),i.uniformMatrix4fv(this.addr,!1,Gc),_t(t,n)}}function Bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function Vp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function La(i){return i.version===0&&(i.compareFunction=Bo,i.needsUpdate=!0),i}function Xp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=La(lh):r=oh,t.setTexture2D(e||r,s)}function Yp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||uh,s)}function Zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=La(ch):r=dh,t.setTextureCube(e||r,s)}function Jp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hh,s)}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Np;case 35666:return Dp;case 35674:return Up;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Vp;case 5125:return Gp;case 36294:return Hp;case 36295:return Wp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return Yp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Jp}}function $p(i,e){i.uniform1fv(this.addr,e)}function Qp(i,e){let t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function jp(i,e){let t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function em(i,e){let t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function tm(i,e){let t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nm(i,e){let t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function im(i,e){let t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sm(i,e){i.uniform1iv(this.addr,e)}function rm(i,e){i.uniform2iv(this.addr,e)}function am(i,e){i.uniform3iv(this.addr,e)}function om(i,e){i.uniform4iv(this.addr,e)}function lm(i,e){i.uniform1uiv(this.addr,e)}function cm(i,e){i.uniform2uiv(this.addr,e)}function hm(i,e){i.uniform3uiv(this.addr,e)}function um(i,e){i.uniform4uiv(this.addr,e)}function dm(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=La(lh):a=oh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function fm(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||uh,r[a])}function pm(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=La(ch):a=dh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function mm(i,e,t){let n=this.cache,s=e.length,r=Pa(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hh,r[a])}function gm(i){switch(i){case 5126:return $p;case 35664:return Qp;case 35665:return jp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}var jo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kp(t.type)}},el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gm(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$o=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function _m(i,e,t){let n=i.name,s=n.length;for($o.lastIndex=0;;){let r=$o.exec(n),a=$o.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){qc(t,c===void 0?new jo(o,i,e):new el(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new tl(o),qc(t,f)),t=f}}}var Hi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_m(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Xc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xm=37297,vm=0;function ym(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yc=new Le;function Sm(i){qe._getMatrix(Yc,qe.workingColorSpace,i);let e=`mat3( ${Yc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case is:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ym(i.getShaderSource(e),o)}else return r}function Mm(i,e){let t=Sm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bm={[So]:"Linear",[Mo]:"Reinhard",[bo]:"Cineon",[wo]:"ACESFilmic",[Eo]:"AgX",[Ao]:"Neutral",[To]:"Custom"};function wm(i,e){let t=bm[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ra=new z;function Tm(){qe.getLuminanceCoefficients(Ra);let i=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function Am(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ps(i){return i!==""}function Jc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(Cm,Im)}function Im(i,e){let t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nl(t)}var Pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Pm,Lm)}function Lm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Nm={[Ss]:"SHADOWMAP_TYPE_PCF",[zi]:"SHADOWMAP_TYPE_VSM"};function Dm(i){return Nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Um={[Vi]:"ENVMAP_MODE_REFRACTION"};function Fm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Um[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Om={[yo]:"ENVMAP_BLENDING_MULTIPLY",[mc]:"ENVMAP_BLENDING_MIX",[gc]:"ENVMAP_BLENDING_ADD"};function Bm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Om[i.combine]||"ENVMAP_BLENDING_NONE"}function zm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dm(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Fm(t),f=Bm(t),u=Em(t),m=Am(r),x=s.createProgram(),S,p,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ps).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(S=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Sn?wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),Tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),a=nl(a),a=Jc(a,t),a=Kc(a,t),o=nl(o),o=Jc(o,t),o=Kc(o,t),a=$c(a),o=$c(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",t.glslVersion===zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=d+S+a,A=d+p+o,w=Xc(s,s.VERTEX_SHADER,M),E=Xc(s,s.FRAGMENT_SHADER,A);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(E)||"",C=N.trim(),G=O.trim(),X=H.trim(),V=!0,te=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{let q=Zc(s,w,"vertex"),Q=Zc(s,E,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+q+`
`+Q)}else C!==""?Ie("WebGLProgram: Program Info Log:",C):(G===""||X==="")&&(te=!1);te&&(P.diagnostics={runnable:V,programLog:C,vertexShader:{log:G,prefix:S},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(E),g=new Hi(s,x),y=Rm(s,x)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,xm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var km=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sl(e),t.set(e,n)),n}},sl=class{constructor(e){this.id=km++,this.code=e,this.usedTimes=0}};function Vm(i){return i===ti||i===As||i===Rs}function Gm(i,e,t,n,s,r){let a=new as,o=new il,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,y,D,P,N,O){let H=P.fog,C=N.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||G,X),te=u[g.type],q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));let Q=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,j=Q!==void 0?Q.length:0,Me=0;C.morphAttributes.position!==void 0&&(Me=1),C.morphAttributes.normal!==void 0&&(Me=2),C.morphAttributes.color!==void 0&&(Me=3);let De,J,pe,ve;if(te){let de=bn[te];De=de.vertexShader,J=de.fragmentShader}else{De=g.vertexShader,J=g.fragmentShader;let de=o.getVertexShaderStage(g),Qe=o.getFragmentShaderStage(g);o.update(g,de,Qe),pe=de.id,ve=Qe.id}let Ae=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Ce=!!g.map,$e=!!g.matcap,je=!!V,Ge=je&&V.isPMREMTexture===!0,wt=!!g.aoMap,pt=!!g.lightMap,kt=!!g.bumpMap&&g.wireframe===!1,ot=!!g.normalMap,dn=!!g.displacementMap,xt=!!g.emissiveMap,Zt=!!g.metalnessMap,Jt=!!g.roughnessMap,Kt=g.anisotropy>0,L=g.clearcoat>0,$t=g.diffuseRoughness>0,it=g.dispersion>0,st=g.retroreflectivity>0,ue=g.iridescence>0,mt=g.sheen>0,Re=g.transmission>0,Ne=Kt&&!!g.anisotropyMap,b=L&&!!g.clearcoatMap,_=L&&!!g.clearcoatNormalMap,F=L&&!!g.clearcoatRoughnessMap,ee=$t&&!!g.diffuseRoughnessMap,$=ue&&!!g.iridescenceMap,se=ue&&!!g.iridescenceThicknessMap,ce=mt&&!!g.sheenColorMap,Y=mt&&!!g.sheenRoughnessMap,Z=!!g.specularMap,ae=!!g.specularColorMap,R=!!g.specularIntensityMap,K=Re&&!!g.transmissionMap,W=Re&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,we=!!g.alphaHash,Be=!!g.extensions,ne=Sn;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ee=Ge?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Oe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:De,fragmentShader:J,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:$e,envMap:je,envMapMode:je&&V.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Ee.length-1:null,envMapSize:Ge?Ee[0].width:null,aoMap:wt,lightMap:pt,bumpMap:kt,normalMap:ot,displacementMap:dn,emissiveMap:xt,normalMapObjectSpace:ot&&g.normalMapType===vc,normalMapTangentSpace:ot&&g.normalMapType===Ea,packedNormalMap:ot&&g.normalMapType===Ea&&Vm(g.normalMap.format),metalnessMap:Zt,roughnessMap:Jt,anisotropy:Kt,anisotropyMap:Ne,clearcoat:L,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:F,diffuseRoughness:$t,diffuseRoughnessMap:ee,dispersion:it,retroreflection:st,iridescence:ue,iridescenceMap:$,iridescenceThicknessMap:se,sheen:mt,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:ae,specularIntensityMap:R,transmission:Re,transmissionMap:K,thicknessMap:W,gradientMap:oe,opaque:g.transparent===!1&&g.blending===ki&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:we,combine:g.combine,mapUv:Ce&&m(g.map.channel),aoMapUv:wt&&m(g.aoMap.channel),lightMapUv:pt&&m(g.lightMap.channel),bumpMapUv:kt&&m(g.bumpMap.channel),normalMapUv:ot&&m(g.normalMap.channel),displacementMapUv:dn&&m(g.displacementMap.channel),emissiveMapUv:xt&&m(g.emissiveMap.channel),metalnessMapUv:Zt&&m(g.metalnessMap.channel),roughnessMapUv:Jt&&m(g.roughnessMap.channel),anisotropyMapUv:Ne&&m(g.anisotropyMap.channel),clearcoatMapUv:b&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&m(g.sheenRoughnessMap.channel),specularMapUv:Z&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:K&&m(g.transmissionMap.channel),thicknessMapUv:W&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ot||Kt),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ce||ie),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&ot===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Me,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&qe.getTransfer(g.map.colorSpace)===Ke,decodeVideoTextureEmissive:xt&&g.emissiveMap.isVideoTexture===!0&&qe.getTransfer(g.emissiveMap.colorSpace)===Ke,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===yn,flipSided:g.side===Ot,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Be&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&g.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function S(g){let y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)y.push(D),y.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(p(y,g),d(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function p(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function d(g,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let y=u[g.type],D;if(y){let P=bn[y];D=Nc.clone(P.uniforms)}else D=g.uniforms;return D}function A(g,y){let D=h.get(y);return D!==void 0?++D.usedTimes:(D=new zm(i,y,g,s),c.push(D),h.set(y,D)),D}function w(g){if(--g.usedTimes===0){let y=c.indexOf(g);c[y]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:T}}function Hm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function eh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,S,p,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=a(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=p,M.group=d),e++,M}function l(u,m,x,S,p,d,M){M.reversedDepth===!0&&(p=-p);let A=o(u,m,x,S,p,d);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function c(u,m,x,S,p,d){let M=o(u,m,x,S,p,d);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,m){t.length>1&&t.sort(u||Wm),n.length>1&&n.sort(m||jc),s.length>1&&s.sort(m||jc)}function f(){for(let u=e,m=i.length;u<m;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function qm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new eh,i.set(n,[a])):s>=r.length?(a=new eh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ze};break;case"SpotLight":t={position:new z,direction:new z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Ym(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zm=0;function Jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Km(i){let e=new Xm,t=Ym(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new rt,a=new rt;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,x=0,S=0,p=0,d=0,M=0,A=0,w=0,E=0,T=0,g=0,y=0,D=0,P=0;c.sort(Jm);for(let O=0,H=c.length;O<H;O++){let C=c[O],G=C.color,X=C.intensity,V=C.distance,te=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ti?te=C.shadow.map.texture:te=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*X,f+=G.g*X,u+=G.b*X;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],X);P++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,j=t.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=te;let Me=Q.getViewportCount();for(let De=0;De<Me;De++)n.sunShadowMatrix[S+De]=Q.getMatrix(De),n.sunShadowCascade[S+De]=Q._cascadeData[De];S+=Me,x++}n.sun[m]=q,m++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Q=C.shadow,j=t.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=q,p++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(G).multiplyScalar(X),q.distance=V,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[M]=q;let Q=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,Q.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[M]=Q.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=te,g++}M++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(G).multiplyScalar(X),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=q,A++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let Q=C.shadow,j=t.get(C);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=te,n.pointShadowMatrix[d]=C.shadow.matrix,T++}n.point[d]=q,d++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(X),q.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[w]=q,w++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.sunLength!==m||N.directionalLength!==p||N.pointLength!==d||N.spotLength!==M||N.rectAreaLength!==A||N.hemiLength!==w||N.numSunShadows!==x||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==g||N.numSpotMaps!==y||N.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=w,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-D,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,N.sunLength=m,N.directionalLength=p,N.pointLength=d,N.spotLength=M,N.rectAreaLength=A,N.hemiLength=w,N.numSunShadows=x,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=g,N.numSpotMaps=y,N.numLightProbes=P,n.version=Zm++)}function l(c,h){let f=0,u=0,m=0,x=0,S=0,p=0,d=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let w=c[M];if(w.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),f++}else if(w.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(w.isSpotLight){let E=n.spot[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),x++}else if(w.isRectAreaLight){let E=n.rectArea[S];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(w.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(w.isPointLight){let E=n.point[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(d),m++}else if(w.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function th(i){let e=new Km(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $m(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new th(i),e.set(s,[o])):r>=a.length?(o=new th(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eg=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],tg=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],nh=new rt,Is=new z,Qo=new z;function ng(i,e,t){let n=new Yn,s=new Xe,r=new Xe,a=new at,o=new Er,l=new Ar,c={},h=t.maxTextureSize,f={[ei]:Ot,[Ot]:ei,[yn]:yn},u=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Qm,fragmentShader:jm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new xn;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new ct(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let d=this.type;this.render=function(T,g,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Kl&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let D=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ui),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=d!==this.type;H&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=T.length;C<G;C++){let X=T[C],V=X.shadow;if(V===void 0){Ie("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let te=V.getFrameExtents();s.multiply(te),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===zi){if(X.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xt(s.x,s.y,{format:ti,type:ln,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new Nn(s.x,s.y,on),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=Pn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt}else X.isPointLight?(V.map=new Ls(s.x),V.map.depthTexture=new fs(s.x,an)):(V.map=new Xt(s.x,s.y),V.map.depthTexture=new Nn(s.x,s.y,an)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=Pn,this.type===Ss?(V.map.depthTexture.compareFunction=q?Oo:Fo,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=bt,V.map.depthTexture.magFilter=bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,y);let j=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:y.layers;for(let Me=0;Me<Q;Me++){let De=V.getCamera(Me);if(X.isPointLight){let J=V.camera,pe=V.matrix,ve=X.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),Is.setFromMatrixPosition(X.matrixWorld),J.position.copy(Is),Qo.copy(J.position),Qo.add(eg[Me]),J.up.copy(tg[Me]),J.lookAt(Qo),J.updateMatrixWorld(),pe.makeTranslation(-Is.x,-Is.y,-Is.z),nh.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(nh,J.coordinateSystem,J.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(V.map),i.clear());let J=V.getViewport(Me);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),O.viewport(a)}n=V.getFrustum(Me),w(g,y,De,X,j,this.type)}V.isPointLightShadow!==!0&&this.type===zi&&M(V,y),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(D,P,N)};function M(T,g){let y=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xt(s.x,s.y,{format:ti,type:ln}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,y,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,y,m,S,null)}function A(T,g,y,D){let P=null,N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=P.uuid,H=g.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let G=C[H];G===void 0&&(G=P.clone(),C[H]=G,g.addEventListener("dispose",E)),P=G}if(P.visible=g.visible,P.wireframe=g.wireframe,D===zi?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:f[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=y}return P}function w(T,g,y,D,P,N){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===zi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let C=e.update(T),G=T.material;if(Array.isArray(G)){let X=C.groups;for(let V=0,te=X.length;V<te;V++){let q=X[V],Q=G[q.materialIndex];if(Q&&Q.visible){let j=A(T,Q,D,N);T.onBeforeShadow(i,T,g,y,C,j,q),i.renderBufferDirect(y,null,C,j,T,q),T.onAfterShadow(i,T,g,y,C,j,q)}}}else if(G.visible){let X=A(T,G,D,N);T.onBeforeShadow(i,T,g,y,C,X,null),i.renderBufferDirect(y,null,C,X,T,null),T.onAfterShadow(i,T,g,y,C,X,null)}}let H=T.children;for(let C=0,G=H.length;C<G;C++)w(H[C],g,y,D,P,N)}function E(T){T.target.removeEventListener("dispose",E);for(let y in c){let D=c[y],P=T.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function ig(i,e){function t(){let R=!1,K=new at,W=null,oe=new at(0,0,0,0);return{setMask:function(ie){W!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,we,Be,ne){ne===!0&&(ie*=Be,re*=Be,we*=Be),K.set(ie,re,we,Be),oe.equals(K)===!1&&(i.clearColor(ie,re,we,Be),oe.copy(K))},reset:function(){R=!1,W=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,K=!1,W=null,oe=null,ie=null;return{setReversed:function(re){if(K!==re){let we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),K=re;let Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return K},setTest:function(re){re?me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){W!==re&&!R&&(i.depthMask(re),W=re)},setFunc:function(re){if(K&&(re=Ic[re]),oe!==re){switch(re){case lr:i.depthFunc(i.NEVER);break;case cr:i.depthFunc(i.ALWAYS);break;case hr:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case ur:i.depthFunc(i.EQUAL);break;case dr:i.depthFunc(i.GEQUAL);break;case fr:i.depthFunc(i.GREATER);break;case pr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,K&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,W=null,oe=null,ie=null,K=!1}}}function s(){let R=!1,K=null,W=null,oe=null,ie=null,re=null,we=null,Be=null,ne=null;return{setTest:function(Ee){R||(Ee?me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ee){K!==Ee&&!R&&(i.stencilMask(Ee),K=Ee)},setFunc:function(Ee,Oe,de){(W!==Ee||oe!==Oe||ie!==de)&&(i.stencilFunc(Ee,Oe,de),W=Ee,oe=Oe,ie=de)},setOp:function(Ee,Oe,de){(re!==Ee||we!==Oe||Be!==de)&&(i.stencilOp(Ee,Oe,de),re=Ee,we=Oe,Be=de)},setLocked:function(Ee){R=Ee},setClear:function(Ee){ne!==Ee&&(i.clearStencil(Ee),ne=Ee)},reset:function(){R=!1,K=null,W=null,oe=null,ie=null,re=null,we=null,Be=null,ne=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},m=new WeakMap,x=[],S=null,p=!1,d=null,M=null,A=null,w=null,E=null,T=null,g=null,y=new ze(0,0,0),D=0,P=!1,N=null,O=null,H=null,C=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=te>=2);let Q=null,j={},Me=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),J=new at().fromArray(Me),pe=new at().fromArray(De);function ve(R,K,W,oe){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<W;we++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(K+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Ae={};Ae[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Ii),kt(!1),ot(po),me(i.CULL_FACE),wt(ui);function me(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Fe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ut(R,K){return u[R]!==K?(i.bindFramebuffer(R,K),u[R]=K,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Ce(R,K){let W=x,oe=!1;if(R){W=m.get(K),W===void 0&&(W=[],m.set(K,W));let ie=R.textures;if(W.length!==ie.length||W[0]!==i.COLOR_ATTACHMENT0){for(let re=0,we=ie.length;re<we;re++)W[re]=i.COLOR_ATTACHMENT0+re;W.length=ie.length,oe=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,oe=!0);oe&&i.drawBuffers(W)}function $e(R){return S!==R?(i.useProgram(R),S=R,!0):!1}let je={[di]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[jl]:i.FUNC_REVERSE_SUBTRACT};je[ec]=i.MIN,je[tc]=i.MAX;let Ge={[nc]:i.ZERO,[ic]:i.ONE,[sc]:i.SRC_COLOR,[xo]:i.SRC_ALPHA,[hc]:i.SRC_ALPHA_SATURATE,[lc]:i.DST_COLOR,[ac]:i.DST_ALPHA,[rc]:i.ONE_MINUS_SRC_COLOR,[vo]:i.ONE_MINUS_SRC_ALPHA,[cc]:i.ONE_MINUS_DST_COLOR,[oc]:i.ONE_MINUS_DST_ALPHA,[uc]:i.CONSTANT_COLOR,[dc]:i.ONE_MINUS_CONSTANT_COLOR,[fc]:i.CONSTANT_ALPHA,[pc]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(R,K,W,oe,ie,re,we,Be,ne,Ee){if(R===ui){p===!0&&(Fe(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),R!==$l){if(R!==d||Ee!==P){if((M!==di||E!==di)&&(i.blendEquation(i.FUNC_ADD),M=di,E=di),Ee)switch(R){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",R);break}else switch(R){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case go:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _o:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",R);break}A=null,w=null,T=null,g=null,y.set(0,0,0),D=0,d=R,P=Ee}return}ie=ie||K,re=re||W,we=we||oe,(K!==M||ie!==E)&&(i.blendEquationSeparate(je[K],je[ie]),M=K,E=ie),(W!==A||oe!==w||re!==T||we!==g)&&(i.blendFuncSeparate(Ge[W],Ge[oe],Ge[re],Ge[we]),A=W,w=oe,T=re,g=we),(Be.equals(y)===!1||ne!==D)&&(i.blendColor(Be.r,Be.g,Be.b,ne),y.copy(Be),D=ne),d=R,P=!1}function pt(R,K){R.side===yn?Fe(i.CULL_FACE):me(i.CULL_FACE);let W=R.side===Ot;K&&(W=!W),kt(W),R.blending===ki&&R.transparent===!1?wt(ui):wt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),xt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function ot(R){R!==Zl?(me(i.CULL_FACE),R!==O&&(R===po?i.cullFace(i.BACK):R===Jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),O=R}function dn(R){R!==H&&(V&&i.lineWidth(R),H=R)}function xt(R,K,W){R?(me(i.POLYGON_OFFSET_FILL),(C!==K||G!==W)&&(C=K,G=W,a.getReversed()&&(K=-K,W=-W),i.polygonOffset(K,W))):Fe(i.POLYGON_OFFSET_FILL)}function Zt(R){R?me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Jt(R){R===void 0&&(R=i.TEXTURE0+X-1),Q!==R&&(i.activeTexture(R),Q=R)}function Kt(R,K,W){W===void 0&&(Q===null?W=i.TEXTURE0+X-1:W=Q);let oe=j[W];oe===void 0&&(oe={type:void 0,texture:void 0},j[W]=oe),(oe.type!==R||oe.texture!==K)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(R,K||Ae[R]),oe.type=R,oe.texture=K)}function L(){let R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(R){Pe("WebGLState:",R)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(R){Pe("WebGLState:",R)}}function st(){try{i.texSubImage2D(...arguments)}catch(R){Pe("WebGLState:",R)}}function ue(){try{i.texSubImage3D(...arguments)}catch(R){Pe("WebGLState:",R)}}function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Pe("WebGLState:",R)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Pe("WebGLState:",R)}}function Ne(){try{i.texStorage2D(...arguments)}catch(R){Pe("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){Pe("WebGLState:",R)}}function _(){try{i.texImage2D(...arguments)}catch(R){Pe("WebGLState:",R)}}function F(){try{i.texImage3D(...arguments)}catch(R){Pe("WebGLState:",R)}}function ee(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function $(R,K){f[R]!==K&&(i.pixelStorei(R,K),f[R]=K)}function se(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ce(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function Y(R,K){let W=c.get(K);W===void 0&&(W=new WeakMap,c.set(K,W));let oe=W.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(K,R.name),i.uniformBlockBinding(K,oe,oe),W.set(R,oe))}function Z(R,K,W){let ie=c.get(K).get(R);l[ie]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,W),l[ie]=W)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,j={},u={},l={},m=new WeakMap,x=[],S=null,p=!1,d=null,M=null,A=null,w=null,E=null,T=null,g=null,y=new ze(0,0,0),D=0,P=!1,N=null,O=null,H=null,C=null,G=null,J.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Fe,bindFramebuffer:ut,drawBuffers:Ce,useProgram:$e,setBlending:wt,setMaterial:pt,setFlipSided:kt,setCullFace:ot,setLineWidth:dn,setPolygonOffset:xt,setScissorTest:Zt,activeTexture:Jt,bindTexture:Kt,unbindTexture:L,compressedTexImage2D:$t,compressedTexImage3D:it,texImage2D:_,texImage3D:F,pixelStorei:$,getParameter:ee,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Ne,texStorage3D:b,texSubImage2D:st,texSubImage3D:ue,compressedTexSubImage2D:mt,compressedTexSubImage3D:Re,scissor:se,viewport:ce,reset:ae}}function sg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,f=new Set,u,m=new WeakMap,x=new Set,S=new FinalizationRegistry(b=>x.delete(b)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(b,_){return p?new OffscreenCanvas(b,_):ss("canvas")}function M(b,_,F){let ee=1,$=Ne(b);if(($.width>F||$.height>F)&&(ee=F/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let se=Math.floor(ee*$.width),ce=Math.floor(ee*$.height);u===void 0&&(u=d(se,ce));let Y=_?d(se,ce):u;return Y.width=se,Y.height=ce,Y.getContext("2d").drawImage(b,0,0,se,ce),Ie("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+ce+")."),Y}else return"data"in b&&Ie("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function A(b){return b.generateMipmaps}function w(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,_,F,ee,$,se=!1){if(b!==null){if(i[b]!==void 0)return i[b];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),F===i.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),F===i.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),F===i.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let Z=se?is:qe.getTransfer($);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Z===Ke?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),F===i.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(b,_){let F;return b?_===null||_===an||_===pi?F=i.DEPTH24_STENCIL8:_===on?F=i.DEPTH32F_STENCIL8:_===Gi&&(F=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===an||_===pi?F=i.DEPTH_COMPONENT24:_===on?F=i.DEPTH_COMPONENT32F:_===Gi&&(F=i.DEPTH_COMPONENT16),F}function y(b,_){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==bt&&b.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){let _=new WeakRef(b);n.get(b).__ref=_,x.add(_),S.register(b,_,_)}function P(b){let _=n.get(b).__ref;_!==void 0&&(x.delete(_),S.unregister(_))}function N(b){H(b.target)}function O(b){C(b.target)}function H(b){b.removeEventListener("dispose",N),P(b),X(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function C(b){b.removeEventListener("dispose",O),P(b),te(b)}function G(){for(let b of x){let _=b.deref();_!==void 0&&(_.isRenderTarget===!0?C(_):H(_))}x.clear(),f.clear()}function X(b){let _=n.get(b);if(_.__webglInit===void 0)return;let F=b.source,ee=m.get(F);if(ee){let $=ee[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&V(b),Object.keys(ee).length===0&&m.delete(F)}n.remove(b)}function V(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let F=b.source,ee=m.get(F);delete ee[_.__cacheKey],a.memory.textures--}function te(b){let _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();let F=b.depthTexture;if(F&&F.renderTarget===b&&H(F),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let se=0;se<_.__webglFramebuffer[$].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[$][se]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ee=b.textures;for(let $=0,se=ee.length;$<se;$++){let ce=n.get(ee[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[$])}n.remove(b)}let q=0;function Q(){q=0}function j(){return q}function Me(b){q=b}function De(){let b=q;return b>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,b}function J(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function pe(b,_){let F=n.get(b);if(b.isVideoTexture&&mt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){let ee=b.image;if(ee===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function ve(b,_){let F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){pt(F,b,_);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Ae(b,_){let F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){pt(F,b,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function me(b,_){let F=n.get(b);if(b.version>0&&F.__version!==b.version){kt(F,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let Fe={[mr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[gr]:i.MIRRORED_REPEAT},ut={[bt]:i.NEAREST,[_c]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Ce={[Sc]:i.NEVER,[Bo]:i.ALWAYS,[Mc]:i.LESS,[Fo]:i.LEQUAL,[bc]:i.EQUAL,[Oo]:i.GEQUAL,[wc]:i.GREATER,[Tc]:i.NOTEQUAL};function $e(b,_){if(_.type===on&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ut||_.magFilter===Hr||_.magFilter===Ms||_.magFilter===Dn||_.minFilter===Ut||_.minFilter===Hr||_.minFilter===Ms||_.minFilter===Dn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Fe[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Fe[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Fe[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bt||_.minFilter!==Ms&&_.minFilter!==Dn||_.type===on&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function je(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",N),D(_));let ee=_.source,$=m.get(ee);$===void 0&&($={},m.set(ee,$));let se=J(_);if(se!==b.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[se].usedTimes++;let ce=$[b.__cacheKey];ce!==void 0&&($[b.__cacheKey].usedTimes--,ce.usedTimes===0&&V(_)),b.__cacheKey=se,b.__webglTexture=$[se].texture}return F}function Ge(b,_,F){return Math.floor(Math.floor(b/F)/_)}function wt(b,_,F,ee){let se=b.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,ee,_.data);else{se.sort((R,K)=>R.start-K.start);let ce=0;for(let R=1;R<se.length;R++){let K=se[ce],W=se[R],oe=K.start+K.count,ie=Ge(W.start,_.width,4),re=Ge(K.start,_.width,4);W.start<=oe+1&&ie===re&&Ge(W.start+W.count-1,_.width,4)===ie?K.count=Math.max(K.count,W.start+W.count-K.start):(++ce,se[ce]=W)}se.length=ce+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let R=0,K=se.length;R<K;R++){let W=se[R],oe=Math.floor(W.start/4),ie=Math.ceil(W.count/4),re=oe%_.width,we=Math.floor(oe/_.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,re,we,Be,ne,F,ee,_.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function pt(b,_,F){let ee=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=i.TEXTURE_3D);let $=je(b,_),se=_.source;t.bindTexture(ee,b.__webglTexture,i.TEXTURE0+F);let ce=n.get(se);if(se.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let ne=qe.getPrimaries(qe.workingColorSpace),Ee=_.colorSpace===Fn?null:qe.getPrimaries(_.colorSpace),Oe=_.colorSpace===Fn||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=M(_.image,!1,s.maxTextureSize);Z=Re(_,Z);let ae=r.convert(_.format,_.colorSpace),R=r.convert(_.type),K=T(_.internalFormat,ae,R,_.normalized,_.colorSpace,_.isVideoTexture);$e(ee,_);let W,oe=_.mipmaps,ie=_.isVideoTexture!==!0,re=ce.__version===void 0||$===!0,we=se.dataReady,Be=y(_,Z);if(_.isDepthTexture)K=g(_.format===Un,_.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,K,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ae,R,null));else if(_.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,K,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,ae,R,W.data);_.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,K,Z.width,Z.height),we&&wt(_,Z,ae,R)):t.texImage2D(i.TEXTURE_2D,0,K,Z.width,Z.height,0,ae,R,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,K,oe[0].width,oe[0].height,Z.depth);for(let ne=0,Ee=oe.length;ne<Ee;ne++)if(W=oe[ne],_.format!==cn)if(ae!==null)if(ie){if(we)if(_.layerUpdates.size>0){let Oe=qo(W.width,W.height,_.format,_.type);for(let de of _.layerUpdates){let Qe=W.data.subarray(de*Oe/W.data.BYTES_PER_ELEMENT,(de+1)*Oe/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,W.width,W.height,1,ae,Qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Z.depth,ae,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,K,W.width,W.height,Z.depth,0,W.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Z.depth,ae,R,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,K,W.width,W.height,Z.depth,0,ae,R,W.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,K,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],_.format!==cn?ae!==null?ie?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,W.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,W.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,ae,R,W.data)}else if(_.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,K,Z.width,Z.height,Z.depth),we)if(_.layerUpdates.size>0){let ne=qo(Z.width,Z.height,_.format,_.type);for(let Ee of _.layerUpdates){let Oe=Z.data.subarray(Ee*ne/Z.data.BYTES_PER_ELEMENT,(Ee+1)*ne/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,Z.width,Z.height,1,ae,R,Oe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,R,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,ae,R,Z.data);else if(_.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,K,Z.width,Z.height,Z.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,R,Z.data)):t.texImage3D(i.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,ae,R,Z.data);else if(_.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,K,Z.width,Z.height);else{let ne=Z.width,Ee=Z.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,K,ne,Ee,0,ae,R,null),ne>>=1,Ee>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Z.parentNode!==ne){ne.appendChild(Z),f.add(_),ne.onpaint=Ee=>{let Oe=Ee.changedElements;for(let de of f)Oe.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let Oe=i.RGBA,de=i.RGBA,Qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,de,Qe,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Ne(oe[0]);t.texStorage2D(i.TEXTURE_2D,Be,K,ne.width,ne.height)}for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,W):t.texImage2D(i.TEXTURE_2D,ne,K,ae,R,W);_.generateMipmaps=!1}else if(ie){if(re){let ne=Ne(Z);t.texStorage2D(i.TEXTURE_2D,Be,K,ne.width,ne.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,Z)}else t.texImage2D(i.TEXTURE_2D,0,K,ae,R,Z);A(_)&&_.mipmapsAutoUpdate===!0&&w(ee),ce.__version=se.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function kt(b,_,F){if(_.image.length!==6)return;let ee=je(b,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);let se=n.get($);if($.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);let ce=qe.getPrimaries(qe.workingColorSpace),Y=_.colorSpace===Fn?null:qe.getPrimaries(_.colorSpace),Z=_.colorSpace===Fn||ce===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ae=_.isCompressedTexture||_.image[0].isCompressedTexture,R=_.image[0]&&_.image[0].isDataTexture,K=[];for(let de=0;de<6;de++)!ae&&!R?K[de]=M(_.image[de],!0,s.maxCubemapSize):K[de]=R?_.image[de].image:_.image[de],K[de]=Re(_,K[de]);let W=K[0],oe=r.convert(_.format,_.colorSpace),ie=r.convert(_.type),re=T(_.internalFormat,oe,ie,_.normalized,_.colorSpace),we=_.isVideoTexture!==!0,Be=se.__version===void 0||ee===!0,ne=$.dataReady,Ee=y(_,W);$e(i.TEXTURE_CUBE_MAP,_);let Oe;if(_.isDepthTexture){if(re=g(_.format===Un,_.type),Be)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,W.width,W.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,W.width,W.height,0,oe,ie,null)}else if(ae){we&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,W.width,W.height);for(let de=0;de<6;de++){Oe=K[de].mipmaps;for(let Qe=0;Qe<Oe.length;Qe++){let vt=Oe[Qe];_.format!==cn?oe!==null?we?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,vt.width,vt.height,oe,vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,vt.width,vt.height,0,vt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,0,0,vt.width,vt.height,oe,ie,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe,re,vt.width,vt.height,0,oe,ie,vt.data)}}}else{if(Oe=_.mipmaps,we&&Be){Oe.length>0&&Ee++;let de=Ne(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,de.width,de.height)}for(let de=0;de<6;de++)if(R){we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,K[de].width,K[de].height,oe,ie,K[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,K[de].width,K[de].height,0,oe,ie,K[de].data);for(let Qe=0;Qe<Oe.length;Qe++){let On=Oe[Qe].image[de].image;we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,On.width,On.height,oe,ie,On.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,On.width,On.height,0,oe,ie,On.data)}}else{we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,K[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,K[de]);for(let Qe=0;Qe<Oe.length;Qe++){let vt=Oe[Qe];we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,0,0,oe,ie,vt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Qe+1,re,oe,ie,vt.image[de])}}}A(_)&&_.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),se.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ot(b,_,F,ee,$,se){let ce=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),Z=T(F.internalFormat,ce,Y,F.normalized,F.colorSpace),ae=n.get(_),R=n.get(F);if(R.__renderTarget=_,!ae.__hasExternalTextures){let K=Math.max(1,_.width>>se),W=Math.max(1,_.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,Z,K,W,_.depth,0,ce,Y,null):t.texImage2D($,se,Z,K,W,0,ce,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,R.__webglTexture,0,st(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let ee=_.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,se=g(_.stencilBuffer,$),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(_),se,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(_),se,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,b)}else{let ee=_.textures;for(let $=0;$<ee.length;$++){let se=ee[$],ce=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),Z=T(se.internalFormat,ce,Y,se.normalized,se.colorSpace);ue(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(_),Z,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(_),Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(b,_,F){let ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(_.depthTexture);$.__renderTarget=_;let se=ee?_.depthTexture.image[0]:_.depthTexture.image;(!$.__webglTexture||se.width!==_.width||se.height!==_.height)&&(se.width=_.width,se.height=_.height,_.depthTexture.needsUpdate=!0),ee?me(_.depthTexture,0):pe(_.depthTexture,0);let ce=$.__webglTexture,Y=st(_),Z=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ae=_.depthTexture.format===Un?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pn)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else if(_.depthTexture.format===Un)ue(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Z,ce,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(b){let _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let ee=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=ee}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)xt(_.__webglFramebuffer[ee],b,ee);else b.texture.mipmaps.length>0?xt(_.__webglFramebuffer[0],b,0):xt(_.__webglFramebuffer,b,0);else if(F){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=i.createRenderbuffer(),dn(_.__webglDepthbuffer[ee],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),dn(_.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(b,_,F){let ee=n.get(b);_!==void 0&&ot(ee.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Zt(b)}function Kt(b){let _=b.texture,F=n.get(b),ee=n.get(_);b.addEventListener("dispose",O),D(b);let $=b.textures,se=b.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=_.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let Y=0,Z=$.length;Y<Z;Y++){let ae=n.get($[Y]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ue(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let Z=$[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ae=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),K=T(Z.internalFormat,ae,R,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),W=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),dn(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),$e(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)ot(F.__webglFramebuffer[Y][Z],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ot(F.__webglFramebuffer[Y],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(_)?w(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let Y=0,Z=$.length;Y<Z;Y++){let ae=$[Y],R=n.get(ae),K=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,R.__webglTexture),$e(K,ae),ot(F.__webglFramebuffer,b,ae,i.COLOR_ATTACHMENT0+Y,K,0),A(ae)&&w(K)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,ee.__webglTexture),$e(Y,_),_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)ot(F.__webglFramebuffer[Z],b,_,i.COLOR_ATTACHMENT0,Y,Z);else ot(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,Y,0);A(_)?w(Y):_.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&Zt(b)}function L(b){let _=b.textures;for(let F=0,ee=_.length;F<ee;F++){let $=_[F];if(A($)&&$.mipmapsAutoUpdate===!0){let se=E(b),ce=n.get($).__webglTexture;t.bindTexture(se,ce),w(se),t.unbindTexture()}}}let $t=[];function it(b){if(b.samples>0){if(ue(b)===!1){let _=b.textures,F=b.width,ee=b.height,$=i.COLOR_BUFFER_BIT,se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(b),Y=_.length>1;if(Y)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,$,i.NEAREST),l===!0&&($t.length=0,$t.push(i.COLOR_ATTACHMENT0+ae),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&$t.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let R=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function ue(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function mt(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Re(b,_){let F=b.colorSpace,ee=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==ns&&F!==Fn&&(qe.getTransfer(F)===Ke?(ee!==cn||$!==Ht)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),_}function Ne(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=Jt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ue,this.dispose=G}function rg(i,e){function t(n,s=Fn){let r,a=qe.getTransfer(s);if(n===Ht)return i.UNSIGNED_BYTE;if(n===qr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Po)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Co)return i.BYTE;if(n===Io)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Do)return i.RGB;if(n===cn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===Un)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===Yr)return i.RED_INTEGER;if(n===ti)return i.RG;if(n===Zr)return i.RG_INTEGER;if(n===Jr)return i.RGBA_INTEGER;if(n===bs||n===ws||n===Ts||n===Es)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kr||n===$r||n===Qr||n===jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na||n===ia||n===sa||n===As||n===ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===ta)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===na)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ia)return r.COMPRESSED_R11_EAC;if(n===sa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===As)return r.COMPRESSED_RG11_EAC;if(n===ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===aa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Sa||n===Ma)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===wa||n===Rs||n===Ta)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ps(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vn({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends gn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,x=null,S=typeof XRWebGLBinding!="undefined",p=new rl,d={},M=t.getContextAttributes(),A=null,w=null,E=[],T=[],g=new Xe,y=null,D=null,P=new Dt;P.viewport=new at;let N=new Dt;N.viewport=new at;let O=[P,N],H=new zr,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pe=E[J];return pe===void 0&&(pe=new Di,E[J]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(J){let pe=E[J];return pe===void 0&&(pe=new Di,E[J]=pe),pe.getGripSpace()},this.getHand=function(J){let pe=E[J];return pe===void 0&&(pe=new Di,E[J]=pe),pe.getHandSpace()};function X(J){let pe=T.indexOf(J.inputSource);if(pe===-1)return;let ve=E[pe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let J=0;J<E.length;J++){let pe=T[J];pe!==null&&(T[J]=null,E[J].disconnect(pe))}C=null,G=null,p.reset();for(let J in d)delete d[J];if(e.setRenderTarget(A),m=null,u=null,f=null,s=null,w=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?Un:Pn,Ae=M.stencil?pi:an);let Fe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Fe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Xt(u.textureWidth,u.textureHeight,{format:cn,type:Ht,depthTexture:new Nn(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Xt(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Ht,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(J){for(let pe=0;pe<J.removed.length;pe++){let ve=J.removed[pe],Ae=T.indexOf(ve);Ae>=0&&(T[Ae]=null,E[Ae].disconnect(ve))}for(let pe=0;pe<J.added.length;pe++){let ve=J.added[pe],Ae=T.indexOf(ve);if(Ae===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=T.length){T.push(ve),Ae=Fe;break}else if(T[Fe]===null){T[Fe]=ve,Ae=Fe;break}if(Ae===-1)break}let me=E[Ae];me&&me.connect(ve)}}function q(J,pe){pe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let pe=J.near,ve=J.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),H.near=N.near=P.near=pe,H.far=N.far=P.far=ve,(C!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,G=H.far),H.layers.mask=J.layers.mask|6,P.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Ae=J.parent,me=H.cameras;q(H,Ae);for(let Fe=0;Fe<me.length;Fe++)q(me[Fe],Ae);H.projectionMatrix.copy(P.projectionMatrix),H.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),Q(J,H,Ae)};function Q(J,pe,ve){ve===null?J.matrix.copy(pe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(pe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pe.projectionMatrix),J.projectionMatrixInverse.copy(pe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(J){return d[J]};let j=null;function Me(J,pe){if(h=pe.getViewerPose(c||a),x=pe,h!==null){let ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ae=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,Ae=!0);for(let Ce=0;Ce<ve.length;Ce++){let $e=ve[Ce],je=null;if(m!==null)je=m.getViewport($e);else{let wt=f.getViewSubImage(u,$e);je=wt.viewport,Ce===0&&(e.setRenderTargetTextures(w,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(w))}let Ge=O[Ce];Ge===void 0&&(Ge=new Dt,Ge.layers.enable(Ce),Ge.viewport=new at,O[Ce]=Ge),Ge.matrix.fromArray($e.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray($e.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(je.x,je.y,je.width,je.height),Ce===0&&(H.matrix.copy(Ge.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ae===!0&&H.cameras.push(Ge)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let Ce=f.getDepthInformation(ve[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,s.renderState)}if(me&&me.includes("camera-access")&&S){e.state.unbindTexture(),f=n.getBinding();for(let Ce=0;Ce<ve.length;Ce++){let $e=ve[Ce].camera;if($e){let je=d[$e];je||(je=new ps,d[$e]=je);let Ge=f.getCameraImage($e);je.sourceTexture=Ge}}}}for(let ve=0;ve<E.length;ve++){let Ae=T[ve],me=E[ve];Ae!==null&&me!==void 0&&me.update(Ae,pe,c||a)}j&&j(J,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}let De=new ih;De.setAnimationLoop(Me),this.setAnimationLoop=function(J){j=J},this.dispose=function(){}}},lg=new rt,fh=new Le;fh.set(-1,0,0,0,1,0,0,0,1);function cg(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Go(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,A,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),x(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ot&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ot&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),A=M.envMap,w=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(w)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(fh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ot&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,e,t,n){let s={},r={};function a(M,A){let w=A.program;n.uniformBlockBinding(M,w,s[M.id])}function o(M,A){let w=s[M.id];w===void 0&&(x(M),w=l(M),s[M.id]=w,M.addEventListener("dispose",p));let E=A.program;n.updateUBOMapping(M,E);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let A=i.createBuffer(),w=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],w=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=w.length;T<g;T++){let y=w[T];if(Array.isArray(y))for(let D=0,P=y.length;D<P;D++)h(y[D],T,D,E);else h(y,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,w,E){if(u(M,A,w,E)===!0){let T=M.__offset,g=M.value;if(Array.isArray(g)){let y=0;for(let D=0;D<g.length;D++){let P=g[D],N=S(P,!0);f(P,M.__data,y),y+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function f(M,A,w){typeof M=="number"||typeof M=="boolean"?A[w]=M:M.isMatrix3?(A[w]=M.elements[0],A[w+1]=M.elements[1],A[w+2]=M.elements[2],A[w+3]=0,A[w+4]=M.elements[3],A[w+5]=M.elements[4],A[w+6]=M.elements[5],A[w+7]=0,A[w+8]=M.elements[6],A[w+9]=M.elements[7],A[w+10]=M.elements[8],A[w+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-w),w):M.toArray(A,w)}function u(M,A,w,E){let T=M.value,g=A+"_"+w;if(Array.isArray(T)){E[g]===void 0&&(E[g]=[]);let y=E[g],D=!1;for(let P=0;P<T.length;P++)m(T[P],y,P)===!0&&(D=!0);return D}return m(T,E,g)}function m(M,A,w){if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:ArrayBuffer.isView(M)?A[w]=M.slice():A[w]=M.clone(),!0;{let E=A[w];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return A[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function x(M){let A=M.uniforms,w=0,E=16;for(let g=0,y=A.length;g<y;g++){let D=Array.isArray(A[g])?A[g]:[A[g]];for(let P=0,N=D.length;P<N;P++){let O=D[P],H=Array.isArray(O.value)?O.value:[O.value],C=Array.isArray(A[g])||Array.isArray(O.value),G=w;for(let V=0,te=H.length;V<te;V++){let q=H[V],Q=S(q,C),j=w%E,Me=j%Q.boundary,De=j+Me;w+=Me,De!==0&&E-De<Q.storage&&(w+=E-De),V===0&&(G=w),w+=Q.storage}let X=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new X((w-G)/Float32Array.BYTES_PER_ELEMENT),O.__offset=G}}let T=w%E;return T>0&&(w+=E-T),M.__size=w,M.__cache={},this}function S(M,A){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(M){let A=M.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:d}}var ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mn=null;function dg(){return Mn===null&&(Mn=new br(ug,16,16,ti,ln),Mn.name="DFG_LUT",Mn.minFilter=Ut,Mn.magFilter=Ut,Mn.wrapS=pn,Mn.wrapT=pn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}var Ia=class{constructor(e={}){let{canvas:t=Ac(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ht}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=m,p=new Set([Jr,Zr,Yr]),d=new Set([Ht,an,Gi,pi,qr,Xr]),M=new Uint32Array(4),A=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},E=null,T=null,g=[],y=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,O=null,H=null,C=null,G=null;this._outputColorSpace=Nt;let X=0,V=0,te=null,q=-1,Q=null,j=new at,Me=new at,De=null,J=new ze(0),pe=0,ve=t.width,Ae=t.height,me=1,Fe=null,ut=null,Ce=new at(0,0,ve,Ae),$e=new at(0,0,ve,Ae),je=!1,Ge=new Yn,wt=new wr,pt=!1,kt=!1,ot=new rt,dn=new z,xt=new at,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Kt(){return te===null?me:1}let L=n;function $t(v,I){return t.getContext(v,I)}let it,st,ue,mt,Re,Ne,b,_,F,ee,$,se,ce,Y,Z,ae,R,K,W,oe,ie,re,we;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let I="webgl2";if(L=$t(I,v),L===null)throw $t(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(v){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Pe("WebGLRenderer: "+v.message),v}function Be(){it=new bp(L),it.init(),ie=new rg(L,it),st=new dp(L,it,e,ie),ue=new ig(L,it),st.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),H=L.createFramebuffer(),C=L.createFramebuffer(),G=L.createFramebuffer(),mt=new Ep(L),Re=new Hm,Ne=new sg(L,it,ue,Re,st,ie,mt),b=new Mp(P),_=new Au(L),re=new hp(L,_),F=new wp(L,_,mt,re),ee=new Rp(L,F,_,re,mt),K=new Ap(L,st,Ne),Z=new fp(Re),$=new Gm(P,b,it,st,re,Z),se=new cg(P,Re),ce=new qm,Y=new $m(it),R=new cp(P,b,ue,ee,x,l),ae=new ng(P,ee,st),we=new hg(L,mt,st,ue),W=new up(L,it,mt),oe=new Tp(L,it,mt),mt.programs=$.programs,P.capabilities=st,P.extensions=it,P.properties=Re,P.renderLists=ce,P.shadowMap=ae,P.state=ue,P.info=mt}S!==Ht&&(D=new Ip(S,t.width,t.height,o,s,r));let ne=new al(P,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=it.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=it.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(ve,Ae,!1))},this.getSize=function(v){return v.set(ve,Ae)},this.setSize=function(v,I,k=!0){if(ne.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=v,Ae=I,t.width=Math.floor(v*me),t.height=Math.floor(I*me),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(ve*me,Ae*me).floor()},this.setDrawingBufferSize=function(v,I,k){ve=v,Ae=I,me=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(S===Ht){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Ce)},this.setViewport=function(v,I,k,U){v.isVector4?Ce.set(v.x,v.y,v.z,v.w):Ce.set(v,I,k,U),ue.viewport(j.copy(Ce).multiplyScalar(Kt()).round())},this.getScissor=function(v){return v.copy($e)},this.setScissor=function(v,I,k,U){v.isVector4?$e.set(v.x,v.y,v.z,v.w):$e.set(v,I,k,U),ue.scissor(Me.copy($e).multiplyScalar(Kt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(v){ue.setScissorTest(je=v)},this.setOpaqueSort=function(v){Fe=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let U=0;if(v){let B=!1;if(te!==null){let he=te.texture.format;B=p.has(he)}if(B){let he=te.texture.type,xe=d.has(he),le=R.getClearColor(),ge=R.getClearAlpha(),be=le.r,Ue=le.g,He=le.b;xe?(M[0]=be,M[1]=Ue,M[2]=He,M[3]=ge,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=be,A[1]=Ue,A[2]=He,A[3]=ge,L.clearBufferiv(L.COLOR,0,A))}else U|=L.COLOR_BUFFER_BIT}I&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),R.dispose(),ce.dispose(),Y.dispose(),Ne.dispose(),Re.dispose(),b.dispose(),ee.dispose(),F.dispose(),re.dispose(),we.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ml),ne.removeEventListener("sessionend",gl),ii.stop()};function Ee(v){v.preventDefault(),ko("WebGLRenderer: Context Lost."),N=!0}function Oe(){ko("WebGLRenderer: Context Restored."),N=!1;let v=mt.autoReset,I=ae.enabled,k=ae.autoUpdate,U=ae.needsUpdate,B=ae.type;Be(),mt.autoReset=v,ae.enabled=I,ae.autoUpdate=k,ae.needsUpdate=U,ae.type=B}function de(v){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Qe(v){let I=v.target;I.removeEventListener("dispose",Qe),vt(I)}function vt(v){On(v),Re.remove(v)}function On(v){let I=Re.get(v).programs;I!==void 0&&(I.forEach(function(k){$.releaseProgram(k)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,U,B,he){I===null&&(I=Zt);let xe=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=kh(v,I,k,U,B);ue.setMaterial(U,xe);let ge=k.index,be=1;if(U.wireframe===!0){if(ge=F.getWireframeAttribute(k),ge===void 0)return;be=2}let Ue=k.drawRange,He=k.attributes.position,ye=Ue.start*be,We=(Ue.start+Ue.count)*be;he!==null&&(ye=Math.max(ye,he.start*be),We=Math.min(We,(he.start+he.count)*be)),ge!==null?(ye=Math.max(ye,0),We=Math.min(We,ge.count)):He!=null&&(ye=Math.max(ye,0),We=Math.min(We,He.count));let dt=We-ye;if(dt<0||dt===1/0)return;re.setup(B,U,le,k,ge);let tt,et=W;if(ge!==null&&(tt=_.get(ge),et=oe,et.setIndex(tt)),B.isMesh)U.wireframe===!0?(ue.setLineWidth(U.wireframeLinewidth*Kt()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(B.isLine){let Et=U.linewidth;Et===void 0&&(Et=1),ue.setLineWidth(Et*Kt()),B.isLineSegments?et.setMode(L.LINES):B.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else B.isPoints?et.setMode(L.POINTS):B.isSprite&&et.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(it.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Et=B._multiDrawStarts,Se=B._multiDrawCounts,Lt=B._multiDrawCount,Je=ge?_.get(ge).bytesPerElement:1,si=Re.get(U).currentProgram.getUniforms();for(let At=0;At<Lt;At++)si.setValue(L,"_gl_DrawID",At),et.render(Et[At]/Je,Se[At])}else if(B.isInstancedMesh)et.renderInstances(ye,dt,B.count);else if(k.isInstancedBufferGeometry){let Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,Et);et.renderInstances(ye,dt,Se)}else et.render(ye,dt)};function pl(v,I,k,U){O!==null&&v.isNodeMaterial&&O.setObject(U,v),pt===!0&&Z.setState(v,k,!1),v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,Ji(v,I,U),v.side=ei,v.needsUpdate=!0,Ji(v,I,U),v.side=yn):Ji(v,I,U)}this.compile=function(v,I,k=null){k===null&&(k=v),O!==null&&O.renderStart(v,I,k),T=Y.get(k),T.init(I),y.push(T),k.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),v!==k&&v.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),kt=this.localClippingEnabled,pt=Z.init(this.clippingPlanes,kt),pt===!0&&Z.setGlobalState(this.clippingPlanes,I),O!==null&&ae.render(T.state.shadowsArray,k,I);let U=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let he=B.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let le=he[xe];pl(le,k,I,B),U.add(le)}else pl(he,k,I,B),U.add(he)}),T=y.pop(),O!==null&&O.renderEnd(),U},this.compileAsync=function(v,I,k=null){let U=this.compile(v,I,k);return new Promise(B=>{function he(){if(U.forEach(function(xe){let ge=Re.get(xe).currentProgram;(ge===void 0||ge.isReady())&&U.delete(xe)}),U.size===0){B(v);return}setTimeout(he,10)}it.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Fa=null;function Bh(v){Fa&&Fa(v)}function ml(){ii.stop()}function gl(){ii.start()}let ii=new ih;ii.setAnimationLoop(Bh),typeof self!="undefined"&&ii.setContext(self),this.setAnimationLoop=function(v){Fa=v,ne.setAnimationLoop(v),v===null?ii.stop():ii.start()},ne.addEventListener("sessionstart",ml),ne.addEventListener("sessionend",gl),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,I);let k=ne.enabled===!0&&ne.isPresenting===!0,U=D!==null&&(te===null||k)&&D.begin(P,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,I,te),T=Y.get(v,y.length),T.init(I),T.state.textureUnits=Ne.getTextureUnits(),y.push(T),ot.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?wt.setFromArrayCamera(I):Ge.setFromProjectionMatrix(ot,jt,I.reversedDepth),kt=this.localClippingEnabled,pt=Z.init(this.clippingPlanes,kt),E=ce.get(v,g.length),E.init(),g.push(E),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let xe=P.xr.getDepthSensingMesh();xe!==null&&Oa(xe,I,-1/0,P.sortObjects)}Oa(v,I,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),P.sortObjects===!0&&E.sort(Fe,ut),Jt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Jt&&R.addToRenderList(E,v),this.info.autoReset===!0&&this.info.reset(),pt===!0&&Z.beginShadows();let B=T.state.shadowsArray;if(ae.render(B,v,I),pt===!0&&Z.endShadows(),(U&&D.hasRenderPass())===!1){let xe=E.opaque,le=E.transmissive;if(T.setupLights(),I.isArrayCamera){let ge=I.cameras;if(le.length>0)for(let be=0,Ue=ge.length;be<Ue;be++){let He=ge[be];xl(xe,le,v,He)}Jt&&R.render(v);for(let be=0,Ue=ge.length;be<Ue;be++){let He=ge[be];_l(E,v,He,He.viewport)}}else le.length>0&&xl(xe,le,v,I),Jt&&R.render(v),_l(E,v,I)}te!==null&&V===0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te)),U&&D.end(P),v.isScene===!0&&v.onAfterRender(P,v,I),re.resetDefaultState(),q=-1,Q=null,y.pop(),y.length>0?(T=y[y.length-1],Ne.setTextureUnits(T.state.textureUnits),pt===!0&&Z.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,O!==null&&O.renderEnd()};function Oa(v,I,k,U){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let xe=I.isArrayCamera?wt:Ge;if(!v.frustumCulled||v.intersectsFrustum(xe)){U&&xt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);let le=ee.update(v),ge=v.material;ge.visible&&E.push(v,le,ge,k,xt.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let xe=I.isArrayCamera?wt:Ge;if(!v.frustumCulled||v.intersectsFrustum(xe)){let le=ee.update(v),ge=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),xt.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),xt.copy(le.boundingSphere.center)),xt.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(ge)){let be=le.groups;for(let Ue=0,He=be.length;Ue<He;Ue++){let ye=be[Ue],We=ge[ye.materialIndex];We&&We.visible&&E.push(v,le,We,k,xt.z,ye,I)}}else ge.visible&&E.push(v,le,ge,k,xt.z,null,I)}}}let he=v.children;for(let xe=0,le=he.length;xe<le;xe++)Oa(he[xe],I,k,U)}function _l(v,I,k,U){let{opaque:B,transmissive:he,transparent:xe}=v;T.setupLightsView(k),pt===!0&&Z.setGlobalState(P.clippingPlanes,k),U&&ue.viewport(j.copy(U)),B.length>0&&Bs(B,I,k),he.length>0&&Bs(he,I,k),xe.length>0&&Bs(xe,I,k),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function xl(v,I,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[U.id]===void 0){let ye=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[U.id]=new Xt(1,1,{generateMipmaps:!0,type:ye?ln:Ht,minFilter:Dn,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let he=T.state.transmissionRenderTarget[U.id],xe=U.viewport||j;he.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);let le=P.getRenderTarget(),ge=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(J),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Jt&&R.render(k);let Ue=P.toneMapping;P.toneMapping=Sn;let He=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),T.setupLightsView(U),pt===!0&&Z.setGlobalState(P.clippingPlanes,U),Bs(v,k,U),Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he),it.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let We=0,dt=I.length;We<dt;We++){let tt=I[We],{object:et,geometry:Et,material:Se,group:Lt}=tt;if(Se.side===yn&&et.layers.test(U.layers)){let Je=Se.side;Se.side=Ot,Se.needsUpdate=!0,vl(et,k,U,Et,Se,Lt),Se.side=Je,Se.needsUpdate=!0,ye=!0}}ye===!0&&(Ne.updateMultisampleRenderTarget(he),Ne.updateRenderTargetMipmap(he))}P.setRenderTarget(le,ge,be),P.setClearColor(J,pe),He!==void 0&&(U.viewport=He),P.toneMapping=Ue}function Bs(v,I,k){let U=I.isScene===!0?I.overrideMaterial:null;for(let B=0,he=v.length;B<he;B++){let xe=v[B],{object:le,geometry:ge,group:be}=xe,Ue=xe.material;Ue.allowOverride===!0&&U!==null&&(Ue=U),le.layers.test(k.layers)&&vl(le,I,k,ge,Ue,be)}}function vl(v,I,k,U,B,he){O!==null&&B.isNodeMaterial&&O.setObject(v,B),v.onBeforeRender(P,I,k,U,B,he),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(P,I,k,U,v,he),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Ot,B.needsUpdate=!0,P.renderBufferDirect(k,I,U,B,v,he),B.side=ei,B.needsUpdate=!0,P.renderBufferDirect(k,I,U,B,v,he),B.side=yn):P.renderBufferDirect(k,I,U,B,v,he),v.onAfterRender(P,I,k,U,B,he)}function yl(v){let I=0;for(let k of v)k.texture!==null&&I++;return I}function Ji(v,I,k){I.isScene!==!0&&(I=Zt);let U=Re.get(v),B=T.state.lights,he=T.state.shadowsArray,xe=B.state.version,le=$.getParameters(v,B.state,he,I,k,T.state.lightProbeGridArray),ge=$.getProgramCacheKey(le),be=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,U.fog=I.fog;let Ue=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=b.get(v.envMap||U.environment,Ue),U.envMapRotation=U.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Qe),be=new Map,U.programs=be,U.programVariants=new Map);let He=be.get(ge);if(He!==void 0){if(U.currentProgram===He&&U.lightsStateVersion===xe)return Ml(v,le),He}else le.uniforms=$.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,k,le),v.onBeforeCompile(le,P),He=$.acquireProgram(le,ge),be.set(ge,He),U.uniforms=le.uniforms;let ye=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=Z.uniform),Ml(v,le),U.needsLights=Gh(v),U.lightsStateVersion=xe,U.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.sunLights.value=B.state.sun,ye.sunLightShadows.value=B.state.sunShadow,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.sunShadowMatrix.value=B.state.sunShadowMatrix,ye.sunShadowCascade.value=B.state.sunShadowCascade,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),U.numLightProbeGrids=yl(T.state.lightProbeGridArray),U.currentProgram=He,U.uniformsList=null,He}function zh(v,I,k,U,B){let he=Re.get(v),xe=he.currentProgram.id+","+U+","+B,le=he.programVariants.get(xe);return le===void 0?(le=Ji(v,I,k),he.programVariants.set(xe,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=U,he.toneMapping=B),le}function Sl(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Hi.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ml(v,I){let k=Re.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function kh(v,I,k,U,B){I.isScene!==!0&&(I=Zt),Ne.resetTextureUnits();let he=I.fog,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?I.environment:null,le=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,be=b.get(U.envMap||xe,ge),Ue=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,He=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ye=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color,tt=Sn;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(tt=P.toneMapping);let et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Et=et!==void 0?et.length:0,Se=Re.get(U),Lt=T.state.lights;if(pt===!0&&(kt===!0||v!==Q)){let lt=v===Q&&U.id===q;Z.setState(U,v,lt)}let Je=!1,si=!1;U.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Lt.state.version||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==be||U.fog===!0&&Se.fog!==he||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Z.numPlanes||Se.numIntersection!==Z.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==He||Se.morphTargets!==ye||Se.morphNormals!==We||Se.morphColors!==dt||Se.morphTargetsCount!==Et||Se.numLightProbeGrids!==yl(T.state.lightProbeGridArray)?Je=!0:(Se.outputColorSpace!==le||Se.toneMapping!==tt)&&(si=!0):(Je=!0,Se.__version=U.version);let At=Se.currentProgram;(Je===!0||si===!0)&&(At=si===!0?zh(U,I,B,le,tt):Ji(U,I,B),O&&U.isNodeMaterial&&O.onUpdateProgram(U,At,Se));let zs=!1,Bn=!1,ri=!1,Ze=At.getUniforms(),Tt=Se.uniforms;if(ue.useProgram(At.program)&&(zs=!0,Bn=!0,ri=!0),U.id!==q&&(q=U.id,Bn=!0),zs||Q!==v){ue.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",v.projectionMatrix),Ze.setValue(L,"viewMatrix",v.matrixWorldInverse);let yt=Ze.map.cameraPosition;yt!==void 0&&yt.setValue(L,dn.setFromMatrixPosition(v.matrixWorld)),st.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Bn=!0,ri=!0)}if(Se.needsLights&&(Lt.state.sunShadowMap.length>0&&Ze.setValue(L,"sunShadowMap",Lt.state.sunShadowMap,Ne),Lt.state.directionalShadowMap.length>0&&Ze.setValue(L,"directionalShadowMap",Lt.state.directionalShadowMap,Ne),Lt.state.spotShadowMap.length>0&&Ze.setValue(L,"spotShadowMap",Lt.state.spotShadowMap,Ne),Lt.state.pointShadowMap.length>0&&Ze.setValue(L,"pointShadowMap",Lt.state.pointShadowMap,Ne)),B.isSkinnedMesh){Ze.setOptional(L,B,"bindMatrix"),Ze.setOptional(L,B,"bindMatrixInverse");let lt=B.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),Ze.setValue(L,"boneTexture",lt.boneTexture,Ne))}B.isBatchedMesh&&(Ze.setOptional(L,B,"batchingTexture"),Ze.setValue(L,"batchingTexture",B._matricesTexture,Ne),Ze.setOptional(L,B,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",B._indirectTexture,Ne),Ze.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",B._colorsTexture,Ne));let en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&K.update(B,k,At),(Bn||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,Ze.setValue(L,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=dg()),Bn){if(Ze.setValue(L,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&Vh(Tt,ri),he&&U.fog===!0&&se.refreshFogUniforms(Tt,he),se.refreshMaterialUniforms(Tt,U,me,Ae,T.state.transmissionRenderTarget[v.id]),Se.needsLights&&Se.numLightProbeGrids>0){let lt=w,yt=0;for(let wn of T.state.lightProbeGridArray)wn.texture!==null&&(lt.textures[yt]=wn.texture,lt.min[yt]=wn.boundingBox.min,lt.max[yt]=wn.boundingBox.max,lt.resolution[yt]=wn.resolution,yt++);for(let wn in lt)lt[wn].length=yt;Tt.probesSH.value=lt.textures,Tt.probesMin.value=lt.min,Tt.probesMax.value=lt.max,Tt.probesResolution.value=lt.resolution}Hi.upload(L,Sl(Se),Tt,Ne)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Hi.upload(L,Sl(Se),Tt,Ne),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ze.setValue(L,"center",B.center),Ze.setValue(L,"modelViewMatrix",B.modelViewMatrix),Ze.setValue(L,"normalMatrix",B.normalMatrix),Ze.setValue(L,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let lt=U.uniformsGroups;for(let yt=0,wn=lt.length;yt<wn;yt++){let wl=lt[yt];we.update(wl,At),we.bind(wl,At)}}return At}function Vh(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Gh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,I,k){let U=Re.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Re.get(v.texture).__webglTexture=I,Re.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let k=Re.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,k=0){te=v,X=I,V=k;let U=null,B=!1,he=!1;if(v){let le=Re.get(v);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),j.copy(v.viewport),Me.copy(v.scissor),De=v.scissorTest,ue.viewport(j),ue.scissor(Me),ue.setScissorTest(De),q=-1;return}else if(le.__webglFramebuffer===void 0)Ne.setupRenderTarget(v);else if(le.__hasExternalTextures)Ne.rebindTextures(v,Re.get(v.texture).__webglTexture,Re.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ue=v.depthTexture;if(le.__boundDepthTexture!==Ue){if(Ue!==null&&Re.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(v)}}let ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let be=Re.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[I])?U=be[I][k]:U=be[I],B=!0):v.samples>0&&Ne.useMultisampledRTT(v)===!1?U=Re.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[k]:U=be,j.copy(v.viewport),Me.copy(v.scissor),De=v.scissorTest}else j.copy(Ce).multiplyScalar(me).floor(),Me.copy($e).multiplyScalar(me).floor(),De=je;if(k!==0&&(U=H),ue.bindFramebuffer(L.FRAMEBUFFER,U)&&ue.drawBuffers(v,U),ue.viewport(j),ue.scissor(Me),ue.setScissorTest(De),B){let le=Re.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,k)}else if(he){let le=I;for(let ge=0;ge<v.textures.length;ge++){let be=Re.get(v.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,be.__webglTexture,k,le)}}else if(v!==null&&k!==0){let le=Re.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,k)}q=-1};function bl(v){let I=Re.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=st.textureFormatReadable(v.format),I.__typeReadable=st.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,k,U,B,he,xe,le=0){if(!(v&&v.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(L.FRAMEBUFFER,ge);try{let be=v.textures[le],Ue=be.format,He=be.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=bl(be);if(ye.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-U&&k>=0&&k<=v.height-B&&L.readPixels(I,k,U,B,ie.convert(Ue),ie.convert(He),he)}finally{let be=te!==null?Re.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,U,B,he,xe,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Re.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(I>=0&&I<=v.width-U&&k>=0&&k<=v.height-B){ue.bindFramebuffer(L.FRAMEBUFFER,ge);let be=v.textures[le],Ue=be.format,He=be.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=bl(be);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let We=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(I,k,U,B,ie.convert(Ue),ie.convert(He),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let dt=te!==null?Re.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,dt);let tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cc(L,tt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,We),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(We),L.deleteSync(tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){let U=Math.pow(2,-k),B=Math.floor(v.image.width*U),he=Math.floor(v.image.height*U),xe=I!==null?I.x:0,le=I!==null?I.y:0;Ne.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xe,le,B,he),ue.unbindTexture()},this.copyTextureToTexture=function(v,I,k=null,U=null,B=0,he=0){let xe,le,ge,be,Ue,He,ye,We,dt,tt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(k!==null)xe=k.max.x-k.min.x,le=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Ue=k.min.y,He=k.isBox3?k.min.z:0;else{let Ze=Math.pow(2,-B);xe=Math.floor(tt.width*Ze),le=Math.floor(tt.height*Ze),v.isDataArrayTexture?ge=tt.depth:v.isData3DTexture?ge=Math.floor(tt.depth*Ze):ge=1,be=0,Ue=0,He=0}U!==null?(ye=U.x,We=U.y,dt=U.z):(ye=0,We=0,dt=0);let et=ie.convert(I.format),Et=ie.convert(I.type),Se;I.isData3DTexture?(Ne.setTexture3D(I,0),Se=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ne.setTexture2DArray(I,0),Se=L.TEXTURE_2D_ARRAY):(Ne.setTexture2D(I,0),Se=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Lt=ue.getParameter(L.UNPACK_ROW_LENGTH),Je=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),si=ue.getParameter(L.UNPACK_SKIP_PIXELS),At=ue.getParameter(L.UNPACK_SKIP_ROWS),zs=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,tt.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,be),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,He);let Bn=v.isDataArrayTexture||v.isData3DTexture,ri=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let Ze=Re.get(v),Tt=Re.get(I),en=Re.get(Ze.__renderTarget),lt=Re.get(Tt.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let yt=0;yt<ge;yt++)Bn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(v).__webglTexture,B,He+yt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(I).__webglTexture,he,dt+yt)),L.blitFramebuffer(be,Ue,be+xe,Ue+le,ye,We,ye+xe,We+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Re.has(v)){let Ze=Re.get(v),Tt=Re.get(I);ue.bindFramebuffer(L.READ_FRAMEBUFFER,C),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let en=0;en<ge;en++)Bn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,B,He+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,B),ri?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,he,dt+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,he),B!==0?L.blitFramebuffer(be,Ue,be+xe,Ue+le,ye,We,ye+xe,We+le,L.COLOR_BUFFER_BIT,L.NEAREST):ri?L.copyTexSubImage3D(Se,he,ye,We,dt+en,be,Ue,xe,le):L.copyTexSubImage2D(Se,he,ye,We,be,Ue,xe,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ri?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Se,he,ye,We,dt,xe,le,ge,et,Et,tt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,he,ye,We,dt,xe,le,ge,et,tt.data):L.texSubImage3D(Se,he,ye,We,dt,xe,le,ge,et,Et,tt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,ye,We,xe,le,et,Et,tt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,ye,We,tt.width,tt.height,et,tt.data):L.texSubImage2D(L.TEXTURE_2D,he,ye,We,xe,le,et,Et,tt);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Lt),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,si),ue.pixelStorei(L.UNPACK_SKIP_ROWS,At),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,zs),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(Se),ue.unbindTexture()},this.initRenderTarget=function(v){Re.get(v).__webglFramebuffer===void 0&&Ne.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ne.setTextureCube(v,0):v.isData3DTexture?Ne.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ne.setTexture2DArray(v,0):Ne.setTexture2D(v,0),ue.unbindTexture()},this.resetState=function(){X=0,V=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var ht=1.6,Bt=4.5,Ve={ground:1324068,road:2897971,cross:2897971,line:15265769,yellow:16698368,green:7462026,blue:11257855,red:16734797,building:2833715,window:16772287,tree:33853,trunk:2832431,bike:33853};function ol(i){let e=[0],t=0;for(let n=1;n<i.length;n++)t+=Math.hypot(i[n].x-i[n-1].x,i[n].z-i[n-1].z),e.push(t);return{pts:i,len:e,total:t}}function ll(i,e,t,n,s,r){let a=[];for(let l=0;l<=24;l++){let c=s+(r-s)*l/24;a.push({x:i+t(c),z:e+n(c)})}return a}function pg(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function mg(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}var Na=class{constructor(e){this.canvas=e;this.scene=new ls;this.camera=new Dt(48,1,.1,400);this.stage=new Vt;this.last=performance.now();this.time=0;this.path=null;this.pathT=0;this.pathDur=1;this.pathEase=!0;this.pathDone=null;this.loopIdle=!0;this.stopZ=7.5;this.spec=null;this.flashers=[];this.walkers=[];this.camPos=new z(5,7,60);this.camLook=new z(0,0,30);this.overview=!1;this.seed=7;this.framing="bottom";this.renderer=new Ia({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.scene.background=new ze(661007),this.scene.fog=new os(661007,70,170),this.scene.add(new _s(15204326,1450523,2.1));let t=new ys(16772287,2.4);t.position.set(-18,30,22),this.scene.add(t),this.scene.add(this.stage),this.car=this.makeCar(Ve.yellow,!1),this.scene.add(this.car),this.setStage({kind:"plain",centre:"broken",label:"AU"}),this.idle(),this.resize(),window.addEventListener("resize",()=>this.resize()),this.renderer.setAnimationLoop(()=>this.tick())}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?62:48,this.framing==="side"&&e>900?this.camera.setViewOffset(e,t,e*.19,-t*.02,e,t):this.framing!=="none"?this.camera.setViewOffset(e,t,0,t*(e>900?.2:.24),e,t):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}setFraming(e){this.framing=e,this.resize()}setStage(e){this.spec=e,this.seed+=13,this.flashers=[],this.walkers=[],this.stage.traverse(t=>{let n=t;n.geometry&&n.geometry.dispose()}),this.stage.clear(),this.stopZ=e.bikeBox?10.2:e.kind==="police"?12:e.kind==="tram"?7.2:7.5,this.buildGround(e),this.buildLines(e),this.buildScenery(e),this.buildSign(e.label),e.kind==="lights"&&this.buildIntersection(e),e.kind==="tram"&&this.buildTram(e),e.kind==="police"&&this.buildPolice(),e.driveway&&this.buildDriveway()}idle(){this.loopIdle=!0,this.overview=!1,this.run(ol([{x:-ht,z:55},{x:-ht,z:-55}]),9,!1,null)}driveIn(){this.loopIdle=!1,this.overview=!1;let e=this.stopZ,t=this.spec&&this.spec.kind==="kerb"?[{x:-ht,z:55},{x:-ht,z:24},{x:-3.3,z:12},{x:-3.3,z:e}]:[{x:-ht,z:55},{x:-ht,z:e}];return new Promise(n=>{this.run(ol(t),3.2,!0,()=>{this.overview=!0,n()})})}act(e){this.loopIdle=!1;let t=this.stopZ,n=this.car.position.x,s,r=3;switch(e){case"uturn":s=[{x:-ht,z:t},{x:-ht,z:3},...ll(0,3,a=>-ht*Math.cos(a),a=>-ht*Math.sin(a),0,Math.PI),{x:ht,z:13}],r=3.8;break;case"right":s=[{x:-ht,z:t},{x:-ht,z:2},...ll(2.4,2,a=>-4*Math.cos(a),a=>-4*Math.sin(a),0,Math.PI/2),{x:13,z:-2}],r=3.4;break;case"left":s=[{x:-ht,z:t},{x:-ht,z:5},...ll(-5.6,5,a=>4*Math.cos(a),a=>-4*Math.sin(a),0,Math.PI/2),{x:-55,z:1}],r=4;break;case"hook":s=[{x:-ht,z:t},{x:-1.9,z:3},{x:-2.8,z:.4},{x:-2.5,z:-1},{x:-1.2,z:-1.7},{x:2,z:-1.7},{x:55,z:-1.7}],r=4.6;break;case"pullout":s=[{x:n,z:t},{x:-2.6,z:t-4},{x:-ht,z:t-9},{x:-ht,z:-55}],r=3.6;break;case"slowpass":s=[{x:-ht,z:t},{x:-ht,z:-55}],r=6;break;case"stay":return new Promise(a=>window.setTimeout(a,900));default:s=[{x:-ht,z:t},{x:-ht,z:-55}],r=3}return this.overview=!0,new Promise(a=>this.run(ol(s),r,!0,a))}run(e,t,n,s){this.path=e,this.pathT=0,this.pathDur=t,this.pathEase=n,this.pathDone=s}tick(){let e=performance.now(),t=Math.min((e-this.last)/1e3,.05);this.last=e,this.time+=t;let n=this.time;if(this.path&&(this.pathT+=t/this.pathDur,this.pathT>=1&&(this.loopIdle?this.pathT=0:this.pathT=1),this.place(this.path,this.pathEase?pg(this.pathT):this.pathT),this.pathT===1)){let c=this.pathDone;this.path=null,this.pathDone=null,c&&c()}let s=Math.floor(n*5)%2===0;this.flashers.forEach((c,h)=>{c.emissiveIntensity=h%2===0===s?3:.1}),this.walkers.forEach((c,h)=>{c.position.x=-3.4+(n*.7+h*.9)%2.8});let r=this.car.position,a=this.overview?new z(8.5,10.5,23):new z(r.x+3.2,5.2,r.z+11),o=this.overview?new z(r.x*.3,.5,2+Math.min(r.z,6)*.2):new z(r.x,1,r.z-7),l=1-Math.pow(.02,t);this.camPos.lerp(a,l),this.camLook.lerp(o,l),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.renderer.render(this.scene,this.camera)}place(e,t){let n=t*e.total,s=1;for(;s<e.len.length-1&&e.len[s]<n;)s++;let r=e.pts[s-1],a=e.pts[s],o=e.len[s]-e.len[s-1]||1,l=Math.min(1,Math.max(0,(n-e.len[s-1])/o));this.car.position.set(r.x+(a.x-r.x)*l,0,r.z+(a.z-r.z)*l);let h=Math.atan2(-(a.x-r.x),-(a.z-r.z))-this.car.rotation.y;for(;h>Math.PI;)h-=2*Math.PI;for(;h<-Math.PI;)h+=2*Math.PI;this.car.rotation.y+=h*.35}box(e,t,n,s,r,a,o,l=this.stage,c=0){let h=new Gt({color:s,roughness:.9,emissive:c?s:0,emissiveIntensity:c}),f=new ct(new Zn(e,t,n),h);return f.position.set(r,a,o),l.add(f),f}makeCar(e,t){let n=new Vt;this.box(1.7,.6,3.6,e,0,.6,0,n),this.box(1.5,.55,1.8,t?1846090:1450523,0,1.15,.2,n);let s=new Jn(.36,.36,.3,14),r=new Gt({color:332042,roughness:1});if([[-.85,1.15],[.85,1.15],[-.85,-1.15],[.85,-1.15]].forEach(([a,o])=>{let l=new ct(s,r);l.rotation.z=Math.PI/2,l.position.set(a,.36,o),n.add(l)}),this.box(.4,.16,.06,16772287,-.55,.68,-1.82,n,2),this.box(.4,.16,.06,16772287,.55,.68,-1.82,n,2),this.box(.4,.14,.06,Ve.red,-.55,.68,1.82,n,1.2),this.box(.4,.14,.06,Ve.red,.55,.68,1.82,n,1.2),t){let a=this.box(.55,.16,.3,Ve.red,-.32,1.52,.2,n,3),o=this.box(.55,.16,.3,3898367,.32,1.52,.2,n,3);this.flashers.push(a.material,o.material)}return n}flat(e,t,n,s,r,a=.01){let o=new ct(new Kn(e,t),new Gt({color:n,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(s,a,r),this.stage.add(o)}hasCross(e){return e.kind==="lights"}buildGround(e){if(this.flat(400,400,Ve.ground,0,0,-.02),this.flat(Bt*2,240,Ve.road,0,0,0),this.flat(1.6,240,5662044,-Bt-.8,0,.03),this.flat(1.6,240,5662044,Bt+.8,0,.03),this.hasCross(e)){this.flat(240,8,Ve.cross,0,0,.035);for(let t=-58;t<58;t+=4)Math.abs(t)<Bt+1||this.flat(2,.14,Ve.line,t,0,.045)}}buildLines(e){let t=this.hasCross(e)?4.6:0,n=(a,o,l,c,h=.14)=>{this.flat(h,Math.abs(l-o),c,a,(o+l)/2,.02)},s=a=>{t?(a(t,110),a(-110,-t)):a(-110,110)};if(e.centre==="broken")for(let a=-108;a<110;a+=4)t&&Math.abs(a+1)<t+1||n(0,a,a+2,Ve.line);else e.centre==="single"?s((a,o)=>n(0,a,o,Ve.line)):s((a,o)=>{n(-.16,a,o,Ve.line),n(.16,a,o,Ve.line)});let r=e.yellowKerb?Ve.yellow:Ve.line;s((a,o)=>{n(-Bt+.3,a,o,r,e.yellowKerb?.22:.12),n(Bt-.3,a,o,Ve.line,.12)})}buildScenery(e){let t=mg(this.seed),n=this.hasCross(e);for(let s=0;s<46;s++){let r=t()<.5?-1:1,a=r*(9+t()*26),o=-90+t()*150;if(!(n&&Math.abs(o)<8)&&!(e.driveway&&r>0&&Math.abs(o+2)<7))if(t()<.55){let l=2.5+t()*7,c=3+t()*4;this.box(c,l,3+t()*4,Ve.building,a,l/2,o),t()<.7&&this.box(.5,.5,.05,Ve.window,a-r*.2,l*.6,o+2.6+t(),this.stage,.9)}else{this.box(.3,1.4,.3,Ve.trunk,a,.7,o);let l=new ct(new Oi(1.3+t(),3+t()*2,7),new Gt({color:Ve.tree,roughness:1}));l.position.set(a,3,o),this.stage.add(l)}}}buildSign(e){let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");n&&(n.fillStyle="#00843d",n.fillRect(0,0,256,128),n.strokeStyle="#e7ffe6",n.lineWidth=8,n.strokeRect(8,8,240,112),n.fillStyle="#e7ffe6",n.font='700 72px "Space Grotesk", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(e,128,68));let s=new ds(t);s.colorSpace=Nt;let r=new ct(new Kn(3.2,1.6),new Fi({map:s}));r.position.set(-7,3.4,16),this.stage.add(r),this.box(.16,3.4,.16,Ve.trunk,-7,1.7,15.95)}buildIntersection(e){if(this.flat(Bt-.2,.4,Ve.line,-Bt/2,5.3,.05),this.flat(Bt-.2,.4,Ve.line,Bt/2,-5.3,.05),e.bikeBox&&(this.flat(Bt-.5,2.6,Ve.bike,-Bt/2,6.9,.045),this.flat(Bt-.2,.3,Ve.line,-Bt/2,8.4,.05)),e.light&&(this.lightPole(-5.6,5.6,e.light,0),this.lightPole(5.6,-5.6,e.light,Math.PI)),e.otherCar){let t=this.makeCar(Ve.blue,!1);t.position.set(-9,0,1.6),t.rotation.y=-Math.PI/2,this.stage.add(t),this.giveWaySign(-6.2,4.6)}}lightPole(e,t,n,s){let r=new Vt;this.box(.2,4.6,.2,Ve.trunk,0,2.3,0,r),this.box(.7,1.9,.5,332042,0,4.4,0,r),[["red",Ve.red,5],["yellow",Ve.yellow,4.4],["green",Ve.green,3.8]].forEach(([o,l,c])=>{let h=o===n,f=new ct(new hi(.22,14,10),new Gt({color:h?l:2108709,emissive:h?l:0,emissiveIntensity:h?3:0}));f.position.set(0,c,.28),r.add(f)}),r.position.set(e,0,t),r.rotation.y=s,this.stage.add(r)}giveWaySign(e,t){this.box(.12,2.2,.12,Ve.trunk,e,1.1,t);let n=new ct(new Oi(.7,1,3),new Gt({color:16053492,emissive:16734797,emissiveIntensity:.35}));n.rotation.x=Math.PI,n.scale.z=.1,n.position.set(e,2.5,t),n.rotation.y=Math.PI/2,this.stage.add(n)}buildTram(e){this.flat(.1,240,8950919,.6,0,.022),this.flat(.1,240,8950919,2,0,.022);let t=new Vt;if(this.box(2.5,2.9,13,33853,0,1.75,0,t),this.box(2.52,.9,12.4,Ve.window,0,2.3,0,t,.35),this.box(2.54,.5,13.02,Ve.yellow,0,.75,0,t),this.box(.1,1.6,.1,Ve.trunk,0,3.9,0,t),t.position.set(1.3,0,-3.2),this.stage.add(t),this.box(2.2,.12,.3,Ve.red,1.3,1.2,3.33,this.stage,1.5),e.passengers)for(let n=0;n<3;n++){let s=new Vt,r=new ct(new Jn(.25,.25,1.1,10),new Gt({color:n===1?Ve.blue:16772287}));r.position.y=.75;let a=new ct(new hi(.22,10,8),new Gt({color:14214874}));a.position.y=1.55,s.add(r,a),s.position.set(-3,0,-5+n*2.6),this.stage.add(s),this.walkers.push(s)}}buildPolice(){let e=this.makeCar(16054261,!0);e.position.set(-3.5,0,1),this.stage.add(e),this.box(1.72,.2,3.62,3898367,-3.5,.62,1);let t=new Vt,n=new ct(new Jn(.27,.27,1.2,10),new Gt({color:1846090}));n.position.y=.8;let s=new ct(new hi(.23,10,8),new Gt({color:14214874}));s.position.y=1.65,t.add(n,s),t.position.set(-4.6,0,4),this.stage.add(t)}buildDriveway(){this.flat(9,3.4,2832431,Bt+4.5,-2,.04),this.box(6,3.2,6,Ve.building,15.5,1.6,-2),this.box(2.6,2,.1,4082238,12.45,1,-2),this.box(.6,.6,.05,Ve.window,12.45,2.4,-4,this.stage,.9)}};var cl={meta:{title:"Australia Road Rules Game - verified seed question bank (English source strings)",verified_on:"2026-11-10",note:"Every item is backed by a sentence retrieved from the listed source on the verified_on date. Translate into ja, ko, zh-Hans, zh-Hant during the build. Items marked time_sensitive must be re-checked on the day of publishing. This is a learning game, not an official test.",sources:{NSW_UTURN:"https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/roads-safety-and-rules/stopping-giving-way-turning/u-turns-three-point-turns",NSW_LINES:"https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/roads-safety-and-rules/road-lanes-lines-markings/road-lines-markings",NSW_LIGHTS:"https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/roads-safety-and-rules/stopping-giving-way-turning/traffic-lights",NSW_INDICATE:"https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/roads-safety-and-rules/stopping-giving-way-turning/indicating-and-turning",NSW_EMERGENCY:"https://www.nsw.gov.au/driving-boating-and-transport/roads-safety-and-rules/warnings-and-hazards/passing-emergency-vehicles",NSW_6MONTH:"https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate/new-rules-faqs",NSW_LEARNER:"https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate/learner-and-provisional-licence-holders",NSW_VISITOR_LICENCE:"https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate/applying-for-a-visitor-licence",NSW_EXEMPT:"https://www.nsw.gov.au/driving-boating-and-transport/driver-and-rider-licences/visiting-or-moving-to-nsw/moving-your-overseas-licence/knowledge-and-driving-test-exemptions",QLD_LIGHTS:"https://www.qld.gov.au/transport/safety/rules/road/traffic-lights",QLD_MARKINGS:"https://www.qld.gov.au/transport/safety/signs/road-markings",QLD_DOUBLE:"https://qld.gov.au/transport/safety/fines/demerit/double",QLD_DRIVING:"https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving",QLD_EXEMPT:"https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/transfer/exempt-countries",VIC_UTURN:"https://transport.vic.gov.au/road-rules-and-safety/u-turns",VIC_UTURN_RACV:"https://www.racv.com.au/on-the-road/driving-maintenance/road-safety/road-rules/making-turns.html",VIC_TRAMS:"https://transport.vic.gov.au/news-and-resources/campaigns/driving-with-trams",VIC_HOOK:"https://transport.vic.gov.au/road-rules-and-safety/hook-turns"}},questions:[{id:"U01",states:["NSW"],category:"turning",q:"You are in NSW, stopped at traffic lights. There is no U-turn sign of any kind. What do you do?",options:["Make the U-turn. I don't see a 'No U-turn' sign, so it is allowed","Don't U-turn. NSW needs a 'U-turn permitted' sign at traffic lights","Make the U-turn, but only on a green arrow"],answer:1,why:"NSW: you must not make a U-turn at traffic lights unless a 'U-turn permitted' sign is displayed.",source:"NSW_UTURN"},{id:"U02",states:["QLD"],category:"turning",q:"In Queensland, at which of these places do you need a 'U-turn permitted' sign before making a U-turn?",options:["Traffic lights only","Traffic lights, children's crossings, level crossings, marked foot crossings and pedestrian crossings","Nowhere - U-turns are always allowed if safe"],answer:1,why:"Queensland lists all five locations: you can only make a U-turn there when a U-turn permitted sign is shown.",source:"QLD_LIGHTS"},{id:"U03",states:["VIC"],category:"turning",q:"You are in Victoria, at traffic lights. There is no 'No U-turn' sign and no 'No right turn' sign. What do you do?",options:["Make the U-turn if it is safe. I don't see a 'No U-turn' or 'No right turn' sign","Don't U-turn. Victoria needs a 'U-turn permitted' sign, like NSW","U-turn only between 10pm and 6am"],answer:0,why:"Victoria allows U-turns at intersections with or without traffic signals unless a 'no U-turn' sign is displayed; a 'no right turn' sign also prohibits a U-turn.",source:"VIC_UTURN_RACV",note:"Confirmed on RACV. The Transport Victoria page text retrieved on 2026-11-10 did not include the traffic-lights sentence."},{id:"U04",states:["NSW","QLD","VIC"],category:"turning",q:"You are making a U-turn. A car is turning left out of a side street and it faces a GIVE WAY sign. Who gives way?",options:["The other car, because it has the GIVE WAY sign","You - the U-turning driver gives way to all other vehicles and pedestrians","Whoever arrived second"],answer:1,why:"All three states say the U-turning driver must give way to all other vehicles and pedestrians. Victoria spells out that this includes vehicles turning left from a slip lane or side street.",source:"VIC_UTURN"},{id:"L01",states:["NSW"],category:"lines",q:"In NSW, can you cross double unbroken centre lines to turn into a driveway?",options:["Yes - to enter or leave the road by the shortest route","No, never","Only to overtake"],answer:0,why:"NSW: you can cross double unbroken lines to enter or leave the road by the shortest route.",source:"NSW_LINES"},{id:"L02",states:["QLD"],category:"lines",q:"In Queensland, when may you cross a double continuous centre line?",options:["To turn into a driveway","To overtake a slow car","Only to safely pass a bicycle rider"],answer:2,why:"Queensland: you must not cross a double continuous centre line except to safely pass a bicycle rider.",source:"QLD_MARKINGS"},{id:"L03",states:["NSW","QLD"],category:"lines",q:"Can you make a U-turn across a single unbroken (continuous) centre line?",options:["Yes","No","Only in NSW"],answer:1,why:"Both NSW and Queensland prohibit U-turns across a single unbroken/continuous centre line.",source:"NSW_UTURN"},{id:"L04",states:["NSW"],category:"lines",q:"In NSW, how far may you drive on a painted island surrounded by single lines to enter a turning lane?",options:["Up to 50 metres","Up to 100 metres","You may never drive on it"],answer:0,why:"NSW: up to 50m, to enter or leave the road, enter a turning lane that begins immediately after the island, or angle park.",source:"NSW_LINES"},{id:"L05",states:["QLD"],category:"lines",q:"In Queensland, how far may you travel after crossing a continuous white edge line when turning from a single-lane road?",options:["Up to 20 metres","Up to 50 metres","Up to 100 metres"],answer:2,why:"Queensland allows travel of up to 100m across a continuous white edge line in the listed situations.",source:"QLD_MARKINGS"},{id:"L06",states:["QLD"],category:"parking",q:"In Queensland, what does a yellow edge line mean?",options:["Parking allowed for 15 minutes","Stopping and parking are prohibited where the line is marked","Bus lane"],answer:1,why:"Queensland: if the edge line is yellow, stopping and parking is prohibited where the line is marked.",source:"QLD_MARKINGS"},{id:"L07",states:["NSW"],category:"parking",q:"In NSW, what does an unbroken yellow kerb line mean?",options:["No stopping, except in an emergency","Loading zone","Parking for residents only"],answer:0,why:"NSW: an unbroken kerb line means you must not stop here, except in an emergency.",source:"NSW_LINES"},{id:"S01",states:["NSW","QLD"],category:"signals",q:"The light turns yellow and you can stop safely. What must you do?",options:["Speed up to clear the intersection","Stop","Sound your horn and continue"],answer:1,why:"NSW: a yellow light means you must stop; you can only go through if you cannot stop safely. Queensland: you must stop on a yellow light, unless it is unsafe to do so.",source:"NSW_LIGHTS"},{id:"S02",states:["NSW"],category:"signals",q:"In NSW, when can you turn left at a red light?",options:["Any time it is clear","Only where a 'left turn on red permitted after stopping' sign is displayed, after stopping","Never"],answer:1,why:"NSW: when you see this sign you must stop at the red light, then turn left when it's clear, giving way to traffic approaching from the right.",source:"NSW_LIGHTS"},{id:"S03",states:["NSW"],category:"signals",q:"In NSW, may a car stop in the painted bicycle storage area at traffic lights?",options:["Yes, if no bicycle is there","No","Only when turning left"],answer:1,why:"NSW: vehicles must not stop in the area reserved for bicycles at traffic lights.",source:"NSW_LIGHTS"},{id:"S04",states:["NSW"],category:"signals",q:"In NSW, how long must you indicate before pulling out from the side of the road?",options:["At least 2 seconds","At least 5 seconds","No minimum"],answer:1,why:"NSW: before pulling out from the side of the road or a parking area, you must indicate for at least 5 seconds.",source:"NSW_INDICATE"},{id:"E01",states:["NSW"],category:"safety",q:"In NSW the speed limit is 60km/h. You pass a stopped police car with flashing blue and red lights. What must you do?",options:["Slow down to 40km/h","Keep to 60km/h","Stop and wait"],answer:0,why:"NSW: if the speed limit is 80km/h or less, you must slow down to 40km/h. If the limit is over 80km/h, you must slow down safely and move over.",source:"NSW_EMERGENCY"},{id:"T01",states:["VIC"],category:"trams",q:"In Victoria, a tram stops at a roadside stop and passengers are getting on and off. What must you do?",options:["Pass slowly on the left","Stop behind the end of the tram","Overtake on the right"],answer:1,why:"Victoria: you must stop behind the end of the tram. Only once the doors are closed and the road is clear of pedestrians may you drive past at 10km/h.",source:"VIC_TRAMS"},{id:"T02",states:["VIC"],category:"trams",q:"In Victoria, how far may you drive in a tram lane when making a right turn?",options:["Up to 50 metres","Up to 100 metres","Any distance"],answer:0,why:"Victoria: up to 50 metres when making a right turn.",source:"VIC_TRAMS"},{id:"T03",states:["VIC"],category:"trams",q:"At a Melbourne intersection with a 'hook turn' sign, you want to turn right. Which lane do you start from, and when do you turn?",options:["Right lane; turn on your own green light","Left lane; turn when the lights on the road you are entering turn green","Middle lane; turn on a yellow light"],answer:1,why:"Victoria: move to the left lane, indicate right, keep to the far-left of the intersection, and wait until the traffic lights on the road you want to enter have changed to green.",source:"VIC_HOOK"},{id:"P01",states:["QLD"],category:"penalties",q:"In Queensland, when do double demerit points apply to mobile phone offences?",options:["Only on public holidays","On a second or subsequent offence within 1 year of the previous one","On every offence"],answer:1,why:"Queensland: double points apply to certain second or subsequent offences within 1 year - speeding more than 20km/h over, mobile phone, seatbelt, child restraint and motorcycle helmet offences.",source:"QLD_DOUBLE"},{id:"X01",states:["NSW"],category:"licence",q:"You are on a temporary visa and plan to live in NSW for more than 6 months. How long can you drive on your overseas licence?",options:["As long as the licence is valid","Up to 6 months of living in NSW","3 months"],answer:1,why:"NSW: temporary visa holders who intend to reside continuously in NSW for 6 months or longer need a NSW licence. The 6 months starts when you obtain, change to or use a NSW address as your primary location.",source:"NSW_6MONTH",time_sensitive:!0},{id:"X02",states:["QLD"],category:"licence",q:"In Queensland, who must stop driving on an overseas licence after living there for 3 months?",options:["Every overseas licence holder","Australian citizens and resident (permanent) visa holders","Tourists only"],answer:1,why:"Queensland: the 3-month limit applies to Australian citizens and resident visa holders. A resident visa is a permanent visa or special category visa; temporary, business or guardian visas are not included.",source:"QLD_DRIVING",time_sensitive:!0},{id:"X03",states:["NSW","QLD"],category:"licence",q:"You are driving on your overseas licence and you fail the practical driving test. Can you drive home?",options:["Yes, the overseas licence is still valid","No - you can no longer drive on your overseas licence","Yes, for 7 more days"],answer:1,why:"NSW: if you fail a NSW driver or rider test, you cannot resume driving with your overseas licence. Queensland: authority is withdrawn if you have failed a practical driving test in Queensland.",source:"NSW_VISITOR_LICENCE"},{id:"X04",states:["NSW"],category:"licence",q:"You are visiting NSW with an overseas LEARNER licence. Which is required?",options:["Nothing special","A supervisor with a full Australian licence, L plates front and rear, and zero alcohol","Only L plates"],answer:1,why:"NSW: be supervised at all times by the holder of a full Australian (Class C) driver licence, display L plates at the front and rear, and have a zero blood alcohol concentration.",source:"NSW_LEARNER"},{id:"X05",states:["NSW"],category:"licence",q:"In NSW, how many demerit points lead to your visiting driver privileges being permanently withdrawn?",options:["4","13","20"],answer:1,why:"NSW: Transport for NSW will permanently withdraw visiting driver privileges if the person accrues 13 demerit points.",source:"NSW_6MONTH"},{id:"X06",states:["NSW","QLD"],category:"licence",q:"You hold a Japanese car licence. Do you need to pass a knowledge test and driving test to get a NSW or Queensland car licence?",options:["Yes, both tests","No - Japan is on the recognised list in both states","Only in Queensland"],answer:1,why:"Japan appears on both the NSW and Queensland recognised lists as retrieved on 2026-11-10.",source:"NSW_EXEMPT",time_sensitive:!0},{id:"X07",states:["NSW","QLD"],category:"licence",q:"You hold a South Korean or Taiwanese car licence. Which statement matched the official pages on 10 November 2026?",options:["Recognised in Queensland (no tests); not on the NSW recognised list (tests required)","Recognised in both","Recognised in neither"],answer:0,why:"The Queensland page (last updated 31 October 2026) lists South Korea and Taiwan as recognised. The NSW page retrieved the same day does not list them.",source:"QLD_EXEMPT",time_sensitive:!0},{id:"X08",states:["NSW","QLD"],category:"licence",q:"You hold a car licence from China or Hong Kong. What do NSW and Queensland require to convert it?",options:["Nothing - automatic conversion","Passing the knowledge/road rules test and the practical driving test","Only an eyesight test"],answer:1,why:"Neither China nor Hong Kong appears on the NSW or Queensland recognised lists as retrieved on 2026-11-10, so tests are required.",source:"QLD_EXEMPT",time_sensitive:!0}]};var ph={ui:{title:"Drive Down Under",tagline:"Same manoeuvre, different state, different law. Learn the road rules of NSW, Queensland and Victoria before you drive.",modeRun:"State Run",modeRunDesc:"Pick one state. Up to 10 questions, 3 lives.",modeTrap:"Border Trap",modeTrapDesc:"One manoeuvre. Tap every state where it is legal.",modeLicence:"Licence Check",modeLicenceDesc:"What the official pages say about your overseas licence.",pickState:"Choose a state",lives:"Lives",score:"Score",question:"Question",next:"Next",finish:"See result",correct:"Correct",wrong:"Not quite",source:"Official source",official:"Official English wording",resultTitle:"Result",gameOver:"Out of lives",weakest:"Review this topic",playAgain:"Play again",home:"Home",trapPrompt:"Tap every state where this is legal. If it is legal nowhere, select none.",check:"Check answer",legal:"Legal",illegal:"Not legal",licState:"State",licCountry:"Licence issued by",licStatus:"Your status",statusTemp:"Temporary visa",statusPerm:"Permanent resident or citizen",licDuration:"How long you can drive on it",licTests:"Tests to convert it",disclaimer:"Learning game, not an official test and not legal advice. Check the official source before you drive.",verified:"Rules verified against official pages on",timeSensitive:"This rule changed recently. Re-check the official page.",language:"Language"},states:{NSW:"New South Wales",QLD:"Queensland",VIC:"Victoria"},categories:{turning:"Turning and U-turns",lines:"Road lines",parking:"Stopping and parking",signals:"Signals and indicating",safety:"Emergency vehicles",trams:"Trams and hook turns",penalties:"Penalties",licence:"Overseas licences"},countries:{JP:"Japan",KR:"South Korea",TW:"Taiwan",HK:"Hong Kong",CN:"China"},traps:{BT1:{q:"There are no signs at all. You make a U-turn at traffic lights. Where is that legal?",why:"NSW and Queensland require a 'U-turn permitted' sign. Victoria allows it unless a 'no U-turn' or 'no right turn' sign is displayed."},BT2:{q:"You cross double unbroken centre lines to turn into a driveway. Where is that legal?",why:"NSW: you can cross double unbroken lines to enter or leave the road by the shortest route. Queensland: you must not cross a double continuous centre line except to safely pass a bicycle rider."},BT3:{q:"You make a U-turn across a single unbroken centre line. Where is that legal?",why:"Nowhere. NSW, Queensland and Victoria all prohibit U-turns across a single continuous centre line."},BT4:{q:"You make a U-turn across double unbroken centre lines. Where is that legal?",why:"Nowhere. NSW, Queensland and Victoria all prohibit U-turns across double continuous centre lines."}},licence:{dur_nsw_temp:"Up to 6 months, if you intend to live in NSW for 6 months or longer. After that you need a NSW licence. The 6 months starts when you obtain, change to or use a NSW address as your primary location.",dur_nsw_perm:"You must get a NSW licence within 3 months of living in NSW.",dur_qld_temp:"Queensland's 3-month limit applies to Australian citizens and resident (permanent) visa holders. Temporary visas are not resident visas, so a visitor can drive on a valid overseas licence.",dur_qld_perm:"Your authority to drive on the overseas licence ends once you have been living in Queensland for 3 months.",dur_vic:"If you want to drive in Victoria for more than 6 months, you need to convert your overseas licence.",test_nsw_yes:"On the NSW recognised list: no knowledge test or driving test for a car licence.",test_nsw_no:"Not on the NSW recognised list: you must pass the knowledge and driving tests.",test_qld_yes:"On the Queensland recognised list: no road rules test or practical driving test for a car licence.",test_qld_no:"Not on the Queensland recognised list: you must pass a road rules test and a practical driving test.",test_vic_full:"Coded FULL in the VicRoads conversion table. The page text we retrieved does not state the test requirement. Cannot determine: use the VicRoads checker.",test_vic_exp:"Coded EXP in the VicRoads conversion table. The page does not say what EXP means today. Cannot determine: use the VicRoads checker.",test_vic_non:"Coded NON in the VicRoads conversion table. The page text we retrieved does not state the test requirement. Cannot determine: use the VicRoads checker."}};var mh={ui:{title:"\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u4EA4\u901A\u30EB\u30FC\u30EB\u30FB\u30C1\u30E3\u30EC\u30F3\u30B8",tagline:"\u540C\u3058\u904B\u8EE2\u64CD\u4F5C\u3067\u3082\u3001\u5DDE\u304C\u5909\u308F\u308C\u3070\u6CD5\u5F8B\u304C\u5909\u308F\u308A\u307E\u3059\u3002\u904B\u8EE2\u3059\u308B\u524D\u306B\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u30FB\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u30FB\u30D3\u30AF\u30C8\u30EA\u30A2\u306E\u4EA4\u901A\u30EB\u30FC\u30EB\u3092\u5B66\u3073\u307E\u3057\u3087\u3046\u3002",modeRun:"\u5DDE\u5225\u30C1\u30E3\u30EC\u30F3\u30B8",modeRunDesc:"\u5DDE\u30921\u3064\u9078\u629E\u3002\u6700\u592710\u554F\u3001\u30E9\u30A4\u30D5\u306F3\u3064\u3002",modeTrap:"\u5DDE\u5883\u30C8\u30E9\u30C3\u30D7",modeTrapDesc:"1\u3064\u306E\u904B\u8EE2\u64CD\u4F5C\u3002\u5408\u6CD5\u306A\u5DDE\u3092\u3059\u3079\u3066\u30BF\u30C3\u30D7\u3002",modeLicence:"\u514D\u8A31\u30C1\u30A7\u30C3\u30AF",modeLicenceDesc:"\u6D77\u5916\u514D\u8A31\u306B\u3064\u3044\u3066\u516C\u5F0F\u30DA\u30FC\u30B8\u304C\u8FF0\u3079\u3066\u3044\u308B\u5185\u5BB9\u3002",pickState:"\u5DDE\u3092\u9078\u3076",lives:"\u30E9\u30A4\u30D5",score:"\u30B9\u30B3\u30A2",question:"\u554F\u984C",next:"\u6B21\u3078",finish:"\u7D50\u679C\u3092\u898B\u308B",correct:"\u6B63\u89E3",wrong:"\u4E0D\u6B63\u89E3",source:"\u516C\u5F0F\u60C5\u5831\u6E90",official:"\u516C\u5F0F\u306E\u82F1\u8A9E\u8868\u73FE",resultTitle:"\u7D50\u679C",gameOver:"\u30E9\u30A4\u30D5\u304C\u306A\u304F\u306A\u308A\u307E\u3057\u305F",weakest:"\u5FA9\u7FD2\u3057\u305F\u3044\u5206\u91CE",playAgain:"\u3082\u3046\u4E00\u5EA6",home:"\u30DB\u30FC\u30E0",trapPrompt:"\u5408\u6CD5\u306A\u5DDE\u3092\u3059\u3079\u3066\u30BF\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3069\u306E\u5DDE\u3067\u3082\u9055\u6CD5\u306A\u3089\u3001\u4F55\u3082\u9078\u3070\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002",check:"\u7B54\u3048\u3092\u78BA\u8A8D",legal:"\u5408\u6CD5",illegal:"\u9055\u6CD5",licState:"\u5DDE",licCountry:"\u514D\u8A31\u306E\u767A\u884C\u56FD\u30FB\u5730\u57DF",licStatus:"\u3042\u306A\u305F\u306E\u5728\u7559\u8CC7\u683C",statusTemp:"\u4E00\u6642\u6EDE\u5728\u30D3\u30B6",statusPerm:"\u6C38\u4F4F\u8005\u307E\u305F\u306F\u5E02\u6C11",licDuration:"\u305D\u306E\u514D\u8A31\u3067\u904B\u8EE2\u3067\u304D\u308B\u671F\u9593",licTests:"\u5207\u308A\u66FF\u3048\u306B\u5FC5\u8981\u306A\u8A66\u9A13",disclaimer:"\u5B66\u7FD2\u7528\u30B2\u30FC\u30E0\u3067\u3059\u3002\u516C\u5F0F\u306E\u8A66\u9A13\u3067\u3082\u6CD5\u7684\u52A9\u8A00\u3067\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u904B\u8EE2\u3059\u308B\u524D\u306B\u5FC5\u305A\u516C\u5F0F\u60C5\u5831\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",verified:"\u516C\u5F0F\u30DA\u30FC\u30B8\u3068\u306E\u7167\u5408\u65E5",timeSensitive:"\u3053\u306E\u30EB\u30FC\u30EB\u306F\u6700\u8FD1\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u516C\u5F0F\u30DA\u30FC\u30B8\u3092\u518D\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",language:"\u8A00\u8A9E"},states:{NSW:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA",QLD:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9",VIC:"\u30D3\u30AF\u30C8\u30EA\u30A2"},categories:{turning:"\u53F3\u5DE6\u6298\u3068U\u30BF\u30FC\u30F3",lines:"\u9053\u8DEF\u6A19\u793A",parking:"\u99D0\u505C\u8ECA",signals:"\u4FE1\u53F7\u3068\u5408\u56F3",safety:"\u7DCA\u6025\u8ECA\u4E21",trams:"\u30C8\u30E9\u30E0\u3068\u30D5\u30C3\u30AF\u30BF\u30FC\u30F3",penalties:"\u7F70\u5247",licence:"\u6D77\u5916\u514D\u8A31"},countries:{JP:"\u65E5\u672C",KR:"\u97D3\u56FD",TW:"\u53F0\u6E7E",HK:"\u9999\u6E2F",CN:"\u4E2D\u56FD"},traps:{BT1:{q:"\u6A19\u8B58\u306F\u4F55\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u4FE1\u53F7\u306E\u3042\u308B\u4EA4\u5DEE\u70B9\u3067U\u30BF\u30FC\u30F3\u3057\u307E\u3059\u3002\u5408\u6CD5\u306A\u306E\u306F\u3069\u306E\u5DDE\uFF1F",why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3068\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u306F\u300CU-turn permitted\u300D\u306E\u6A19\u8B58\u304C\u5FC5\u8981\u3067\u3059\u3002\u30D3\u30AF\u30C8\u30EA\u30A2\u3067\u306F\u300Cno U-turn\u300D\u307E\u305F\u306F\u300Cno right turn\u300D\u306E\u6A19\u8B58\u304C\u306A\u3044\u9650\u308AU\u30BF\u30FC\u30F3\u3067\u304D\u307E\u3059\u3002"},BT2:{q:"\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u3063\u3066\u3001\u53CD\u5BFE\u5074\u306E\u79C1\u9053\uFF08\u30C9\u30E9\u30A4\u30D6\u30A6\u30A7\u30A4\uFF09\u306B\u5165\u308A\u307E\u3059\u3002\u5408\u6CD5\u306A\u306E\u306F\u3069\u306E\u5DDE\uFF1F",why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u308A\u3001\u6700\u77ED\u7D4C\u8DEF\u3067\u9053\u8DEF\u306B\u51FA\u5165\u308A\u3067\u304D\u307E\u3059\u3002\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u81EA\u8EE2\u8ECA\u3092\u5B89\u5168\u306B\u8FFD\u3044\u8D8A\u3059\u5834\u5408\u3092\u9664\u304D\u3001\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"},BT3:{q:"1\u672C\u306E\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u3063\u3066U\u30BF\u30FC\u30F3\u3057\u307E\u3059\u3002\u5408\u6CD5\u306A\u306E\u306F\u3069\u306E\u5DDE\uFF1F",why:"\u3069\u306E\u5DDE\u3067\u3082\u9055\u6CD5\u3067\u3059\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3001\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3001\u30D3\u30AF\u30C8\u30EA\u30A2\u306E\u3059\u3079\u3066\u3067\u30011\u672C\u306E\u5B9F\u7DDA\u3092\u6A2A\u5207\u308BU\u30BF\u30FC\u30F3\u306F\u7981\u6B62\u3055\u308C\u3066\u3044\u307E\u3059\u3002"},BT4:{q:"\u4E8C\u91CD\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u3063\u3066U\u30BF\u30FC\u30F3\u3057\u307E\u3059\u3002\u5408\u6CD5\u306A\u306E\u306F\u3069\u306E\u5DDE\uFF1F",why:"\u3069\u306E\u5DDE\u3067\u3082\u9055\u6CD5\u3067\u3059\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3001\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3001\u30D3\u30AF\u30C8\u30EA\u30A2\u306E\u3059\u3079\u3066\u3067\u3001\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u308BU\u30BF\u30FC\u30F3\u306F\u7981\u6B62\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}},licence:{dur_nsw_temp:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306B6\u304B\u6708\u4EE5\u4E0A\u4F4F\u3080\u4E88\u5B9A\u306E\u5834\u5408\u3001\u6700\u95776\u304B\u6708\u3067\u3059\u3002\u305D\u308C\u4EE5\u964D\u306F\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u514D\u8A31\u304C\u5FC5\u8981\u3067\u3059\u30026\u304B\u6708\u306F\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u4F4F\u6240\u3092\u53D6\u5F97\u30FB\u5909\u66F4\u30FB\u4E3B\u306A\u5C45\u4F4F\u5730\u3068\u3057\u3066\u4F7F\u7528\u3057\u305F\u65E5\u304B\u3089\u6570\u3048\u307E\u3059\u3002",dur_nsw_perm:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306B\u4F4F\u307F\u59CB\u3081\u3066\u304B\u30893\u304B\u6708\u4EE5\u5185\u306B\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u514D\u8A31\u3092\u53D6\u5F97\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002",dur_qld_temp:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E3\u304B\u6708\u5236\u9650\u306F\u3001\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u5E02\u6C11\u3068 resident visa\uFF08\u6C38\u4F4F\u30D3\u30B6\uFF09\u4FDD\u6301\u8005\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002\u4E00\u6642\u6EDE\u5728\u30D3\u30B6\u306F resident visa \u306B\u542B\u307E\u308C\u306A\u3044\u305F\u3081\u3001\u8A2A\u554F\u8005\u306F\u6709\u52B9\u306A\u6D77\u5916\u514D\u8A31\u3067\u904B\u8EE2\u3067\u304D\u307E\u3059\u3002",dur_qld_perm:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306B3\u304B\u6708\u4F4F\u3080\u3068\u3001\u6D77\u5916\u514D\u8A31\u3067\u904B\u8EE2\u3059\u308B\u8CC7\u683C\u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002",dur_vic:"\u30D3\u30AF\u30C8\u30EA\u30A2\u30676\u304B\u6708\u3092\u8D85\u3048\u3066\u904B\u8EE2\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u6D77\u5916\u514D\u8A31\u3092\u30D3\u30AF\u30C8\u30EA\u30A2\u306E\u514D\u8A31\u306B\u5207\u308A\u66FF\u3048\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",test_nsw_yes:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u63B2\u8F09\uFF1A\u666E\u901A\u81EA\u52D5\u8ECA\u514D\u8A31\u306F\u5B66\u79D1\u8A66\u9A13\u3082\u5B9F\u6280\u8A66\u9A13\u3082\u4E0D\u8981\u3067\u3059\u3002",test_nsw_no:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u672A\u63B2\u8F09\uFF1A\u5B66\u79D1\u8A66\u9A13\u3068\u5B9F\u6280\u8A66\u9A13\u306B\u5408\u683C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",test_qld_yes:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u63B2\u8F09\uFF1A\u666E\u901A\u81EA\u52D5\u8ECA\u514D\u8A31\u306F\u4EA4\u901A\u30EB\u30FC\u30EB\u8A66\u9A13\u3082\u5B9F\u6280\u8A66\u9A13\u3082\u4E0D\u8981\u3067\u3059\u3002",test_qld_no:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u672A\u63B2\u8F09\uFF1A\u4EA4\u901A\u30EB\u30FC\u30EB\u8A66\u9A13\u3068\u5B9F\u6280\u8A66\u9A13\u306B\u5408\u683C\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002",test_vic_full:"VicRoads \u306E\u5207\u308A\u66FF\u3048\u8868\u3067\u306E\u30B3\u30FC\u30C9\u306F FULL \u3067\u3059\u3002\u53D6\u5F97\u3057\u305F\u30DA\u30FC\u30B8\u672C\u6587\u306B\u306F\u8A66\u9A13\u8981\u4EF6\u306E\u8A18\u8F09\u304C\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5224\u65AD\u3067\u304D\u307E\u305B\u3093\u3002VicRoads \u306E\u30C1\u30A7\u30C3\u30AB\u30FC\u3092\u5229\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",test_vic_exp:"VicRoads \u306E\u5207\u308A\u66FF\u3048\u8868\u3067\u306E\u30B3\u30FC\u30C9\u306F EXP \u3067\u3059\u3002\u30DA\u30FC\u30B8\u306B\u306F EXP \u304C\u73FE\u5728\u4F55\u3092\u610F\u5473\u3059\u308B\u304B\u306E\u8A18\u8F09\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u5224\u65AD\u3067\u304D\u307E\u305B\u3093\u3002VicRoads \u306E\u30C1\u30A7\u30C3\u30AB\u30FC\u3092\u5229\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002",test_vic_non:"VicRoads \u306E\u5207\u308A\u66FF\u3048\u8868\u3067\u306E\u30B3\u30FC\u30C9\u306F NON \u3067\u3059\u3002\u53D6\u5F97\u3057\u305F\u30DA\u30FC\u30B8\u672C\u6587\u306B\u306F\u8A66\u9A13\u8981\u4EF6\u306E\u8A18\u8F09\u304C\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u5224\u65AD\u3067\u304D\u307E\u305B\u3093\u3002VicRoads \u306E\u30C1\u30A7\u30C3\u30AB\u30FC\u3092\u5229\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},questions:{U01:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u4FE1\u53F7\u306E\u3042\u308B\u4EA4\u5DEE\u70B9\u306B\u6B62\u307E\u3063\u3066\u3044\u307E\u3059\u3002U\u30BF\u30FC\u30F3\u306B\u95A2\u3059\u308B\u6A19\u8B58\u306F\u4F55\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u3069\u3046\u3057\u307E\u3059\u304B\uFF1F",options:["U\u30BF\u30FC\u30F3\u3059\u308B\u3002\u300CNo U-turn\u300D\u306E\u6A19\u8B58\u304C\u898B\u3048\u306A\u3044\u306E\u3067\u5927\u4E08\u592B","U\u30BF\u30FC\u30F3\u3057\u306A\u3044\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u4FE1\u53F7\u4EA4\u5DEE\u70B9\u3067\u306F\u300CU-turn permitted\u300D\u306E\u6A19\u8B58\u304C\u5FC5\u8981","U\u30BF\u30FC\u30F3\u3059\u308B\u3002\u305F\u3060\u3057\u9752\u77E2\u5370\u306E\u3068\u304D\u3060\u3051"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u300CU-turn permitted\u300D\u306E\u6A19\u8B58\u304C\u306A\u3044\u9650\u308A\u3001\u4FE1\u53F7\u306E\u3042\u308B\u4EA4\u5DEE\u70B9\u3067U\u30BF\u30FC\u30F3\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"},U02:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u3001U\u30BF\u30FC\u30F3\u306B\u300CU-turn permitted\u300D\u306E\u6A19\u8B58\u304C\u5FC5\u8981\u306A\u306E\u306F\u3069\u3053\u3067\u3059\u304B\uFF1F",options:["\u4FE1\u53F7\u306E\u3042\u308B\u4EA4\u5DEE\u70B9\u3060\u3051","\u4FE1\u53F7\u3001\u5150\u7AE5\u6A2A\u65AD\u8DEF\u3001\u8E0F\u5207\u3001\u6A19\u793A\u306E\u3042\u308B\u6A2A\u65AD\u6B69\u9053\u3001\u6B69\u884C\u8005\u6A2A\u65AD\u6B69\u9053","\u3069\u3053\u3067\u3082\u4E0D\u8981\u3002\u5B89\u5168\u306A\u3089\u3044\u3064\u3067\u3082U\u30BF\u30FC\u30F3\u3067\u304D\u308B"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306F\u3053\u306E5\u304B\u6240\u3059\u3079\u3066\u3092\u6319\u3052\u3066\u3044\u307E\u3059\u3002U-turn permitted \u306E\u6A19\u8B58\u304C\u3042\u308B\u5834\u5408\u306B\u306E\u307FU\u30BF\u30FC\u30F3\u3067\u304D\u307E\u3059\u3002"},U03:{q:"\u30D3\u30AF\u30C8\u30EA\u30A2\u3067\u3001\u4FE1\u53F7\u306E\u3042\u308B\u4EA4\u5DEE\u70B9\u306B\u3044\u307E\u3059\u3002\u300CNo U-turn\u300D\u3082\u300CNo right turn\u300D\u306E\u6A19\u8B58\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u3069\u3046\u3057\u307E\u3059\u304B\uFF1F",options:["\u5B89\u5168\u306A\u3089U\u30BF\u30FC\u30F3\u3059\u308B\u3002\u300CNo U-turn\u300D\u3082\u300CNo right turn\u300D\u306E\u6A19\u8B58\u3082\u898B\u3048\u306A\u3044","U\u30BF\u30FC\u30F3\u3057\u306A\u3044\u3002\u30D3\u30AF\u30C8\u30EA\u30A2\u3082\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3068\u540C\u3058\u304F\u300CU-turn permitted\u300D\u306E\u6A19\u8B58\u304C\u5FC5\u8981","\u5348\u5F8C10\u6642\u304B\u3089\u5348\u524D6\u6642\u306E\u9593\u3060\u3051U\u30BF\u30FC\u30F3\u3059\u308B"],why:"\u30D3\u30AF\u30C8\u30EA\u30A2\uFF1A\u4FE1\u53F7\u306E\u6709\u7121\u306B\u304B\u304B\u308F\u3089\u305A\u3001\u300Cno U-turn\u300D\u306E\u6A19\u8B58\u304C\u306A\u3044\u9650\u308A\u4EA4\u5DEE\u70B9\u3067U\u30BF\u30FC\u30F3\u3067\u304D\u307E\u3059\u3002\u300Cno right turn\u300D\u306E\u6A19\u8B58\u3082U\u30BF\u30FC\u30F3\u3092\u7981\u6B62\u3057\u307E\u3059\u3002"},U04:{q:"\u3042\u306A\u305F\u306FU\u30BF\u30FC\u30F3\u4E2D\u3067\u3059\u3002\u8107\u9053\u304B\u3089\u5DE6\u6298\u3067\u51FA\u3066\u304F\u308B\u8ECA\u304C\u3042\u308A\u3001\u305D\u306E\u8ECA\u306F GIVE WAY \u306E\u6A19\u8B58\u306B\u9762\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3061\u3089\u304C\u8B72\u308A\u307E\u3059\u304B\uFF1F",options:["\u76F8\u624B\u306E\u8ECA\u3002GIVE WAY \u306E\u6A19\u8B58\u304C\u3042\u308B\u304B\u3089","\u3042\u306A\u305F\u3002U\u30BF\u30FC\u30F3\u3059\u308B\u8ECA\u306F\u4ED6\u306E\u3059\u3079\u3066\u306E\u8ECA\u4E21\u3068\u6B69\u884C\u8005\u306B\u9053\u3092\u8B72\u308B","\u5F8C\u304B\u3089\u6765\u305F\u307B\u3046"],why:"3\u5DDE\u3059\u3079\u3066\u3067\u3001U\u30BF\u30FC\u30F3\u3059\u308B\u904B\u8EE2\u8005\u306F\u4ED6\u306E\u3059\u3079\u3066\u306E\u8ECA\u4E21\u3068\u6B69\u884C\u8005\u306B\u9053\u3092\u8B72\u3089\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30D3\u30AF\u30C8\u30EA\u30A2\u306F\u3001\u30B9\u30EA\u30C3\u30D7\u30EC\u30FC\u30F3\u3084\u8107\u9053\u304B\u3089\u5DE6\u6298\u3059\u308B\u8ECA\u3082\u542B\u3080\u3068\u660E\u8A18\u3057\u3066\u3044\u307E\u3059\u3002"},L01:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u3063\u3066\u79C1\u9053\uFF08\u30C9\u30E9\u30A4\u30D6\u30A6\u30A7\u30A4\uFF09\u306B\u5165\u308C\u307E\u3059\u304B\uFF1F",options:["\u3067\u304D\u308B\u3002\u6700\u77ED\u7D4C\u8DEF\u3067\u9053\u8DEF\u306B\u51FA\u5165\u308A\u3059\u308B\u5834\u5408","\u7D76\u5BFE\u306B\u3067\u304D\u306A\u3044","\u8FFD\u3044\u8D8A\u3057\u306E\u3068\u304D\u3060\u3051"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u4E8C\u91CD\u5B9F\u7DDA\u3092\u6A2A\u5207\u308A\u3001\u6700\u77ED\u7D4C\u8DEF\u3067\u9053\u8DEF\u306B\u51FA\u5165\u308A\u3067\u304D\u307E\u3059\u3002"},L02:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u3001\u4E8C\u91CD\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u3063\u3066\u3088\u3044\u306E\u306F\u3069\u3093\u306A\u3068\u304D\u3067\u3059\u304B\uFF1F",options:["\u79C1\u9053\u306B\u5165\u308B\u3068\u304D","\u9045\u3044\u8ECA\u3092\u8FFD\u3044\u8D8A\u3059\u3068\u304D","\u81EA\u8EE2\u8ECA\u3092\u5B89\u5168\u306B\u8FFD\u3044\u8D8A\u3059\u3068\u304D\u3060\u3051"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u81EA\u8EE2\u8ECA\u3092\u5B89\u5168\u306B\u8FFD\u3044\u8D8A\u3059\u5834\u5408\u3092\u9664\u304D\u3001\u4E8C\u91CD\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u3063\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"},L03:{q:"1\u672C\u306E\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u3063\u3066U\u30BF\u30FC\u30F3\u3067\u304D\u307E\u3059\u304B\uFF1F",options:["\u3067\u304D\u308B","\u3067\u304D\u306A\u3044","\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3060\u3051\u3067\u304D\u308B"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3082\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3082\u30011\u672C\u306E\u5B9F\u7DDA\u306E\u4E2D\u592E\u7DDA\u3092\u6A2A\u5207\u308BU\u30BF\u30FC\u30F3\u3092\u7981\u6B62\u3057\u3066\u3044\u307E\u3059\u3002"},L04:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u30011\u672C\u7DDA\u3067\u56F2\u307E\u308C\u305F\u30DA\u30A4\u30F3\u30C8\u30A2\u30A4\u30E9\u30F3\u30C9\uFF08\u5C0E\u6D41\u5E2F\uFF09\u306E\u4E0A\u3092\u3001\u53F3\u5DE6\u6298\u30EC\u30FC\u30F3\u306B\u5165\u308B\u305F\u3081\u306B\u8D70\u308C\u308B\u8DDD\u96E2\u306F\uFF1F",options:["\u6700\u592750\u30E1\u30FC\u30C8\u30EB","\u6700\u5927100\u30E1\u30FC\u30C8\u30EB","\u8D70\u3063\u3066\u306F\u3044\u3051\u306A\u3044"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u6700\u592750m\u3002\u9053\u8DEF\u3078\u306E\u51FA\u5165\u308A\u3001\u5C0E\u6D41\u5E2F\u306E\u76F4\u5F8C\u306B\u59CB\u307E\u308B\u53F3\u5DE6\u6298\u30EC\u30FC\u30F3\u3078\u306E\u9032\u5165\u3001\u307E\u305F\u306F\u659C\u3081\u99D0\u8ECA\u306E\u305F\u3081\u3067\u3059\u3002"},L05:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u30011\u8ECA\u7DDA\u306E\u9053\u8DEF\u304B\u3089\u66F2\u304C\u308B\u3068\u304D\u3001\u767D\u306E\u5B9F\u7DDA\u306E\u8DEF\u5074\u7DDA\u3092\u8D8A\u3048\u3066\u8D70\u308C\u308B\u8DDD\u96E2\u306F\uFF1F",options:["\u6700\u592720\u30E1\u30FC\u30C8\u30EB","\u6700\u592750\u30E1\u30FC\u30C8\u30EB","\u6700\u5927100\u30E1\u30FC\u30C8\u30EB"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u5B9A\u3081\u3089\u308C\u305F\u5834\u5408\u306B\u3001\u767D\u306E\u5B9F\u7DDA\u306E\u8DEF\u5074\u7DDA\u3092\u8D8A\u3048\u3066\u6700\u5927100m\u8D70\u884C\u3067\u304D\u307E\u3059\u3002"},L06:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u3001\u9EC4\u8272\u306E\u8DEF\u5074\u7DDA\u306F\u4F55\u3092\u610F\u5473\u3057\u307E\u3059\u304B\uFF1F",options:["15\u5206\u307E\u3067\u99D0\u8ECA\u53EF","\u7DDA\u306E\u3042\u308B\u533A\u9593\u306F\u99D0\u505C\u8ECA\u7981\u6B62","\u30D0\u30B9\u30EC\u30FC\u30F3"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u8DEF\u5074\u7DDA\u304C\u9EC4\u8272\u306E\u5834\u5408\u3001\u305D\u306E\u7DDA\u304C\u3042\u308B\u533A\u9593\u306F\u99D0\u505C\u8ECA\u7981\u6B62\u3067\u3059\u3002"},L07:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u7E01\u77F3\u306E\u9EC4\u8272\u3044\u5B9F\u7DDA\u306F\u4F55\u3092\u610F\u5473\u3057\u307E\u3059\u304B\uFF1F",options:["\u505C\u8ECA\u7981\u6B62\uFF08\u7DCA\u6025\u6642\u3092\u9664\u304F\uFF09","\u8377\u3055\u3070\u304D\u5834","\u4F4F\u6C11\u5C02\u7528\u99D0\u8ECA"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u7E01\u77F3\u306E\u5B9F\u7DDA\u306F\u3001\u7DCA\u6025\u6642\u3092\u9664\u304D\u3053\u3053\u306B\u505C\u8ECA\u3057\u3066\u306F\u3044\u3051\u306A\u3044\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"},S01:{q:"\u4FE1\u53F7\u304C\u9EC4\u8272\u306B\u5909\u308F\u308A\u307E\u3057\u305F\u3002\u5B89\u5168\u306B\u6B62\u307E\u308C\u307E\u3059\u3002\u3069\u3046\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u304B\uFF1F",options:["\u52A0\u901F\u3057\u3066\u4EA4\u5DEE\u70B9\u3092\u901A\u904E\u3059\u308B","\u6B62\u307E\u308B","\u30AF\u30E9\u30AF\u30B7\u30E7\u30F3\u3092\u9CF4\u3089\u3057\u3066\u9032\u3080"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u9EC4\u8272\u306F\u6B62\u307E\u308C\u306E\u610F\u5473\u3067\u3059\u3002\u505C\u6B62\u7DDA\u306E\u624B\u524D\u3067\u5B89\u5168\u306B\u6B62\u307E\u308C\u306A\u3044\u5834\u5408\u306E\u307F\u901A\u904E\u3067\u304D\u307E\u3059\u3002\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u5B89\u5168\u3067\u306A\u3044\u5834\u5408\u3092\u9664\u304D\u3001\u9EC4\u8272\u3067\u6B62\u307E\u3089\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"},S02:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u8D64\u4FE1\u53F7\u3067\u5DE6\u6298\u3067\u304D\u308B\u306E\u306F\u3069\u3093\u306A\u3068\u304D\u3067\u3059\u304B\uFF1F",options:["\u5B89\u5168\u306A\u3089\u3044\u3064\u3067\u3082","\u300Cleft turn on red permitted after stopping\u300D\u306E\u6A19\u8B58\u304C\u3042\u308B\u5834\u6240\u3067\u3001\u4E00\u6642\u505C\u6B62\u3057\u305F\u5F8C\u3060\u3051","\u6C7A\u3057\u3066\u3067\u304D\u306A\u3044"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u3053\u306E\u6A19\u8B58\u304C\u3042\u308B\u5834\u5408\u3001\u8D64\u4FE1\u53F7\u3067\u505C\u6B62\u3057\u3066\u304B\u3089\u3001\u5B89\u5168\u3092\u78BA\u8A8D\u3057\u3066\u5DE6\u6298\u3057\u307E\u3059\u3002\u53F3\u304B\u3089\u6765\u308B\u8ECA\u306B\u306F\u9053\u3092\u8B72\u308A\u307E\u3059\u3002"},S03:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u4FE1\u53F7\u624B\u524D\u306E\u81EA\u8EE2\u8ECA\u5F85\u6A5F\u30A8\u30EA\u30A2\u306B\u81EA\u52D5\u8ECA\u304C\u505C\u6B62\u3057\u3066\u3088\u3044\u3067\u3059\u304B\uFF1F",options:["\u81EA\u8EE2\u8ECA\u304C\u3044\u306A\u3051\u308C\u3070\u3088\u3044","\u3044\u3051\u306A\u3044","\u5DE6\u6298\u3059\u308B\u3068\u304D\u3060\u3051\u3088\u3044"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u8ECA\u4E21\u306F\u3001\u4FE1\u53F7\u624B\u524D\u306E\u81EA\u8EE2\u8ECA\u7528\u306B\u78BA\u4FDD\u3055\u308C\u305F\u30A8\u30EA\u30A2\u306B\u505C\u6B62\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002"},S04:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u8DEF\u80A9\u304B\u3089\u767A\u9032\u3059\u308B\u524D\u306B\u3001\u65B9\u5411\u6307\u793A\u5668\u3092\u4F55\u79D2\u4EE5\u4E0A\u51FA\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u304B\uFF1F",options:["2\u79D2\u4EE5\u4E0A","5\u79D2\u4EE5\u4E0A","\u6C7A\u307E\u308A\u306F\u306A\u3044"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u8DEF\u80A9\u3084\u99D0\u8ECA\u30B9\u30DA\u30FC\u30B9\u304B\u3089\u767A\u9032\u3059\u308B\u524D\u306B\u30015\u79D2\u4EE5\u4E0A\u5408\u56F3\u3092\u51FA\u3055\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"},E01:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u5236\u9650\u901F\u5EA6\u306F60km/h\u3067\u3059\u3002\u8D64\u3068\u9752\u306E\u706F\u706B\u3092\u70B9\u6EC5\u3055\u305B\u3066\u505C\u8ECA\u4E2D\u306E\u30D1\u30C8\u30AB\u30FC\u306E\u6A2A\u3092\u901A\u308A\u307E\u3059\u3002\u3069\u3046\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u304B\uFF1F",options:["40km/h\u307E\u3067\u6E1B\u901F\u3059\u308B","60km/h\u306E\u307E\u307E\u8D70\u308B","\u505C\u6B62\u3057\u3066\u5F85\u3064"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u5236\u9650\u901F\u5EA6\u304C80km/h\u4EE5\u4E0B\u306A\u308940km/h\u307E\u3067\u6E1B\u901F\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u300280km/h\u3092\u8D85\u3048\u308B\u5834\u5408\u306F\u3001\u5B89\u5168\u306B\u6E1B\u901F\u3057\u3066\u9032\u8DEF\u3092\u7A7A\u3051\u307E\u3059\u3002"},T01:{q:"\u30D3\u30AF\u30C8\u30EA\u30A2\u3067\u3001\u30C8\u30E9\u30E0\u304C\u9053\u8DEF\u8107\u306E\u505C\u7559\u6240\u306B\u6B62\u307E\u308A\u3001\u4E57\u5BA2\u304C\u4E57\u308A\u964D\u308A\u3057\u3066\u3044\u307E\u3059\u3002\u3069\u3046\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u304B\uFF1F",options:["\u5DE6\u5074\u3092\u3086\u3063\u304F\u308A\u901A\u904E\u3059\u308B","\u30C8\u30E9\u30E0\u306E\u5F8C\u7AEF\u306E\u5F8C\u308D\u3067\u505C\u6B62\u3059\u308B","\u53F3\u5074\u304B\u3089\u8FFD\u3044\u8D8A\u3059"],why:"\u30D3\u30AF\u30C8\u30EA\u30A2\uFF1A\u30C8\u30E9\u30E0\u306E\u5F8C\u7AEF\u306E\u5F8C\u308D\u3067\u505C\u6B62\u3057\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u30C9\u30A2\u304C\u9589\u307E\u308A\u3001\u9053\u8DEF\u306B\u6B69\u884C\u8005\u304C\u3044\u306A\u304F\u306A\u3063\u3066\u304B\u3089\u300110km/h\u3067\u901A\u904E\u3067\u304D\u307E\u3059\u3002"},T02:{q:"\u30D3\u30AF\u30C8\u30EA\u30A2\u3067\u3001\u53F3\u6298\u3059\u308B\u3068\u304D\u306B\u30C8\u30E9\u30E0\u30EC\u30FC\u30F3\u3092\u8D70\u308C\u308B\u8DDD\u96E2\u306F\uFF1F",options:["\u6700\u592750\u30E1\u30FC\u30C8\u30EB","\u6700\u5927100\u30E1\u30FC\u30C8\u30EB","\u5236\u9650\u306A\u3057"],why:"\u30D3\u30AF\u30C8\u30EA\u30A2\uFF1A\u53F3\u6298\u3059\u308B\u3068\u304D\u3001\u6700\u592750\u30E1\u30FC\u30C8\u30EB\u3067\u3059\u3002"},T03:{q:"\u30E1\u30EB\u30DC\u30EB\u30F3\u306E\u300Chook turn\u300D\u6A19\u8B58\u304C\u3042\u308B\u4EA4\u5DEE\u70B9\u3067\u53F3\u6298\u3057\u307E\u3059\u3002\u3069\u306E\u8ECA\u7DDA\u304B\u3089\u59CB\u3081\u3001\u3044\u3064\u66F2\u304C\u308A\u307E\u3059\u304B\uFF1F",options:["\u53F3\u8ECA\u7DDA\u3002\u81EA\u5206\u306E\u4FE1\u53F7\u304C\u9752\u306E\u3068\u304D","\u5DE6\u8ECA\u7DDA\u3002\u9032\u5165\u3059\u308B\u9053\u8DEF\u306E\u4FE1\u53F7\u304C\u9752\u306B\u5909\u308F\u3063\u305F\u3068\u304D","\u4E2D\u592E\u8ECA\u7DDA\u3002\u9EC4\u8272\u4FE1\u53F7\u306E\u3068\u304D"],why:"\u30D3\u30AF\u30C8\u30EA\u30A2\uFF1A\u5DE6\u8ECA\u7DDA\u306B\u5165\u308A\u3001\u53F3\u306E\u5408\u56F3\u3092\u51FA\u3057\u3001\u4EA4\u5DEE\u70B9\u306E\u5DE6\u7AEF\u306B\u5BC4\u3063\u3066\u3001\u9032\u5165\u3057\u305F\u3044\u9053\u8DEF\u306E\u4FE1\u53F7\u304C\u9752\u306B\u5909\u308F\u308B\u307E\u3067\u5F85\u3061\u307E\u3059\u3002"},P01:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u3001\u643A\u5E2F\u96FB\u8A71\u306E\u9055\u53CD\u306B\u9055\u53CD\u70B9\u6570\u304C2\u500D\u306B\u306A\u308B\u306E\u306F\u3044\u3064\u3067\u3059\u304B\uFF1F",options:["\u795D\u65E5\u3060\u3051","\u524D\u56DE\u306E\u9055\u53CD\u304B\u30891\u5E74\u4EE5\u5185\u306E2\u56DE\u76EE\u4EE5\u964D\u306E\u9055\u53CD","\u6BCE\u56DE"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A1\u5E74\u4EE5\u5185\u306E2\u56DE\u76EE\u4EE5\u964D\u306E\u7279\u5B9A\u306E\u9055\u53CD\u306F\u70B9\u6570\u304C2\u500D\u306B\u306A\u308A\u307E\u3059\u3002\u5BFE\u8C61\u306F20km/h\u8D85\u306E\u901F\u5EA6\u8D85\u904E\u3001\u643A\u5E2F\u96FB\u8A71\u3001\u30B7\u30FC\u30C8\u30D9\u30EB\u30C8\u3001\u30C1\u30E3\u30A4\u30EB\u30C9\u30B7\u30FC\u30C8\u3001\u4E8C\u8F2A\u8ECA\u306E\u30D8\u30EB\u30E1\u30C3\u30C8\u3067\u3059\u3002"},X01:{q:"\u4E00\u6642\u6EDE\u5728\u30D3\u30B6\u3067\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306B6\u304B\u6708\u3092\u8D85\u3048\u3066\u4F4F\u3080\u4E88\u5B9A\u3067\u3059\u3002\u6D77\u5916\u514D\u8A31\u3067\u3069\u306E\u304F\u3089\u3044\u904B\u8EE2\u3067\u304D\u307E\u3059\u304B\uFF1F",options:["\u514D\u8A31\u304C\u6709\u52B9\u306A\u9650\u308A\u305A\u3063\u3068","\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306B\u4F4F\u307F\u59CB\u3081\u3066\u304B\u3089\u6700\u95776\u304B\u6708","3\u304B\u6708"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u7D99\u7D9A\u3057\u30666\u304B\u6708\u4EE5\u4E0A\u4F4F\u3080\u4E88\u5B9A\u306E\u4E00\u6642\u6EDE\u5728\u30D3\u30B6\u4FDD\u6301\u8005\u306F\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u514D\u8A31\u304C\u5FC5\u8981\u3067\u3059\u30026\u304B\u6708\u306F\u3001\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u4F4F\u6240\u3092\u53D6\u5F97\u30FB\u5909\u66F4\u30FB\u4E3B\u306A\u5C45\u4F4F\u5730\u3068\u3057\u3066\u4F7F\u7528\u3057\u305F\u65E5\u304B\u3089\u6570\u3048\u307E\u3059\u3002"},X02:{q:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u30013\u304B\u6708\u4F4F\u3093\u3060\u3089\u6D77\u5916\u514D\u8A31\u3067\u904B\u8EE2\u3067\u304D\u306A\u304F\u306A\u308B\u306E\u306F\u8AB0\u3067\u3059\u304B\uFF1F",options:["\u6D77\u5916\u514D\u8A31\u3092\u6301\u3064\u5168\u54E1","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u5E02\u6C11\u3068 resident visa\uFF08\u6C38\u4F4F\u30D3\u30B6\uFF09\u4FDD\u6301\u8005","\u89B3\u5149\u5BA2\u3060\u3051"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A3\u304B\u6708\u5236\u9650\u306F\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u5E02\u6C11\u3068 resident visa \u4FDD\u6301\u8005\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002resident visa \u306F\u6C38\u4F4F\u30D3\u30B6\u307E\u305F\u306F special category visa \u3067\u3001\u4E00\u6642\u6EDE\u5728\u30FB\u30D3\u30B8\u30CD\u30B9\u30FB\u5F8C\u898B\u4EBA\u30D3\u30B6\u306F\u542B\u307E\u308C\u307E\u305B\u3093\u3002"},X03:{q:"\u6D77\u5916\u514D\u8A31\u3067\u904B\u8EE2\u3057\u3066\u3044\u3066\u3001\u5B9F\u6280\u8A66\u9A13\u306B\u843D\u3061\u307E\u3057\u305F\u3002\u904B\u8EE2\u3057\u3066\u5E30\u308C\u307E\u3059\u304B\uFF1F",options:["\u5E30\u308C\u308B\u3002\u6D77\u5916\u514D\u8A31\u306F\u307E\u3060\u6709\u52B9","\u5E30\u308C\u306A\u3044\u3002\u6D77\u5916\u514D\u8A31\u3067\u306F\u3082\u3046\u904B\u8EE2\u3067\u304D\u306A\u3044","\u5E30\u308C\u308B\u3002\u3042\u30687\u65E5\u9593\u306F\u904B\u8EE2\u3067\u304D\u308B"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u5B9F\u6280\u8A66\u9A13\u306B\u843D\u3061\u308B\u3068\u3001\u6D77\u5916\u514D\u8A31\u3067\u306E\u904B\u8EE2\u3092\u518D\u958B\u3067\u304D\u307E\u305B\u3093\u3002\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\uFF1A\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u5B9F\u6280\u8A66\u9A13\u306B\u843D\u3061\u308B\u3068\u3001\u904B\u8EE2\u8CC7\u683C\u304C\u53D6\u308A\u6D88\u3055\u308C\u307E\u3059\u3002"},X04:{q:"\u6D77\u5916\u306E\u300C\u4EEE\u514D\u8A31\uFF08\u5B66\u7FD2\u8005\u514D\u8A31\uFF09\u300D\u3067\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3092\u8A2A\u308C\u3066\u3044\u307E\u3059\u3002\u5FC5\u8981\u306A\u306E\u306F\u3069\u308C\u3067\u3059\u304B\uFF1F",options:["\u7279\u306B\u4F55\u3082\u306A\u3044","\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u6B63\u898F\u514D\u8A31\u3092\u6301\u3064\u540C\u4E57\u6307\u5C0E\u8005\u3001\u524D\u5F8C\u306EL\u30D7\u30EC\u30FC\u30C8\u3001\u30A2\u30EB\u30B3\u30FC\u30EB\u30BC\u30ED","L\u30D7\u30EC\u30FC\u30C8\u3060\u3051"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u5E38\u306B\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2\u306E\u6B63\u898F\uFF08\u30AF\u30E9\u30B9C\uFF09\u514D\u8A31\u4FDD\u6301\u8005\u306E\u6307\u5C0E\u3092\u53D7\u3051\u3001\u8ECA\u306E\u524D\u5F8C\u306BL\u30D7\u30EC\u30FC\u30C8\u3092\u8868\u793A\u3057\u3001\u8840\u4E2D\u30A2\u30EB\u30B3\u30FC\u30EB\u6FC3\u5EA6\u306F\u30BC\u30ED\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"},X05:{q:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3067\u3001\u9055\u53CD\u70B9\u6570\u304C\u4F55\u70B9\u306B\u306A\u308B\u3068\u8A2A\u554F\u8005\u3068\u3057\u3066\u306E\u904B\u8EE2\u8CC7\u683C\u304C\u6C38\u4E45\u306B\u53D6\u308A\u6D88\u3055\u308C\u307E\u3059\u304B\uFF1F",options:["4\u70B9","13\u70B9","20\u70B9"],why:"\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\uFF1A\u9055\u53CD\u70B9\u6570\u304C13\u70B9\u306B\u9054\u3059\u308B\u3068\u3001Transport for NSW \u306F\u8A2A\u554F\u8005\u3068\u3057\u3066\u306E\u904B\u8EE2\u8CC7\u683C\u3092\u6C38\u4E45\u306B\u53D6\u308A\u6D88\u3057\u307E\u3059\u3002"},X06:{q:"\u65E5\u672C\u306E\u666E\u901A\u81EA\u52D5\u8ECA\u514D\u8A31\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u307E\u305F\u306F\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u514D\u8A31\u306B\u5207\u308A\u66FF\u3048\u308B\u306E\u306B\u3001\u5B66\u79D1\u8A66\u9A13\u3068\u5B9F\u6280\u8A66\u9A13\u306F\u5FC5\u8981\u3067\u3059\u304B\uFF1F",options:["\u4E21\u65B9\u5FC5\u8981","\u4E0D\u8981\u3002\u65E5\u672C\u306F\u4E21\u5DDE\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u63B2\u8F09\u3055\u308C\u3066\u3044\u308B","\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3060\u3051\u5FC5\u8981"],why:"2026\u5E7411\u670810\u65E5\u306B\u53D6\u5F97\u3057\u305F\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3068\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306E\u4E21\u65B9\u306B\u3001\u65E5\u672C\u304C\u63B2\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002"},X07:{q:"\u97D3\u56FD\u307E\u305F\u306F\u53F0\u6E7E\u306E\u666E\u901A\u81EA\u52D5\u8ECA\u514D\u8A31\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u30022026\u5E7411\u670810\u65E5\u6642\u70B9\u306E\u516C\u5F0F\u30DA\u30FC\u30B8\u3068\u4E00\u81F4\u3059\u308B\u306E\u306F\u3069\u308C\u3067\u3059\u304B\uFF1F",options:["\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u306F\u627F\u8A8D\uFF08\u8A66\u9A13\u306A\u3057\uFF09\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306B\u306F\u672A\u63B2\u8F09\uFF08\u8A66\u9A13\u3042\u308A\uFF09","\u4E21\u5DDE\u3067\u627F\u8A8D","\u3069\u3061\u3089\u306E\u5DDE\u3067\u3082\u672A\u627F\u8A8D"],why:"\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u30DA\u30FC\u30B8\uFF08\u6700\u7D42\u66F4\u65B02026\u5E7410\u670831\u65E5\uFF09\u306F\u97D3\u56FD\u3068\u53F0\u6E7E\u3092\u627F\u8A8D\u56FD\u3068\u3057\u3066\u63B2\u8F09\u3057\u3066\u3044\u307E\u3059\u3002\u540C\u3058\u65E5\u306B\u53D6\u5F97\u3057\u305F\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u306E\u30DA\u30FC\u30B8\u306B\u306F\u63B2\u8F09\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},X08:{q:"\u4E2D\u56FD\u307E\u305F\u306F\u9999\u6E2F\u306E\u666E\u901A\u81EA\u52D5\u8ECA\u514D\u8A31\u3092\u6301\u3063\u3066\u3044\u307E\u3059\u3002\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3068\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u3067\u5207\u308A\u66FF\u3048\u308B\u306B\u306F\u4F55\u304C\u5FC5\u8981\u3067\u3059\u304B\uFF1F",options:["\u4F55\u3082\u4E0D\u8981\u3002\u81EA\u52D5\u7684\u306B\u5207\u308A\u66FF\u3048\u3089\u308C\u308B","\u5B66\u79D1\u8A66\u9A13\u3068\u5B9F\u6280\u8A66\u9A13\u306B\u5408\u683C\u3059\u308B\u3053\u3068","\u8996\u529B\u691C\u67FB\u3060\u3051"],why:"2026\u5E7411\u670810\u65E5\u306B\u53D6\u5F97\u3057\u305F\u30CB\u30E5\u30FC\u30B5\u30A6\u30B9\u30A6\u30A7\u30FC\u30EB\u30BA\u3068\u30AF\u30A4\u30FC\u30F3\u30BA\u30E9\u30F3\u30C9\u306E\u627F\u8A8D\u56FD\u30EA\u30B9\u30C8\u306E\u3069\u3061\u3089\u306B\u3082\u3001\u4E2D\u56FD\u3068\u9999\u6E2F\u306F\u63B2\u8F09\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u8A66\u9A13\u304C\u5FC5\u8981\u3067\u3059\u3002"}}};var gh={ui:{title:"\uD638\uC8FC \uAD50\uD1B5\uBC95\uADDC \uCC4C\uB9B0\uC9C0",tagline:"\uAC19\uC740 \uC6B4\uC804 \uB3D9\uC791\uC774\uB77C\uB3C4 \uC8FC\uAC00 \uBC14\uB00C\uBA74 \uBC95\uC774 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4. \uC6B4\uC804\uD558\uAE30 \uC804\uC5D0 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4, \uD038\uC990\uB79C\uB4DC, \uBE45\uD1A0\uB9AC\uC544\uC758 \uAD50\uD1B5\uBC95\uADDC\uB97C \uC775\uD788\uC138\uC694.",modeRun:"\uC8FC\uBCC4 \uCC4C\uB9B0\uC9C0",modeRunDesc:"\uC8FC \uD558\uB098\uB97C \uC120\uD0DD\uD558\uC138\uC694. \uCD5C\uB300 10\uBB38\uC81C, \uC0DD\uBA85 3\uAC1C.",modeTrap:"\uC8FC \uACBD\uACC4 \uD568\uC815",modeTrapDesc:"\uC6B4\uC804 \uB3D9\uC791 \uD558\uB098. \uD569\uBC95\uC778 \uC8FC\uB97C \uBAA8\uB450 \uB204\uB974\uC138\uC694.",modeLicence:"\uBA74\uD5C8 \uD655\uC778",modeLicenceDesc:"\uD574\uC678 \uBA74\uD5C8\uC5D0 \uB300\uD574 \uACF5\uC2DD \uD398\uC774\uC9C0\uAC00 \uB9D0\uD558\uB294 \uB0B4\uC6A9.",pickState:"\uC8FC \uC120\uD0DD",lives:"\uC0DD\uBA85",score:"\uC810\uC218",question:"\uBB38\uC81C",next:"\uB2E4\uC74C",finish:"\uACB0\uACFC \uBCF4\uAE30",correct:"\uC815\uB2F5",wrong:"\uC624\uB2F5",source:"\uACF5\uC2DD \uCD9C\uCC98",official:"\uACF5\uC2DD \uC601\uC5B4 \uC6D0\uBB38",resultTitle:"\uACB0\uACFC",gameOver:"\uC0DD\uBA85\uC744 \uBAA8\uB450 \uC783\uC5C8\uC2B5\uB2C8\uB2E4",weakest:"\uBCF5\uC2B5\uD560 \uC8FC\uC81C",playAgain:"\uB2E4\uC2DC \uD558\uAE30",home:"\uD648",trapPrompt:"\uD569\uBC95\uC778 \uC8FC\uB97C \uBAA8\uB450 \uB204\uB974\uC138\uC694. \uC5B4\uB290 \uC8FC\uC5D0\uC11C\uB3C4 \uD569\uBC95\uC774 \uC544\uB2C8\uBA74 \uC544\uBB34\uAC83\uB3C4 \uC120\uD0DD\uD558\uC9C0 \uB9C8\uC138\uC694.",check:"\uC815\uB2F5 \uD655\uC778",legal:"\uD569\uBC95",illegal:"\uBD88\uBC95",licState:"\uC8FC",licCountry:"\uBA74\uD5C8 \uBC1C\uAE09 \uAD6D\uAC00\xB7\uC9C0\uC5ED",licStatus:"\uCCB4\uB958 \uC790\uACA9",statusTemp:"\uC784\uC2DC \uBE44\uC790",statusPerm:"\uC601\uC8FC\uAD8C\uC790 \uB610\uB294 \uC2DC\uBBFC\uAD8C\uC790",licDuration:"\uC774 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD560 \uC218 \uC788\uB294 \uAE30\uAC04",licTests:"\uC804\uD658\uC5D0 \uD544\uC694\uD55C \uC2DC\uD5D8",disclaimer:"\uD559\uC2B5\uC6A9 \uAC8C\uC784\uC785\uB2C8\uB2E4. \uACF5\uC2DD \uC2DC\uD5D8\uC774\uB098 \uBC95\uB960 \uC790\uBB38\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uC6B4\uC804\uD558\uAE30 \uC804\uC5D0 \uBC18\uB4DC\uC2DC \uACF5\uC2DD \uCD9C\uCC98\uB97C \uD655\uC778\uD558\uC138\uC694.",verified:"\uACF5\uC2DD \uD398\uC774\uC9C0\uC640 \uB300\uC870\uD55C \uB0A0\uC9DC",timeSensitive:"\uC774 \uADDC\uC815\uC740 \uCD5C\uADFC\uC5D0 \uBCC0\uACBD\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uACF5\uC2DD \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uD655\uC778\uD558\uC138\uC694.",language:"\uC5B8\uC5B4"},states:{NSW:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4",QLD:"\uD038\uC990\uB79C\uB4DC",VIC:"\uBE45\uD1A0\uB9AC\uC544"},categories:{turning:"\uD68C\uC804\uACFC \uC720\uD134",lines:"\uCC28\uC120\uACFC \uB178\uBA74 \uD45C\uC2DC",parking:"\uC815\uCC28\uC640 \uC8FC\uCC28",signals:"\uC2E0\uD638\uC640 \uBC29\uD5A5\uC9C0\uC2DC\uB4F1",safety:"\uAE34\uAE09 \uCC28\uB7C9",trams:"\uD2B8\uB7A8\uACFC \uD6C5\uD134",penalties:"\uBC8C\uCE59",licence:"\uD574\uC678 \uBA74\uD5C8"},countries:{JP:"\uC77C\uBCF8",KR:"\uB300\uD55C\uBBFC\uAD6D",TW:"\uB300\uB9CC",HK:"\uD64D\uCF69",CN:"\uC911\uAD6D"},traps:{BT1:{q:"\uD45C\uC9C0\uD310\uC774 \uC804\uD600 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2E0\uD638\uB4F1\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uC5D0\uC11C \uC720\uD134\uD569\uB2C8\uB2E4. \uC5B4\uB290 \uC8FC\uC5D0\uC11C \uD569\uBC95\uC77C\uAE4C\uC694?",why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC640 \uD038\uC990\uB79C\uB4DC\uC5D0\uC11C\uB294 'U-turn permitted' \uD45C\uC9C0\uD310\uC774 \uC788\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uBE45\uD1A0\uB9AC\uC544\uC5D0\uC11C\uB294 'no U-turn' \uB610\uB294 'no right turn' \uD45C\uC9C0\uD310\uC774 \uC5C6\uC73C\uBA74 \uC720\uD134\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},BT2:{q:"\uC774\uC911 \uC2E4\uC120\uC744 \uB118\uC5B4 \uBC18\uB300\uD3B8 \uC9C4\uC785\uB85C(\uB4DC\uB77C\uC774\uBE0C\uC6E8\uC774)\uB85C \uB4E4\uC5B4\uAC11\uB2C8\uB2E4. \uC5B4\uB290 \uC8FC\uC5D0\uC11C \uD569\uBC95\uC77C\uAE4C\uC694?",why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC774\uC911 \uC2E4\uC120\uC744 \uB118\uC5B4 \uCD5C\uB2E8 \uACBD\uB85C\uB85C \uB3C4\uB85C\uC5D0 \uC9C4\uC785\uD558\uAC70\uB098 \uB3C4\uB85C\uC5D0\uC11C \uB098\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD038\uC990\uB79C\uB4DC: \uC790\uC804\uAC70\uB97C \uC548\uC804\uD558\uAC8C \uCD94\uC6D4\uD560 \uB54C\uB97C \uC81C\uC678\uD558\uACE0 \uC774\uC911 \uC2E4\uC120\uC744 \uB118\uC5B4\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4."},BT3:{q:"\uB2E8\uC77C \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uC5B4 \uC720\uD134\uD569\uB2C8\uB2E4. \uC5B4\uB290 \uC8FC\uC5D0\uC11C \uD569\uBC95\uC77C\uAE4C\uC694?",why:"\uC5B4\uB290 \uC8FC\uC5D0\uC11C\uB3C4 \uD569\uBC95\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4, \uD038\uC990\uB79C\uB4DC, \uBE45\uD1A0\uB9AC\uC544 \uBAA8\uB450 \uB2E8\uC77C \uC2E4\uC120\uC744 \uB118\uB294 \uC720\uD134\uC744 \uAE08\uC9C0\uD569\uB2C8\uB2E4."},BT4:{q:"\uC774\uC911 \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uC5B4 \uC720\uD134\uD569\uB2C8\uB2E4. \uC5B4\uB290 \uC8FC\uC5D0\uC11C \uD569\uBC95\uC77C\uAE4C\uC694?",why:"\uC5B4\uB290 \uC8FC\uC5D0\uC11C\uB3C4 \uD569\uBC95\uC774 \uC544\uB2D9\uB2C8\uB2E4. \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4, \uD038\uC990\uB79C\uB4DC, \uBE45\uD1A0\uB9AC\uC544 \uBAA8\uB450 \uC774\uC911 \uC2E4\uC120\uC744 \uB118\uB294 \uC720\uD134\uC744 \uAE08\uC9C0\uD569\uB2C8\uB2E4."}},licence:{dur_nsw_temp:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0 6\uAC1C\uC6D4 \uC774\uC0C1 \uAC70\uC8FC\uD560 \uACC4\uD68D\uC774\uB77C\uBA74 \uCD5C\uB300 6\uAC1C\uC6D4\uC785\uB2C8\uB2E4. \uADF8 \uC774\uD6C4\uC5D0\uB294 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uBA74\uD5C8\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. 6\uAC1C\uC6D4\uC740 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uC8FC\uC18C\uB97C \uCDE8\uB4DD, \uBCC0\uACBD\uD558\uAC70\uB098 \uC8FC \uAC70\uC8FC\uC9C0\uB85C \uC0AC\uC6A9\uD55C \uB0A0\uBD80\uD130 \uACC4\uC0B0\uD569\uB2C8\uB2E4.",dur_nsw_perm:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0 \uAC70\uC8FC\uD55C \uC9C0 3\uAC1C\uC6D4 \uC774\uB0B4\uC5D0 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uBA74\uD5C8\uB97C \uCDE8\uB4DD\uD574\uC57C \uD569\uB2C8\uB2E4.",dur_qld_temp:"\uD038\uC990\uB79C\uB4DC\uC758 3\uAC1C\uC6D4 \uC81C\uD55C\uC740 \uD638\uC8FC \uC2DC\uBBFC\uAD8C\uC790\uC640 resident visa(\uC601\uC8FC \uBE44\uC790) \uC18C\uC9C0\uC790\uC5D0\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uC784\uC2DC \uBE44\uC790\uB294 resident visa\uAC00 \uC544\uB2C8\uBBC0\uB85C \uBC29\uBB38\uC790\uB294 \uC720\uD6A8\uD55C \uD574\uC678 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",dur_qld_perm:"\uD038\uC990\uB79C\uB4DC\uC5D0 3\uAC1C\uC6D4 \uAC70\uC8FC\uD558\uBA74 \uD574\uC678 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD560 \uC790\uACA9\uC774 \uB05D\uB0A9\uB2C8\uB2E4.",dur_vic:"\uBE45\uD1A0\uB9AC\uC544\uC5D0\uC11C 6\uAC1C\uC6D4\uC744 \uB118\uACA8 \uC6B4\uC804\uD558\uB824\uBA74 \uD574\uC678 \uBA74\uD5C8\uB97C \uBE45\uD1A0\uB9AC\uC544 \uBA74\uD5C8\uB85C \uC804\uD658\uD574\uC57C \uD569\uB2C8\uB2E4.",test_nsw_yes:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uC788\uC74C: \uC2B9\uC6A9\uCC28 \uBA74\uD5C8\uB294 \uD544\uAE30\uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8\uC774 \uD544\uC694 \uC5C6\uC2B5\uB2C8\uB2E4.",test_nsw_no:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uC5C6\uC74C: \uD544\uAE30\uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8\uC5D0 \uD569\uACA9\uD574\uC57C \uD569\uB2C8\uB2E4.",test_qld_yes:"\uD038\uC990\uB79C\uB4DC \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uC788\uC74C: \uC2B9\uC6A9\uCC28 \uBA74\uD5C8\uB294 \uAD50\uD1B5\uBC95\uADDC \uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8\uC774 \uD544\uC694 \uC5C6\uC2B5\uB2C8\uB2E4.",test_qld_no:"\uD038\uC990\uB79C\uB4DC \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uC5C6\uC74C: \uAD50\uD1B5\uBC95\uADDC \uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8\uC5D0 \uD569\uACA9\uD574\uC57C \uD569\uB2C8\uB2E4.",test_vic_full:"VicRoads \uC804\uD658 \uD45C\uC5D0\uC11C FULL\uB85C \uBD84\uB958\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD655\uC778\uD55C \uD398\uC774\uC9C0 \uBCF8\uBB38\uC5D0\uB294 \uC2DC\uD5D8 \uC694\uAC74\uC774 \uC801\uD600 \uC788\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uD310\uB2E8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. VicRoads \uD655\uC778 \uB3C4\uAD6C\uB97C \uC774\uC6A9\uD558\uC138\uC694.",test_vic_exp:"VicRoads \uC804\uD658 \uD45C\uC5D0\uC11C EXP\uB85C \uBD84\uB958\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD398\uC774\uC9C0\uC5D0\uB294 EXP\uAC00 \uD604\uC7AC \uBB34\uC5C7\uC744 \uC758\uBBF8\uD558\uB294\uC9C0 \uC801\uD600 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD310\uB2E8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. VicRoads \uD655\uC778 \uB3C4\uAD6C\uB97C \uC774\uC6A9\uD558\uC138\uC694.",test_vic_non:"VicRoads \uC804\uD658 \uD45C\uC5D0\uC11C NON\uC73C\uB85C \uBD84\uB958\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uD655\uC778\uD55C \uD398\uC774\uC9C0 \uBCF8\uBB38\uC5D0\uB294 \uC2DC\uD5D8 \uC694\uAC74\uC774 \uC801\uD600 \uC788\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uD310\uB2E8\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. VicRoads \uD655\uC778 \uB3C4\uAD6C\uB97C \uC774\uC6A9\uD558\uC138\uC694."},questions:{U01:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC2E0\uD638\uB4F1\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uC5D0 \uBA48\uCDB0 \uC788\uC2B5\uB2C8\uB2E4. \uC720\uD134 \uAD00\uB828 \uD45C\uC9C0\uD310\uC740 \uC804\uD600 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694?",options:["\uC720\uD134\uD55C\uB2E4. 'No U-turn' \uD45C\uC9C0\uD310\uC774 \uC548 \uBCF4\uC774\uB2C8 \uAD1C\uCC2E\uB2E4","\uC720\uD134\uD558\uC9C0 \uC54A\uB294\uB2E4. \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC758 \uC2E0\uD638 \uAD50\uCC28\uB85C\uC5D0\uC11C\uB294 'U-turn permitted' \uD45C\uC9C0\uD310\uC774 \uC788\uC5B4\uC57C \uD55C\uB2E4","\uC720\uD134\uD55C\uB2E4. \uB2E8, \uB179\uC0C9 \uD654\uC0B4\uD45C\uC77C \uB54C\uB9CC"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: 'U-turn permitted' \uD45C\uC9C0\uD310\uC774 \uC5C6\uC73C\uBA74 \uC2E0\uD638\uB4F1\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uC5D0\uC11C \uC720\uD134\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4."},U02:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uC720\uD134\uD558\uB824\uBA74 'U-turn permitted' \uD45C\uC9C0\uD310\uC774 \uC788\uC5B4\uC57C \uD558\uB294 \uACF3\uC740 \uC5B4\uB514\uC77C\uAE4C\uC694?",options:["\uC2E0\uD638\uB4F1\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uB9CC","\uC2E0\uD638\uB4F1, \uC5B4\uB9B0\uC774 \uD6A1\uB2E8\uB85C, \uCCA0\uB3C4 \uAC74\uB110\uBAA9, \uB178\uBA74 \uD45C\uC2DC \uD6A1\uB2E8\uBCF4\uB3C4, \uBCF4\uD589\uC790 \uD6A1\uB2E8\uBCF4\uB3C4","\uC5B4\uB514\uC5D0\uB3C4 \uD544\uC694 \uC5C6\uC74C. \uC548\uC804\uD558\uBA74 \uC5B8\uC81C\uB098 \uC720\uD134 \uAC00\uB2A5"],why:"\uD038\uC990\uB79C\uB4DC\uB294 \uC774 \uB2E4\uC12F \uACF3\uC744 \uBAA8\uB450 \uBA85\uC2DC\uD569\uB2C8\uB2E4. U-turn permitted \uD45C\uC9C0\uD310\uC774 \uC788\uC744 \uB54C\uB9CC \uC720\uD134\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},U03:{q:"\uBE45\uD1A0\uB9AC\uC544\uC5D0\uC11C \uC2E0\uD638\uB4F1\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. 'No U-turn' \uD45C\uC9C0\uD310\uB3C4 'No right turn' \uD45C\uC9C0\uD310\uB3C4 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD560\uAE4C\uC694?",options:["\uC548\uC804\uD558\uBA74 \uC720\uD134\uD55C\uB2E4. 'No U-turn'\uB3C4 'No right turn' \uD45C\uC9C0\uD310\uB3C4 \uC548 \uBCF4\uC778\uB2E4","\uC720\uD134\uD558\uC9C0 \uC54A\uB294\uB2E4. \uBE45\uD1A0\uB9AC\uC544\uB3C4 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uCC98\uB7FC 'U-turn permitted' \uD45C\uC9C0\uD310\uC774 \uD544\uC694\uD558\uB2E4","\uC624\uD6C4 10\uC2DC\uBD80\uD130 \uC624\uC804 6\uC2DC \uC0AC\uC774\uC5D0\uB9CC \uC720\uD134\uD55C\uB2E4"],why:"\uBE45\uD1A0\uB9AC\uC544: \uC2E0\uD638\uB4F1 \uC720\uBB34\uC640 \uAD00\uACC4\uC5C6\uC774 'no U-turn' \uD45C\uC9C0\uD310\uC774 \uC5C6\uC73C\uBA74 \uAD50\uCC28\uB85C\uC5D0\uC11C \uC720\uD134\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 'no right turn' \uD45C\uC9C0\uD310\uB3C4 \uC720\uD134\uC744 \uAE08\uC9C0\uD569\uB2C8\uB2E4."},U04:{q:"\uC720\uD134\uD558\uB294 \uC911\uC785\uB2C8\uB2E4. \uC606\uAE38\uC5D0\uC11C \uC88C\uD68C\uC804\uD574 \uB098\uC624\uB294 \uCC28\uAC00 \uC788\uACE0, \uADF8 \uCC28 \uC55E\uC5D0\uB294 GIVE WAY \uD45C\uC9C0\uD310\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB204\uAC00 \uC591\uBCF4\uD574\uC57C \uD560\uAE4C\uC694?",options:["\uC0C1\uB300 \uCC28. GIVE WAY \uD45C\uC9C0\uD310\uC774 \uC788\uC73C\uB2C8\uAE4C","\uB098. \uC720\uD134\uD558\uB294 \uC6B4\uC804\uC790\uB294 \uB2E4\uB978 \uBAA8\uB4E0 \uCC28\uB7C9\uACFC \uBCF4\uD589\uC790\uC5D0\uAC8C \uC591\uBCF4\uD574\uC57C \uD55C\uB2E4","\uB098\uC911\uC5D0 \uB3C4\uCC29\uD55C \uCABD"],why:"\uC138 \uC8FC \uBAA8\uB450 \uC720\uD134\uD558\uB294 \uC6B4\uC804\uC790\uAC00 \uB2E4\uB978 \uBAA8\uB4E0 \uCC28\uB7C9\uACFC \uBCF4\uD589\uC790\uC5D0\uAC8C \uC591\uBCF4\uD574\uC57C \uD55C\uB2E4\uACE0 \uADDC\uC815\uD569\uB2C8\uB2E4. \uBE45\uD1A0\uB9AC\uC544\uB294 \uC2AC\uB9BD \uB808\uC778\uC774\uB098 \uC606\uAE38\uC5D0\uC11C \uC88C\uD68C\uC804\uD558\uB294 \uCC28\uB7C9\uB3C4 \uD3EC\uD568\uB41C\uB2E4\uACE0 \uBA85\uC2DC\uD569\uB2C8\uB2E4."},L01:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC774\uC911 \uC2E4\uC120\uC744 \uB118\uC5B4 \uC9C4\uC785\uB85C(\uB4DC\uB77C\uC774\uBE0C\uC6E8\uC774)\uB85C \uB4E4\uC5B4\uAC08 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uAC00\uB2A5. \uCD5C\uB2E8 \uACBD\uB85C\uB85C \uB3C4\uB85C\uC5D0 \uC9C4\uC785\uD558\uAC70\uB098 \uB098\uAC08 \uB54C","\uC808\uB300 \uBD88\uAC00\uB2A5","\uCD94\uC6D4\uD560 \uB54C\uB9CC \uAC00\uB2A5"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC774\uC911 \uC2E4\uC120\uC744 \uB118\uC5B4 \uCD5C\uB2E8 \uACBD\uB85C\uB85C \uB3C4\uB85C\uC5D0 \uC9C4\uC785\uD558\uAC70\uB098 \uB3C4\uB85C\uC5D0\uC11C \uB098\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},L02:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uC774\uC911 \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uC5B4\uB3C4 \uB418\uB294 \uACBD\uC6B0\uB294 \uC5B8\uC81C\uC77C\uAE4C\uC694?",options:["\uC9C4\uC785\uB85C\uB85C \uB4E4\uC5B4\uAC08 \uB54C","\uB290\uB9B0 \uCC28\uB97C \uCD94\uC6D4\uD560 \uB54C","\uC790\uC804\uAC70\uB97C \uC548\uC804\uD558\uAC8C \uCD94\uC6D4\uD560 \uB54C\uB9CC"],why:"\uD038\uC990\uB79C\uB4DC: \uC790\uC804\uAC70\uB97C \uC548\uC804\uD558\uAC8C \uCD94\uC6D4\uD560 \uB54C\uB97C \uC81C\uC678\uD558\uACE0 \uC774\uC911 \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uC5B4\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4."},L03:{q:"\uB2E8\uC77C \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uC5B4 \uC720\uD134\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uAC00\uB2A5","\uBD88\uAC00\uB2A5","\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C\uB9CC \uAC00\uB2A5"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC640 \uD038\uC990\uB79C\uB4DC \uBAA8\uB450 \uB2E8\uC77C \uC2E4\uC120 \uC911\uC559\uC120\uC744 \uB118\uB294 \uC720\uD134\uC744 \uAE08\uC9C0\uD569\uB2C8\uB2E4."},L04:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uB2E8\uC77C \uC120\uC73C\uB85C \uB458\uB7EC\uC2F8\uC778 \uC548\uC804\uC9C0\uB300(\uD398\uC778\uD2B8 \uC544\uC77C\uB79C\uB4DC) \uC704\uB97C, \uD68C\uC804 \uCC28\uB85C\uC5D0 \uB4E4\uC5B4\uAC00\uAE30 \uC704\uD574 \uC5BC\uB9C8\uB098 \uC8FC\uD589\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uCD5C\uB300 50\uBBF8\uD130","\uCD5C\uB300 100\uBBF8\uD130","\uC8FC\uD589\uD560 \uC218 \uC5C6\uC74C"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uCD5C\uB300 50m. \uB3C4\uB85C \uC9C4\uCD9C\uC785, \uC548\uC804\uC9C0\uB300 \uBC14\uB85C \uB4A4\uC5D0\uC11C \uC2DC\uC791\uD558\uB294 \uD68C\uC804 \uCC28\uB85C \uC9C4\uC785, \uB610\uB294 \uC0AC\uC120 \uC8FC\uCC28\uB97C \uC704\uD55C \uACBD\uC6B0\uC785\uB2C8\uB2E4."},L05:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C 1\uCC28\uB85C \uB3C4\uB85C\uC5D0\uC11C \uD68C\uC804\uD560 \uB54C, \uD770\uC0C9 \uC2E4\uC120 \uAE38\uAC00\uC7A5\uC790\uB9AC\uC120\uC744 \uB118\uC5B4 \uC5BC\uB9C8\uB098 \uC8FC\uD589\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uCD5C\uB300 20\uBBF8\uD130","\uCD5C\uB300 50\uBBF8\uD130","\uCD5C\uB300 100\uBBF8\uD130"],why:"\uD038\uC990\uB79C\uB4DC: \uC815\uD574\uC9C4 \uACBD\uC6B0\uC5D0 \uD770\uC0C9 \uC2E4\uC120 \uAE38\uAC00\uC7A5\uC790\uB9AC\uC120\uC744 \uB118\uC5B4 \uCD5C\uB300 100m\uAE4C\uC9C0 \uC8FC\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},L06:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uB178\uB780\uC0C9 \uAE38\uAC00\uC7A5\uC790\uB9AC\uC120\uC740 \uBB34\uC5C7\uC744 \uC758\uBBF8\uD560\uAE4C\uC694?",options:["15\uBD84 \uC8FC\uCC28 \uAC00\uB2A5","\uC120\uC774 \uD45C\uC2DC\uB41C \uAD6C\uAC04\uC740 \uC815\uCC28\uC640 \uC8FC\uCC28 \uAE08\uC9C0","\uBC84\uC2A4 \uC804\uC6A9 \uCC28\uB85C"],why:"\uD038\uC990\uB79C\uB4DC: \uAE38\uAC00\uC7A5\uC790\uB9AC\uC120\uC774 \uB178\uB780\uC0C9\uC774\uBA74 \uC120\uC774 \uD45C\uC2DC\uB41C \uAD6C\uAC04\uC740 \uC815\uCC28\uC640 \uC8FC\uCC28\uAC00 \uAE08\uC9C0\uB429\uB2C8\uB2E4."},L07:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC5F0\uC11D\uC758 \uB178\uB780\uC0C9 \uC2E4\uC120\uC740 \uBB34\uC5C7\uC744 \uC758\uBBF8\uD560\uAE4C\uC694?",options:["\uC815\uCC28 \uAE08\uC9C0(\uAE34\uAE09 \uC0C1\uD669 \uC81C\uC678)","\uD558\uC5ED \uAD6C\uC5ED","\uAC70\uC8FC\uC790 \uC804\uC6A9 \uC8FC\uCC28"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC5F0\uC11D\uC758 \uC2E4\uC120\uC740 \uAE34\uAE09 \uC0C1\uD669\uC744 \uC81C\uC678\uD558\uACE0 \uC774\uACF3\uC5D0 \uC815\uCC28\uD574\uC11C\uB294 \uC548 \uB41C\uB2E4\uB294 \uB73B\uC785\uB2C8\uB2E4."},S01:{q:"\uC2E0\uD638\uAC00 \uD669\uC0C9\uC73C\uB85C \uBC14\uB00C\uC5C8\uACE0 \uC548\uC804\uD558\uAC8C \uBA48\uCD9C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C\uC694?",options:["\uAC00\uC18D\uD574\uC11C \uAD50\uCC28\uB85C\uB97C \uD1B5\uACFC\uD55C\uB2E4","\uBA48\uCD98\uB2E4","\uACBD\uC801\uC744 \uC6B8\uB9AC\uACE0 \uACC4\uC18D \uAC04\uB2E4"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uD669\uC0C9 \uC2E0\uD638\uB294 \uBA48\uCD94\uB77C\uB294 \uB73B\uC785\uB2C8\uB2E4. \uC815\uC9C0\uC120 \uC55E\uC5D0\uC11C \uC548\uC804\uD558\uAC8C \uBA48\uCD9C \uC218 \uC5C6\uC744 \uB54C\uB9CC \uD1B5\uACFC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD038\uC990\uB79C\uB4DC: \uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uB97C \uC81C\uC678\uD558\uACE0 \uD669\uC0C9 \uC2E0\uD638\uC5D0\uC11C \uBA48\uCDB0\uC57C \uD569\uB2C8\uB2E4."},S02:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC801\uC0C9 \uC2E0\uD638\uC5D0 \uC88C\uD68C\uC804\uD560 \uC218 \uC788\uB294 \uACBD\uC6B0\uB294 \uC5B8\uC81C\uC77C\uAE4C\uC694?",options:["\uC548\uC804\uD558\uBA74 \uC5B8\uC81C\uB4E0\uC9C0","'left turn on red permitted after stopping' \uD45C\uC9C0\uD310\uC774 \uC788\uB294 \uACF3\uC5D0\uC11C, \uC815\uC9C0\uD55C \uD6C4\uC5D0\uB9CC","\uC808\uB300 \uBD88\uAC00\uB2A5"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC774 \uD45C\uC9C0\uD310\uC774 \uC788\uC73C\uBA74 \uC801\uC0C9 \uC2E0\uD638\uC5D0\uC11C \uC815\uC9C0\uD55C \uB2E4\uC74C, \uC548\uC804\uD560 \uB54C \uC88C\uD68C\uC804\uD569\uB2C8\uB2E4. \uC624\uB978\uCABD\uC5D0\uC11C \uC624\uB294 \uCC28\uB7C9\uC5D0 \uC591\uBCF4\uD574\uC57C \uD569\uB2C8\uB2E4."},S03:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC2E0\uD638\uB4F1 \uC55E \uC790\uC804\uAC70 \uB300\uAE30 \uAD6C\uC5ED\uC5D0 \uC790\uB3D9\uCC28\uAC00 \uC815\uC9C0\uD574\uB3C4 \uB420\uAE4C\uC694?",options:["\uC790\uC804\uAC70\uAC00 \uC5C6\uC73C\uBA74 \uB41C\uB2E4","\uC548 \uB41C\uB2E4","\uC88C\uD68C\uC804\uD560 \uB54C\uB9CC \uB41C\uB2E4"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uCC28\uB7C9\uC740 \uC2E0\uD638\uB4F1 \uC55E\uC758 \uC790\uC804\uAC70 \uC804\uC6A9 \uB300\uAE30 \uAD6C\uC5ED\uC5D0 \uC815\uC9C0\uD574\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4."},S04:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uAE38\uAC00\uC5D0\uC11C \uCD9C\uBC1C\uD558\uAE30 \uC804\uC5D0 \uBC29\uD5A5\uC9C0\uC2DC\uB4F1\uC744 \uCD5C\uC18C \uBA87 \uCD08 \uCF1C\uC57C \uD560\uAE4C\uC694?",options:["\uCD5C\uC18C 2\uCD08","\uCD5C\uC18C 5\uCD08","\uAE30\uC900 \uC5C6\uC74C"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uAE38\uAC00\uB098 \uC8FC\uCC28 \uAD6C\uC5ED\uC5D0\uC11C \uCD9C\uBC1C\uD558\uAE30 \uC804\uC5D0 \uCD5C\uC18C 5\uCD08 \uB3D9\uC548 \uBC29\uD5A5\uC9C0\uC2DC\uB4F1\uC744 \uCF1C\uC57C \uD569\uB2C8\uB2E4."},E01:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uC81C\uD55C\uC18D\uB3C4\uB294 60km/h\uC785\uB2C8\uB2E4. \uC801\uC0C9\uACFC \uCCAD\uC0C9 \uACBD\uAD11\uB4F1\uC744 \uCF1C\uACE0 \uC815\uCC28\uD55C \uACBD\uCC30\uCC28 \uC606\uC744 \uC9C0\uB098\uAC11\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C\uC694?",options:["40km/h\uB85C \uAC10\uC18D\uD55C\uB2E4","60km/h\uB97C \uC720\uC9C0\uD55C\uB2E4","\uBA48\uCDB0\uC11C \uAE30\uB2E4\uB9B0\uB2E4"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC81C\uD55C\uC18D\uB3C4\uAC00 80km/h \uC774\uD558\uC774\uBA74 40km/h\uB85C \uAC10\uC18D\uD574\uC57C \uD569\uB2C8\uB2E4. 80km/h\uB97C \uB118\uC73C\uBA74 \uC548\uC804\uD558\uAC8C \uAC10\uC18D\uD558\uACE0 \uBE44\uCF1C \uAC00\uC57C \uD569\uB2C8\uB2E4."},T01:{q:"\uBE45\uD1A0\uB9AC\uC544\uC5D0\uC11C \uD2B8\uB7A8\uC774 \uAE38\uAC00 \uC815\uB958\uC7A5\uC5D0 \uBA48\uCDB0 \uC788\uACE0 \uC2B9\uAC1D\uC774 \uD0C0\uACE0 \uB0B4\uB9AC\uB294 \uC911\uC785\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C\uC694?",options:["\uC67C\uCABD\uC73C\uB85C \uCC9C\uCC9C\uD788 \uC9C0\uB098\uAC04\uB2E4","\uD2B8\uB7A8 \uB4A4\uCABD \uB05D \uB4A4\uC5D0\uC11C \uBA48\uCD98\uB2E4","\uC624\uB978\uCABD\uC73C\uB85C \uCD94\uC6D4\uD55C\uB2E4"],why:"\uBE45\uD1A0\uB9AC\uC544: \uD2B8\uB7A8 \uB4A4\uCABD \uB05D \uB4A4\uC5D0\uC11C \uBA48\uCDB0\uC57C \uD569\uB2C8\uB2E4. \uBB38\uC774 \uB2EB\uD788\uACE0 \uB3C4\uB85C\uC5D0 \uBCF4\uD589\uC790\uAC00 \uC5C6\uC744 \uB54C\uC5D0\uB9CC 10km/h\uB85C \uC9C0\uB098\uAC08 \uC218 \uC788\uC2B5\uB2C8\uB2E4."},T02:{q:"\uBE45\uD1A0\uB9AC\uC544\uC5D0\uC11C \uC6B0\uD68C\uC804\uD560 \uB54C \uD2B8\uB7A8 \uCC28\uB85C\uB97C \uC5BC\uB9C8\uB098 \uC8FC\uD589\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uCD5C\uB300 50\uBBF8\uD130","\uCD5C\uB300 100\uBBF8\uD130","\uC81C\uD55C \uC5C6\uC74C"],why:"\uBE45\uD1A0\uB9AC\uC544: \uC6B0\uD68C\uC804\uD560 \uB54C \uCD5C\uB300 50\uBBF8\uD130\uC785\uB2C8\uB2E4."},T03:{q:"\uBA5C\uBC84\uB978\uC758 'hook turn' \uD45C\uC9C0\uD310\uC774 \uC788\uB294 \uAD50\uCC28\uB85C\uC5D0\uC11C \uC6B0\uD68C\uC804\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uC5B4\uB290 \uCC28\uB85C\uC5D0\uC11C \uC2DC\uC791\uD558\uACE0 \uC5B8\uC81C \uD68C\uC804\uD560\uAE4C\uC694?",options:["\uC624\uB978\uCABD \uCC28\uB85C. \uB0B4 \uBC29\uD5A5 \uC2E0\uD638\uAC00 \uB179\uC0C9\uC77C \uB54C","\uC67C\uCABD \uCC28\uB85C. \uC9C4\uC785\uD558\uB824\uB294 \uB3C4\uB85C\uC758 \uC2E0\uD638\uAC00 \uB179\uC0C9\uC73C\uB85C \uBC14\uB014 \uB54C","\uAC00\uC6B4\uB370 \uCC28\uB85C. \uD669\uC0C9 \uC2E0\uD638\uC77C \uB54C"],why:"\uBE45\uD1A0\uB9AC\uC544: \uC67C\uCABD \uCC28\uB85C\uB85C \uC774\uB3D9\uD574 \uC624\uB978\uCABD \uBC29\uD5A5\uC9C0\uC2DC\uB4F1\uC744 \uCF1C\uACE0, \uAD50\uCC28\uB85C\uC758 \uAC00\uC7A5 \uC67C\uCABD\uC5D0 \uBD99\uC5B4\uC11C \uC9C4\uC785\uD558\uB824\uB294 \uB3C4\uB85C\uC758 \uC2E0\uD638\uAC00 \uB179\uC0C9\uC73C\uB85C \uBC14\uB014 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9BD\uB2C8\uB2E4."},P01:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uD734\uB300\uC804\uD654 \uC704\uBC18\uC5D0 \uBC8C\uC810\uC774 \uB450 \uBC30\uAC00 \uB418\uB294 \uACBD\uC6B0\uB294 \uC5B8\uC81C\uC77C\uAE4C\uC694?",options:["\uACF5\uD734\uC77C\uC5D0\uB9CC","\uC774\uC804 \uC704\uBC18 \uD6C4 1\uB144 \uC774\uB0B4\uC5D0 \uB450 \uBC88\uC9F8 \uC774\uC0C1 \uC704\uBC18\uD588\uC744 \uB54C","\uC704\uBC18\uD560 \uB54C\uB9C8\uB2E4"],why:"\uD038\uC990\uB79C\uB4DC: 1\uB144 \uC774\uB0B4\uC758 \uB450 \uBC88\uC9F8 \uC774\uC0C1 \uD2B9\uC815 \uC704\uBC18\uC5D0\uB294 \uBC8C\uC810\uC774 \uB450 \uBC30\uB85C \uBD80\uACFC\uB429\uB2C8\uB2E4. \uB300\uC0C1\uC740 20km/h \uCD08\uACFC \uACFC\uC18D, \uD734\uB300\uC804\uD654, \uC548\uC804\uBCA8\uD2B8, \uC5B4\uB9B0\uC774 \uBCF4\uD638 \uC7A5\uAD6C, \uC624\uD1A0\uBC14\uC774 \uD5EC\uBA67 \uC704\uBC18\uC785\uB2C8\uB2E4."},X01:{q:"\uC784\uC2DC \uBE44\uC790\uB85C \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0 6\uAC1C\uC6D4 \uB118\uAC8C \uAC70\uC8FC\uD560 \uACC4\uD68D\uC785\uB2C8\uB2E4. \uD574\uC678 \uBA74\uD5C8\uB85C \uC5BC\uB9C8\uB098 \uC6B4\uC804\uD560 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uBA74\uD5C8\uAC00 \uC720\uD6A8\uD55C \uB3D9\uC548 \uACC4\uC18D","\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uAC70\uC8FC \uD6C4 \uCD5C\uB300 6\uAC1C\uC6D4","3\uAC1C\uC6D4"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uACC4\uC18D\uD574\uC11C 6\uAC1C\uC6D4 \uC774\uC0C1 \uAC70\uC8FC\uD560 \uACC4\uD68D\uC778 \uC784\uC2DC \uBE44\uC790 \uC18C\uC9C0\uC790\uB294 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uBA74\uD5C8\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4. 6\uAC1C\uC6D4\uC740 \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uC8FC\uC18C\uB97C \uCDE8\uB4DD, \uBCC0\uACBD\uD558\uAC70\uB098 \uC8FC \uAC70\uC8FC\uC9C0\uB85C \uC0AC\uC6A9\uD55C \uB0A0\uBD80\uD130 \uACC4\uC0B0\uD569\uB2C8\uB2E4."},X02:{q:"\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C 3\uAC1C\uC6D4 \uAC70\uC8FC \uD6C4 \uD574\uC678 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD560 \uC218 \uC5C6\uAC8C \uB418\uB294 \uC0AC\uB78C\uC740 \uB204\uAD6C\uC77C\uAE4C\uC694?",options:["\uD574\uC678 \uBA74\uD5C8 \uC18C\uC9C0\uC790 \uC804\uC6D0","\uD638\uC8FC \uC2DC\uBBFC\uAD8C\uC790\uC640 resident visa(\uC601\uC8FC \uBE44\uC790) \uC18C\uC9C0\uC790","\uAD00\uAD11\uAC1D\uB9CC"],why:"\uD038\uC990\uB79C\uB4DC: 3\uAC1C\uC6D4 \uC81C\uD55C\uC740 \uD638\uC8FC \uC2DC\uBBFC\uAD8C\uC790\uC640 resident visa \uC18C\uC9C0\uC790\uC5D0\uAC8C \uC801\uC6A9\uB429\uB2C8\uB2E4. resident visa\uB294 \uC601\uC8FC \uBE44\uC790 \uB610\uB294 special category visa\uC774\uBA70, \uC784\uC2DC\xB7\uBE44\uC988\uB2C8\uC2A4\xB7\uD6C4\uACAC\uC778 \uBE44\uC790\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."},X03:{q:"\uD574\uC678 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD558\uB2E4\uAC00 \uC8FC\uD589\uC2DC\uD5D8\uC5D0 \uB5A8\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uC6B4\uC804\uD574\uC11C \uC9D1\uC5D0 \uAC08 \uC218 \uC788\uC744\uAE4C\uC694?",options:["\uAC00\uB2A5. \uD574\uC678 \uBA74\uD5C8\uB294 \uC5EC\uC804\uD788 \uC720\uD6A8\uD558\uB2E4","\uBD88\uAC00\uB2A5. \uB354 \uC774\uC0C1 \uD574\uC678 \uBA74\uD5C8\uB85C \uC6B4\uC804\uD560 \uC218 \uC5C6\uB2E4","\uAC00\uB2A5. 7\uC77C \uB354 \uC6B4\uC804\uD560 \uC218 \uC788\uB2E4"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uC8FC\uD589\uC2DC\uD5D8\uC5D0 \uB5A8\uC5B4\uC9C0\uBA74 \uD574\uC678 \uBA74\uD5C8\uB85C \uB2E4\uC2DC \uC6B4\uC804\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD038\uC990\uB79C\uB4DC: \uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uC8FC\uD589\uC2DC\uD5D8\uC5D0 \uB5A8\uC5B4\uC9C0\uBA74 \uC6B4\uC804 \uC790\uACA9\uC774 \uCDE8\uC18C\uB429\uB2C8\uB2E4."},X04:{q:"\uD574\uC678 '\uC5F0\uC2B5 \uBA74\uD5C8'\uB85C \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uB97C \uBC29\uBB38 \uC911\uC785\uB2C8\uB2E4. \uD544\uC694\uD55C \uAC83\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694?",options:["\uD2B9\uBCC4\uD55C \uAC83 \uC5C6\uC74C","\uD638\uC8FC \uC815\uC2DD \uBA74\uD5C8 \uC18C\uC9C0\uC790\uC758 \uB3D9\uC2B9 \uC9C0\uB3C4, \uC55E\uB4A4 L \uD50C\uB808\uC774\uD2B8, \uD608\uC911\uC54C\uCF54\uC62C 0","L \uD50C\uB808\uC774\uD2B8\uB9CC"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uD56D\uC0C1 \uD638\uC8FC \uC815\uC2DD(Class C) \uBA74\uD5C8 \uC18C\uC9C0\uC790\uC758 \uC9C0\uB3C4\uB97C \uBC1B\uC544\uC57C \uD558\uACE0, \uCC28\uB7C9 \uC55E\uB4A4\uC5D0 L \uD50C\uB808\uC774\uD2B8\uB97C \uBD80\uCC29\uD574\uC57C \uD558\uBA70, \uD608\uC911\uC54C\uCF54\uC62C\uB18D\uB3C4\uB294 0\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."},X05:{q:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC5D0\uC11C \uBC8C\uC810\uC774 \uBA87 \uC810 \uC313\uC774\uBA74 \uBC29\uBB38 \uC6B4\uC804\uC790 \uC790\uACA9\uC774 \uC601\uAD6C \uCDE8\uC18C\uB420\uAE4C\uC694?",options:["4\uC810","13\uC810","20\uC810"],why:"\uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4: \uBC8C\uC810\uC774 13\uC810 \uC313\uC774\uBA74 Transport for NSW\uAC00 \uBC29\uBB38 \uC6B4\uC804\uC790 \uC790\uACA9\uC744 \uC601\uAD6C \uCDE8\uC18C\uD569\uB2C8\uB2E4."},X06:{q:"\uC77C\uBCF8 \uC2B9\uC6A9\uCC28 \uBA74\uD5C8\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uB098 \uD038\uC990\uB79C\uB4DC \uBA74\uD5C8\uB85C \uC804\uD658\uD558\uB824\uBA74 \uD544\uAE30\uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8\uC744 \uBD10\uC57C \uD560\uAE4C\uC694?",options:["\uB458 \uB2E4 \uBD10\uC57C \uD55C\uB2E4","\uD544\uC694 \uC5C6\uB2E4. \uC77C\uBCF8\uC740 \uB450 \uC8FC \uBAA8\uB450 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uC788\uB2E4","\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C\uB9CC \uBD10\uC57C \uD55C\uB2E4"],why:"2026\uB144 11\uC6D4 10\uC77C\uC5D0 \uD655\uC778\uD55C \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC640 \uD038\uC990\uB79C\uB4DC\uC758 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0 \uBAA8\uB450 \uC77C\uBCF8\uC774 \uC788\uC2B5\uB2C8\uB2E4."},X07:{q:"\uB300\uD55C\uBBFC\uAD6D \uB610\uB294 \uB300\uB9CC \uC2B9\uC6A9\uCC28 \uBA74\uD5C8\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. 2026\uB144 11\uC6D4 10\uC77C \uAE30\uC900 \uACF5\uC2DD \uD398\uC774\uC9C0\uC640 \uC77C\uCE58\uD558\uB294 \uAC83\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694?",options:["\uD038\uC990\uB79C\uB4DC\uC5D0\uC11C\uB294 \uC778\uC815(\uC2DC\uD5D8 \uC5C6\uC74C). \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D\uC5D0\uB294 \uC5C6\uC74C(\uC2DC\uD5D8 \uD544\uC694)","\uB450 \uC8FC \uBAA8\uB450 \uC778\uC815","\uB450 \uC8FC \uBAA8\uB450 \uC778\uC815\uD558\uC9C0 \uC54A\uC74C"],why:"\uD038\uC990\uB79C\uB4DC \uD398\uC774\uC9C0(\uCD5C\uC885 \uC5C5\uB370\uC774\uD2B8 2026\uB144 10\uC6D4 31\uC77C)\uB294 \uB300\uD55C\uBBFC\uAD6D\uACFC \uB300\uB9CC\uC744 \uC778\uC815 \uAD6D\uAC00\uB85C \uC62C\uB824 \uB450\uC5C8\uC2B5\uB2C8\uB2E4. \uAC19\uC740 \uB0A0 \uD655\uC778\uD55C \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4 \uD398\uC774\uC9C0\uC5D0\uB294 \uC5C6\uC2B5\uB2C8\uB2E4."},X08:{q:"\uC911\uAD6D \uB610\uB294 \uD64D\uCF69 \uC2B9\uC6A9\uCC28 \uBA74\uD5C8\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC640 \uD038\uC990\uB79C\uB4DC\uC5D0\uC11C \uC804\uD658\uD558\uB824\uBA74 \uBB34\uC5C7\uC774 \uD544\uC694\uD560\uAE4C\uC694?",options:["\uC544\uBB34\uAC83\uB3C4 \uD544\uC694 \uC5C6\uC74C. \uC790\uB3D9 \uC804\uD658","\uD544\uAE30\uC2DC\uD5D8\uACFC \uC8FC\uD589\uC2DC\uD5D8 \uD569\uACA9","\uC2DC\uB825 \uAC80\uC0AC\uB9CC"],why:"2026\uB144 11\uC6D4 10\uC77C\uC5D0 \uD655\uC778\uD55C \uB274\uC0AC\uC6B0\uC2A4\uC6E8\uC77C\uC2A4\uC640 \uD038\uC990\uB79C\uB4DC\uC758 \uC778\uC815 \uAD6D\uAC00 \uBAA9\uB85D \uC5B4\uB514\uC5D0\uB3C4 \uC911\uAD6D\uACFC \uD64D\uCF69\uC774 \uC5C6\uC73C\uBBC0\uB85C \uC2DC\uD5D8\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."}}};var _h={ui:{title:"\u6FB3\u6D32\u8DEF\u8003\u6311\u6218",tagline:"\u540C\u4E00\u4E2A\u52A8\u4F5C\uFF0C\u6362\u4E00\u4E2A\u5DDE\uFF0C\u6CD5\u5F8B\u5C31\u4E0D\u540C\u3002\u4E0A\u8DEF\u524D\uFF0C\u5148\u5B66\u4F1A\u65B0\u5357\u5A01\u5C14\u58EB\u3001\u6606\u58EB\u5170\u3001\u7EF4\u591A\u5229\u4E9A\u7684\u4EA4\u901A\u89C4\u5219\u3002",modeRun:"\u5355\u5DDE\u95EF\u5173",modeRunDesc:"\u9009\u4E00\u4E2A\u5DDE\u3002\u6700\u591A 10 \u9898\uFF0C3 \u6761\u547D\u3002",modeTrap:"\u5DDE\u754C\u9677\u9631",modeTrapDesc:"\u540C\u4E00\u4E2A\u52A8\u4F5C\uFF0C\u70B9\u51FA\u6240\u6709\u5408\u6CD5\u7684\u5DDE\u3002",modeLicence:"\u9A7E\u7167\u67E5\u8BE2",modeLicenceDesc:"\u5B98\u65B9\u9875\u9762\u5BF9\u6D77\u5916\u9A7E\u7167\u600E\u4E48\u8BF4\u3002",pickState:"\u9009\u62E9\u5DDE",lives:"\u751F\u547D",score:"\u5206\u6570",question:"\u7B2C",next:"\u4E0B\u4E00\u9898",finish:"\u770B\u6210\u7EE9",correct:"\u7B54\u5BF9\u4E86",wrong:"\u518D\u60F3\u60F3",source:"\u5B98\u65B9\u6765\u6E90",official:"\u5B98\u65B9\u82F1\u6587\u539F\u6587",resultTitle:"\u6210\u7EE9",gameOver:"\u751F\u547D\u7528\u5B8C\u4E86",weakest:"\u5EFA\u8BAE\u590D\u4E60",playAgain:"\u518D\u73A9\u4E00\u6B21",home:"\u9996\u9875",trapPrompt:"\u70B9\u51FA\u6240\u6709\u5408\u6CD5\u7684\u5DDE\u3002\u5982\u679C\u90FD\u4E0D\u5408\u6CD5\uFF0C\u5C31\u4E0D\u8981\u9009\u3002",check:"\u786E\u8BA4\u7B54\u6848",legal:"\u5408\u6CD5",illegal:"\u4E0D\u5408\u6CD5",licState:"\u5DDE",licCountry:"\u9A7E\u7167\u7B7E\u53D1\u5730",licStatus:"\u4F60\u7684\u8EAB\u4EFD",statusTemp:"\u4E34\u65F6\u7B7E\u8BC1",statusPerm:"\u6C38\u4E45\u5C45\u6C11\u6216\u516C\u6C11",licDuration:"\u53EF\u4EE5\u7528\u5B83\u5F00\u591A\u4E45",licTests:"\u6362\u7167\u9700\u8981\u7684\u8003\u8BD5",disclaimer:"\u5B66\u4E60\u7528\u6E38\u620F\uFF0C\u4E0D\u662F\u5B98\u65B9\u8003\u8BD5\uFF0C\u4E5F\u4E0D\u662F\u6CD5\u5F8B\u610F\u89C1\u3002\u4E0A\u8DEF\u524D\u8BF7\u4EE5\u5B98\u65B9\u6765\u6E90\u4E3A\u51C6\u3002",verified:"\u89C4\u5219\u5DF2\u5BF9\u7167\u5B98\u65B9\u9875\u9762\u67E5\u8BC1\uFF0C\u65E5\u671F",timeSensitive:"\u8FD9\u9879\u89C4\u5B9A\u6700\u8FD1\u6709\u53D8\u52A8\uFF0C\u8BF7\u91CD\u65B0\u67E5\u770B\u5B98\u65B9\u9875\u9762\u3002",language:"\u8BED\u8A00"},states:{NSW:"\u65B0\u5357\u5A01\u5C14\u58EB",QLD:"\u6606\u58EB\u5170",VIC:"\u7EF4\u591A\u5229\u4E9A"},categories:{turning:"\u8F6C\u5F2F\u4E0E\u6389\u5934",lines:"\u9053\u8DEF\u6807\u7EBF",parking:"\u505C\u8F66\u4E0E\u4E34\u65F6\u505C\u8F66",signals:"\u4FE1\u53F7\u706F\u4E0E\u8F6C\u5411\u706F",safety:"\u7D27\u6025\u8F66\u8F86",trams:"\u6709\u8F68\u7535\u8F66\u4E0E\u94A9\u5F62\u8F6C\u5F2F",penalties:"\u7F5A\u5219",licence:"\u6D77\u5916\u9A7E\u7167"},countries:{JP:"\u65E5\u672C",KR:"\u97E9\u56FD",TW:"\u53F0\u6E7E",HK:"\u9999\u6E2F",CN:"\u4E2D\u56FD"},traps:{BT1:{q:"\u8DEF\u53E3\u6CA1\u6709\u4EFB\u4F55\u6807\u5FD7\u3002\u4F60\u5728\u7EA2\u7EFF\u706F\u8DEF\u53E3\u6389\u5934\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u65B0\u5357\u5A01\u5C14\u58EB\u4E0E\u6606\u58EB\u5170\u5FC5\u987B\u6709\u201CU-turn permitted\u201D\u6807\u5FD7\u624D\u80FD\u6389\u5934\u3002\u7EF4\u591A\u5229\u4E9A\u53EF\u4EE5\u6389\u5934\uFF0C\u9664\u975E\u6709\u201Cno U-turn\u201D\u6216\u201Cno right turn\u201D\u6807\u5FD7\u3002"},BT2:{q:"\u4F60\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF0C\u8F6C\u8FDB\u5BF9\u5411\u7684\u8F66\u9053\u51FA\u5165\u53E3\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u53EF\u4EE5\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7EBF\u8FDB\u51FA\u9053\u8DEF\u3002\u6606\u58EB\u5170\uFF1A\u4E0D\u5F97\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF0C\u552F\u4E00\u4F8B\u5916\u662F\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8F66\u3002"},BT3:{q:"\u4F60\u8DE8\u8D8A\u5355\u5B9E\u7EBF\u6389\u5934\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u90FD\u4E0D\u5408\u6CD5\u3002\u65B0\u5357\u5A01\u5C14\u58EB\u3001\u6606\u58EB\u5170\u3001\u7EF4\u591A\u5229\u4E9A\u90FD\u7981\u6B62\u8DE8\u8D8A\u5355\u5B9E\u7EBF\u6389\u5934\u3002"},BT4:{q:"\u4F60\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\u6389\u5934\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u90FD\u4E0D\u5408\u6CD5\u3002\u65B0\u5357\u5A01\u5C14\u58EB\u3001\u6606\u58EB\u5170\u3001\u7EF4\u591A\u5229\u4E9A\u90FD\u7981\u6B62\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\u6389\u5934\u3002"}},licence:{dur_nsw_temp:"\u5982\u679C\u6253\u7B97\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u4F4F 6 \u4E2A\u6708\u4EE5\u4E0A\uFF0C\u6700\u591A\u53EF\u4EE5\u5F00 6 \u4E2A\u6708\uFF0C\u4E4B\u540E\u5FC5\u987B\u6362\u65B0\u5357\u5A01\u5C14\u58EB\u9A7E\u7167\u30026 \u4E2A\u6708\u4ECE\u4F60\u53D6\u5F97\u3001\u6539\u7528\u6216\u4F7F\u7528\u65B0\u5357\u5A01\u5C14\u58EB\u5730\u5740\u4F5C\u4E3A\u4E3B\u8981\u5C45\u4F4F\u5730\u90A3\u5929\u8D77\u7B97\u3002",dur_nsw_perm:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u5C45\u4F4F 3 \u4E2A\u6708\u5185\uFF0C\u5FC5\u987B\u53D6\u5F97\u65B0\u5357\u5A01\u5C14\u58EB\u9A7E\u7167\u3002",dur_qld_temp:"\u6606\u58EB\u5170\u7684 3 \u4E2A\u6708\u671F\u9650\u9002\u7528\u4E8E\u6FB3\u5927\u5229\u4E9A\u516C\u6C11\u4E0E resident visa\uFF08\u6C38\u4E45\u7B7E\u8BC1\uFF09\u6301\u6709\u4EBA\u3002\u4E34\u65F6\u7B7E\u8BC1\u4E0D\u7B97 resident visa\uFF0C\u6240\u4EE5\u8BBF\u5BA2\u53EF\u4EE5\u6301\u6709\u6548\u7684\u6D77\u5916\u9A7E\u7167\u5F00\u8F66\u3002",dur_qld_perm:"\u5728\u6606\u58EB\u5170\u4F4F\u6EE1 3 \u4E2A\u6708\u540E\uFF0C\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u9A7E\u7167\u5F00\u8F66\u3002",dur_vic:"\u5982\u679C\u8981\u5728\u7EF4\u591A\u5229\u4E9A\u5F00\u8F66\u8D85\u8FC7 6 \u4E2A\u6708\uFF0C\u5FC5\u987B\u628A\u6D77\u5916\u9A7E\u7167\u6362\u6210\u7EF4\u591A\u5229\u4E9A\u9A7E\u7167\u3002",test_nsw_yes:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u8BA4\u53EF\u540D\u5355\u4E0A\uFF1A\u6362\u6C7D\u8F66\u9A7E\u7167\u4E0D\u7528\u8003\u7B14\u8BD5\uFF0C\u4E5F\u4E0D\u7528\u8DEF\u8003\u3002",test_nsw_no:"\u4E0D\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u8BA4\u53EF\u540D\u5355\u4E0A\uFF1A\u5FC5\u987B\u901A\u8FC7\u7B14\u8BD5\u4E0E\u8DEF\u8003\u3002",test_qld_yes:"\u5728\u6606\u58EB\u5170\u8BA4\u53EF\u540D\u5355\u4E0A\uFF1A\u6362\u6C7D\u8F66\u9A7E\u7167\u4E0D\u7528\u8003\u4EA4\u901A\u89C4\u5219\u7B14\u8BD5\uFF0C\u4E5F\u4E0D\u7528\u8DEF\u8003\u3002",test_qld_no:"\u4E0D\u5728\u6606\u58EB\u5170\u8BA4\u53EF\u540D\u5355\u4E0A\uFF1A\u5FC5\u987B\u901A\u8FC7\u4EA4\u901A\u89C4\u5219\u7B14\u8BD5\u4E0E\u8DEF\u8003\u3002",test_vic_full:"\u5728 VicRoads \u6362\u7167\u8868\u4E2D\u4EE3\u7801\u4E3A FULL\u3002\u6211\u4EEC\u8BFB\u5230\u7684\u9875\u9762\u5185\u6587\u6CA1\u6709\u5199\u660E\u8003\u8BD5\u8981\u6C42\u3002\u65E0\u6CD5\u5224\u5B9A\uFF1A\u8BF7\u4F7F\u7528 VicRoads \u67E5\u8BE2\u5DE5\u5177\u3002",test_vic_exp:"\u5728 VicRoads \u6362\u7167\u8868\u4E2D\u4EE3\u7801\u4E3A EXP\u3002\u9875\u9762\u6CA1\u6709\u8BF4\u660E EXP \u76EE\u524D\u4EE3\u8868\u4EC0\u4E48\u3002\u65E0\u6CD5\u5224\u5B9A\uFF1A\u8BF7\u4F7F\u7528 VicRoads \u67E5\u8BE2\u5DE5\u5177\u3002",test_vic_non:"\u5728 VicRoads \u6362\u7167\u8868\u4E2D\u4EE3\u7801\u4E3A NON\u3002\u6211\u4EEC\u8BFB\u5230\u7684\u9875\u9762\u5185\u6587\u6CA1\u6709\u5199\u660E\u8003\u8BD5\u8981\u6C42\u3002\u65E0\u6CD5\u5224\u5B9A\uFF1A\u8BF7\u4F7F\u7528 VicRoads \u67E5\u8BE2\u5DE5\u5177\u3002"},questions:{U01:{q:"\u4F60\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u505C\u5728\u7EA2\u7EFF\u706F\u8DEF\u53E3\u3002\u6CA1\u6709\u4EFB\u4F55\u6389\u5934\u6807\u5FD7\u3002\u4F60\u600E\u4E48\u505A\uFF1F",options:["\u6389\u5934\u3002\u6211\u6CA1\u770B\u5230\u201CNo U-turn\u201D\u6807\u5FD7\uFF0C\u6240\u4EE5\u53EF\u4EE5","\u4E0D\u6389\u5934\u3002\u65B0\u5357\u5A01\u5C14\u58EB\u7684\u7EA2\u7EFF\u706F\u8DEF\u53E3\u8981\u6709\u201CU-turn permitted\u201D\u6807\u5FD7\u624D\u884C","\u6389\u5934\uFF0C\u4F46\u8981\u7B49\u7EFF\u8272\u7BAD\u5934"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u7EA2\u7EFF\u706F\u8DEF\u53E3\u4E0D\u5F97\u6389\u5934\uFF0C\u9664\u975E\u6709\u201CU-turn permitted\u201D\u6807\u5FD7\u3002"},U02:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u4E0B\u5217\u54EA\u4E9B\u5730\u65B9\u8981\u6709\u201CU-turn permitted\u201D\u6807\u5FD7\u624D\u80FD\u6389\u5934\uFF1F",options:["\u53EA\u6709\u7EA2\u7EFF\u706F\u8DEF\u53E3","\u7EA2\u7EFF\u706F\u3001\u513F\u7AE5\u8FC7\u8857\u901A\u9053\u3001\u94C1\u8DEF\u9053\u53E3\u3001\u6709\u6807\u7EBF\u7684\u4EBA\u884C\u6A2A\u9053\u3001\u4EBA\u884C\u6A2A\u9053","\u90FD\u4E0D\u7528\uFF0C\u53EA\u8981\u5B89\u5168\u5C31\u80FD\u6389\u5934"],why:"\u6606\u58EB\u5170\u5217\u51FA\u8FD9\u4E94\u79CD\u5730\u70B9\uFF1A\u53EA\u6709\u8BBE\u7F6E U-turn permitted \u6807\u5FD7\u65F6\u624D\u53EF\u4EE5\u6389\u5934\u3002"},U03:{q:"\u4F60\u5728\u7EF4\u591A\u5229\u4E9A\u7684\u7EA2\u7EFF\u706F\u8DEF\u53E3\u3002\u6CA1\u6709\u201CNo U-turn\u201D\uFF0C\u4E5F\u6CA1\u6709\u201CNo right turn\u201D\u6807\u5FD7\u3002\u4F60\u600E\u4E48\u505A\uFF1F",options:["\u5B89\u5168\u5C31\u6389\u5934\u3002\u6211\u6CA1\u770B\u5230\u201CNo U-turn\u201D\u6216\u201CNo right turn\u201D\u6807\u5FD7","\u4E0D\u6389\u5934\u3002\u7EF4\u591A\u5229\u4E9A\u548C\u65B0\u5357\u5A01\u5C14\u58EB\u4E00\u6837\u8981\u6709\u201CU-turn permitted\u201D\u6807\u5FD7","\u53EA\u6709\u665A\u4E0A 10 \u70B9\u5230\u65E9\u4E0A 6 \u70B9\u53EF\u4EE5\u6389\u5934"],why:"\u7EF4\u591A\u5229\u4E9A\uFF1A\u6709\u65E0\u4FE1\u53F7\u706F\u7684\u8DEF\u53E3\u90FD\u53EF\u4EE5\u6389\u5934\uFF0C\u9664\u975E\u6709\u201Cno U-turn\u201D\u6807\u5FD7\uFF1B\u201Cno right turn\u201D\u6807\u5FD7\u540C\u6837\u7981\u6B62\u6389\u5934\u3002"},U04:{q:"\u4F60\u6B63\u5728\u6389\u5934\u3002\u6709\u4E00\u8F86\u8F66\u4ECE\u652F\u8DEF\u5DE6\u8F6C\u51FA\u6765\uFF0C\u5B83\u9762\u524D\u662F GIVE WAY \u6807\u5FD7\u3002\u8C01\u8981\u8BA9\uFF1F",options:["\u5BF9\u65B9\uFF0C\u56E0\u4E3A\u5B83\u6709 GIVE WAY \u6807\u5FD7","\u4F60\u3002\u6389\u5934\u8F66\u5FC5\u987B\u8BA9\u884C\u6240\u6709\u5176\u4ED6\u8F66\u8F86\u4E0E\u884C\u4EBA","\u8C01\u665A\u5230\u8C01\u8BA9"],why:"\u4E09\u4E2A\u5DDE\u90FD\u89C4\u5B9A\u6389\u5934\u8F66\u5FC5\u987B\u8BA9\u884C\u6240\u6709\u5176\u4ED6\u8F66\u8F86\u4E0E\u884C\u4EBA\u3002\u7EF4\u591A\u5229\u4E9A\u660E\u6587\u5305\u542B\u4ECE slip lane \u6216\u652F\u8DEF\u5DE6\u8F6C\u51FA\u6765\u7684\u8F66\u3002"},L01:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u53EF\u4EE5\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\u8F6C\u8FDB\u8F66\u9053\u51FA\u5165\u53E3\u5417\uFF1F",options:["\u53EF\u4EE5\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7EBF\u8FDB\u51FA\u9053\u8DEF","\u4E0D\u884C\uFF0C\u4EFB\u4F55\u60C5\u51B5\u90FD\u4E0D\u884C","\u53EA\u6709\u8D85\u8F66\u65F6\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u53EF\u4EE5\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7EBF\u8FDB\u51FA\u9053\u8DEF\u3002"},L02:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u4EC0\u4E48\u60C5\u51B5\u53EF\u4EE5\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF1F",options:["\u8F6C\u8FDB\u8F66\u9053\u51FA\u5165\u53E3","\u8D85\u8D8A\u6162\u901F\u8F66\u8F86","\u53EA\u6709\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8F66\u65F6"],why:"\u6606\u58EB\u5170\uFF1A\u4E0D\u5F97\u8DE8\u8D8A\u53CC\u5B9E\u7EBF\uFF0C\u552F\u4E00\u4F8B\u5916\u662F\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8F66\u3002"},L03:{q:"\u53EF\u4EE5\u8DE8\u8D8A\u5355\u5B9E\u7EBF\u6389\u5934\u5417\uFF1F",options:["\u53EF\u4EE5","\u4E0D\u53EF\u4EE5","\u53EA\u6709\u65B0\u5357\u5A01\u5C14\u58EB\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\u4E0E\u6606\u58EB\u5170\u90FD\u7981\u6B62\u8DE8\u8D8A\u5355\u5B9E\u7EBF\u6389\u5934\u3002"},L04:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u5BFC\u6D41\u7EBF\u7531\u5355\u7EBF\u5305\u56F4\u65F6\uFF0C\u4E3A\u4E86\u8FDB\u5165\u8F6C\u5F2F\u8F66\u9053\uFF0C\u6700\u591A\u53EF\u4EE5\u5728\u4E0A\u9762\u884C\u9A76\u591A\u8FDC\uFF1F",options:["\u6700\u591A 50 \u7C73","\u6700\u591A 100 \u7C73","\u5B8C\u5168\u4E0D\u80FD\u884C\u9A76"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u6700\u591A 50 \u7C73\uFF0C\u7528\u4E8E\u8FDB\u51FA\u9053\u8DEF\u3001\u8FDB\u5165\u7D27\u63A5\u5728\u5BFC\u6D41\u7EBF\u540E\u7684\u8F6C\u5F2F\u8F66\u9053\uFF0C\u6216\u659C\u89D2\u505C\u8F66\u3002"},L05:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u4ECE\u5355\u8F66\u9053\u9053\u8DEF\u8F6C\u5F2F\u65F6\uFF0C\u8DE8\u8D8A\u767D\u8272\u5B9E\u7EBF\u9053\u8DEF\u8FB9\u7EBF\u540E\u6700\u591A\u53EF\u4EE5\u884C\u9A76\u591A\u8FDC\uFF1F",options:["\u6700\u591A 20 \u7C73","\u6700\u591A 50 \u7C73","\u6700\u591A 100 \u7C73"],why:"\u6606\u58EB\u5170\uFF1A\u5728\u5217\u51FA\u7684\u60C5\u51B5\u4E0B\uFF0C\u8DE8\u8D8A\u767D\u8272\u5B9E\u7EBF\u9053\u8DEF\u8FB9\u7EBF\u540E\u6700\u591A\u53EF\u884C\u9A76 100 \u7C73\u3002"},L06:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u9EC4\u8272\u9053\u8DEF\u8FB9\u7EBF\u4EE3\u8868\u4EC0\u4E48\uFF1F",options:["\u53EF\u4EE5\u505C 15 \u5206\u949F","\u6807\u7EBF\u8303\u56F4\u5185\u7981\u6B62\u4E34\u65F6\u505C\u8F66\u4E0E\u505C\u8F66","\u516C\u8F66\u4E13\u7528\u9053"],why:"\u6606\u58EB\u5170\uFF1A\u9053\u8DEF\u8FB9\u7EBF\u662F\u9EC4\u8272\u65F6\uFF0C\u6807\u7EBF\u8303\u56F4\u5185\u7981\u6B62\u4E34\u65F6\u505C\u8F66\u4E0E\u505C\u8F66\u3002"},L07:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u8DEF\u7F18\u7684\u9EC4\u8272\u5B9E\u7EBF\u4EE3\u8868\u4EC0\u4E48\uFF1F",options:["\u7981\u6B62\u4E34\u65F6\u505C\u8F66\uFF0C\u7D27\u6025\u60C5\u51B5\u9664\u5916","\u88C5\u5378\u8D27\u533A","\u5C45\u6C11\u4E13\u7528\u505C\u8F66"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u9EC4\u8272\u5B9E\u7EBF\u4EE3\u8868\u4E0D\u5F97\u5728\u6B64\u505C\u8F66\uFF0C\u7D27\u6025\u60C5\u51B5\u9664\u5916\u3002"},S01:{q:"\u706F\u53F7\u53D8\u9EC4\u706F\uFF0C\u800C\u4F60\u53EF\u4EE5\u5B89\u5168\u505C\u4E0B\u3002\u4F60\u5FC5\u987B\u600E\u4E48\u505A\uFF1F",options:["\u52A0\u901F\u901A\u8FC7\u8DEF\u53E3","\u505C\u8F66","\u6309\u5587\u53ED\u7EE7\u7EED\u8D70"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u9EC4\u706F\u4EE3\u8868\u5FC5\u987B\u505C\u8F66\uFF1B\u53EA\u6709\u65E0\u6CD5\u5B89\u5168\u505C\u5728\u505C\u6B62\u7EBF\u524D\u624D\u80FD\u901A\u8FC7\u3002\u6606\u58EB\u5170\uFF1A\u9EC4\u706F\u5FC5\u987B\u505C\u8F66\uFF0C\u9664\u975E\u505C\u8F66\u4E0D\u5B89\u5168\u3002"},S02:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u4EC0\u4E48\u60C5\u51B5\u53EF\u4EE5\u7EA2\u706F\u5DE6\u8F6C\uFF1F",options:["\u53EA\u8981\u6CA1\u8F66\u5C31\u53EF\u4EE5","\u53EA\u6709\u8BBE\u7F6E\u201Cleft turn on red permitted after stopping\u201D\u6807\u5FD7\u7684\u8DEF\u53E3\uFF0C\u800C\u4E14\u8981\u5148\u505C\u8F66","\u4EFB\u4F55\u60C5\u51B5\u90FD\u4E0D\u884C"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u770B\u5230\u8FD9\u4E2A\u6807\u5FD7\u65F6\uFF0C\u5FC5\u987B\u5148\u5728\u7EA2\u706F\u524D\u505C\u8F66\uFF0C\u786E\u8BA4\u5B89\u5168\u540E\u518D\u5DE6\u8F6C\uFF0C\u5E76\u8BA9\u53F3\u65B9\u6765\u8F66\u3002"},S03:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u6C7D\u8F66\u53EF\u4EE5\u505C\u5728\u7EA2\u7EFF\u706F\u524D\u7684\u81EA\u884C\u8F66\u505C\u8F66\u7B49\u5019\u533A\u5417\uFF1F",options:["\u53EF\u4EE5\uFF0C\u53EA\u8981\u6CA1\u6709\u81EA\u884C\u8F66","\u4E0D\u53EF\u4EE5","\u53EA\u6709\u5DE6\u8F6C\u65F6\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u8F66\u8F86\u4E0D\u5F97\u505C\u5728\u7EA2\u7EFF\u706F\u524D\u4FDD\u7559\u7ED9\u81EA\u884C\u8F66\u7684\u533A\u57DF\u3002"},S04:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u4ECE\u8DEF\u8FB9\u9A76\u51FA\u524D\uFF0C\u8F6C\u5411\u706F\u81F3\u5C11\u8981\u6253\u591A\u4E45\uFF1F",options:["\u81F3\u5C11 2 \u79D2","\u81F3\u5C11 5 \u79D2","\u6CA1\u6709\u89C4\u5B9A"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u4ECE\u8DEF\u8FB9\u6216\u505C\u8F66\u4F4D\u9A76\u51FA\u524D\uFF0C\u5FC5\u987B\u6253\u8F6C\u5411\u706F\u81F3\u5C11 5 \u79D2\u3002"},E01:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u901F\u9650 60 km/h\u3002\u4F60\u7ECF\u8FC7\u4E00\u8F86\u505C\u8457\u3001\u95EA\u8457\u7EA2\u84DD\u706F\u7684\u8B66\u8F66\u3002\u4F60\u5FC5\u987B\u600E\u4E48\u505A\uFF1F",options:["\u51CF\u901F\u5230 40 km/h","\u7EF4\u6301 60 km/h","\u505C\u8F66\u7B49\u5F85"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u901F\u9650 80 km/h \u4EE5\u4E0B\uFF0C\u5FC5\u987B\u51CF\u901F\u5230 40 km/h\u3002\u901F\u9650\u8D85\u8FC7 80 km/h\uFF0C\u5FC5\u987B\u5B89\u5168\u51CF\u901F\u5E76\u8BA9\u51FA\u7A7A\u95F4\u3002"},T01:{q:"\u5728\u7EF4\u591A\u5229\u4E9A\uFF0C\u6709\u8F68\u7535\u8F66\u505C\u5728\u8DEF\u8FB9\u7AD9\uFF0C\u4E58\u5BA2\u6B63\u5728\u4E0A\u4E0B\u8F66\u3002\u4F60\u5FC5\u987B\u600E\u4E48\u505A\uFF1F",options:["\u4ECE\u5DE6\u4FA7\u6162\u6162\u901A\u8FC7","\u505C\u5728\u6709\u8F68\u7535\u8F66\u8F66\u5C3E\u540E\u65B9","\u4ECE\u53F3\u4FA7\u8D85\u8F66"],why:"\u7EF4\u591A\u5229\u4E9A\uFF1A\u5FC5\u987B\u505C\u5728\u6709\u8F68\u7535\u8F66\u8F66\u5C3E\u540E\u65B9\u3002\u7B49\u8F66\u95E8\u5173\u95ED\u3001\u8DEF\u4E0A\u6CA1\u6709\u884C\u4EBA\u540E\uFF0C\u624D\u53EF\u4EE5\u7528 10 km/h \u901A\u8FC7\u3002"},T02:{q:"\u5728\u7EF4\u591A\u5229\u4E9A\uFF0C\u53F3\u8F6C\u65F6\u6700\u591A\u53EF\u4EE5\u5728\u6709\u8F68\u7535\u8F66\u9053\u4E0A\u884C\u9A76\u591A\u8FDC\uFF1F",options:["\u6700\u591A 50 \u7C73","\u6700\u591A 100 \u7C73","\u6CA1\u6709\u9650\u5236"],why:"\u7EF4\u591A\u5229\u4E9A\uFF1A\u53F3\u8F6C\u65F6\u6700\u591A 50 \u7C73\u3002"},T03:{q:"\u5728\u58A8\u5C14\u672C\u8BBE\u6709\u201Chook turn\u201D\u6807\u5FD7\u7684\u8DEF\u53E3\uFF0C\u4F60\u8981\u53F3\u8F6C\u3002\u4ECE\u54EA\u4E2A\u8F66\u9053\u5F00\u59CB\uFF1F\u4EC0\u4E48\u65F6\u5019\u8F6C\uFF1F",options:["\u53F3\u4FA7\u8F66\u9053\uFF1B\u81EA\u5DF1\u65B9\u5411\u7EFF\u706F\u65F6\u8F6C","\u5DE6\u4FA7\u8F66\u9053\uFF1B\u7B49\u4F60\u8981\u8FDB\u5165\u7684\u90A3\u6761\u8DEF\u53D8\u7EFF\u706F\u65F6\u8F6C","\u4E2D\u95F4\u8F66\u9053\uFF1B\u9EC4\u706F\u65F6\u8F6C"],why:"\u7EF4\u591A\u5229\u4E9A\uFF1A\u9760\u5DE6\u4FA7\u8F66\u9053\u3001\u6253\u53F3\u8F6C\u5411\u706F\u3001\u8FDB\u5165\u8DEF\u53E3\u540E\u505C\u5728\u6700\u5DE6\u4FA7\uFF0C\u7B49\u4F60\u8981\u8FDB\u5165\u7684\u90A3\u6761\u8DEF\u7684\u4FE1\u53F7\u706F\u53D8\u7EFF\u706F\u3002"},P01:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u4F7F\u7528\u624B\u673A\u7684\u8FDD\u89C4\u4EC0\u4E48\u65F6\u5019\u4F1A\u6263\u5206\u52A0\u500D\uFF1F",options:["\u53EA\u6709\u516C\u4F17\u5047\u671F","\u8DDD\u79BB\u4E0A\u6B21\u8FDD\u89C4 1 \u5E74\u5185\u518D\u72AF","\u6BCF\u4E00\u6B21\u90FD\u52A0\u500D"],why:"\u6606\u58EB\u5170\uFF1A1 \u5E74\u5185\u7B2C\u4E8C\u6B21\u6216\u4E4B\u540E\u7684\u7279\u5B9A\u8FDD\u89C4\u6263\u5206\u52A0\u500D\uFF0C\u5305\u542B\u8D85\u901F 20 km/h \u4EE5\u4E0A\u3001\u624B\u673A\u3001\u5B89\u5168\u5E26\u3001\u513F\u7AE5\u5EA7\u6905\u3001\u6469\u6258\u8F66\u5934\u76D4\u3002"},X01:{q:"\u4F60\u6301\u4E34\u65F6\u7B7E\u8BC1\uFF0C\u6253\u7B97\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u4F4F\u8D85\u8FC7 6 \u4E2A\u6708\u3002\u6D77\u5916\u9A7E\u7167\u53EF\u4EE5\u5F00\u591A\u4E45\uFF1F",options:["\u9A7E\u7167\u6709\u6548\u5C31\u53EF\u4EE5\u4E00\u76F4\u5F00","\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u5C45\u4F4F\u6700\u591A 6 \u4E2A\u6708","3 \u4E2A\u6708"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u6253\u7B97\u8FDE\u7EED\u5C45\u4F4F 6 \u4E2A\u6708\u4EE5\u4E0A\u7684\u4E34\u65F6\u7B7E\u8BC1\u6301\u6709\u4EBA\uFF0C\u9700\u8981\u6362\u65B0\u5357\u5A01\u5C14\u58EB\u9A7E\u7167\u30026 \u4E2A\u6708\u4ECE\u4F60\u53D6\u5F97\u3001\u6539\u7528\u6216\u4F7F\u7528\u65B0\u5357\u5A01\u5C14\u58EB\u5730\u5740\u4F5C\u4E3A\u4E3B\u8981\u5C45\u4F4F\u5730\u90A3\u5929\u8D77\u7B97\u3002"},X02:{q:"\u5728\u6606\u58EB\u5170\uFF0C\u8C01\u4F4F\u6EE1 3 \u4E2A\u6708\u540E\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u9A7E\u7167\u5F00\u8F66\uFF1F",options:["\u6240\u6709\u6D77\u5916\u9A7E\u7167\u6301\u6709\u4EBA","\u6FB3\u5927\u5229\u4E9A\u516C\u6C11\u4E0E resident visa\uFF08\u6C38\u4E45\u7B7E\u8BC1\uFF09\u6301\u6709\u4EBA","\u53EA\u6709\u89C2\u5149\u5BA2"],why:"\u6606\u58EB\u5170\uFF1A3 \u4E2A\u6708\u671F\u9650\u9002\u7528\u4E8E\u6FB3\u5927\u5229\u4E9A\u516C\u6C11\u4E0E resident visa \u6301\u6709\u4EBA\u3002resident visa \u6307\u6C38\u4E45\u7B7E\u8BC1\u6216 special category visa\uFF0C\u4E0D\u5305\u542B\u4E34\u65F6\u3001\u5546\u52A1\u6216\u76D1\u62A4\u4EBA\u7B7E\u8BC1\u3002"},X03:{q:"\u4F60\u7528\u6D77\u5916\u9A7E\u7167\u5F00\u8F66\uFF0C\u7ED3\u679C\u8DEF\u8003\u6CA1\u8FC7\u3002\u8FD8\u80FD\u81EA\u5DF1\u5F00\u8F66\u56DE\u5BB6\u5417\uFF1F",options:["\u53EF\u4EE5\uFF0C\u6D77\u5916\u9A7E\u7167\u8FD8\u6709\u6548","\u4E0D\u884C\uFF0C\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u9A7E\u7167\u5F00\u8F66","\u53EF\u4EE5\uFF0C\u8FD8\u80FD\u518D\u5F00 7 \u5929"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u8DEF\u8003\u6CA1\u8FC7\uFF0C\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u9A7E\u7167\u5F00\u8F66\u3002\u6606\u58EB\u5170\uFF1A\u5728\u6606\u58EB\u5170\u8DEF\u8003\u6CA1\u8FC7\uFF0C\u5F00\u8F66\u8D44\u683C\u5373\u88AB\u64A4\u9500\u3002"},X04:{q:"\u4F60\u6301\u6D77\u5916\u7684\u201C\u5B66\u4E60\u9A7E\u7167\u201D\u6765\u65B0\u5357\u5A01\u5C14\u58EB\u3002\u4E0B\u5217\u54EA\u4E00\u9879\u662F\u5FC5\u8981\u7684\uFF1F",options:["\u6CA1\u6709\u7279\u522B\u89C4\u5B9A","\u7531\u6301\u6FB3\u5927\u5229\u4E9A\u6B63\u5F0F\u9A7E\u7167\u7684\u4EBA\u966A\u540C\u3001\u524D\u540E\u6302 L \u724C\u3001\u9152\u7CBE\u6D53\u5EA6\u4E3A\u96F6","\u53EA\u8981\u6302 L \u724C"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u5FC5\u987B\u5168\u7A0B\u7531\u6301\u6FB3\u5927\u5229\u4E9A\u6B63\u5F0F\uFF08Class C\uFF09\u9A7E\u7167\u7684\u4EBA\u966A\u540C\u3001\u8F66\u8F86\u524D\u540E\u6302 L \u724C\uFF0C\u800C\u4E14\u9152\u7CBE\u6D53\u5EA6\u5FC5\u987B\u4E3A\u96F6\u3002"},X05:{q:"\u5728\u65B0\u5357\u5A01\u5C14\u58EB\uFF0C\u7D2F\u79EF\u591A\u5C11\u6263\u5206\u4F1A\u88AB\u6C38\u4E45\u64A4\u9500\u8BBF\u5BA2\u5F00\u8F66\u8D44\u683C\uFF1F",options:["4 \u70B9","13 \u70B9","20 \u70B9"],why:"\u65B0\u5357\u5A01\u5C14\u58EB\uFF1A\u7D2F\u79EF 13 \u70B9\uFF0CTransport for NSW \u4F1A\u6C38\u4E45\u64A4\u9500\u8BBF\u5BA2\u5F00\u8F66\u8D44\u683C\u3002"},X06:{q:"\u4F60\u6301\u6709\u65E5\u672C\u6C7D\u8F66\u9A7E\u7167\u3002\u6362\u65B0\u5357\u5A01\u5C14\u58EB\u6216\u6606\u58EB\u5170\u7684\u6C7D\u8F66\u9A7E\u7167\uFF0C\u9700\u8981\u8003\u7B14\u8BD5\u548C\u8DEF\u8003\u5417\uFF1F",options:["\u4E24\u4E2A\u90FD\u8981\u8003","\u4E0D\u7528\uFF0C\u65E5\u672C\u5728\u4E24\u5DDE\u7684\u8BA4\u53EF\u540D\u5355\u4E0A","\u53EA\u6709\u6606\u58EB\u5170\u8981\u8003"],why:"2026 \u5E74 11 \u6708 10 \u65E5\u8BFB\u53D6\u7684\u65B0\u5357\u5A01\u5C14\u58EB\u4E0E\u6606\u58EB\u5170\u8BA4\u53EF\u540D\u5355\u4E0A\u90FD\u6709\u65E5\u672C\u3002"},X07:{q:"\u4F60\u6301\u6709\u97E9\u56FD\u6216\u53F0\u6E7E\u6C7D\u8F66\u9A7E\u7167\u3002\u4E0B\u5217\u54EA\u4E00\u9879\u7B26\u5408 2026 \u5E74 11 \u6708 10 \u65E5\u7684\u5B98\u65B9\u9875\u9762\uFF1F",options:["\u6606\u58EB\u5170\u8BA4\u53EF\uFF08\u514D\u8BD5\uFF09\uFF1B\u4E0D\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u8BA4\u53EF\u540D\u5355\u4E0A\uFF08\u8981\u8003\u8BD5\uFF09","\u4E24\u5DDE\u90FD\u8BA4\u53EF","\u4E24\u5DDE\u90FD\u4E0D\u8BA4\u53EF"],why:"\u6606\u58EB\u5170\u9875\u9762\uFF08\u6700\u540E\u66F4\u65B0 2026 \u5E74 10 \u6708 31 \u65E5\uFF09\u628A\u97E9\u56FD\u4E0E\u53F0\u6E7E\u5217\u4E3A\u8BA4\u53EF\u3002\u540C\u4E00\u5929\u8BFB\u53D6\u7684\u65B0\u5357\u5A01\u5C14\u58EB\u9875\u9762\u6CA1\u6709\u5217\u51FA\u3002"},X08:{q:"\u4F60\u6301\u6709\u4E2D\u56FD\u6216\u9999\u6E2F\u7684\u6C7D\u8F66\u9A7E\u7167\u3002\u5728\u65B0\u5357\u5A01\u5C14\u58EB\u548C\u6606\u58EB\u5170\u6362\u7167\u9700\u8981\u4EC0\u4E48\uFF1F",options:["\u4EC0\u4E48\u90FD\u4E0D\u7528\uFF0C\u81EA\u52A8\u6362\u53D1","\u901A\u8FC7\u7B14\u8BD5\u4E0E\u8DEF\u8003","\u53EA\u8981\u89C6\u529B\u68C0\u67E5"],why:"2026 \u5E74 11 \u6708 10 \u65E5\u8BFB\u53D6\u7684\u65B0\u5357\u5A01\u5C14\u58EB\u4E0E\u6606\u58EB\u5170\u8BA4\u53EF\u540D\u5355\u4E0A\u90FD\u6CA1\u6709\u4E2D\u56FD\u4E0E\u9999\u6E2F\uFF0C\u56E0\u6B64\u5FC5\u987B\u8003\u8BD5\u3002"}}};var xh={ui:{title:"\u6FB3\u6D32\u8DEF\u8003\u6311\u6230",tagline:"\u540C\u4E00\u500B\u52D5\u4F5C\uFF0C\u63DB\u4E00\u500B\u5DDE\uFF0C\u6CD5\u5F8B\u5C31\u4E0D\u540C\u3002\u4E0A\u8DEF\u524D\uFF0C\u5148\u5B78\u6703\u65B0\u5357\u5A01\u723E\u65AF\u3001\u6606\u58EB\u862D\u3001\u7DAD\u591A\u5229\u4E9E\u7684\u4EA4\u901A\u898F\u5247\u3002",modeRun:"\u55AE\u5DDE\u95D6\u95DC",modeRunDesc:"\u9078\u4E00\u500B\u5DDE\u3002\u6700\u591A 10 \u984C\uFF0C3 \u689D\u547D\u3002",modeTrap:"\u5DDE\u754C\u9677\u9631",modeTrapDesc:"\u540C\u4E00\u500B\u52D5\u4F5C\uFF0C\u9EDE\u51FA\u6240\u6709\u5408\u6CD5\u7684\u5DDE\u3002",modeLicence:"\u99D5\u7167\u67E5\u8A62",modeLicenceDesc:"\u5B98\u65B9\u9801\u9762\u5C0D\u6D77\u5916\u99D5\u7167\u600E\u9EBC\u8AAA\u3002",pickState:"\u9078\u64C7\u5DDE",lives:"\u751F\u547D",score:"\u5206\u6578",question:"\u7B2C",next:"\u4E0B\u4E00\u984C",finish:"\u770B\u6210\u7E3E",correct:"\u7B54\u5C0D\u4E86",wrong:"\u518D\u60F3\u60F3",source:"\u5B98\u65B9\u4F86\u6E90",official:"\u5B98\u65B9\u82F1\u6587\u539F\u6587",resultTitle:"\u6210\u7E3E",gameOver:"\u751F\u547D\u7528\u5B8C\u4E86",weakest:"\u5EFA\u8B70\u8907\u7FD2",playAgain:"\u518D\u73A9\u4E00\u6B21",home:"\u9996\u9801",trapPrompt:"\u9EDE\u51FA\u6240\u6709\u5408\u6CD5\u7684\u5DDE\u3002\u5982\u679C\u90FD\u4E0D\u5408\u6CD5\uFF0C\u5C31\u4E0D\u8981\u9078\u3002",check:"\u78BA\u8A8D\u7B54\u6848",legal:"\u5408\u6CD5",illegal:"\u4E0D\u5408\u6CD5",licState:"\u5DDE",licCountry:"\u99D5\u7167\u6838\u767C\u5730",licStatus:"\u4F60\u7684\u8EAB\u5206",statusTemp:"\u81E8\u6642\u7C3D\u8B49",statusPerm:"\u6C38\u4E45\u5C45\u6C11\u6216\u516C\u6C11",licDuration:"\u53EF\u4EE5\u7528\u5B83\u958B\u591A\u4E45",licTests:"\u63DB\u7167\u9700\u8981\u7684\u8003\u8A66",disclaimer:"\u5B78\u7FD2\u7528\u904A\u6232\uFF0C\u4E0D\u662F\u5B98\u65B9\u8003\u8A66\uFF0C\u4E5F\u4E0D\u662F\u6CD5\u5F8B\u610F\u898B\u3002\u4E0A\u8DEF\u524D\u8ACB\u4EE5\u5B98\u65B9\u4F86\u6E90\u70BA\u6E96\u3002",verified:"\u898F\u5247\u5DF2\u5C0D\u7167\u5B98\u65B9\u9801\u9762\u67E5\u8B49\uFF0C\u65E5\u671F",timeSensitive:"\u9019\u9805\u898F\u5B9A\u6700\u8FD1\u6709\u8B8A\u52D5\uFF0C\u8ACB\u91CD\u65B0\u67E5\u770B\u5B98\u65B9\u9801\u9762\u3002",language:"\u8A9E\u8A00"},states:{NSW:"\u65B0\u5357\u5A01\u723E\u65AF",QLD:"\u6606\u58EB\u862D",VIC:"\u7DAD\u591A\u5229\u4E9E"},categories:{turning:"\u8F49\u5F4E\u8207\u8FF4\u8F49",lines:"\u9053\u8DEF\u6A19\u7DDA",parking:"\u505C\u8ECA\u8207\u81E8\u505C",signals:"\u865F\u8A8C\u8207\u65B9\u5411\u71C8",safety:"\u7DCA\u6025\u8ECA\u8F1B",trams:"\u96FB\u8ECA\u8207\u9264\u5F62\u8F49\u5F4E",penalties:"\u7F70\u5247",licence:"\u6D77\u5916\u99D5\u7167"},countries:{JP:"\u65E5\u672C",KR:"\u5357\u97D3",TW:"\u53F0\u7063",HK:"\u9999\u6E2F",CN:"\u4E2D\u570B"},traps:{BT1:{q:"\u8DEF\u53E3\u6C92\u6709\u4EFB\u4F55\u6A19\u8A8C\u3002\u4F60\u5728\u7D05\u7DA0\u71C8\u8DEF\u53E3\u8FF4\u8F49\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u65B0\u5357\u5A01\u723E\u65AF\u8207\u6606\u58EB\u862D\u5FC5\u9808\u6709\u300CU-turn permitted\u300D\u6A19\u8A8C\u624D\u80FD\u8FF4\u8F49\u3002\u7DAD\u591A\u5229\u4E9E\u53EF\u4EE5\u8FF4\u8F49\uFF0C\u9664\u975E\u6709\u300Cno U-turn\u300D\u6216\u300Cno right turn\u300D\u6A19\u8A8C\u3002"},BT2:{q:"\u4F60\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF0C\u8F49\u9032\u5C0D\u5411\u7684\u8ECA\u9053\u51FA\u5165\u53E3\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u53EF\u4EE5\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7DDA\u9032\u51FA\u9053\u8DEF\u3002\u6606\u58EB\u862D\uFF1A\u4E0D\u5F97\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF0C\u552F\u4E00\u4F8B\u5916\u662F\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8ECA\u3002"},BT3:{q:"\u4F60\u8DE8\u8D8A\u55AE\u5BE6\u7DDA\u8FF4\u8F49\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u90FD\u4E0D\u5408\u6CD5\u3002\u65B0\u5357\u5A01\u723E\u65AF\u3001\u6606\u58EB\u862D\u3001\u7DAD\u591A\u5229\u4E9E\u90FD\u7981\u6B62\u8DE8\u8D8A\u55AE\u5BE6\u7DDA\u8FF4\u8F49\u3002"},BT4:{q:"\u4F60\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\u8FF4\u8F49\u3002\u54EA\u4E9B\u5DDE\u5408\u6CD5\uFF1F",why:"\u90FD\u4E0D\u5408\u6CD5\u3002\u65B0\u5357\u5A01\u723E\u65AF\u3001\u6606\u58EB\u862D\u3001\u7DAD\u591A\u5229\u4E9E\u90FD\u7981\u6B62\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\u8FF4\u8F49\u3002"}},licence:{dur_nsw_temp:"\u5982\u679C\u6253\u7B97\u5728\u65B0\u5357\u5A01\u723E\u65AF\u4F4F 6 \u500B\u6708\u4EE5\u4E0A\uFF0C\u6700\u591A\u53EF\u4EE5\u958B 6 \u500B\u6708\uFF0C\u4E4B\u5F8C\u5FC5\u9808\u63DB\u65B0\u5357\u5A01\u723E\u65AF\u99D5\u7167\u30026 \u500B\u6708\u5F9E\u4F60\u53D6\u5F97\u3001\u6539\u7528\u6216\u4F7F\u7528\u65B0\u5357\u5A01\u723E\u65AF\u5730\u5740\u4F5C\u70BA\u4E3B\u8981\u5C45\u4F4F\u5730\u90A3\u5929\u8D77\u7B97\u3002",dur_nsw_perm:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\u5C45\u4F4F 3 \u500B\u6708\u5167\uFF0C\u5FC5\u9808\u53D6\u5F97\u65B0\u5357\u5A01\u723E\u65AF\u99D5\u7167\u3002",dur_qld_temp:"\u6606\u58EB\u862D\u7684 3 \u500B\u6708\u671F\u9650\u9069\u7528\u65BC\u6FB3\u6D32\u516C\u6C11\u8207 resident visa\uFF08\u6C38\u4E45\u7C3D\u8B49\uFF09\u6301\u6709\u4EBA\u3002\u81E8\u6642\u7C3D\u8B49\u4E0D\u7B97 resident visa\uFF0C\u6240\u4EE5\u8A2A\u5BA2\u53EF\u4EE5\u6301\u6709\u6548\u7684\u6D77\u5916\u99D5\u7167\u958B\u8ECA\u3002",dur_qld_perm:"\u5728\u6606\u58EB\u862D\u4F4F\u6EFF 3 \u500B\u6708\u5F8C\uFF0C\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u99D5\u7167\u958B\u8ECA\u3002",dur_vic:"\u5982\u679C\u8981\u5728\u7DAD\u591A\u5229\u4E9E\u958B\u8ECA\u8D85\u904E 6 \u500B\u6708\uFF0C\u5FC5\u9808\u628A\u6D77\u5916\u99D5\u7167\u63DB\u6210\u7DAD\u591A\u5229\u4E9E\u99D5\u7167\u3002",test_nsw_yes:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\u8A8D\u53EF\u540D\u55AE\u4E0A\uFF1A\u63DB\u6C7D\u8ECA\u99D5\u7167\u4E0D\u7528\u8003\u7B46\u8A66\uFF0C\u4E5F\u4E0D\u7528\u8DEF\u8003\u3002",test_nsw_no:"\u4E0D\u5728\u65B0\u5357\u5A01\u723E\u65AF\u8A8D\u53EF\u540D\u55AE\u4E0A\uFF1A\u5FC5\u9808\u901A\u904E\u7B46\u8A66\u8207\u8DEF\u8003\u3002",test_qld_yes:"\u5728\u6606\u58EB\u862D\u8A8D\u53EF\u540D\u55AE\u4E0A\uFF1A\u63DB\u6C7D\u8ECA\u99D5\u7167\u4E0D\u7528\u8003\u4EA4\u901A\u898F\u5247\u7B46\u8A66\uFF0C\u4E5F\u4E0D\u7528\u8DEF\u8003\u3002",test_qld_no:"\u4E0D\u5728\u6606\u58EB\u862D\u8A8D\u53EF\u540D\u55AE\u4E0A\uFF1A\u5FC5\u9808\u901A\u904E\u4EA4\u901A\u898F\u5247\u7B46\u8A66\u8207\u8DEF\u8003\u3002",test_vic_full:"\u5728 VicRoads \u63DB\u7167\u8868\u4E2D\u4EE3\u78BC\u70BA FULL\u3002\u6211\u5011\u8B80\u5230\u7684\u9801\u9762\u5167\u6587\u6C92\u6709\u5BEB\u660E\u8003\u8A66\u8981\u6C42\u3002\u7121\u6CD5\u5224\u5B9A\uFF1A\u8ACB\u4F7F\u7528 VicRoads \u67E5\u8A62\u5DE5\u5177\u3002",test_vic_exp:"\u5728 VicRoads \u63DB\u7167\u8868\u4E2D\u4EE3\u78BC\u70BA EXP\u3002\u9801\u9762\u6C92\u6709\u8AAA\u660E EXP \u76EE\u524D\u4EE3\u8868\u4EC0\u9EBC\u3002\u7121\u6CD5\u5224\u5B9A\uFF1A\u8ACB\u4F7F\u7528 VicRoads \u67E5\u8A62\u5DE5\u5177\u3002",test_vic_non:"\u5728 VicRoads \u63DB\u7167\u8868\u4E2D\u4EE3\u78BC\u70BA NON\u3002\u6211\u5011\u8B80\u5230\u7684\u9801\u9762\u5167\u6587\u6C92\u6709\u5BEB\u660E\u8003\u8A66\u8981\u6C42\u3002\u7121\u6CD5\u5224\u5B9A\uFF1A\u8ACB\u4F7F\u7528 VicRoads \u67E5\u8A62\u5DE5\u5177\u3002"},questions:{U01:{q:"\u4F60\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u505C\u5728\u7D05\u7DA0\u71C8\u8DEF\u53E3\u3002\u6C92\u6709\u4EFB\u4F55\u8FF4\u8F49\u6A19\u8A8C\u3002\u4F60\u600E\u9EBC\u505A\uFF1F",options:["\u8FF4\u8F49\u3002\u6211\u6C92\u770B\u5230\u300CNo U-turn\u300D\u6A19\u8A8C\uFF0C\u6240\u4EE5\u53EF\u4EE5","\u4E0D\u8FF4\u8F49\u3002\u65B0\u5357\u5A01\u723E\u65AF\u7684\u7D05\u7DA0\u71C8\u8DEF\u53E3\u8981\u6709\u300CU-turn permitted\u300D\u6A19\u8A8C\u624D\u884C","\u8FF4\u8F49\uFF0C\u4F46\u8981\u7B49\u7DA0\u8272\u7BAD\u982D"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u7D05\u7DA0\u71C8\u8DEF\u53E3\u4E0D\u5F97\u8FF4\u8F49\uFF0C\u9664\u975E\u6709\u300CU-turn permitted\u300D\u6A19\u8A8C\u3002"},U02:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u4E0B\u5217\u54EA\u4E9B\u5730\u65B9\u8981\u6709\u300CU-turn permitted\u300D\u6A19\u8A8C\u624D\u80FD\u8FF4\u8F49\uFF1F",options:["\u53EA\u6709\u7D05\u7DA0\u71C8\u8DEF\u53E3","\u7D05\u7DA0\u71C8\u3001\u5152\u7AE5\u7A7F\u8D8A\u9053\u3001\u5E73\u4EA4\u9053\u3001\u6A19\u7DDA\u884C\u4EBA\u7A7F\u8D8A\u9053\u3001\u884C\u4EBA\u7A7F\u8D8A\u9053","\u90FD\u4E0D\u7528\uFF0C\u53EA\u8981\u5B89\u5168\u5C31\u80FD\u8FF4\u8F49"],why:"\u6606\u58EB\u862D\u5217\u51FA\u9019\u4E94\u7A2E\u5730\u9EDE\uFF1A\u53EA\u6709\u8A2D\u7F6E U-turn permitted \u6A19\u8A8C\u6642\u624D\u53EF\u4EE5\u8FF4\u8F49\u3002"},U03:{q:"\u4F60\u5728\u7DAD\u591A\u5229\u4E9E\u7684\u7D05\u7DA0\u71C8\u8DEF\u53E3\u3002\u6C92\u6709\u300CNo U-turn\u300D\uFF0C\u4E5F\u6C92\u6709\u300CNo right turn\u300D\u6A19\u8A8C\u3002\u4F60\u600E\u9EBC\u505A\uFF1F",options:["\u5B89\u5168\u5C31\u8FF4\u8F49\u3002\u6211\u6C92\u770B\u5230\u300CNo U-turn\u300D\u6216\u300CNo right turn\u300D\u6A19\u8A8C","\u4E0D\u8FF4\u8F49\u3002\u7DAD\u591A\u5229\u4E9E\u548C\u65B0\u5357\u5A01\u723E\u65AF\u4E00\u6A23\u8981\u6709\u300CU-turn permitted\u300D\u6A19\u8A8C","\u53EA\u6709\u665A\u4E0A 10 \u9EDE\u5230\u65E9\u4E0A 6 \u9EDE\u53EF\u4EE5\u8FF4\u8F49"],why:"\u7DAD\u591A\u5229\u4E9E\uFF1A\u6709\u7121\u865F\u8A8C\u7684\u8DEF\u53E3\u90FD\u53EF\u4EE5\u8FF4\u8F49\uFF0C\u9664\u975E\u6709\u300Cno U-turn\u300D\u6A19\u8A8C\uFF1B\u300Cno right turn\u300D\u6A19\u8A8C\u540C\u6A23\u7981\u6B62\u8FF4\u8F49\u3002"},U04:{q:"\u4F60\u6B63\u5728\u8FF4\u8F49\u3002\u6709\u4E00\u8F1B\u8ECA\u5F9E\u652F\u9053\u5DE6\u8F49\u51FA\u4F86\uFF0C\u5B83\u9762\u524D\u662F GIVE WAY \u6A19\u8A8C\u3002\u8AB0\u8981\u8B93\uFF1F",options:["\u5C0D\u65B9\uFF0C\u56E0\u70BA\u5B83\u6709 GIVE WAY \u6A19\u8A8C","\u4F60\u3002\u8FF4\u8F49\u8ECA\u5FC5\u9808\u8B93\u6240\u6709\u5176\u4ED6\u8ECA\u8F1B\u8207\u884C\u4EBA","\u8AB0\u665A\u5230\u8AB0\u8B93"],why:"\u4E09\u500B\u5DDE\u90FD\u898F\u5B9A\u8FF4\u8F49\u8ECA\u5FC5\u9808\u8B93\u6240\u6709\u5176\u4ED6\u8ECA\u8F1B\u8207\u884C\u4EBA\u3002\u7DAD\u591A\u5229\u4E9E\u660E\u6587\u5305\u542B\u5F9E slip lane \u6216\u652F\u9053\u5DE6\u8F49\u51FA\u4F86\u7684\u8ECA\u3002"},L01:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u53EF\u4EE5\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\u8F49\u9032\u8ECA\u9053\u51FA\u5165\u53E3\u55CE\uFF1F",options:["\u53EF\u4EE5\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7DDA\u9032\u51FA\u9053\u8DEF","\u4E0D\u884C\uFF0C\u4EFB\u4F55\u60C5\u6CC1\u90FD\u4E0D\u884C","\u53EA\u6709\u8D85\u8ECA\u6642\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u53EF\u4EE5\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF0C\u4EE5\u6700\u77ED\u8DEF\u7DDA\u9032\u51FA\u9053\u8DEF\u3002"},L02:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u4EC0\u9EBC\u60C5\u6CC1\u53EF\u4EE5\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF1F",options:["\u8F49\u9032\u8ECA\u9053\u51FA\u5165\u53E3","\u8D85\u8D8A\u6162\u8ECA","\u53EA\u6709\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8ECA\u6642"],why:"\u6606\u58EB\u862D\uFF1A\u4E0D\u5F97\u8DE8\u8D8A\u96D9\u5BE6\u7DDA\uFF0C\u552F\u4E00\u4F8B\u5916\u662F\u5B89\u5168\u8D85\u8D8A\u81EA\u884C\u8ECA\u3002"},L03:{q:"\u53EF\u4EE5\u8DE8\u8D8A\u55AE\u5BE6\u7DDA\u8FF4\u8F49\u55CE\uFF1F",options:["\u53EF\u4EE5","\u4E0D\u53EF\u4EE5","\u53EA\u6709\u65B0\u5357\u5A01\u723E\u65AF\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u723E\u65AF\u8207\u6606\u58EB\u862D\u90FD\u7981\u6B62\u8DE8\u8D8A\u55AE\u5BE6\u7DDA\u8FF4\u8F49\u3002"},L04:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u69FD\u5316\u7DDA\u7531\u55AE\u7DDA\u5305\u570D\u6642\uFF0C\u70BA\u4E86\u9032\u5165\u8F49\u5F4E\u8ECA\u9053\uFF0C\u6700\u591A\u53EF\u4EE5\u5728\u4E0A\u9762\u884C\u99DB\u591A\u9060\uFF1F",options:["\u6700\u591A 50 \u516C\u5C3A","\u6700\u591A 100 \u516C\u5C3A","\u5B8C\u5168\u4E0D\u80FD\u884C\u99DB"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u6700\u591A 50 \u516C\u5C3A\uFF0C\u7528\u65BC\u9032\u51FA\u9053\u8DEF\u3001\u9032\u5165\u7DCA\u63A5\u5728\u69FD\u5316\u7DDA\u5F8C\u7684\u8F49\u5F4E\u8ECA\u9053\uFF0C\u6216\u659C\u89D2\u505C\u8ECA\u3002"},L05:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u5F9E\u55AE\u8ECA\u9053\u9053\u8DEF\u8F49\u5F4E\u6642\uFF0C\u8DE8\u8D8A\u767D\u8272\u5BE6\u7DDA\u8DEF\u7DE3\u7DDA\u5F8C\u6700\u591A\u53EF\u4EE5\u884C\u99DB\u591A\u9060\uFF1F",options:["\u6700\u591A 20 \u516C\u5C3A","\u6700\u591A 50 \u516C\u5C3A","\u6700\u591A 100 \u516C\u5C3A"],why:"\u6606\u58EB\u862D\uFF1A\u5728\u5217\u51FA\u7684\u60C5\u6CC1\u4E0B\uFF0C\u8DE8\u8D8A\u767D\u8272\u5BE6\u7DDA\u8DEF\u7DE3\u7DDA\u5F8C\u6700\u591A\u53EF\u884C\u99DB 100 \u516C\u5C3A\u3002"},L06:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u9EC3\u8272\u8DEF\u7DE3\u7DDA\u4EE3\u8868\u4EC0\u9EBC\uFF1F",options:["\u53EF\u4EE5\u505C 15 \u5206\u9418","\u6A19\u7DDA\u7BC4\u570D\u5167\u7981\u6B62\u81E8\u505C\u8207\u505C\u8ECA","\u516C\u8ECA\u5C08\u7528\u9053"],why:"\u6606\u58EB\u862D\uFF1A\u8DEF\u7DE3\u7DDA\u662F\u9EC3\u8272\u6642\uFF0C\u6A19\u7DDA\u7BC4\u570D\u5167\u7981\u6B62\u81E8\u505C\u8207\u505C\u8ECA\u3002"},L07:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u8DEF\u7DE3\u7684\u9EC3\u8272\u5BE6\u7DDA\u4EE3\u8868\u4EC0\u9EBC\uFF1F",options:["\u7981\u6B62\u81E8\u505C\uFF0C\u7DCA\u6025\u60C5\u6CC1\u9664\u5916","\u88DD\u5378\u8CA8\u5340","\u5C45\u6C11\u5C08\u7528\u505C\u8ECA"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u9EC3\u8272\u5BE6\u7DDA\u4EE3\u8868\u4E0D\u5F97\u5728\u6B64\u505C\u8ECA\uFF0C\u7DCA\u6025\u60C5\u6CC1\u9664\u5916\u3002"},S01:{q:"\u71C8\u865F\u8B8A\u9EC3\u71C8\uFF0C\u800C\u4F60\u53EF\u4EE5\u5B89\u5168\u505C\u4E0B\u3002\u4F60\u5FC5\u9808\u600E\u9EBC\u505A\uFF1F",options:["\u52A0\u901F\u901A\u904E\u8DEF\u53E3","\u505C\u8ECA","\u6309\u5587\u53ED\u7E7C\u7E8C\u8D70"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u9EC3\u71C8\u4EE3\u8868\u5FC5\u9808\u505C\u8ECA\uFF1B\u53EA\u6709\u7121\u6CD5\u5B89\u5168\u505C\u5728\u505C\u6B62\u7DDA\u524D\u624D\u80FD\u901A\u904E\u3002\u6606\u58EB\u862D\uFF1A\u9EC3\u71C8\u5FC5\u9808\u505C\u8ECA\uFF0C\u9664\u975E\u505C\u8ECA\u4E0D\u5B89\u5168\u3002"},S02:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u4EC0\u9EBC\u60C5\u6CC1\u53EF\u4EE5\u7D05\u71C8\u5DE6\u8F49\uFF1F",options:["\u53EA\u8981\u6C92\u8ECA\u5C31\u53EF\u4EE5","\u53EA\u6709\u8A2D\u7F6E\u300Cleft turn on red permitted after stopping\u300D\u6A19\u8A8C\u7684\u8DEF\u53E3\uFF0C\u800C\u4E14\u8981\u5148\u505C\u8ECA","\u4EFB\u4F55\u60C5\u6CC1\u90FD\u4E0D\u884C"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u770B\u5230\u9019\u500B\u6A19\u8A8C\u6642\uFF0C\u5FC5\u9808\u5148\u5728\u7D05\u71C8\u524D\u505C\u8ECA\uFF0C\u78BA\u8A8D\u5B89\u5168\u5F8C\u518D\u5DE6\u8F49\uFF0C\u4E26\u8B93\u53F3\u65B9\u4F86\u8ECA\u3002"},S03:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u6C7D\u8ECA\u53EF\u4EE5\u505C\u5728\u7D05\u7DA0\u71C8\u524D\u7684\u81EA\u884C\u8ECA\u505C\u7B49\u5340\u55CE\uFF1F",options:["\u53EF\u4EE5\uFF0C\u53EA\u8981\u6C92\u6709\u81EA\u884C\u8ECA","\u4E0D\u53EF\u4EE5","\u53EA\u6709\u5DE6\u8F49\u6642\u53EF\u4EE5"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u8ECA\u8F1B\u4E0D\u5F97\u505C\u5728\u7D05\u7DA0\u71C8\u524D\u4FDD\u7559\u7D66\u81EA\u884C\u8ECA\u7684\u5340\u57DF\u3002"},S04:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u5F9E\u8DEF\u908A\u99DB\u51FA\u524D\uFF0C\u65B9\u5411\u71C8\u81F3\u5C11\u8981\u6253\u591A\u4E45\uFF1F",options:["\u81F3\u5C11 2 \u79D2","\u81F3\u5C11 5 \u79D2","\u6C92\u6709\u898F\u5B9A"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u5F9E\u8DEF\u908A\u6216\u505C\u8ECA\u5340\u99DB\u51FA\u524D\uFF0C\u5FC5\u9808\u6253\u65B9\u5411\u71C8\u81F3\u5C11 5 \u79D2\u3002"},E01:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u901F\u9650 60 km/h\u3002\u4F60\u7D93\u904E\u4E00\u8F1B\u505C\u8457\u3001\u9583\u8457\u7D05\u85CD\u71C8\u7684\u8B66\u8ECA\u3002\u4F60\u5FC5\u9808\u600E\u9EBC\u505A\uFF1F",options:["\u6E1B\u901F\u5230 40 km/h","\u7DAD\u6301 60 km/h","\u505C\u8ECA\u7B49\u5F85"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u901F\u9650 80 km/h \u4EE5\u4E0B\uFF0C\u5FC5\u9808\u6E1B\u901F\u5230 40 km/h\u3002\u901F\u9650\u8D85\u904E 80 km/h\uFF0C\u5FC5\u9808\u5B89\u5168\u6E1B\u901F\u4E26\u8B93\u51FA\u7A7A\u9593\u3002"},T01:{q:"\u5728\u7DAD\u591A\u5229\u4E9E\uFF0C\u96FB\u8ECA\u505C\u5728\u8DEF\u908A\u7AD9\uFF0C\u4E58\u5BA2\u6B63\u5728\u4E0A\u4E0B\u8ECA\u3002\u4F60\u5FC5\u9808\u600E\u9EBC\u505A\uFF1F",options:["\u5F9E\u5DE6\u5074\u6162\u6162\u901A\u904E","\u505C\u5728\u96FB\u8ECA\u8ECA\u5C3E\u5F8C\u65B9","\u5F9E\u53F3\u5074\u8D85\u8ECA"],why:"\u7DAD\u591A\u5229\u4E9E\uFF1A\u5FC5\u9808\u505C\u5728\u96FB\u8ECA\u8ECA\u5C3E\u5F8C\u65B9\u3002\u7B49\u8ECA\u9580\u95DC\u9589\u3001\u8DEF\u4E0A\u6C92\u6709\u884C\u4EBA\u5F8C\uFF0C\u624D\u53EF\u4EE5\u7528 10 km/h \u901A\u904E\u3002"},T02:{q:"\u5728\u7DAD\u591A\u5229\u4E9E\uFF0C\u53F3\u8F49\u6642\u6700\u591A\u53EF\u4EE5\u5728\u96FB\u8ECA\u9053\u4E0A\u884C\u99DB\u591A\u9060\uFF1F",options:["\u6700\u591A 50 \u516C\u5C3A","\u6700\u591A 100 \u516C\u5C3A","\u6C92\u6709\u9650\u5236"],why:"\u7DAD\u591A\u5229\u4E9E\uFF1A\u53F3\u8F49\u6642\u6700\u591A 50 \u516C\u5C3A\u3002"},T03:{q:"\u5728\u58A8\u723E\u672C\u8A2D\u6709\u300Chook turn\u300D\u6A19\u8A8C\u7684\u8DEF\u53E3\uFF0C\u4F60\u8981\u53F3\u8F49\u3002\u5F9E\u54EA\u500B\u8ECA\u9053\u958B\u59CB\uFF1F\u4EC0\u9EBC\u6642\u5019\u8F49\uFF1F",options:["\u53F3\u5074\u8ECA\u9053\uFF1B\u81EA\u5DF1\u65B9\u5411\u7DA0\u71C8\u6642\u8F49","\u5DE6\u5074\u8ECA\u9053\uFF1B\u7B49\u4F60\u8981\u9032\u5165\u7684\u90A3\u689D\u8DEF\u8B8A\u7DA0\u71C8\u6642\u8F49","\u4E2D\u9593\u8ECA\u9053\uFF1B\u9EC3\u71C8\u6642\u8F49"],why:"\u7DAD\u591A\u5229\u4E9E\uFF1A\u9760\u5DE6\u5074\u8ECA\u9053\u3001\u6253\u53F3\u65B9\u5411\u71C8\u3001\u9032\u5165\u8DEF\u53E3\u5F8C\u505C\u5728\u6700\u5DE6\u5074\uFF0C\u7B49\u4F60\u8981\u9032\u5165\u7684\u90A3\u689D\u8DEF\u7684\u865F\u8A8C\u8B8A\u7DA0\u71C8\u3002"},P01:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u4F7F\u7528\u624B\u6A5F\u7684\u9055\u898F\u4EC0\u9EBC\u6642\u5019\u6703\u8A18\u9EDE\u52A0\u500D\uFF1F",options:["\u53EA\u6709\u570B\u5B9A\u5047\u65E5","\u8DDD\u96E2\u4E0A\u6B21\u9055\u898F 1 \u5E74\u5167\u518D\u72AF","\u6BCF\u4E00\u6B21\u90FD\u52A0\u500D"],why:"\u6606\u58EB\u862D\uFF1A1 \u5E74\u5167\u7B2C\u4E8C\u6B21\u6216\u4E4B\u5F8C\u7684\u7279\u5B9A\u9055\u898F\u8A18\u9EDE\u52A0\u500D\uFF0C\u5305\u542B\u8D85\u901F 20 km/h \u4EE5\u4E0A\u3001\u624B\u6A5F\u3001\u5B89\u5168\u5E36\u3001\u5152\u7AE5\u5EA7\u6905\u3001\u6A5F\u8ECA\u5B89\u5168\u5E3D\u3002"},X01:{q:"\u4F60\u6301\u81E8\u6642\u7C3D\u8B49\uFF0C\u6253\u7B97\u5728\u65B0\u5357\u5A01\u723E\u65AF\u4F4F\u8D85\u904E 6 \u500B\u6708\u3002\u6D77\u5916\u99D5\u7167\u53EF\u4EE5\u958B\u591A\u4E45\uFF1F",options:["\u99D5\u7167\u6709\u6548\u5C31\u53EF\u4EE5\u4E00\u76F4\u958B","\u5728\u65B0\u5357\u5A01\u723E\u65AF\u5C45\u4F4F\u6700\u591A 6 \u500B\u6708","3 \u500B\u6708"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u6253\u7B97\u9023\u7E8C\u5C45\u4F4F 6 \u500B\u6708\u4EE5\u4E0A\u7684\u81E8\u6642\u7C3D\u8B49\u6301\u6709\u4EBA\uFF0C\u9700\u8981\u63DB\u65B0\u5357\u5A01\u723E\u65AF\u99D5\u7167\u30026 \u500B\u6708\u5F9E\u4F60\u53D6\u5F97\u3001\u6539\u7528\u6216\u4F7F\u7528\u65B0\u5357\u5A01\u723E\u65AF\u5730\u5740\u4F5C\u70BA\u4E3B\u8981\u5C45\u4F4F\u5730\u90A3\u5929\u8D77\u7B97\u3002"},X02:{q:"\u5728\u6606\u58EB\u862D\uFF0C\u8AB0\u4F4F\u6EFF 3 \u500B\u6708\u5F8C\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u99D5\u7167\u958B\u8ECA\uFF1F",options:["\u6240\u6709\u6D77\u5916\u99D5\u7167\u6301\u6709\u4EBA","\u6FB3\u6D32\u516C\u6C11\u8207 resident visa\uFF08\u6C38\u4E45\u7C3D\u8B49\uFF09\u6301\u6709\u4EBA","\u53EA\u6709\u89C0\u5149\u5BA2"],why:"\u6606\u58EB\u862D\uFF1A3 \u500B\u6708\u671F\u9650\u9069\u7528\u65BC\u6FB3\u6D32\u516C\u6C11\u8207 resident visa \u6301\u6709\u4EBA\u3002resident visa \u6307\u6C38\u4E45\u7C3D\u8B49\u6216 special category visa\uFF0C\u4E0D\u5305\u542B\u81E8\u6642\u3001\u5546\u52D9\u6216\u76E3\u8B77\u4EBA\u7C3D\u8B49\u3002"},X03:{q:"\u4F60\u7528\u6D77\u5916\u99D5\u7167\u958B\u8ECA\uFF0C\u7D50\u679C\u8DEF\u8003\u6C92\u904E\u3002\u9084\u80FD\u81EA\u5DF1\u958B\u8ECA\u56DE\u5BB6\u55CE\uFF1F",options:["\u53EF\u4EE5\uFF0C\u6D77\u5916\u99D5\u7167\u9084\u6709\u6548","\u4E0D\u884C\uFF0C\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u99D5\u7167\u958B\u8ECA","\u53EF\u4EE5\uFF0C\u9084\u80FD\u518D\u958B 7 \u5929"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u8DEF\u8003\u6C92\u904E\uFF0C\u5C31\u4E0D\u80FD\u518D\u7528\u6D77\u5916\u99D5\u7167\u958B\u8ECA\u3002\u6606\u58EB\u862D\uFF1A\u5728\u6606\u58EB\u862D\u8DEF\u8003\u6C92\u904E\uFF0C\u958B\u8ECA\u8CC7\u683C\u5373\u88AB\u64A4\u92B7\u3002"},X04:{q:"\u4F60\u6301\u6D77\u5916\u7684\u300C\u5B78\u7FD2\u99D5\u7167\u300D\u4F86\u65B0\u5357\u5A01\u723E\u65AF\u3002\u4E0B\u5217\u54EA\u4E00\u9805\u662F\u5FC5\u8981\u7684\uFF1F",options:["\u6C92\u6709\u7279\u5225\u898F\u5B9A","\u7531\u6301\u6FB3\u6D32\u6B63\u5F0F\u99D5\u7167\u7684\u4EBA\u966A\u540C\u3001\u524D\u5F8C\u639B L \u724C\u3001\u9152\u7CBE\u6FC3\u5EA6\u70BA\u96F6","\u53EA\u8981\u639B L \u724C"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u5FC5\u9808\u5168\u7A0B\u7531\u6301\u6FB3\u6D32\u6B63\u5F0F\uFF08Class C\uFF09\u99D5\u7167\u7684\u4EBA\u966A\u540C\u3001\u8ECA\u8F1B\u524D\u5F8C\u639B L \u724C\uFF0C\u800C\u4E14\u9152\u7CBE\u6FC3\u5EA6\u5FC5\u9808\u70BA\u96F6\u3002"},X05:{q:"\u5728\u65B0\u5357\u5A01\u723E\u65AF\uFF0C\u7D2F\u7A4D\u591A\u5C11\u9055\u898F\u8A18\u9EDE\u6703\u88AB\u6C38\u4E45\u64A4\u92B7\u8A2A\u5BA2\u958B\u8ECA\u8CC7\u683C\uFF1F",options:["4 \u9EDE","13 \u9EDE","20 \u9EDE"],why:"\u65B0\u5357\u5A01\u723E\u65AF\uFF1A\u7D2F\u7A4D 13 \u9EDE\uFF0CTransport for NSW \u6703\u6C38\u4E45\u64A4\u92B7\u8A2A\u5BA2\u958B\u8ECA\u8CC7\u683C\u3002"},X06:{q:"\u4F60\u6301\u6709\u65E5\u672C\u6C7D\u8ECA\u99D5\u7167\u3002\u63DB\u65B0\u5357\u5A01\u723E\u65AF\u6216\u6606\u58EB\u862D\u7684\u6C7D\u8ECA\u99D5\u7167\uFF0C\u9700\u8981\u8003\u7B46\u8A66\u548C\u8DEF\u8003\u55CE\uFF1F",options:["\u5169\u500B\u90FD\u8981\u8003","\u4E0D\u7528\uFF0C\u65E5\u672C\u5728\u5169\u5DDE\u7684\u8A8D\u53EF\u540D\u55AE\u4E0A","\u53EA\u6709\u6606\u58EB\u862D\u8981\u8003"],why:"2026 \u5E74 11 \u6708 10 \u65E5\u8B80\u53D6\u7684\u65B0\u5357\u5A01\u723E\u65AF\u8207\u6606\u58EB\u862D\u8A8D\u53EF\u540D\u55AE\u4E0A\u90FD\u6709\u65E5\u672C\u3002"},X07:{q:"\u4F60\u6301\u6709\u5357\u97D3\u6216\u53F0\u7063\u6C7D\u8ECA\u99D5\u7167\u3002\u4E0B\u5217\u54EA\u4E00\u9805\u7B26\u5408 2026 \u5E74 11 \u6708 10 \u65E5\u7684\u5B98\u65B9\u9801\u9762\uFF1F",options:["\u6606\u58EB\u862D\u8A8D\u53EF\uFF08\u514D\u8A66\uFF09\uFF1B\u4E0D\u5728\u65B0\u5357\u5A01\u723E\u65AF\u8A8D\u53EF\u540D\u55AE\u4E0A\uFF08\u8981\u8003\u8A66\uFF09","\u5169\u5DDE\u90FD\u8A8D\u53EF","\u5169\u5DDE\u90FD\u4E0D\u8A8D\u53EF"],why:"\u6606\u58EB\u862D\u9801\u9762\uFF08\u6700\u5F8C\u66F4\u65B0 2026 \u5E74 10 \u6708 31 \u65E5\uFF09\u628A\u5357\u97D3\u8207\u53F0\u7063\u5217\u70BA\u8A8D\u53EF\u3002\u540C\u4E00\u5929\u8B80\u53D6\u7684\u65B0\u5357\u5A01\u723E\u65AF\u9801\u9762\u6C92\u6709\u5217\u51FA\u3002"},X08:{q:"\u4F60\u6301\u6709\u4E2D\u570B\u6216\u9999\u6E2F\u7684\u6C7D\u8ECA\u99D5\u7167\u3002\u5728\u65B0\u5357\u5A01\u723E\u65AF\u548C\u6606\u58EB\u862D\u63DB\u7167\u9700\u8981\u4EC0\u9EBC\uFF1F",options:["\u4EC0\u9EBC\u90FD\u4E0D\u7528\uFF0C\u81EA\u52D5\u63DB\u767C","\u901A\u904E\u7B46\u8A66\u8207\u8DEF\u8003","\u53EA\u8981\u8996\u529B\u6AA2\u67E5"],why:"2026 \u5E74 11 \u6708 10 \u65E5\u8B80\u53D6\u7684\u65B0\u5357\u5A01\u723E\u65AF\u8207\u6606\u58EB\u862D\u8A8D\u53EF\u540D\u55AE\u4E0A\u90FD\u6C92\u6709\u4E2D\u570B\u8207\u9999\u6E2F\uFF0C\u56E0\u6B64\u5FC5\u9808\u8003\u8A66\u3002"}}};var Mh="2026-11-10",Us={en:ph,ja:mh,ko:gh,"zh-Hans":_h,"zh-Hant":xh},vh={ja:"\u65E5\u672C\u8A9E",ko:"\uD55C\uAD6D\uC5B4","zh-Hans":"\u7B80\u4F53\u4E2D\u6587","zh-Hant":"\u7E41\u9AD4\u4E2D\u6587",en:"English"},Mg=cl.questions,Da={...cl.meta.sources,WENTWORTH:"https://www.wentworth.nsw.gov.au/important-changes-to-overseas-licence-conversions/",VIC_OVERSEAS:"https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence",VIC_TABLE:"https://www.vicroads.vic.gov.au/licences/new-to-victoria/convert-your-overseas-licence"},bh=i=>({kind:"plain",centre:"broken",label:i}),wh={U01:{stage:{kind:"lights",centre:"broken",light:"green"},act:"straight"},U02:{stage:{kind:"lights",centre:"broken",light:"green"},act:"straight"},U03:{stage:{kind:"lights",centre:"broken",light:"green"},act:"uturn"},U04:{stage:{kind:"lights",centre:"broken",otherCar:!0},act:"uturn"},L01:{stage:{kind:"plain",centre:"double",driveway:!0},act:"right"},L02:{stage:{kind:"plain",centre:"double",driveway:!0},act:"straight"},L03:{stage:{kind:"plain",centre:"single"},act:"straight"},L04:{stage:{kind:"plain",centre:"single"},act:"straight"},L05:{stage:{kind:"plain",centre:"broken"},act:"straight"},L06:{stage:{kind:"plain",centre:"broken",yellowKerb:!0},act:"straight"},L07:{stage:{kind:"plain",centre:"broken",yellowKerb:!0},act:"straight"},S01:{stage:{kind:"lights",centre:"broken",light:"yellow"},act:"stay"},S02:{stage:{kind:"lights",centre:"broken",light:"red"},act:"left"},S03:{stage:{kind:"lights",centre:"broken",light:"red",bikeBox:!0},act:"stay"},S04:{stage:{kind:"kerb",centre:"broken"},act:"pullout"},E01:{stage:{kind:"police",centre:"broken"},act:"slowpass"},T01:{stage:{kind:"tram",centre:"broken",passengers:!0},act:"stay"},T02:{stage:{kind:"tram",centre:"broken"},act:"slowpass"},T03:{stage:{kind:"lights",centre:"broken",light:"green"},act:"hook"}},Th={stage:{kind:"police",centre:"broken"},act:"slowpass"},Ds=[{id:"BT1",states:["NSW","QLD","VIC"],legal:["VIC"],sources:["NSW_UTURN","QLD_LIGHTS","VIC_UTURN_RACV"],stage:{kind:"lights",centre:"broken",light:"green",label:"AU"},act:"uturn"},{id:"BT2",states:["NSW","QLD"],legal:["NSW"],sources:["NSW_LINES","QLD_MARKINGS"],stage:{kind:"plain",centre:"double",driveway:!0,label:"AU"},act:"right"},{id:"BT3",states:["NSW","QLD","VIC"],legal:[],sources:["NSW_UTURN","QLD_LIGHTS","VIC_UTURN"],stage:{kind:"plain",centre:"single",label:"AU"},act:"straight"},{id:"BT4",states:["NSW","QLD","VIC"],legal:[],sources:["NSW_UTURN","QLD_LIGHTS","VIC_UTURN"],stage:{kind:"plain",centre:"double",label:"AU"},act:"straight"}],yh={NSW:["JP"],QLD:["JP","KR","TW"]},bg={JP:"full",KR:"exp",TW:"exp",HK:"exp",CN:"non"};function Te(i,e="",t=""){let n=document.createElement(i);return e&&(n.className=e),t&&(n.textContent=t),n}function hn(i,e,t){let n=Te("button",i,e);return n.type="button",n.addEventListener("click",t),n}function Eh(i,e){let t=Te("a","src-link",e);return t.href=i,t.target="_blank",t.rel="noopener noreferrer",t}function Ah(i){try{return new URL(i).hostname.replace(/^www\./,"")}catch{return i}}function Rh(i){let e=i.slice();for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function wg(){let i=Object.keys(Us),e=new URLSearchParams(location.search).get("lang"),t=null;try{t=localStorage.getItem("ddu-lang")}catch{t=null}let n=(navigator.language||"en").toLowerCase(),s=n.startsWith("ja")?"ja":n.startsWith("ko")?"ko":n.startsWith("zh")?/(tw|hk|mo|hant)/.test(n)?"zh-Hant":"zh-Hans":"en",r=e||t||s;return i.includes(r)?r:"en"}var Xi=wg(),_e=Us[Xi],Tg=document.getElementById("world"),qi=document.getElementById("ui"),Sh=document.getElementById("hud"),hl=document.getElementById("flash"),zt=new Na(Tg),un=()=>Zi();function Ch(i){return(_e.questions?_e.questions[i.id]:void 0)||{q:i.q,options:i.options,why:i.why}}function Ih(i){Xi=i,_e=Us[i];try{localStorage.setItem("ddu-lang",i)}catch{}document.documentElement.lang=i==="en"?"en-AU":i,document.title=_e.ui.title+" | Australia road rules game",Eg(),un()}function Fs(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Os(i=""){Fs(qi);let e=i!=="home";qi.classList.toggle("side",e),zt.setFraming(e?"side":"bottom");let t=Te("section","panel "+i);return qi.appendChild(t),t}function Ph(){hl.classList.remove("on"),hl.offsetWidth,hl.classList.add("on")}function Eg(){let i=document.getElementById("lang");Fs(i),Object.keys(vh).forEach(e=>{let t=Te("option","",vh[e]);t.value=e,t.selected=e===Xi,i.appendChild(t)}),i.setAttribute("aria-label",_e.ui.language),document.getElementById("brand").textContent=_e.ui.title,document.getElementById("disclaimer").textContent=_e.ui.disclaimer,document.getElementById("verified-label").textContent=_e.ui.verified+" "}function Yi(i){Fs(Sh),i.forEach(e=>Sh.appendChild(Te("span","chip",e)))}function Lh(i,e,t,n,s){let r=Te("div","feedback "+(i?"ok":"bad"));if(r.setAttribute("role","status"),r.appendChild(Te("strong","verdict",i?_e.ui.correct:_e.ui.wrong)),r.appendChild(Te("p","why",e)),Xi!=="en"){let o=Te("details","official");o.appendChild(Te("summary","",_e.ui.official));let l=Te("p","",t);l.lang="en",o.appendChild(l),r.appendChild(o)}s&&r.appendChild(Te("p","warn",_e.ui.timeSensitive));let a=Te("p","sources",_e.ui.source+": ");return n.forEach((o,l)=>{l&&a.appendChild(document.createTextNode(" \xB7 ")),a.appendChild(Eh(Da[o],Ah(Da[o])))}),r.appendChild(a),r}function Zi(){un=Zi,zt.setStage(bh("AU")),zt.idle(),Yi([]);let i=Os("home");i.appendChild(Te("h1","title",_e.ui.title)),i.appendChild(Te("p","tagline",_e.ui.tagline));let e=Te("div","modes"),t=Te("article","mode");t.appendChild(Te("h2","",_e.ui.modeRun)),t.appendChild(Te("p","",_e.ui.modeRunDesc));let n=Te("div","state-row");n.setAttribute("role","group"),n.setAttribute("aria-label",_e.ui.pickState),["NSW","QLD","VIC"].forEach(a=>{let o=hn("btn state",a,()=>Nh(a));o.title=_e.states[a],o.appendChild(Te("small","",_e.states[a])),n.appendChild(o)}),t.appendChild(n);let s=Te("article","mode");s.appendChild(Te("h2","",_e.ui.modeTrap)),s.appendChild(Te("p","",_e.ui.modeTrapDesc)),s.appendChild(hn("btn primary",_e.ui.modeTrap,()=>Rg()));let r=Te("article","mode");r.appendChild(Te("h2","",_e.ui.modeLicence)),r.appendChild(Te("p","",_e.ui.modeLicenceDesc)),r.appendChild(hn("btn primary",_e.ui.modeLicence,()=>dl())),e.append(t,s,r),i.appendChild(e)}function Nh(i){let e=Rh(Mg.filter(n=>n.states.includes(i))).slice(0,10);Dh({state:i,list:e,i:0,lives:3,score:0,wrong:{}})}function fl(i){Yi([i.state,`${_e.ui.question} ${i.i+1}/${i.list.length}`,`${_e.ui.lives} ${"\u25CF".repeat(i.lives)}${"\u25CB".repeat(3-i.lives)}`,`${_e.ui.score} ${i.score}`])}async function Dh(i){let e=i.list[i.i],t=wh[e.id]||Th;un=()=>Ua(i,null),Fs(qi),zt.setFraming("none"),fl(i),zt.setStage({...t.stage,label:i.state}),await zt.driveIn(),Ua(i,null)}function Ua(i,e){let t=i.list[i.i],n=Ch(t),s=e||Rh(t.options.map((o,l)=>l));un=()=>Ua(i,s),fl(i);let r=Os("ask");r.appendChild(Te("p","eyebrow",`${_e.states[i.state]} \xB7 ${_e.categories[t.category]}`)),r.appendChild(Te("h2","q",n.q));let a=Te("div","options");s.forEach((o,l)=>{let c=hn("btn option","",()=>Ag(i,o,s,a));c.appendChild(Te("span","num",String(l+1))),c.appendChild(Te("span","opt",n.options[o])),c.dataset.i=String(o),a.appendChild(c)}),r.appendChild(a)}function Ag(i,e,t,n){let s=i.list[i.i],r=Ch(s),a=e===s.answer;un=()=>{Ua(i,t)},Array.from(n.children).forEach(f=>{let u=f;u.disabled=!0;let m=Number(u.dataset.i);m===s.answer?u.classList.add("right"):m===e&&u.classList.add("wrong")});let o=wh[s.id]||Th;a?(i.score++,zt.act(o.act)):(i.lives--,i.wrong[s.category]=(i.wrong[s.category]||0)+1,Ph()),fl(i);let l=n.parentElement;l.appendChild(Lh(a,r.why,s.why,[s.source],!!s.time_sensitive));let c=i.i===i.list.length-1||i.lives===0,h=hn("btn primary next",c?_e.ui.finish:_e.ui.next,()=>{if(c){Uh(i);return}i.i++,Dh(i)});l.appendChild(h),h.focus({preventScroll:!0}),un=()=>{}}function Uh(i){un=()=>Uh(i),zt.setStage(bh(i.state)),zt.idle(),Yi([i.state]);let e=Os("result");e.appendChild(Te("p","eyebrow",_e.states[i.state])),e.appendChild(Te("h2","title",i.lives===0?_e.ui.gameOver:_e.ui.resultTitle)),e.appendChild(Te("p","big",`${i.score} / ${i.list.length}`));let t=Object.keys(i.wrong).sort((s,r)=>i.wrong[r]-i.wrong[s])[0];t&&e.appendChild(Te("p","why",`${_e.ui.weakest}: ${_e.categories[t]}`));let n=Te("div","row");n.appendChild(hn("btn primary",_e.ui.playAgain,()=>Nh(i.state))),n.appendChild(hn("btn",_e.ui.home,()=>Zi())),e.appendChild(n)}function Rg(){Fh(0,0)}async function Fh(i,e){let t=Ds[i];un=()=>ul(i,e),Fs(qi),zt.setFraming("none"),Yi([_e.ui.modeTrap,`${i+1}/${Ds.length}`,`${_e.ui.score} ${e}`]),zt.setStage(t.stage),await zt.driveIn(),ul(i,e)}function ul(i,e){let t=Ds[i];un=()=>ul(i,e);let n=Os("ask");n.appendChild(Te("p","eyebrow",_e.ui.modeTrap)),n.appendChild(Te("h2","q",_e.traps[t.id].q)),n.appendChild(Te("p","hint",_e.ui.trapPrompt));let s=Te("div","state-row"),r=new Set,a=[];t.states.forEach(l=>{let c=hn("btn state",l,()=>{r.has(l)?r.delete(l):r.add(l),c.setAttribute("aria-pressed",String(r.has(l)))});c.setAttribute("aria-pressed","false"),c.appendChild(Te("small","",_e.states[l])),a.push(c),s.appendChild(c)}),n.appendChild(s);let o=hn("btn primary",_e.ui.check,()=>{let l=t.states.every(u=>r.has(u)===t.legal.includes(u));a.forEach((u,m)=>{let x=t.states[m];u.disabled=!0,u.classList.add(t.legal.includes(x)?"right":"wrong");let S=u.querySelector("small");S&&(S.textContent=t.legal.includes(x)?_e.ui.legal:_e.ui.illegal)}),o.remove(),l?zt.act(t.act):Ph();let c=e+(l?1:0);Yi([_e.ui.modeTrap,`${i+1}/${Ds.length}`,`${_e.ui.score} ${c}`]),n.appendChild(Lh(l,_e.traps[t.id].why,Us.en.traps[t.id].why,t.sources,!1));let h=i===Ds.length-1,f=hn("btn primary next",h?_e.ui.home:_e.ui.next,()=>{h?Zi():Fh(i+1,c)});n.appendChild(f),f.focus({preventScroll:!0}),un=()=>{}});n.appendChild(o)}var ni={state:"NSW",country:"TW",status:"temp"};function dl(){un=dl,zt.setStage({kind:"police",centre:"broken",label:ni.state}),zt.idle(),Yi([_e.ui.modeLicence]);let i=Os("licence");i.appendChild(Te("h2","title",_e.ui.modeLicence));let e=Te("form","lic-form");e.addEventListener("submit",f=>f.preventDefault());let t=(f,u,m,x)=>{let S=Te("label","field");S.appendChild(Te("span","",f));let p=Te("select");u.forEach(([d,M])=>{let A=Te("option","",M);A.value=d,A.selected=d===m,p.appendChild(A)}),p.addEventListener("change",()=>{x(p.value),dl()}),S.appendChild(p),e.appendChild(S)};t(_e.ui.licState,["NSW","QLD","VIC"].map(f=>[f,`${f} \xB7 ${_e.states[f]}`]),ni.state,f=>{ni.state=f}),t(_e.ui.licCountry,Object.keys(_e.countries).map(f=>[f,_e.countries[f]]),ni.country,f=>{ni.country=f}),t(_e.ui.licStatus,[["temp",_e.ui.statusTemp],["perm",_e.ui.statusPerm]],ni.status,f=>{ni.status=f}),i.appendChild(e);let{state:n,country:s,status:r}=ni,a,o,l,c;n==="NSW"?(a=r==="temp"?"dur_nsw_temp":"dur_nsw_perm",o=r==="temp"?"NSW_6MONTH":"WENTWORTH",l=yh.NSW.includes(s)?"test_nsw_yes":"test_nsw_no",c="NSW_EXEMPT"):n==="QLD"?(a=r==="temp"?"dur_qld_temp":"dur_qld_perm",o="QLD_DRIVING",l=yh.QLD.includes(s)?"test_qld_yes":"test_qld_no",c="QLD_EXEMPT"):(a="dur_vic",o="VIC_OVERSEAS",l="test_vic_"+bg[s],c="VIC_TABLE");let h=(f,u,m)=>{let x=Te("article","lic-card");if(x.appendChild(Te("h3","",f)),x.appendChild(Te("p","why",_e.licence[u])),Xi!=="en"){let p=Te("details","official");p.appendChild(Te("summary","",_e.ui.official));let d=Te("p","",Us.en.licence[u]);d.lang="en",p.appendChild(d),x.appendChild(p)}let S=Te("p","sources",_e.ui.source+": ");S.appendChild(Eh(Da[m],Ah(Da[m]))),x.appendChild(S),i.appendChild(x)};h(_e.ui.licDuration,a,o),h(_e.ui.licTests,l,c),i.appendChild(Te("p","warn",_e.ui.timeSensitive)),i.appendChild(hn("btn",_e.ui.home,()=>Zi()))}document.getElementById("lang").addEventListener("change",i=>Ih(i.target.value));document.getElementById("home-link").addEventListener("click",i=>{i.preventDefault(),Zi()});var Oh=document.getElementById("verified-date");Oh.dateTime=Mh;Oh.textContent=Mh;document.addEventListener("keydown",i=>{if(!/^[1-3]$/.test(i.key))return;let t=qi.querySelectorAll(".option:not(:disabled)")[Number(i.key)-1];t&&t.click()});Ih(Xi);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
