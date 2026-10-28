const C='dash-v937',F=['./','index.html','proto.js','game.js','manifest.webmanifest','icon.png','3d/jeu.html','3d/style.css','3d/proto.js','3d/sim.js','3d/gfx.js','3d/gfx-math.js','3d/nature.js','3d/game.js','3d/world.js','3d/real.js','3d/real-core.js','3d/tilemap.js','3d/terrain.js','3d/city.js','3d/traffic.js','3d/extras.js','3d/scooter.js','3d/settings.js','3d/sensors.js','3d/telemetry.js','3d/sessionlog.js','3d/ui.js'],FH=['fonts.googleapis.com','fonts.gstatic.com'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&!x.startsWith('skkkrt3d')).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
if(FH.includes(u.host)){e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r})));return}
if(u.origin!==location.origin||u.pathname.indexOf('/.netlify/')===0)return;
e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
