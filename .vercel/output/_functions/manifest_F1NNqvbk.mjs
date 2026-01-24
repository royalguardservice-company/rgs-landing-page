import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Bze1rGlS.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CFaXytzm.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/pirawatwareetanyarat/Documents/rgs/","cacheDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/node_modules/.astro/","outDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/dist/","srcDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/src/","publicDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/public/","buildClientDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/dist/client/","buildServerDir":"file:///Users/pirawatwareetanyarat/Documents/rgs/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"policy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/policy","isIndex":false,"type":"page","pattern":"^\\/policy\\/?$","segments":[[{"content":"policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/policy.astro","pathname":"/policy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/pirawatwareetanyarat/Documents/rgs/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/pirawatwareetanyarat/Documents/rgs/src/pages/policy.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/policy@_@astro":"pages/policy.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_F1NNqvbk.mjs","/Users/pirawatwareetanyarat/Documents/rgs/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_ACMnPxXS.mjs","/Users/pirawatwareetanyarat/Documents/rgs/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DSwRL3O4.js","/Users/pirawatwareetanyarat/Documents/rgs/src/components/Clients.astro?astro&type=script&index=0&lang.ts":"_astro/Clients.astro_astro_type_script_index_0_lang.CND0Qf9P.js","/Users/pirawatwareetanyarat/Documents/rgs/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.CGA26kMF.js","/Users/pirawatwareetanyarat/Documents/rgs/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts":"_astro/CookieConsent.astro_astro_type_script_index_0_lang.CuDKgQzN.js","/Users/pirawatwareetanyarat/Documents/rgs/src/components/why-choose-us/TrainingSection.astro?astro&type=script&index=0&lang.ts":"_astro/TrainingSection.astro_astro_type_script_index_0_lang.Ceyq6GT3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/pirawatwareetanyarat/Documents/rgs/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"mobile-menu-btn\"),a=document.getElementById(\"mobile-menu\"),e=document.getElementById(\"navbar\"),s=document.getElementById(\"navbar-inner\"),t=document.getElementById(\"desktop-nav\");o?.addEventListener(\"click\",()=>{a?.classList.toggle(\"hidden\")});a?.querySelectorAll(\"a\").forEach(d=>{d.addEventListener(\"click\",()=>{a?.classList.add(\"hidden\")})});window.addEventListener(\"scroll\",()=>{window.scrollY>100?(e?.classList.add(\"top-6\"),e?.classList.remove(\"top-0\"),s?.classList.add(\"max-w-4xl\",\"mx-auto\",\"bg-navy-950/95\",\"backdrop-blur-md\",\"rounded-full\",\"shadow-2xl\",\"shadow-blue-900/20\",\"border\",\"px-6\",\"py-2\"),s?.classList.remove(\"container-custom\"),t?.classList.add(\"gap-6\"),t?.classList.remove(\"gap-8\")):(e?.classList.remove(\"top-6\"),e?.classList.add(\"top-0\"),s?.classList.remove(\"max-w-4xl\",\"mx-auto\",\"bg-navy-950/95\",\"backdrop-blur-md\",\"rounded-full\",\"shadow-2xl\",\"shadow-blue-900/20\",\"border\",\"px-6\",\"py-2\"),s?.classList.add(\"container-custom\"),t?.classList.remove(\"gap-6\"),t?.classList.add(\"gap-8\"))});"],["/Users/pirawatwareetanyarat/Documents/rgs/src/components/Clients.astro?astro&type=script&index=0&lang.ts","let e=0,o;const i=document.getElementById(\"sliderTrack\"),s=document.getElementById(\"prevBtn\"),l=document.getElementById(\"nextBtn\"),u=document.querySelectorAll(\".pagination-dot\");function n(){if(!i)return;const t=-(e*100);i.style.transform=`translateX(${t}%)`,u.forEach((a,P)=>{P===e?a.classList.add(\"active\"):a.classList.remove(\"active\")}),s&&(s.disabled=e===0),l&&(l.disabled=e===19)}function g(t){t<0||t>=20||(e=t,n(),c())}function f(){e<19&&(e++,n())}function m(){e>0&&(e--,n())}function r(){o=window.setInterval(()=>{e<19?f():(e=0,n())},5e3)}function d(){o!==void 0&&(clearInterval(o),o=void 0)}function c(){d(),r()}s?.addEventListener(\"click\",()=>{m(),c()});l?.addEventListener(\"click\",()=>{f(),c()});u.forEach((t,a)=>{t.addEventListener(\"click\",()=>g(a))});const v=i?.parentElement;v?.addEventListener(\"mouseenter\",d);v?.addEventListener(\"mouseleave\",r);n();r();window.addEventListener(\"beforeunload\",d);"],["/Users/pirawatwareetanyarat/Documents/rgs/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts","const t=localStorage.getItem(\"cookieConsent\"),e=document.getElementById(\"cookie-consent\");!t&&e&&setTimeout(()=>{e.classList.remove(\"hidden\")},500);const o=document.getElementById(\"accept-cookies\");o?.addEventListener(\"click\",()=>{localStorage.setItem(\"cookieConsent\",\"accepted\"),e&&(e.style.transform=\"translateY(100%)\",setTimeout(()=>{e.classList.add(\"hidden\"),e.style.transform=\"\"},300))});"],["/Users/pirawatwareetanyarat/Documents/rgs/src/components/why-choose-us/TrainingSection.astro?astro&type=script&index=0&lang.ts","let e=0;const l=3,o=document.getElementById(\"prev-slide\"),r=document.getElementById(\"next-slide\"),a=document.querySelectorAll(\".slide-indicator\"),u=document.querySelectorAll(\".training-slide\"),n=document.getElementById(\"slide-title\"),c=document.getElementById(\"slide-subtitle\"),d=[{title:\"การดับเพลิงเบื้องต้น\",subtitle:\"Basic Fire Fighting Training\"},{title:\"การปฐมพยาบาล\",subtitle:\"First Aid & CPR Training\"},{title:\"ศิลปะการป้องกันตัว\",subtitle:\"Self Defense Techniques\"}];function s(){u.forEach((t,i)=>{i===e?(t.classList.remove(\"opacity-0\",\"z-0\"),t.classList.add(\"opacity-100\",\"z-10\")):(t.classList.remove(\"opacity-100\",\"z-10\"),t.classList.add(\"opacity-0\",\"z-0\"))}),a.forEach((t,i)=>{i===e?(t.classList.remove(\"bg-white/50\"),t.classList.add(\"bg-amber-500\",\"w-6\")):(t.classList.remove(\"bg-amber-500\",\"w-6\"),t.classList.add(\"bg-white/50\"))}),n&&c&&(n.textContent=d[e].title,c.textContent=d[e].subtitle)}o?.addEventListener(\"click\",()=>{e--,e<0&&(e=l-1),s()});r?.addEventListener(\"click\",()=>{e++,e>=l&&(e=0),s()});a.forEach((t,i)=>{t.addEventListener(\"click\",()=>{e=i,s()})});setInterval(()=>{e++,e>=l&&(e=0),s()},5e3);"]],"assets":["/_astro/EGAT.smQjt52b.jpg","/_astro/commonAreaMaintenance.BwTlCm4H.jpg","/_astro/thainaoka.COluCLfL.jpg","/_astro/specificAreaMaintenance.AmPAsvOF.jpg","/_astro/904.Cp-0ejey.jpg","/_astro/practice.BYd0HhsT.jpg","/_astro/hero_image.Bg_9H7kg.jpg","/_astro/logo.BNPwFSYU.png","/_astro/cleaningService.7QCDQEOZ.jpg","/_astro/aomsinLogo.B_yM0-LM.jpg","/_astro/bangsueLogo.D5qk8j55.png","/_astro/covestroLogo.CbjN_rYu.png","/_astro/centralHouseLogo.BNjkw0rz.png","/_astro/citLogo.DNNnK0Tb.webp","/_astro/crystalSolanaLogo.HnzChMTr.jpg","/_astro/edsLogo.oM5xkh56.png","/_astro/dusitUniLogo.2qBPkBRq.png","/_astro/egatLogo.CPRGkm3k.png","/_astro/huaweiLogo.J6BFij1M.png","/_astro/hipLogo.CoN5xoeH.png","/_astro/emblemOfTheThaiCrownLogo.zXLVTUd2.png","/_astro/indochinaHotelLogo.C6FaDRC-.png","/_astro/nfiLogo.DR4KDn5k.jpg","/_astro/indochinaVietnamLogo.D0pp6WVa.png","/_astro/jebsenLogo.CZWAXEuK.png","/_astro/narasiriLogo.C3UybDVP.png","/_astro/perarlResortLogo.CNNhseq5.jpg","/_astro/jetAsiaLogo.-QSDW5kD.png","/_astro/log3Logo.weDod-cC.png","/_astro/qslLogo.JxdtCurM.webp","/_astro/pathumThaniPlaceHotelLogo.C3IcMupC.jpg","/_astro/sSenseLogo.Vc4HK-62.png","/_astro/prachapatLogo.Cv47Hof0.png","/_astro/tclLogo.Krpdv_dR.png","/_astro/royalLogo.Mf2zmdan.png","/_astro/thanakornApartmentLogo.CT2cYgiY.jpg","/_astro/wasugreeLogo.DxVsJIeQ.png","/_astro/dahuaLogo.Cs3_mj48.svg","/_astro/hikivisionLogo.B7fqdyEz.svg","/_astro/thainaokaLogo.8c9-QDc3.png","/_astro/securityService.BGmpYtcp.jpg","/_astro/cpr.BaETRP3p.jpg","/_astro/selfDefense.CoXEd_O2.png","/_astro/fireTraining.DdwvdKrb.png","/_astro/installationService._rza4p_i.png","/_astro/index.iqozsBw5.css","/favicon.svg","/logo.png","/robots.txt","/_astro/Contact.astro_astro_type_script_index_0_lang.CGA26kMF.js","/images/logo.png","/policy/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"AvcYziP2xK6uDRz85dgHd07I7zb24ykTG0T4fimkFDI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
