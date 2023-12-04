import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_44e0fc7b.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(){const o=document.querySelectorAll(\".fade-in\");let i=new IntersectionObserver((t,s)=>{let e=0;t.forEach(r=>{r.intersectionRatio>0&&(e+=100,setTimeout(()=>{r.target.setAttribute(\"data-state\",\"visible\")},e))})},{root:null,rootMargin:\"0px\",threshold:.2});o.forEach(t=>{t.setAttribute(\"data-state\",\"hidden\"),i.observe(t)})})();\n"}],"styles":[{"type":"inline","content":"*,*:before,*:after{box-sizing:border-box}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0}ul[role=list],ol[role=list]{list-style:none}html:focus-within{scroll-behavior:smooth}body{min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto}*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}:root{--theme-primary: hsl(0, 0%, 5%);--theme-on-primary: hsl(0, 0%, 90%);--theme-primary--hover: #000;--theme-secondary: #ffffff;--theme-on-secondary: #000000;--theme-secondary--hover: #ffffff;--theme-background: hsl(0, 0%, 5%);--theme-on-background: hsl(0, 0%, 98%);--theme-surface-1: hsl(0, 0%, 92%);--theme-on-surface-1: hsl(0, 0%, 10%);--step--2: clamp(.87rem, calc(.84rem + .12vw), .99rem);--step--1: clamp(1.04rem, calc(.99rem + .27vw), 1.31rem);--step-0: clamp(1.25rem, calc(1.15rem + .5vw), 1.75rem);--step-1: clamp(1.5rem, calc(1.33rem + .83vw), 2.33rem);--step-2: clamp(1.8rem, calc(1.54rem + 1.31vw), 3.11rem);--step-3: clamp(2.16rem, calc(1.76rem + 1.98vw), 4.14rem);--step-4: clamp(2.59rem, calc(2.01rem + 2.93vw), 5.53rem);--step-5: clamp(3.11rem, calc(2.26rem + 4.25vw), 7.37rem);--font-family-heading: \"Roboto Flex\", sans-serif;--font-family-body: \"Open Sans\", sans-serif;--body-max-width: 1920px;--container-padding: 0 1rem;--container-max-width: 1440px;--container-max-width-narrow: 960px}html{scroll-behavior:smooth}body{margin:0 auto;color:var(--theme-on-background);font-size:var(--step-0);font-family:var(--font-family-body);font-weight:400;line-height:1.5;max-width:var(--body-max-width);position:relative;display:grid;grid-template-rows:auto 1fr auto;background:var(--theme-background) url(/assets/images/bg.jpg) no-repeat;background-size:cover;background-position:center}.flow>*+*{margin-top:var(--flow-space, 1em)}a{color:inherit}h1{font-size:var(--step-5);font-family:var(--font-family-heading);font-weight:600;line-height:1.2;font-stretch:125%;font-variation-settings:\"slnt\" -4,\"opsz\" 25}h2{font-size:var(--step-4);font-family:var(--font-family-heading);font-weight:500;line-height:1.2}h3{font-size:var(--step-2);font-family:var(--font-family-heading);font-weight:500;line-height:1.2}h4{font-size:var(--step-1);font-family:var(--font-family-heading)}h1,h2,h3{max-width:30ch}p,li{max-width:70ch}@media (prefers-reduced-motion: no-preference){.fade-in[data-state=visible]{transition:transform .7s cubic-bezier(.42,0,.32,1.17),opacity 1s cubic-bezier(.42,0,.32,1.17) .2s}.fade-in[data-state=hidden]{transform:scale(.9);opacity:0}}header[data-astro-cid-3ef6ksr2]{padding:2rem 0;display:flex;align-items:center;justify-content:center}footer[data-astro-cid-sz7xmlte]{display:flex;justify-content:center;align-items:center;padding:2rem 0}.footer__socials[data-astro-cid-sz7xmlte]{margin:0;padding:0;list-style:none;display:flex;gap:1rem}.footer__socials[data-astro-cid-sz7xmlte] li[data-astro-cid-sz7xmlte] a[data-astro-cid-sz7xmlte]{display:flex}.content__container[data-astro-cid-d6puh33w]{max-width:var(--container-max-width);margin:0 auto;padding:var(--container-padding)}.content__container--narrow[data-astro-cid-d6puh33w]{max-width:var(--container-max-width-narrow)}.hero__article[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:70vh;text-align:center}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://cannonball.littlesticks.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/zaidarivai/Desktop/website/omniherald/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_8b655048.mjs","/src/pages/index.astro":"chunks/pages/index_cd39c44e.mjs","\u0000@astrojs-manifest":"manifest_83feadb2.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_05ef3e1b.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_e734fd50.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.737e1280.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.png","/favicon1.png","/assets/images/bg.jpg"]});

export { manifest };
