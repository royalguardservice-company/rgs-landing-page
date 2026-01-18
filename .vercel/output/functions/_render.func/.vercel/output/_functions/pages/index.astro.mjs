/* empty css                                 */
import { c as createComponent, a as createAstro, b as addAttribute, y as renderHead, z as renderSlot, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../chunks/astro/server_CRifWwKX.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_DfeCbvjb.mjs';
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/logo.BNPwFSYU.png","width":842,"height":322,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "RGS - \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E",
    description = "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E23\u0E2D\u0E22\u0E31\u0E25\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A \u0E08\u0E33\u0E01\u0E31\u0E14 (RGS) \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E14\u0E49\u0E27\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 (SOP, NSRS) \u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    image = logo.src
  } = Astro2.props;
  return renderTemplate`<html lang="th"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png"${addAttribute(logo.src, "href")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords" content="รักษาความปลอดภัย, รปภ., บริการรักษาความปลอดภัย, ทำความสะอาด, Big Cleaning, รปภ.มืออาชีพ, Security Guard, Cleaning Services, RGS"><meta name="author" content="บริษัท รักษาความปลอดภัย รอยัลการ์ด เซอร์วิสเซส จำกัด"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:locale" content="th_TH"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><title>${title}</title><!-- Preconnect for fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32", href: "#about" },
    { name: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23", href: "#services" },
    { name: "\u0E1C\u0E25\u0E07\u0E32\u0E19", href: "#portfolio" },
    { name: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32", href: "#contact" }
  ];
  const phoneNumber = "02-379-1713-4";
  return renderTemplate`${maybeRenderHead()}<header id="navbar" class="fixed top-6 left-0 right-0 z-50 transition-all duration-500"> <div id="navbar-inner" class="container-custom transition-all duration-500"> <nav class="flex items-center justify-between h-20"> <a href="/" class="flex items-center gap-3 group"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "RGS Logo", "class": "rounded-lg h-12 w-auto object-contain group-hover:scale-105 transition-transform", "format": "webp" })} </a> <div id="desktop-nav" class="hidden md:flex items-center gap-8 transition-all duration-500"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"> ${item.name} </a>`)} </div> <a${addAttribute(`tel:${phoneNumber.replace(/-/g, "")}`, "href")} class="hidden md:inline-flex btn-primary"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${phoneNumber} </a> <button id="mobile-menu-btn" class="md:hidden text-white p-2" aria-label="Toggle menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> </div> <div id="mobile-menu" class="hidden md:hidden bg-navy-900/95 backdrop-blur-sm border-t border-white/10 mt-20"> <div class="container-custom py-4 space-y-4"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide py-2"> ${item.name} </a>`)} <a${addAttribute(`tel:${phoneNumber.replace(/-/g, "")}`, "href")} class="block btn-primary text-center"> <svg class="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${phoneNumber} </a> </div> </div> </header> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Header.astro", void 0);

const heroBgImage = new Proxy({"src":"/_astro/hero_image.Bg_9H7kg.jpg","width":1907,"height":858,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/hero_image.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const heroContent = {
    title_1: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14",
    title_2: "\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E",
    subtitle: "\u0E40\u0E23\u0E32\u0E14\u0E39\u0E41\u0E25\u0E17\u0E31\u0E49\u0E07\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E20\u0E32\u0E22\u0E43\u0E19 \u0E14\u0E49\u0E27\u0E22\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25 (SOP, NSRS) \u0E1C\u0E2A\u0E32\u0E19\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    ctaText: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",
    ctaLink: "#services",
    ctaSecondary: "\u0E02\u0E2D\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32\u0E1F\u0E23\u0E35",
    ctaSecondaryLink: "#contact"};
  const features = [
    { label: "\u0E17\u0E38\u0E19\u0E08\u0E14\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19", value: "5 \u0E25\u0E49\u0E32\u0E19\u0E1A\u0E32\u0E17", suffix: " \u0E25\u0E49\u0E32\u0E19\u0E1A\u0E32\u0E17" },
    { label: "\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E2A\u0E32\u0E01\u0E25", value: "NSRS", isText: true },
    { label: "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", value: "8+ \u0E1B\u0E35", suffix: "+ \u0E1B\u0E35" },
    { label: "\u0E04\u0E27\u0E32\u0E21\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21", value: "24/7", isText: true }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center overflow-hidden" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 z-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 overflow-hidden" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": heroBgImage, "alt": "RGS Background", "width": 1920, "height": 1080, "class": "w-full h-full object-cover ken-burns-bg", "format": "webp", "data-astro-cid-bbe6dxrz": true })} </div> <div class="absolute inset-0 bg-navy-950/75" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" data-astro-cid-bbe6dxrz></div> </div> <div class="absolute inset-0 z-0 opacity-10" data-astro-cid-bbe6dxrz> <div class="absolute top-20 right-10 w-72 h-72 bg-amber-400 rounded-full filter blur-3xl" data-astro-cid-bbe6dxrz></div> <div class="absolute bottom-20 left-10 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl" data-astro-cid-bbe6dxrz></div> </div> <div class="relative z-10 container-custom pt-20" data-astro-cid-bbe6dxrz> <div class="stagger-fade-up" style="--delay: 0ms;" data-astro-cid-bbe6dxrz> <div class="inline-flex items-center gap-2 bg-navy-900/50 border border-amber-400/30 rounded-full px-4 py-2 mb-4 backdrop-blur-sm" data-astro-cid-bbe6dxrz> <span class="w-2 h-2 bg-amber-400 rounded-full status-pulse" data-astro-cid-bbe6dxrz></span> <span class="text-amber-400 text-sm font-medium tracking-wide" data-astro-cid-bbe6dxrz>24/7 บริการรักษาความปลอดภัยมืออาชีพ</span> </div> </div> <h1 class="text-hero text-white mb-6 max-w-3xl stagger-fade-up break-words" style="--delay: 200ms;" data-astro-cid-bbe6dxrz> ${heroContent.title_1} <br data-astro-cid-bbe6dxrz> ${heroContent.title_2} </h1> <p class="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed stagger-fade-up" style="--delay: 400ms;" data-astro-cid-bbe6dxrz> ${heroContent.subtitle} </p> <div class="flex flex-col sm:flex-row items-start gap-4 mb-16 stagger-fade-up" style="--delay: 600ms;" data-astro-cid-bbe6dxrz> <a${addAttribute(heroContent.ctaLink, "href")} class="btn-primary text-lg w-full sm:w-auto" data-astro-cid-bbe6dxrz> ${heroContent.ctaText} </a> <a${addAttribute(heroContent.ctaSecondaryLink, "href")} class="btn-outline w-full sm:w-auto" data-astro-cid-bbe6dxrz> ${heroContent.ctaSecondary} </a> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl stagger-fade-up" style="--delay: 800ms;" data-astro-cid-bbe6dxrz> ${features.map((feature) => renderTemplate`<div class="text-center" data-astro-cid-bbe6dxrz> <div${addAttribute(`text-2xl md:text-3xl font-bold text-amber-400 mb-1 ${feature.isText ? "" : "counter-number"}`, "class")}${addAttribute(feature.suffix || "", "data-suffix")} data-astro-cid-bbe6dxrz> ${feature.value} </div> <div class="text-gray-400 text-xs" data-astro-cid-bbe6dxrz>${feature.label}</div> </div>`)} </div> </div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const aboutContent = {
    title: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32",
    englishName: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E23\u0E2D\u0E22\u0E31\u0E25\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A \u0E08\u0E33\u0E01\u0E31\u0E14 (RGS)"};
  return renderTemplate`${maybeRenderHead()}<section id="about" class="section-padding bg-navy-900"> <div class="container-custom"> <div class="text-center mb-16"> <p class="section-subtitle text-amber-500">About RGS</p> <h2 class="section-title text-white">${aboutContent.title}</h2> <p class="text-gray-400 max-w-3xl mx-auto mt-4 text-lg"> ${aboutContent.englishName} </p> </div> <div class="text-center"> <p class="text-gray-400 mb-6">เรียนรู้เพิ่มเติมเกี่ยวกับมาตรฐานและความเป็นเลิศของเรา</p> <a href="#why-us" class="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy-950 font-semibold px-8 py-3 rounded-xl transition-colors"> <span>Why Choose RGS</span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </a> </div> </div> </section>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/About.astro", void 0);

const serviceBgImage = new Proxy({"src":"/_astro/cleaningService.7QCDQEOZ.jpg","width":1110,"height":1474,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/cleaningService.jpg";
							}
							
							return target[name];
						}
					});

const installationBgImage = new Proxy({"src":"/_astro/installationService._rza4p_i.png","width":2816,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/installationService.png";
							}
							
							return target[name];
						}
					});

const securityBgImage = new Proxy({"src":"/_astro/securityService.BGmpYtcp.jpg","width":2614,"height":1602,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/securityService.jpg";
							}
							
							return target[name];
						}
					});

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
      subtitle: "Security Guard Services",
      description: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2B\u0E32\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E31\u0E49\u0E07\u0E40\u0E1E\u0E28\u0E0A\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2B\u0E0D\u0E34\u0E07 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E21\u0E39\u0E48\u0E1A\u0E49\u0E32\u0E19\u0E08\u0E31\u0E14\u0E2A\u0E23\u0E23 \u0E04\u0E2D\u0E19\u0E42\u0E14 \u0E2D\u0E32\u0E04\u0E32\u0E23\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 \u0E42\u0E23\u0E07\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E23\u0E32\u0E0A\u0E01\u0E32\u0E23",
      features: [
        "\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19 SOP \u0E41\u0E25\u0E30 NSRS",
        "\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23",
        "Emergency Team \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E02\u0E49\u0E32\u0E07\u0E32\u0E19",
        "\u0E01\u0E32\u0E23\u0E14\u0E31\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E41\u0E25\u0E30\u0E1B\u0E10\u0E21\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25"
      ],
      image: securityBgImage
    },
    {
      title: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14",
      subtitle: "Cleaning Services",
      description: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23\u0E14\u0E49\u0E27\u0E22\u0E17\u0E35\u0E21\u0E07\u0E32\u0E19\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E\u0E41\u0E25\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E2D\u0E32\u0E04\u0E32\u0E23 \u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 \u0E41\u0E25\u0E30\u0E17\u0E35\u0E48\u0E1E\u0E31\u0E01\u0E2D\u0E32\u0E28\u0E31\u0E22",
      features: [
        "Big Cleaning \u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E2B\u0E0D\u0E48",
        "\u0E14\u0E39\u0E41\u0E25\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E08\u0E33",
        "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E0B\u0E31\u0E01\u0E1E\u0E23\u0E21",
        "\u0E25\u0E49\u0E32\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E02\u0E31\u0E14\u0E40\u0E07\u0E32"
      ],
      image: serviceBgImage
    },
    {
      title: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C",
      subtitle: "Technology & Equipment",
      description: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E30\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E17\u0E32\u0E07\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E30\u0E1A\u0E1A Real-time monitoring",
      features: [
        "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E27\u0E07\u0E08\u0E23\u0E1B\u0E34\u0E14 (CCTV)",
        "\u0E23\u0E30\u0E1A\u0E1A\u0E44\u0E21\u0E49\u0E01\u0E31\u0E49\u0E19 Easy Pass",
        "\u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E19\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23",
        "\u0E23\u0E30\u0E1A\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E40\u0E2B\u0E15\u0E38\u0E09\u0E38\u0E01\u0E40\u0E09\u0E34\u0E19"
      ],
      image: installationBgImage
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="section-padding bg-gray-50"> <div class="container-custom"> <div class="text-center mb-16"> <p class="section-subtitle text-amber-600">บริการของเรา</p> <h2 class="section-title text-navy-950">บริการหลักของเรา</h2> <p class="text-gray-600 max-w-2xl mx-auto mt-4">
บริการครบวงจรด้วยมาตรฐานสากล (SOP, NSRS) ผสานเทคโนโลยีทันสมัย เพื่อความปลอดภัยสูงสุดของคุณ
</p> </div> <div class="grid md:grid-cols-3 gap-6"> ${services.map((service, index) => renderTemplate`<div class="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"> <div class="absolute inset-0"> ${renderComponent($$result, "Image", $$Image, { "src": service.image, "alt": service.title, "width": 600, "height": 800, "class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", "format": "webp" })} </div> <div class="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/70 to-transparent transition-all duration-500 group-hover:from-navy-950 group-hover:via-navy-950/95 group-hover:to-navy-950/60"></div> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"> ${index === 0 && renderTemplate`<div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent"></div>`} ${index === 1 && renderTemplate`<div class="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-transparent"></div>`} ${index === 2 && renderTemplate`<div class="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent"></div>`} </div> <div class="absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500"> <div class="mb-6 transform transition-transform duration-500 group-hover:translate-y-2"> <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"> ${index === 0 && renderTemplate`<svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg>`} ${index === 1 && renderTemplate`<svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg>`} ${index === 2 && renderTemplate`<svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg>`} </div> </div> <h3 class="text-2xl font-bold text-white mb-2 transition-all duration-500 group-hover:translate-y-2">${service.title}</h3> <p class="text-sm text-white/80 mb-4 transition-all duration-500 group-hover:translate-y-2">${service.subtitle}</p> <p class="text-gray-200 text-sm mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"> ${service.description} </p> <ul class="space-y-2 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0"> ${service.features.map((feature) => renderTemplate`<li class="flex items-center gap-2 text-white/90 text-sm"> <span${addAttribute(`w-1.5 h-1.5 rounded-full flex-shrink-0 ${index === 0 ? "bg-blue-400" : index === 1 ? "bg-amber-400" : "bg-green-400"}`, "class")}></span> ${feature} </li>`)} </ul> <a href="#contact" class="inline-flex items-center gap-2 text-white font-semibold text-sm mt-4 opacity-0 translate-y-4 transition-all duration-500 delay-150 group-hover:opacity-100 group-hover:translate-y-0"> <span> ${index === 0 && "\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22"} ${index === 1 && "\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14"} ${index === 2 && "\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35"} </span> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div>`)} </div> <div class="text-center mt-16"> <a href="#contact" class="btn-primary text-lg">
ขอใบเสนอราคาฟรี
</a> </div> </div> </section>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Services.astro", void 0);

const aomsinLogo = new Proxy({"src":"/_astro/aomsinLogo.B_yM0-LM.jpg","width":959,"height":588,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/aomsinLogo.jpg";
							}
							
							return target[name];
						}
					});

const bangsueLogo = new Proxy({"src":"/_astro/bangsueLogo.D5qk8j55.png","width":410,"height":216,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/bangsueLogo.png";
							}
							
							return target[name];
						}
					});

const centralHouseLogo = new Proxy({"src":"/_astro/centralHouseLogo.BNjkw0rz.png","width":1050,"height":836,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/centralHouseLogo.png";
							}
							
							return target[name];
						}
					});

const crystalSolanaLogo = new Proxy({"src":"/_astro/crystalSolanaLogo.HnzChMTr.jpg","width":1600,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/crystalSolanaLogo.jpg";
							}
							
							return target[name];
						}
					});

const edsLogo = new Proxy({"src":"/_astro/edsLogo.oM5xkh56.png","width":1200,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/edsLogo.png";
							}
							
							return target[name];
						}
					});

const egatLogo = new Proxy({"src":"/_astro/egatLogo.CPRGkm3k.png","width":1678,"height":560,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/egatLogo.png";
							}
							
							return target[name];
						}
					});

const emblemOfTheCrownLogo = new Proxy({"src":"/_astro/emblemOfTheThaiCrownLogo.zXLVTUd2.png","width":250,"height":354,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/emblemOfTheThaiCrownLogo.png";
							}
							
							return target[name];
						}
					});

const huaweiLogo = new Proxy({"src":"/_astro/huaweiLogo.CWS9_ZF6.png","width":600,"height":600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/huaweiLogo.png";
							}
							
							return target[name];
						}
					});

const jebsenLogo = new Proxy({"src":"/_astro/jebsenLogo.CZWAXEuK.png","width":1568,"height":818,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/jebsenLogo.png";
							}
							
							return target[name];
						}
					});

const nfiLogo = new Proxy({"src":"/_astro/nfiLogo.DR4KDn5k.jpg","width":225,"height":225,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/nfiLogo.jpg";
							}
							
							return target[name];
						}
					});

const narasiriLogo = new Proxy({"src":"/_astro/narasiriLogo.C3UybDVP.png","width":2384,"height":1172,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/narasiriLogo.png";
							}
							
							return target[name];
						}
					});

const pathumThaniPlaceHotelLogo = new Proxy({"src":"/_astro/pathumThaniPlaceHotelLogo.C3IcMupC.jpg","width":1851,"height":1441,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/pathumThaniPlaceHotelLogo.jpg";
							}
							
							return target[name];
						}
					});

const pearlResortLogo = new Proxy({"src":"/_astro/perarlResortLogo.CNNhseq5.jpg","width":500,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/perarlResortLogo.jpg";
							}
							
							return target[name];
						}
					});

const qslLogo = new Proxy({"src":"/_astro/qslLogo.JxdtCurM.webp","width":1288,"height":484,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/qslLogo.webp";
							}
							
							return target[name];
						}
					});

const thainaokaLogo = new Proxy({"src":"/_astro/thainaokaLogo.8c9-QDc3.png","width":2841,"height":1886,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/thainaokaLogo.png";
							}
							
							return target[name];
						}
					});

const thanakornApartmentLogo = new Proxy({"src":"/_astro/thanakornApartmentLogo.CT2cYgiY.jpg","width":401,"height":401,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/thanakornApartmentLogo.jpg";
							}
							
							return target[name];
						}
					});

const wasugreeLogo = new Proxy({"src":"/_astro/wasugreeLogo.DxVsJIeQ.png","width":304,"height":214,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/wasugreeLogo.png";
							}
							
							return target[name];
						}
					});

const $$Clients = createComponent(($$result, $$props, $$slots) => {
  const featuredClients = [
    { name: "\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E2D\u0E2D\u0E21\u0E2A\u0E34\u0E19", logo: aomsinLogo },
    { name: "\u0E01\u0E32\u0E23\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E1D\u0E48\u0E32\u0E22\u0E1C\u0E25\u0E34\u0E15\u0E41\u0E2B\u0E48\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22", logo: egatLogo },
    { name: "\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E19\u0E32\u0E23\u0E32\u0E2A\u0E34\u0E23\u0E34 \u0E2A\u0E32\u0E17\u0E23", logo: narasiriLogo },
    { name: "Huawei", logo: huaweiLogo },
    { name: "nfi", logo: nfiLogo },
    { name: "\u0E1A\u0E32\u0E07\u0E0B\u0E37\u0E48\u0E2D", logo: bangsueLogo },
    { name: "\u0E1A\u0E49\u0E32\u0E19\u0E01\u0E25\u0E32\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07", logo: centralHouseLogo },
    { name: "Crystal Solana", logo: crystalSolanaLogo },
    { name: "EDS", logo: edsLogo },
    { name: "emblemOfTheCrownLogo", logo: emblemOfTheCrownLogo },
    { name: "jebsenLogo", logo: jebsenLogo },
    { name: "pathumThaniPlaceHotelLogo", logo: pathumThaniPlaceHotelLogo },
    { name: "pearlResortLogo", logo: pearlResortLogo },
    { name: "qslLogo", logo: qslLogo },
    { name: "thainaokaLogo", logo: thainaokaLogo },
    { name: "thanakornApartmentLogo", logo: thanakornApartmentLogo },
    { name: "wasugreeLogo", logo: wasugreeLogo }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="clients" class="section-padding bg-white" data-astro-cid-cktvhckl> <div class="container-custom" data-astro-cid-cktvhckl> <div class="text-center mb-16" data-astro-cid-cktvhckl> <p class="section-subtitle" data-astro-cid-cktvhckl>ลูกค้าของเรา</p> <h2 class="section-title text-navy-950" data-astro-cid-cktvhckl>ไว้วางใจโดยองค์กรชั้นนำ</h2> <p class="text-gray-600 max-w-2xl mx-auto mt-4" data-astro-cid-cktvhckl>
เราภูมิยินดีที่ได้รับความไว้วางใจจากหน่วยงานราชการ รัฐวิสาหกิจ และบริษัทชั้นนำให้เป็นผู้ให้บริการ
</p> </div> <div class="mb-16" data-astro-cid-cktvhckl> <div class="text-center mb-8" data-astro-cid-cktvhckl> <span class="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full" data-astro-cid-cktvhckl> <svg class="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-cktvhckl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.688-1.538a1 1 0 00-.95-.69H11.07a1 1 0 00-.95.69L7.56 10.306a1 1 0 00-.363-1.118L3.22 6.298c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" data-astro-cid-cktvhckl></path> </svg> <span class="text-blue-900 text-sm font-medium" data-astro-cid-cktvhckl>บริษัทชั้นนำที่ไว้ใจเรา</span> </span> </div> <div class="grid grid-cols-2 md:grid-cols-5 gap-6" data-astro-cid-cktvhckl> ${featuredClients.map((client) => renderTemplate`<div class="text-center" data-astro-cid-cktvhckl> ${renderComponent($$result, "Image", $$Image, { "src": client.logo, "alt": client.name, "width": 120, "height": 60, "class": "h-16 w-auto object-contain mx-auto mb-3 opacity-80 group-hover:opacity-100 transition-opacity", "format": "webp", "data-astro-cid-cktvhckl": true })} </div>`)} </div> </div> </div> </section> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Clients.astro", void 0);

const egatImage = new Proxy({"src":"/_astro/EGAT.smQjt52b.jpg","width":1477,"height":1108,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/EGAT.jpg";
							}
							
							return target[name];
						}
					});

const commonAreaMaintenance = new Proxy({"src":"/_astro/commonAreaMaintenance.BwTlCm4H.jpg","width":1110,"height":1474,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/commonAreaMaintenance.jpg";
							}
							
							return target[name];
						}
					});

const royalSecurity = new Proxy({"src":"/_astro/904.Cp-0ejey.jpg","width":1108,"height":1477,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/904.jpg";
							}
							
							return target[name];
						}
					});

const specificAreaMaintenance = new Proxy({"src":"/_astro/specificAreaMaintenance.AmPAsvOF.jpg","width":1108,"height":1477,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/specificAreaMaintenance.jpg";
							}
							
							return target[name];
						}
					});

const thainaokaCompany = new Proxy({"src":"/_astro/thainaoka.COluCLfL.jpg","width":1477,"height":1108,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/thainaoka.jpg";
							}
							
							return target[name];
						}
					});

const practiceImage = new Proxy({"src":"/_astro/practice.BYd0HhsT.jpg","width":1477,"height":1108,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/practice.jpg";
							}
							
							return target[name];
						}
					});

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const portfolioItems = [
    {
      category: "security",
      categoryLabel: "\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
      title: "\u0E01\u0E1F\u0E1C. \u0E01\u0E32\u0E23\u0E44\u0E1F\u0E1F\u0E49\u0E32\u0E1D\u0E48\u0E32\u0E22\u0E1C\u0E25\u0E34\u0E15",
      location: "EGAT Headquarters",
      image: egatImage,
      tall: false
    },
    {
      category: "security",
      categoryLabel: "\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
      title: "\u0E17\u0E35\u0E48\u0E1E\u0E31\u0E01\u0E02\u0E49\u0E32\u0E23\u0E32\u0E0A\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E43\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E1E\u0E23\u0E30\u0E2D\u0E07\u0E04\u0E4C 904",
      location: "CPB Office",
      image: royalSecurity,
      tall: false
    },
    {
      category: "security",
      categoryLabel: "\u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22",
      title: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E44\u0E17\u0E22\u0E19\u0E32\u0E42\u0E2D\u0E01\u0E30 \u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E32\u0E0B\u0E39\u0E15\u0E34\u0E04\u0E2D\u0E25 \u0E08\u0E33\u0E01\u0E31\u0E14",
      location: "Thainaoka phamaceutical co. ltd",
      image: thainaokaCompany,
      tall: false
    },
    {
      category: "practice",
      categoryLabel: "\u0E1D\u0E36\u0E01\u0E0B\u0E49\u0E2D\u0E21",
      title: "\u0E2D\u0E1A\u0E23\u0E21\u0E41\u0E25\u0E30\u0E1D\u0E36\u0E01\u0E0B\u0E49\u0E2D\u0E21\u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E07\u0E32\u0E19",
      location: "Practice",
      image: practiceImage,
      tall: false
    },
    {
      category: "cleaning",
      categoryLabel: "\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14",
      title: "\u0E14\u0E39\u0E41\u0E25\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E27\u0E19\u0E01\u0E25\u0E32\u0E07",
      location: "Common Area Maintenance",
      image: commonAreaMaintenance,
      tall: false
    },
    {
      category: "cleaning",
      categoryLabel: "\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14",
      title: "\u0E14\u0E39\u0E41\u0E25\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E08\u0E38\u0E14",
      location: "Specific Area Maintenance",
      image: specificAreaMaintenance,
      tall: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" class="section-padding bg-white"> <div class="container-custom"> <div class="text-center mb-16"> <p class="section-subtitle text-amber-600">ผลงานของเรา</p> <h2 class="section-title text-navy-950">ภาพการปฏิบัติงานจริง</h2> <p class="text-gray-600 max-w-2xl mx-auto mt-4">
ภูมิใจนำเสนอภาพการทำงานจริงจากทีมงานมืออาชีพของเรา พร้อมมาตรฐานการบริการที่คุณไว้วางใจ
</p> </div> <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-20"> ${portfolioItems.map((item) => renderTemplate`<div${addAttribute(`break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${item.tall ? "row-span-2" : ""}`, "class")}> <div${addAttribute(`relative ${item.tall ? "h-[500px]" : "h-[280px]"} overflow-hidden`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.title, "width": 600, "height": item.tall ? 800 : 400, "class": "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", "format": "webp" })} <div class="absolute top-4 right-4"> <span${addAttribute(`inline-block px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${item.category === "security" ? "bg-navy-900 text-white" : "bg-teal-500 text-white"}`, "class")}> ${item.categoryLabel} </span> </div> <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/80 to-transparent p-5"> <h3 class="text-white font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors"> ${item.title} </h3> <p class="text-gray-300 text-sm"> ${item.location} </p> </div> </div> </div>`)} </div> <div class="text-center mt-16"> <a href="#contact" class="btn-primary text-lg">
สนใจบริการของเรา
</a> </div> </div> </section>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Portfolio.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const contactInfo = {
    address: "300/44 โครงการพรีเมียมเพลส",
    street: "ถนนนวมินทร์ แขวงนวมินทร์ เขตบึงกุ่ม",
    city: "กรุงเทพมหานคร 10240",
    phone: "02-379-1713-4",
    hotline1: "096-564-5493 (คุณเอก)",
    hotline2: "065-294-1962 (คุณแคนดี้)",
    email: "royalguardservices2016@gmail.com",
    lineId: "0816968904",
    license: "ตภ.2600068"
  };
  const TURNSTILE_SITE_KEY = "your-site-key-here";
  return renderTemplate(_a || (_a = __template(['<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script> ', '<section id="contact" class="w-full bg-[#002147] py-20 px-4 md:px-8 relative overflow-hidden"> <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 30px 30px;"></div> <div class="max-w-7xl mx-auto relative z-10"> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"> <div class="md:col-span-5 order-2 md:order-1 flex flex-col justify-center space-y-10 text-white"> <div> <h5 class="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">Contact Us</h5> <h2 class="text-3xl md:text-4xl font-bold mb-2">ช่องทางติดต่อ</h2> <p class="text-slate-300 text-lg">ปรึกษาและวางแผนระบบรักษาความปลอดภัยฟรี</p> </div> <div class="space-y-8"> <div class="flex gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-500"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-bold text-lg mb-1">สำนักงานใหญ่</h4> <p class="text-slate-300 text-sm leading-relaxed mb-2"> ', "<br> ", "<br> ", ' </p> <a href="https://maps.google.com/?q=13.7865,100.6535" target="_blank" rel="noopener noreferrer" class="text-amber-500 text-xs font-bold underline hover:text-amber-400 transition-colors">\nดูแผนที่ Google Maps\n</a> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-500"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-bold text-lg mb-2">เบอร์โทรศัพท์ติดต่อ</h4> <div class="space-y-1"> <p class="text-slate-300 text-sm">Office: <a', ' class="hover:text-white transition-colors">', '</a></p> <p class="text-slate-300 text-sm">\nHotline 1: <a', ' class="text-white font-bold hover:text-amber-400 transition-colors">', '</a> </p> <p class="text-slate-300 text-sm">\nHotline 2: <a', ' class="text-white font-bold hover:text-amber-400 transition-colors">', '</a> </p> </div> </div> </div> <div class="flex gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-500"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h4 class="font-bold text-lg mb-1">อีเมล & LINE</h4> <a', ' class="text-slate-300 text-sm mb-3 hover:text-amber-400 transition-colors block">', '</a> <div class="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 max-w-xs cursor-pointer hover:bg-white/10 transition-colors"> <svg class="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"></path> </svg> <div class="flex-1"> <p class="text-xs text-slate-400">Add Line for Fast Response</p> <p class="text-sm font-bold text-white">Line ID: ', '</p> </div> </div> </div> </div> </div> <div class="pt-6 border-t border-white/10"> <p class="text-slate-400 text-sm">\nใบอนุญาต: <span class="text-white font-semibold">', '</span> </p> </div> </div> <div class="md:col-span-7 order-1 md:order-2"> <div class="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 border-t-8 border-amber-500"> <div class="mb-6"> <h3 class="text-[#002147] text-2xl font-bold mb-2">บริการประเมินราคาเบื้องต้นฟรี</h3> <p class="text-slate-500 text-sm">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับเพื่อนำเสนอโซลูชั่นที่ดีที่สุด (ก่อนตัดสินใจจ้างงาน)</p> </div> <form class="space-y-4" id="contact-form"> <!-- Honeypot field for bot detection - hidden from humans --> <input type="text" name="website_url" tabindex="-1" autocomplete="off" aria-hidden="true" style="position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; pointer-events: none;" aria-hidden="true"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="space-y-1"> <label class="text-xs font-bold text-slate-600 uppercase">ชื่อ-นามสกุล</label> <input type="text" name="name" required placeholder="ระบุชื่อผู้ติดต่อ" class="w-full bg-slate-100 border-2 border-transparent focus:bg-white focus:border-[#002147] rounded-lg px-4 py-3 text-slate-900 outline-none transition-all"> </div> <div class="space-y-1"> <label class="text-xs font-bold text-slate-600 uppercase">เบอร์โทรศัพท์</label> <input type="tel" name="phone" required placeholder="0xx-xxx-xxxx" class="w-full bg-slate-100 border-2 border-transparent focus:bg-white focus:border-[#002147] rounded-lg px-4 py-3 text-slate-900 outline-none transition-all"> </div> </div> <div class="space-y-1"> <label class="text-xs font-bold text-slate-600 uppercase">อีเมล</label> <input type="email" name="email" required placeholder="name@company.com" class="w-full bg-slate-100 border-2 border-transparent focus:bg-white focus:border-[#002147] rounded-lg px-4 py-3 text-slate-900 outline-none transition-all"> </div> <div class="space-y-1"> <label class="text-xs font-bold text-slate-600 uppercase">บริการที่สนใจ</label> <div class="relative"> <select name="service" class="w-full bg-slate-100 border-2 border-transparent focus:bg-white focus:border-[#002147] rounded-lg px-4 py-3 text-slate-900 outline-none appearance-none transition-all cursor-pointer"> <option value="" disabled selected>กรุณาเลือกบริการ</option> <option value="security">บริการรักษาความปลอดภัย (Security)</option> <option value="cleaning">บริการทำความสะอาด (Cleaning)</option> <option value="duo">Duo Care (บริการผสมผสาน Security + Cleaning)</option> <option value="smart">ระบบ Smart Security</option> <option value="other">อื่นๆ</option> </select> <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"> <svg class="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </div> <div class="space-y-1"> <label class="text-xs font-bold text-slate-600 uppercase">รายละเอียดเพิ่มเติม</label> <textarea name="message" rows="4" placeholder="ระบุขนาดพื้นที่, จำนวนจุดที่ต้องการ รปภ., หรือรายละเอียดอื่นๆ..." class="w-full bg-slate-100 border-2 border-transparent focus:bg-white focus:border-[#002147] rounded-lg px-4 py-3 text-slate-900 outline-none transition-all resize-none"></textarea> </div> <!-- Cloudflare Turnstile Widget --> <div class="flex justify-start"> <div class="cf-turnstile"', ' data-callback="turnstileCallback" data-error-callback="turnstileErrorCallback"></div> </div> <input type="hidden" name="turnstileToken" id="turnstileToken"> <button type="submit" class="w-full bg-amber-500 hover:bg-amber-400 text-[#002147] font-bold text-lg py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"> <span>ขอใบเสนอราคาฟรี (Get Free Quote)</span> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </button> <p class="text-center text-xs text-slate-400 mt-2">\n*ข้อมูลของท่านจะถูกเก็บเป็นความลับ\n</p> <p id="form-message" class="text-center text-sm hidden"></p> </form> </div> </div> </div> </div> </section> '])), maybeRenderHead(), contactInfo.address, contactInfo.street, contactInfo.city, addAttribute(`tel:${contactInfo.phone.replace(/-/g, "")}`, "href"), contactInfo.phone, addAttribute(`tel:${contactInfo.hotline1.replace(/-/g, "").replace(/\s/g, "")}`, "href"), contactInfo.hotline1, addAttribute(`tel:${contactInfo.hotline2.replace(/-/g, "").replace(/\s/g, "")}`, "href"), contactInfo.hotline2, addAttribute(`mailto:${contactInfo.email}`, "href"), contactInfo.email, contactInfo.lineId, contactInfo.license, addAttribute(TURNSTILE_SITE_KEY, "data-sitekey"));
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerNav = [
    { name: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32", href: "#about" },
    { name: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23", href: "#services" },
    { name: "\u0E1C\u0E25\u0E07\u0E32\u0E19", href: "#portfolio" },
    { name: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32", href: "#contact" }
  ];
  const contactInfo = {
    companyName: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E23\u0E31\u0E01\u0E29\u0E32\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E23\u0E2D\u0E22\u0E31\u0E25\u0E01\u0E32\u0E23\u0E4C\u0E14 \u0E40\u0E0B\u0E2D\u0E23\u0E4C\u0E27\u0E34\u0E2A\u0E40\u0E0B\u0E2A \u0E08\u0E33\u0E01\u0E31\u0E14",
    address: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 300/44 \u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23\u0E1E\u0E23\u0E35\u0E40\u0E21\u0E35\u0E22\u0E21\u0E40\u0E1E\u0E25\u0E2A \u0E16.\u0E19\u0E27\u0E21\u0E34\u0E19\u0E17\u0E23\u0E4C \u0E41\u0E02\u0E27\u0E07\u0E19\u0E27\u0E21\u0E34\u0E19\u0E17\u0E23\u0E4C \u0E40\u0E02\u0E15\u0E1A\u0E36\u0E07\u0E01\u0E38\u0E48\u0E21 \u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23 10240",
    phone: "02-379-1713-4",
    email: "royalguardservices2016@gmail.com",
    lineId: "0816968904"
  };
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "LINE", href: "#", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-navy-900 border-t border-white/10"> <div class="container-custom py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"> <div class="space-y-4"> <a href="/" class="flex items-center gap-3"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "RGS Logo", "class": "h-10 w-auto object-contain", "format": "webp" })} </a> <p class="text-gray-400 text-sm">
บริการรักษาความปลอดภัยและงานทำความสะอาดครบวงจร ระดับมืออาชีพ ด้วยมาตรฐานสากล (SOP, NSRS)
</p> <div class="space-y-1 text-sm text-gray-400"> <p class="flex items-center gap-2"> <svg class="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${contactInfo.phone} </p> <p class="flex items-center gap-2"> <svg class="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${contactInfo.email} </p> </div> </div> <div> <h3 class="text-white font-semibold mb-4">ลิงก์ด่วน</h3> <nav class="flex flex-col gap-2"> ${footerNav.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"> <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> ${item.name} </a>`)} </nav> </div> <div> <h3 class="text-white font-semibold mb-4">ติดตามเรา</h3> <div class="flex gap-4 mb-4"> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-amber-400 transition-colors"${addAttribute(link.name, "aria-label")}> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path${addAttribute(link.icon, "d")}></path> </svg> </a>`)} </div> <div class="text-sm text-gray-400 space-y-2"> <p>Line ID: ${contactInfo.lineId}</p> <p class="text-xs">${contactInfo.address}</p> </div> </div> </div> <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"> <p class="text-gray-500 text-sm">
© ${currentYear} ${contactInfo.companyName}. สงวนลิขสิทธิ์.
</p> <div class="flex gap-6 text-sm"> <a href="#" class="text-gray-500 hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a> <a href="#" class="text-gray-500 hover:text-white transition-colors">เงื่อนไขการให้บริการ</a> </div> </div> </div> </footer>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/Footer.astro", void 0);

const hikivisionLogo = new Proxy({"src":"/_astro/hikivisionLogo.B7fqdyEz.svg","width":1200,"height":800,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/hikivisionLogo.svg";
							}
							
							return target[name];
						}
					});

const dahuaLogo = new Proxy({"src":"/_astro/dahuaLogo.Cs3_mj48.svg","width":1024,"height":318,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/dahuaLogo.svg";
							}
							
							return target[name];
						}
					});

const hipLogo = new Proxy({"src":"/_astro/hipLogo.CoN5xoeH.png","width":437,"height":311,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/hipLogo.png";
							}
							
							return target[name];
						}
					});

const citLogo = new Proxy({"src":"/_astro/citLogo.DNNnK0Tb.webp","width":626,"height":626,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/citLogo.webp";
							}
							
							return target[name];
						}
					});

const $$AttendanceContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-gradient-to-br from-gray-100 to-gray-200 h-32"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0676847305754!2d100.63987631528402!3d13.773293590328893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61e05c63e1ab%3A0x8e862f737ab4334e!2sThe%20Mall%20Bangkapi!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth" class="w-full h-full border-0 opacity-80" loading="lazy" title="GPS Location Map"></iframe> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> <div class="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse"> <div class="w-1.5 h-1.5 bg-white rounded-full"></div> </div> </div> <div class="absolute top-1 right-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded-full flex items-center gap-0.5"> <div class="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div> <span class="text-[6px] font-medium text-gray-700">GPS</span> </div> </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/content/AttendanceContent.astro", void 0);

const $$Astro$3 = createAstro();
const $$PatrolContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PatrolContent;
  const { app } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col bg-gray-50 relative h-full overflow-hidden"> <div class="bg-white mx-3 mt-3 rounded-xl p-3 shadow-sm flex-shrink-0"> <div class="flex justify-between items-start mb-2"> <div class="flex-1"> <p class="text-[8px] text-gray-400 font-semibold tracking-wide mb-1">ROUTE</p> <h3 class="text-sm font-bold text-gray-800 leading-tight mb-1">${app.targetName}</h3> <div class="flex items-center gap-1"> <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-[10px] text-gray-600 font-medium">${app.schedule}</span> </div> </div> <div class="text-right"> <p class="text-2xl font-black text-blue-600">${app.progressPercent}%</p> <p class="text-[9px] text-gray-400 font-medium">Completed</p> </div> </div> <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden"> <div class="bg-blue-600 h-full rounded-full transition-all"${addAttribute(`width: ${app.progressPercent}%`, "style")}></div> </div> </div> <div class="flex-1 overflow-y-auto px-3 py-3 min-h-0"> <div class="relative"> <div class="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-200"></div> ${app.stops?.map((stop) => renderTemplate`<div class="relative flex items-start mb-4 last:mb-0"> <div${addAttribute(`relative z-10 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${stop.status === "completed" ? "bg-blue-500 border-blue-500" : stop.status === "current" ? "bg-amber-400 border-amber-400" : "bg-white border-gray-300"}`, "class")}> ${stop.status === "completed" ? renderTemplate`<svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path> </svg>` : stop.status === "current" ? renderTemplate`<div class="w-2.5 h-2.5 bg-white rounded-full"></div>` : renderTemplate`<span class="text-[9px] font-bold text-gray-500">${stop.id}</span>`} </div> <div class="ml-3 flex-1 bg-white rounded-lg p-2 border border-gray-100 shadow-sm"> <div class="flex justify-between items-start"> <div class="flex-1 min-w-0"> <p${addAttribute(`text-[10px] font-bold mb-0.5 ${stop.status === "completed" ? "text-blue-700" : stop.status === "current" ? "text-gray-800" : "text-gray-600"}`, "class")}> ${stop.name} </p> <p${addAttribute(`text-[8px] font-medium ${stop.status === "completed" ? "text-blue-600" : "text-gray-400"}`, "class")}> ${stop.status === "completed" ? "\u0E15\u0E23\u0E27\u0E08\u0E41\u0E25\u0E49\u0E27" : stop.status === "current" ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08" : "\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E15\u0E23\u0E27\u0E08"} </p> </div> <p${addAttribute(`text-[10px] font-bold ${stop.status === "completed" ? "text-blue-600" : "text-gray-400"}`, "class")}> ${stop.time} </p> </div> </div> </div>`)} </div> </div> <div class="flex-shrink-0 p-3 bg-white border-t border-gray-100"> <button class="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform flex items-center justify-center gap-2 text-xs"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path> </svg>
สแกน QR Code
</button> </div> </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/content/PatrolContent.astro", void 0);

const $$VisitorContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute inset-0 bg-white flex flex-col"> <div class="bg-gradient-to-br from-blue-50 to-blue-100 pt-6 pb-4 px-4 flex flex-col items-center"> <div class="relative mb-3"> <div class="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center border-4 border-white shadow-lg"> <svg class="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div class="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-md"> <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> </div> <p class="text-xs text-blue-700 font-medium">ถ่ายภาพผู้เยี่ยมชม</p> </div> <div class="flex-1 px-4 py-4 space-y-3"> <div> <label class="text-[9px] text-gray-500 font-medium mb-1 block">Name</label> <div class="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200"> <p class="text-xs text-gray-800">สมชาย ใจดี</p> </div> </div> <div> <label class="text-[9px] text-gray-500 font-medium mb-1 block">Company</label> <div class="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200"> <p class="text-xs text-gray-400">Enter company name</p> </div> </div> <div> <label class="text-[9px] text-gray-500 font-medium mb-1 block">Phone</label> <div class="bg-gray-50 rounded-lg px-3 py-2 border border-gray-200"> <p class="text-xs text-gray-800">081-234-5678</p> </div> </div> </div> <div class="px-4 pb-4"> <button class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 active:scale-95 transition-transform flex items-center justify-center gap-2 text-xs"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>
Scan License Plate
</button> </div> </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/content/VisitorContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$PhoneMockup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PhoneMockup;
  const { app } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative group w-[240px]"> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${app.glowColor} rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`, "class")}></div> <div class="relative bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl" style="box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);"> <div class="relative bg-white rounded-[2rem] overflow-hidden transition-all duration-500 group-hover:scale-[1.02]" style="height: 480px;"> <div class="h-full overflow-hidden flex flex-col"> <div${addAttribute(`${app.headerColor} text-white px-3 py-2.5 flex items-center gap-2`, "class")}> <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> <h2 class="text-xs flex-1 font-medium truncate">${app.title}</h2> <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(app.icon, "d")}></path> </svg> </div> ${app.id === "attendance" && renderTemplate`${renderComponent($$result, "AttendanceContent", $$AttendanceContent, { "app": app })}`} ${app.id === "patrol" && renderTemplate`${renderComponent($$result, "PatrolContent", $$PatrolContent, { "app": app })}`} ${app.id === "visitor" && renderTemplate`${renderComponent($$result, "VisitorContent", $$VisitorContent, { "app": app })}`} ${app.id === "attendance" && renderTemplate`<div class="bg-gray-50 px-2.5 py-1.5 flex items-center gap-2 text-[10px] border-b border-gray-200"> <div class="flex items-center gap-0.5"> <svg class="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span class="text-gray-600">06/06/2024</span> </div> <div class="flex items-center gap-0.5"> <svg class="w-2.5 h-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="text-gray-600">21:11</span> </div> </div>`} ${app.id === "attendance" && renderTemplate`<div class="flex-1 p-3 bg-white overflow-auto"> <div class="mb-3"> <p class="text-[10px] mb-0.5 text-gray-400">Target :</p> <p class="text-xs font-semibold text-gray-800">${app.targetName}</p> </div> <div class="mb-3"> <div class="grid grid-cols-2 gap-1.5"> <button${addAttribute(`${app.headerColor} hover:opacity-90 text-white py-2 rounded-lg text-[10px] font-medium transition-opacity`, "class")}> ${app.actionButtons?.[0]} </button> <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-[10px] font-medium transition-colors"> ${app.actionButtons?.[1]} </button> </div> </div> </div>`} </div> </div> <div class="absolute right-0 top-16 w-0.5 h-8 bg-gray-700 rounded-r"></div> <div class="absolute right-0 top-28 w-0.5 h-12 bg-gray-700 rounded-r"></div> <div class="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg"></div> </div> </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/PhoneMockup.astro", void 0);

const $$Astro$1 = createAstro();
const $$CommandCenter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CommandCenter;
  const { data, isEven = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative flex justify-center ${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"} w-full`, "class")} data-astro-cid-m5qs4dxv> <div class="relative w-full max-w-4xl" data-astro-cid-m5qs4dxv> <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none rounded-3xl" data-astro-cid-m5qs4dxv></div> <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" data-astro-cid-m5qs4dxv></div> <div class="absolute top-20 right-20 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl" data-astro-cid-m5qs4dxv></div> <div class="relative mx-auto w-full max-w-3xl transform transition-transform duration-700 hover:rotate-1 z-10" data-astro-cid-m5qs4dxv> <div class="bg-slate-800 rounded-t-2xl p-2 pb-0 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-700" data-astro-cid-m5qs4dxv> <div class="bg-slate-950 rounded-t-xl p-1 relative ring-1 ring-white/10" data-astro-cid-m5qs4dxv> <div class="absolute top-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-30" data-astro-cid-m5qs4dxv> <div class="w-1.5 h-1.5 bg-slate-800 rounded-full" data-astro-cid-m5qs4dxv></div> <div class="w-1.5 h-1.5 bg-blue-900/30 rounded-full" data-astro-cid-m5qs4dxv></div> </div> <div class="bg-slate-50 w-full aspect-[16/10] rounded-lg overflow-hidden flex flex-col font-sans relative" data-astro-cid-m5qs4dxv> <div class="h-9 bg-slate-100 border-b flex items-center px-4 justify-between select-none" data-astro-cid-m5qs4dxv> <div class="flex gap-2" data-astro-cid-m5qs4dxv> <div class="w-3 h-3 rounded-full bg-rose-400/80" data-astro-cid-m5qs4dxv></div> <div class="w-3 h-3 rounded-full bg-amber-400/80" data-astro-cid-m5qs4dxv></div> <div class="w-3 h-3 rounded-full bg-emerald-400/80" data-astro-cid-m5qs4dxv></div> </div> <div class="flex-1 text-center" data-astro-cid-m5qs4dxv> <div class="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md shadow-sm border border-slate-200 text-[10px] text-slate-400 w-48 sm:w-64 justify-center" data-astro-cid-m5qs4dxv> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-m5qs4dxv></path> </svg> <span data-astro-cid-m5qs4dxv>secure.rgs-guard.com/dashboard</span> </div> </div> <div class="w-10" data-astro-cid-m5qs4dxv></div> </div> <div class="flex-1 flex overflow-hidden" data-astro-cid-m5qs4dxv> <div class="w-14 sm:w-16 bg-slate-900 flex flex-col items-center py-4 sm:py-6 gap-4 sm:gap-6 z-20" data-astro-cid-m5qs4dxv> <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-[10px] sm:text-xs mb-1 sm:mb-2 shadow-lg shadow-blue-500/30" data-astro-cid-m5qs4dxv>RGS</div> <div class="p-2 sm:p-2.5 bg-slate-800/50 text-blue-400 rounded-xl border border-slate-700" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" data-astro-cid-m5qs4dxv></path> </svg> </div> <div class="p-2 sm:p-2.5 text-slate-500 hover:text-slate-300 transition-colors" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-m5qs4dxv></path> </svg> </div> <div class="p-2 sm:p-2.5 text-slate-500 hover:text-slate-300 transition-colors" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" data-astro-cid-m5qs4dxv></path> </svg> </div> <div class="mt-auto p-2 sm:p-2.5 text-slate-500 hover:text-red-400 transition-colors" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-m5qs4dxv></path> </svg> </div> </div> <div class="flex-1 flex flex-col bg-slate-50 relative" data-astro-cid-m5qs4dxv> <div class="h-14 sm:h-16 bg-white border-b flex items-center justify-between px-4 sm:px-8" data-astro-cid-m5qs4dxv> <div data-astro-cid-m5qs4dxv> <h3 class="font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base" data-astro-cid-m5qs4dxv>
Dashboard
<span class="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[9px] sm:text-[10px] font-bold border border-green-200 flex items-center gap-1" data-astro-cid-m5qs4dxv> <span class="w-1 h-1 rounded-full bg-green-500 animate-pulse" data-astro-cid-m5qs4dxv></span>
LIVE
</span> </h3> <p class="text-[9px] sm:text-[10px] text-slate-400" data-astro-cid-m5qs4dxv>Welcome back, Admin Manager</p> </div> <div class="flex items-center gap-2 sm:gap-4" data-astro-cid-m5qs4dxv> <div class="relative hidden sm:block" data-astro-cid-m5qs4dxv> <svg class="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-m5qs4dxv></path> </svg> <input type="text" placeholder="Search logs..." class="pl-9 pr-3 py-1.5 text-xs bg-slate-100 rounded-md border-none w-32 sm:w-40" data-astro-cid-m5qs4dxv> </div> <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-md" data-astro-cid-m5qs4dxv></div> </div> </div> <div class="p-3 sm:p-6 overflow-hidden flex flex-col h-full" data-astro-cid-m5qs4dxv> <div class="flex justify-between items-end mb-3 sm:mb-4" data-astro-cid-m5qs4dxv> <div data-astro-cid-m5qs4dxv> <h4 class="font-bold text-slate-700 text-xs sm:text-sm" data-astro-cid-m5qs4dxv>Visitor Logs</h4> <p class="text-[9px] sm:text-[10px] text-slate-400" data-astro-cid-m5qs4dxv>Real-time entry/exit data</p> </div> <div class="flex gap-1.5 sm:gap-2" data-astro-cid-m5qs4dxv> <button class="p-1 sm:p-1.5 rounded bg-white border hover:bg-slate-50 text-slate-500" data-astro-cid-m5qs4dxv> <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-astro-cid-m5qs4dxv></path> </svg> </button> <button class="p-1 sm:p-1.5 rounded bg-white border hover:bg-slate-50 text-slate-500" data-astro-cid-m5qs4dxv> <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-astro-cid-m5qs4dxv></path> </svg> </button> </div> </div> <div class="bg-white rounded-xl border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] overflow-hidden flex-1 relative" data-astro-cid-m5qs4dxv> <table class="w-full text-left" data-astro-cid-m5qs4dxv> <thead class="bg-slate-50/50 border-b text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-semibold" data-astro-cid-m5qs4dxv> <tr data-astro-cid-m5qs4dxv> <th class="px-2 sm:px-4 py-2 sm:py-3" data-astro-cid-m5qs4dxv>Vehicle / Photo</th> <th class="px-2 sm:px-4 py-2 sm:py-3" data-astro-cid-m5qs4dxv>Visitor</th> <th class="px-2 sm:px-4 py-2 sm:py-3" data-astro-cid-m5qs4dxv>Time</th> <th class="px-2 sm:px-4 py-2 sm:py-3 text-center" data-astro-cid-m5qs4dxv>Status</th> </tr> </thead> <tbody class="divide-y divide-slate-100" data-astro-cid-m5qs4dxv> ${data.map((row, i) => renderTemplate`<tr${addAttribute(i === 0 ? "text-[10px] sm:text-xs transition-colors duration-500 bg-blue-50/60" : "text-[10px] sm:text-xs transition-colors duration-500 hover:bg-slate-50", "class")} data-astro-cid-m5qs4dxv> <td class="px-2 sm:px-4 py-2 sm:py-3" data-astro-cid-m5qs4dxv> <div class="flex items-center gap-1.5 sm:gap-2" data-astro-cid-m5qs4dxv> <div class="w-6 h-6 sm:w-8 sm:h-8 rounded bg-slate-200 flex items-center justify-center text-slate-400" data-astro-cid-m5qs4dxv> <svg class="w-3 h-3 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" data-astro-cid-m5qs4dxv></path> </svg> </div> <span class="font-mono font-medium text-slate-600 text-[9px] sm:text-xs" data-astro-cid-m5qs4dxv>${row.plate}</span> </div> </td> <td class="px-2 sm:px-4 py-2 sm:py-3" data-astro-cid-m5qs4dxv> <div class="font-medium text-slate-700 text-[9px] sm:text-xs" data-astro-cid-m5qs4dxv>${row.name}</div> <div class="text-[8px] sm:text-[10px] text-slate-400" data-astro-cid-m5qs4dxv>${row.type}</div> </td> <td class="px-2 sm:px-4 py-2 sm:py-3 text-slate-500 font-mono text-[9px] sm:text-xs" data-astro-cid-m5qs4dxv>${row.time}</td> <td class="px-2 sm:px-4 py-2 sm:py-3 text-center" data-astro-cid-m5qs4dxv> ${row.status === "in" ? renderTemplate`<span class="inline-block px-1.5 sm:px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[8px] sm:text-[9px] font-bold" data-astro-cid-m5qs4dxv>IN</span>` : renderTemplate`<span class="inline-block px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[8px] sm:text-[9px] font-bold" data-astro-cid-m5qs4dxv>OUT</span>`} </td> </tr>`)} </tbody> </table> <!-- Active Row Highlight Indicator --> <div class="absolute left-0 w-1 h-10 sm:h-12 bg-blue-500 top-[52px] sm:top-[60px]" data-astro-cid-m5qs4dxv></div> </div> </div> </div> </div> </div> </div> </div> <div class="relative mx-auto bg-slate-800 h-2 sm:h-3 rounded-b-xl shadow-2xl w-[102%] -left-[1%] flex justify-center" data-astro-cid-m5qs4dxv> <div class="w-20 sm:w-24 h-0.5 sm:h-1 bg-slate-700/50 rounded-b-md mt-0" data-astro-cid-m5qs4dxv></div> </div> </div> <div class="absolute -bottom-4 sm:-bottom-8 -left-1 sm:-left-8 w-36 sm:w-44 md:w-52 transform rotate-2 hover:rotate-0 transition-all duration-500 z-30 filter drop-shadow-2xl" data-astro-cid-m5qs4dxv> <div class="bg-slate-900 rounded-[2rem] p-1.5 sm:p-2 ring-1 ring-white/10 shadow-2xl" data-astro-cid-m5qs4dxv> <div class="bg-slate-950 rounded-[1.5rem] sm:rounded-[1.7rem] overflow-hidden relative aspect-[9/19] border border-slate-800" data-astro-cid-m5qs4dxv> <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-black rounded-b-xl z-20 flex justify-center items-center gap-1.5 sm:gap-2" data-astro-cid-m5qs4dxv> <div class="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-slate-800" data-astro-cid-m5qs4dxv></div> <div class="w-6 sm:w-8 h-0.5 sm:h-1 rounded-full bg-slate-800/50" data-astro-cid-m5qs4dxv></div> </div> <div class="w-full h-full bg-slate-50 flex flex-col font-sans" data-astro-cid-m5qs4dxv> <div class="bg-blue-600 text-white pt-6 sm:pt-8 pb-3 sm:pb-4 px-3 sm:px-4 rounded-b-2xl shadow-lg relative z-10" data-astro-cid-m5qs4dxv> <div class="flex justify-between items-center mb-2 sm:mb-3" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-m5qs4dxv></path> </svg> <span class="font-bold text-[11px] sm:text-sm tracking-wide" data-astro-cid-m5qs4dxv>RGS GUARD</span> <div class="relative" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-[18px] sm:h-[18px] text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" data-astro-cid-m5qs4dxv></path> </svg> <div class="absolute top-0 right-0 w-1 h-1 bg-red-400 rounded-full border border-blue-600" data-astro-cid-m5qs4dxv></div> </div> </div> <div class="flex items-center gap-1.5 sm:gap-2" data-astro-cid-m5qs4dxv> <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 border border-blue-300 flex items-center justify-center text-[8px] sm:text-[10px] font-bold" data-astro-cid-m5qs4dxv>
IMG
</div> <div class="leading-tight" data-astro-cid-m5qs4dxv> <div class="text-[8px] sm:text-[10px] text-blue-200" data-astro-cid-m5qs4dxv>Officer On Duty</div> <div class="text-[10px] sm:text-xs font-bold" data-astro-cid-m5qs4dxv>Somyot R.</div> </div> </div> </div> <!-- Scanner View --> <div class="p-2 sm:p-3 flex-1 flex flex-col gap-2 sm:gap-3" data-astro-cid-m5qs4dxv> <div class="bg-slate-900 rounded-xl flex-1 relative overflow-hidden group" data-astro-cid-m5qs4dxv> <!-- Simulated Camera Feed --> <div class="absolute inset-0 bg-slate-800 opacity-50" style="background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size: 10px 10px;" data-astro-cid-m5qs4dxv></div> <div class="absolute inset-0 flex flex-col items-center justify-center text-white z-10" data-astro-cid-m5qs4dxv> <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white/80 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" data-astro-cid-m5qs4dxv></path> </svg> <span class="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/60" data-astro-cid-m5qs4dxv>Scanning...</span> </div> <div class="absolute left-0 w-full h-0.5 bg-green-400 shadow-[0_0_10px_#4ade80] animate-scan top-0" data-astro-cid-m5qs4dxv></div> <div class="absolute top-3 sm:top-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-white/30 rounded-tl-lg" data-astro-cid-m5qs4dxv></div> <div class="absolute top-3 sm:top-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg" data-astro-cid-m5qs4dxv></div> <div class="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg" data-astro-cid-m5qs4dxv></div> <div class="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg" data-astro-cid-m5qs4dxv></div> </div> <div class="h-12 sm:h-16 grid grid-cols-2 gap-1.5 sm:gap-2" data-astro-cid-m5qs4dxv> <button class="bg-white border rounded-lg shadow-sm flex flex-col items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors" data-astro-cid-m5qs4dxv> <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" data-astro-cid-m5qs4dxv></path> </svg> <span class="text-[8px] sm:text-[9px] font-bold" data-astro-cid-m5qs4dxv>Check-In</span> </button> <button class="bg-white border rounded-lg shadow-sm flex flex-col items-center justify-center text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors" data-astro-cid-m5qs4dxv> <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-m5qs4dxv></path> </svg> <span class="text-[8px] sm:text-[9px] font-bold" data-astro-cid-m5qs4dxv>Report</span> </button> </div> </div> <div class="bg-white border-t py-1.5 sm:py-2 px-4 sm:px-6 flex justify-between text-slate-300" data-astro-cid-m5qs4dxv> <svg class="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-m5qs4dxv></path> </svg> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-m5qs4dxv></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-m5qs4dxv></path> </svg> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-m5qs4dxv></path> </svg> </div> </div> </div> </div> </div> <div class="absolute -top-2 sm:-top-4 -right-1 sm:-right-8 w-48 sm:w-60 z-40 animate-float pointer-events-none hidden sm:block" data-astro-cid-m5qs4dxv> <div class="bg-white/80 backdrop-blur-xl p-2 sm:p-3 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transform rotate-3" data-astro-cid-m5qs4dxv> <div class="flex justify-between items-center mb-1.5 sm:mb-2 pb-1.5 sm:pb-2 border-b border-black/5" data-astro-cid-m5qs4dxv> <div class="flex items-center gap-1 sm:gap-1.5" data-astro-cid-m5qs4dxv> <span class="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2" data-astro-cid-m5qs4dxv> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" data-astro-cid-m5qs4dxv></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500" data-astro-cid-m5qs4dxv></span> </span> <span class="text-[8px] sm:text-[10px] font-bold text-slate-700 uppercase" data-astro-cid-m5qs4dxv>Incident Report</span> </div> <span class="text-[8px] sm:text-[9px] text-slate-400 font-mono" data-astro-cid-m5qs4dxv>10:42 AM</span> </div> <div class="relative w-full h-16 sm:h-24 bg-slate-100 rounded-lg overflow-hidden mb-1.5 sm:mb-2 group" data-astro-cid-m5qs4dxv> <div class="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400" data-astro-cid-m5qs4dxv> <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" data-astro-cid-m5qs4dxv></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-m5qs4dxv></path> </svg> </div> <div class="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 bg-black/70 text-white text-[7px] sm:text-[8px] px-1 sm:px-1.5 py-0.5 rounded backdrop-blur-sm" data-astro-cid-m5qs4dxv>
CAM-04
</div> </div> <div class="space-y-0.5 sm:space-y-1" data-astro-cid-m5qs4dxv> <h5 class="font-bold text-slate-800 text-[10px] sm:text-xs leading-tight" data-astro-cid-m5qs4dxv>Unauthorized Entry</h5> <div class="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] text-slate-500" data-astro-cid-m5qs4dxv> <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-m5qs4dxv> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-m5qs4dxv></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-m5qs4dxv></path> </svg> <span data-astro-cid-m5qs4dxv>Parking Zone B, Level 2</span> </div> </div> </div> </div> </div> </div> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/CommandCenter.astro", void 0);

const $$Astro = createAstro();
const $$TechShowcaseCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechShowcaseCard;
  const { app, index, colors } = Astro2.props;
  const commandCenterFeatures = [
    {
      title: "Real-time Monitoring",
      desc: "\u0E23\u0E39\u0E49\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E41\u0E01\u0E19\u0E08\u0E38\u0E14\u0E15\u0E23\u0E27\u0E08",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    },
    {
      title: "Digital Visitor Log",
      desc: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E20\u0E32\u0E1E\u0E41\u0E25\u0E30\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E23\u0E16\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E07\u0E48\u0E32\u0E22\u0E43\u0E19 3 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    },
    {
      title: "Incident Alerts",
      desc: "\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E2B\u0E15\u0E38\u0E14\u0E48\u0E27\u0E19\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E20\u0E32\u0E1E\u0E16\u0E48\u0E32\u0E22\u0E2B\u0E25\u0E31\u0E01\u0E10\u0E32\u0E19\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center"> ${app.isCommandCenter ? renderTemplate`<fragment> <div class="inline-flex items-center px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm"> <span class="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
Smart Security Ecosystem
</div> <h2 class="text-3xl lg:text-4xl font-extrabold text-white leading-normal tracking-tight mb-4">
ควบคุมทุกความปลอดภัย <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 leading-relaxed">
ผ่านศูนย์กลางข้อมูลอัจฉริยะ
</span> </h2> <p class="text-gray-400 text-lg leading-relaxed border-l-4 border-blue-500/30 pl-4 mb-6">
ติดตามสถานะการทำงาน ตรวจสอบผู้มาติดต่อ และดูรายงานสรุปได้แบบ Real-time ผ่าน Dashboard สำหรับผู้บริหาร หมดปัญหาการค้นหาข้อมูลจากสมุดบันทึกแบบเดิม
</p> <div class="space-y-4"> ${commandCenterFeatures.map((item) => renderTemplate`<div class="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-transparent hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300"> <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-600/20 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(item.icon, "d")}></path> </svg> </div> <div> <h4 class="font-bold text-white text-base">${item.title}</h4> <p class="text-gray-400 text-sm mt-1">${item.desc}</p> </div> </div>`)} </div> </fragment>` : renderTemplate`<fragment> <div class="flex items-center gap-2 mb-3"> <span${addAttribute(`px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`, "class")}>
Step 0${index + 1} </span> <span class="text-gray-500 text-sm">${app.stage}</span> </div> <h3${addAttribute(`text-2xl lg:text-3xl font-bold text-white mb-4 break-words ${colors.title}`, "class")}> ${app.thaiTitle} <br> ${app.engTitle} </h3> <p class="text-gray-400 text-lg leading-relaxed"> ${app.subtitle} </p> </fragment>`} </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/tech-showcase/TechShowcaseCard.astro", void 0);

const $$TechShowcase = createComponent(($$result, $$props, $$slots) => {
  const phoneApps = [
    {
      id: "attendance",
      title: "Manage Time Attendance",
      thaiTitle: "\u0E25\u0E07\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32-\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19\u0E14\u0E49\u0E27\u0E22 GPS",
      subtitle: "\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E44\u0E14\u0E49 100% \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E01\u0E32\u0E23\u0E25\u0E07\u0E40\u0E27\u0E25\u0E32\u0E40\u0E17\u0E47\u0E08 \u0E2B\u0E23\u0E37\u0E2D \u0E23\u0E1B\u0E20. \u0E1C\u0E35 \u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38\u0E1E\u0E34\u0E01\u0E31\u0E14\u0E1C\u0E48\u0E32\u0E19\u0E14\u0E32\u0E27\u0E40\u0E17\u0E35\u0E22\u0E21",
      stage: "\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      headerColor: "bg-blue-600",
      glowColor: "from-blue-500/20 to-blue-500/5",
      targetName: "\u0E40\u0E14\u0E2D\u0E30\u0E21\u0E2D\u0E25\u0E25\u0E4C \u0E1A\u0E32\u0E07\u0E01\u0E30\u0E1B\u0E34",
      actionButtons: ["\u0E40\u0E02\u0E49\u0E32\u0E07\u0E32\u0E19", "\u0E2D\u0E2D\u0E01\u0E07\u0E32\u0E19"],
      lastEntry: { in: "22:10", out: "22:10" }
    },
    {
      id: "patrol",
      title: "\u0E15\u0E23\u0E27\u0E08\u0E08\u0E38\u0E14",
      thaiTitle: "\u0E23\u0E30\u0E1A\u0E1A\u0E15\u0E23\u0E27\u0E08\u0E08\u0E38\u0E14\u0E1C\u0E48\u0E32\u0E19 QR Code",
      engTitle: "(Real-time Patrol)",
      subtitle: "\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08\u0E17\u0E38\u0E01\u0E08\u0E38\u0E14\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E14\u0E39\u0E41\u0E25 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E15\u0E23\u0E27\u0E08\u0E44\u0E14\u0E49\u0E17\u0E31\u0E19\u0E17\u0E35 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E2B\u0E32\u0E01\u0E08\u0E38\u0E14\u0E43\u0E14\u0E16\u0E39\u0E01\u0E25\u0E30\u0E40\u0E25\u0E22",
      stage: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      headerColor: "bg-blue-600",
      glowColor: "from-blue-500/20 to-blue-500/5",
      targetName: "Night Shift Route A",
      schedule: "22:00 - 06:00",
      progressPercent: "60",
      stops: [
        { id: 1, name: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48 1 \u0E1B\u0E49\u0E2D\u0E21\u0E2B\u0E19\u0E49\u0E32", time: "10:00", status: "completed" },
        { id: 2, name: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48 2 \u0E25\u0E32\u0E19\u0E08\u0E2D\u0E14\u0E23\u0E16 A", time: "10:15", status: "completed" },
        { id: 3, name: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48 3 \u0E2B\u0E49\u0E2D\u0E07\u0E44\u0E1F\u0E1F\u0E49\u0E32", time: "10:30", status: "current" },
        { id: 4, name: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48 4 \u0E2B\u0E25\u0E31\u0E07\u0E2D\u0E32\u0E04\u0E32\u0E23", time: "--:--", status: "pending" },
        { id: 5, name: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48 5 \u0E14\u0E32\u0E14\u0E1F\u0E49\u0E32", time: "--:--", status: "pending" }
      ],
      actionButtons: ["\u0E2A\u0E41\u0E01\u0E19 QR", "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E25"],
      lastEntry: { in: "08:00", out: "12:30" }
    },
    {
      id: "visitor",
      title: "Digital Visitor Log",
      thaiTitle: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E41\u0E1A\u0E1A\u0E14\u0E34\u0E08\u0E34\u0E17\u0E31\u0E25",
      engTitle: "(Visitor Management)",
      subtitle: "\u0E22\u0E01\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22 \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E20\u0E32\u0E1E\u0E16\u0E48\u0E32\u0E22\u0E41\u0E25\u0E30\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E23\u0E16\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A Cloud \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E07\u0E48\u0E32\u0E22 \u0E41\u0E21\u0E48\u0E19\u0E22\u0E33\u0E01\u0E27\u0E48\u0E32\u0E2A\u0E21\u0E38\u0E14\u0E08\u0E14",
      stage: "\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",
      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
      headerColor: "bg-blue-600",
      glowColor: "from-blue-500/20 to-blue-500/5",
      targetName: "\u0E1C\u0E39\u0E49\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21: \u0E04\u0E38\u0E13\u0E2A\u0E21\u0E0A\u0E32\u0E22",
      actionButtons: ["\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19", "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19"],
      lastEntry: { in: "09:15", out: "-" }
    },
    {
      id: "admin",
      title: "Command Center",
      thaiTitle: "\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 (Command Center)",
      subtitle: "\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E17\u0E38\u0E01\u0E04\u0E27\u0E32\u0E21\u0E1B\u0E25\u0E2D\u0E14\u0E20\u0E31\u0E22\u0E1C\u0E48\u0E32\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E01\u0E25\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E31\u0E08\u0E09\u0E23\u0E34\u0E22\u0E30 \u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E39\u0E49\u0E21\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E41\u0E25\u0E30\u0E14\u0E39\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B\u0E44\u0E14\u0E49\u0E41\u0E1A\u0E1A Real-time \u0E1C\u0E48\u0E32\u0E19 Dashboard \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23",
      stage: "\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      headerColor: "bg-blue-600",
      glowColor: "from-blue-500/20 to-indigo-500/5",
      isCommandCenter: true,
      data: [
        { plate: "1\u0E01\u0E02 4589", name: "Somchai M.", type: "Contractor", time: "08:45", status: "in" },
        { plate: "3\u0E02\u0E17 1221", name: "Kerry Exp.", type: "Delivery", time: "09:12", status: "out" },
        { plate: "9\u0E01\u0E21 9999", name: "Vichai K.", type: "VIP", time: "09:30", status: "in" },
        { plate: "7\u0E2E\u0E27 5678", name: "Grab Food", type: "Service", time: "10:05", status: "in" }
      ]
    }
  ];
  const getAppColors = (index) => {
    const colors = [
      { badge: "bg-blue-500/20 text-blue-400", title: "text-blue-400" },
      { badge: "bg-emerald-500/20 text-emerald-400", title: "text-emerald-400" },
      { badge: "bg-blue-500/20 text-blue-400", title: "text-blue-400" },
      { badge: "bg-orange-500/20 text-orange-400", title: "text-orange-400" }
    ];
    return colors[index] || colors[0];
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30  via-blue-500/30 to-orange-500/30 -translate-x-1/2 hidden lg:block"></div> ${phoneApps.map((app, index) => {
    const colors = getAppColors(index);
    const isEven = index % 2 === 0;
    return renderTemplate`<div class="relative py-16 lg:py-20"${addAttribute(`phone-${app.id}`, "id")}> <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"> ${app.isCommandCenter ? renderTemplate`${renderComponent($$result, "CommandCenter", $$CommandCenter, { "data": app.data, "isEven": isEven })}` : renderTemplate`<div${addAttribute(isEven ? "order-2 lg:order-2" : "order-2 lg:order-1", "class")}> ${renderComponent($$result, "PhoneMockup", $$PhoneMockup, { "app": app, "colors": colors })} </div>`} <div${addAttribute(isEven ? "order-1 lg:order-1" : "order-1 lg:order-2", "class")}> ${renderComponent($$result, "TechShowcaseCard", $$TechShowcaseCard, { "app": app, "index": index, "colors": colors })} </div> </div> </div>`;
  })} </div>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/TechShowcase.astro", void 0);

const $$OnboardingTimeline = createComponent(($$result, $$props, $$slots) => {
  const timelineSteps = [
    {
      step: "30",
      timeframe: "30 Days Prior",
      thaiTimeframe: "30 \u0E27\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21",
      title: "\u0E27\u0E32\u0E07\u0E41\u0E1C\u0E19\u0E41\u0E25\u0E30\u0E27\u0E34\u0E40\u0E04\u0E23\u0E32\u0E30\u0E2B\u0E4C",
      engTitle: "Planning & Analysis",
      description: "\u0E17\u0E35\u0E21\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E25\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E08\u0E38\u0E14\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07 \u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E42\u0E2B\u0E27\u0E48 \u0E41\u0E25\u0E30\u0E23\u0E48\u0E32\u0E07\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 (SOPs) \u0E43\u0E2B\u0E49\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
    },
    {
      step: "7",
      timeframe: "7 Days Prior",
      thaiTimeframe: "7 \u0E27\u0E31\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21",
      title: "\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E38\u0E14\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E07\u0E32\u0E19",
      engTitle: "Core Team Onsite",
      description: "\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E2B\u0E25\u0E31\u0E01\u0E41\u0E25\u0E30\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E0A\u0E38\u0E14\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E31\u0E07\u0E40\u0E01\u0E15\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07 \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E41\u0E25\u0E30\u0E23\u0E30\u0E1A\u0E1A\u0E07\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E0A\u0E48\u0E27\u0E07\u0E15\u0E48\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E44\u0E1B\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E23\u0E32\u0E1A\u0E23\u0E37\u0E48\u0E19",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      step: "Day 1",
      timeframe: "Day 1",
      thaiTimeframe: "\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07",
      title: "\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E15\u0E47\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A",
      engTitle: "Full Operation",
      description: "\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E07\u0E32\u0E19\u0E44\u0E23\u0E49\u0E23\u0E2D\u0E22\u0E15\u0E48\u0E2D \u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 RGS \u0E40\u0E02\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E08\u0E38\u0E14 100% \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E35\u0E1F\u0E07\u0E32\u0E19 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E2A\u0E30\u0E14\u0E38\u0E14 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E31\u0E1A\u0E2A\u0E19",
      icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",
      isFinal: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4 md:px-8 relative overflow-hidden" data-astro-cid-zkzh46ya> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-10 pointer-events-none" data-astro-cid-zkzh46ya> <div class="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-[128px]" data-astro-cid-zkzh46ya></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" data-astro-cid-zkzh46ya></div> </div> <div class="max-w-6xl mx-auto relative z-10" data-astro-cid-zkzh46ya> <div class="text-center mb-20 space-y-4" data-astro-cid-zkzh46ya> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-amber-500 text-xs font-bold uppercase tracking-wider mb-2" data-astro-cid-zkzh46ya> <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zkzh46ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zkzh46ya></path> </svg>
Standard Operating Procedure
</div> <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight" data-astro-cid-zkzh46ya>
มาตรฐานการเริ่มงาน<br class="md:hidden" data-astro-cid-zkzh46ya>ระดับมืออาชีพ
</h2> <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed" data-astro-cid-zkzh46ya>
เราเตรียมความพร้อมล่วงหน้าเพื่อให้วันแรกของคุณราบรื่นที่สุด <br class="hidden md:block" data-astro-cid-zkzh46ya>
ด้วยกลยุทธ์ <span class="text-amber-500 font-medium" data-astro-cid-zkzh46ya>Zero-Gap Transition</span> ที่ผ่านการพิสูจน์แล้ว
</p> </div> <div class="hidden md:block relative mt-24 mb-16" data-astro-cid-zkzh46ya> <div class="absolute top-[34px] left-[16%] right-[16%] h-0.5 z-0" data-astro-cid-zkzh46ya> <div class="w-full h-full border-t-2 border-dashed border-slate-700/50" data-astro-cid-zkzh46ya></div> </div> <div class="grid grid-cols-3 gap-12 relative z-10" data-astro-cid-zkzh46ya> ${timelineSteps.map((step) => renderTemplate`<div class="group relative" data-astro-cid-zkzh46ya> <div class="flex flex-col items-center" data-astro-cid-zkzh46ya> <div${addAttribute(`relative w-20 h-20 rounded-2xl rotate-45 flex items-center justify-center border-2 transition-all duration-500 z-10 shadow-2xl ${step.isFinal ? "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 shadow-amber-500/30 scale-110" : "bg-slate-800 border-slate-700 group-hover:border-amber-500/50 group-hover:shadow-amber-500/10"}`, "class")} data-astro-cid-zkzh46ya> <div${addAttribute(`-rotate-45 transform ${step.isFinal ? "text-white" : "text-amber-500"}`, "class")} data-astro-cid-zkzh46ya> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zkzh46ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(step.icon, "d")} data-astro-cid-zkzh46ya></path> </svg> </div> </div> <div${addAttribute(`mt-8 mb-2 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border transition-colors duration-300 ${step.isFinal ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-slate-800/50 text-slate-400 border-slate-700 group-hover:border-amber-500/30"}`, "class")} data-astro-cid-zkzh46ya> ${step.timeframe} </div> <span class="text-xs text-slate-500 font-medium uppercase tracking-wider mb-6" data-astro-cid-zkzh46ya> ${step.thaiTimeframe} </span> </div> <div${addAttribute(`text-center p-6 rounded-2xl border transition-all duration-300
								bg-transparent border-transparent group-hover:bg-slate-800/30 group-hover:border-slate-700/50
						`, "class")} data-astro-cid-zkzh46ya> <h4${addAttribute(`text-xl font-bold mb-1 ${step.isFinal ? "text-white" : "text-slate-200"}`, "class")} data-astro-cid-zkzh46ya> ${step.title} </h4> <p class="text-slate-500 text-sm font-medium mb-4 group-hover:text-amber-500/80 transition-colors -z-10" data-astro-cid-zkzh46ya> ${step.engTitle} </p> <p class="text-slate-400 text-sm leading-relaxed" data-astro-cid-zkzh46ya> ${step.description} </p> </div> </div>`)} </div> </div> <!-- Mobile View (Vertical) --> <div class="md:hidden space-y-0 relative ml-2" data-astro-cid-zkzh46ya> <!-- Vertical Line --> <div class="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 z-0" data-astro-cid-zkzh46ya></div> ${timelineSteps.map((step) => renderTemplate`<div class="relative z-10 pb-12 last:pb-0" data-astro-cid-zkzh46ya> <div class="flex gap-6" data-astro-cid-zkzh46ya> <!-- Icon Column --> <div class="flex-shrink-0 pt-1" data-astro-cid-zkzh46ya> <div${addAttribute(`w-14 h-14 rounded-xl rotate-3 flex items-center justify-center border-2 shadow-lg ${step.isFinal ? "bg-amber-500 border-amber-400 shadow-amber-900/50" : "bg-slate-800 border-slate-700"}`, "class")} data-astro-cid-zkzh46ya> <div${addAttribute(step.isFinal ? "text-white" : "text-amber-500", "class")} data-astro-cid-zkzh46ya> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zkzh46ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"${addAttribute(step.icon, "d")} data-astro-cid-zkzh46ya></path> </svg> </div> </div> </div> <!-- Content Column --> <div class="pt-1" data-astro-cid-zkzh46ya> <div class="flex flex-wrap items-baseline gap-2 mb-1" data-astro-cid-zkzh46ya> <span${addAttribute(`text-sm font-bold uppercase tracking-wider ${step.isFinal ? "text-amber-500" : "text-slate-500"}`, "class")} data-astro-cid-zkzh46ya> ${step.timeframe} </span> <span class="text-xs text-slate-600" data-astro-cid-zkzh46ya>| ${step.thaiTimeframe}</span> </div> <h4${addAttribute(`text-xl font-bold ${step.isFinal ? "text-white" : "text-slate-200"}`, "class")} data-astro-cid-zkzh46ya> ${step.title} </h4> <p class="text-slate-500 text-sm font-medium mb-3" data-astro-cid-zkzh46ya> ${step.engTitle} </p> <p class="text-slate-400 text-sm leading-relaxed pr-4" data-astro-cid-zkzh46ya> ${step.description} </p> </div> </div> </div>`)} </div> <!-- Bottom CTA / Assurance --> <div class="mt-20 flex flex-col items-center relative z-10" data-astro-cid-zkzh46ya> <div class="p-[1px] rounded-full bg-gradient-to-r from-slate-800 via-amber-500/50 to-slate-800" data-astro-cid-zkzh46ya> <div class="bg-navy-900 rounded-full px-8 py-4 flex flex-col md:flex-row items-center gap-3 text-center" data-astro-cid-zkzh46ya> <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zkzh46ya> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zkzh46ya></path> </svg> <span class="text-slate-300 font-medium text-sm md:text-base" data-astro-cid-zkzh46ya>
เราพร้อมการันตี: <span class="text-white" data-astro-cid-zkzh46ya>เปลี่ยนผ่านทีมรักษาความปลอดภัย 100% ภายใน 30 วัน</span> </span> </div> </div> </div> </div> </section> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/why-choose-us/OnboardingTimeline.astro", void 0);

const selfDefenseImage = new Proxy({"src":"/_astro/selfDefense.CoXEd_O2.png","width":1676,"height":1050,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/selfDefense.png";
							}
							
							return target[name];
						}
					});

const cprImage = new Proxy({"src":"/_astro/cpr.BaETRP3p.jpg","width":748,"height":506,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/cpr.jpg";
							}
							
							return target[name];
						}
					});

const fireTrainingImage = new Proxy({"src":"/_astro/fireTraining.DdwvdKrb.png","width":1128,"height":930,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pirawatwareetanyarat/Documents/rgs/src/assets/images/fireTraining.png";
							}
							
							return target[name];
						}
					});

const $$TrainingSection = createComponent(($$result, $$props, $$slots) => {
  const trainingSlides = [
    {
      id: 1,
      title: "\u0E01\u0E32\u0E23\u0E14\u0E31\u0E1A\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E40\u0E1A\u0E37\u0E49\u0E2D\u0E07\u0E15\u0E49\u0E19",
      subtitle: "Basic Fire Fighting Training",
      gradient: "from-orange-500 to-red-600",
      icon: "\u{1F525}",
      image: fireTrainingImage
    },
    {
      id: 2,
      title: "\u0E01\u0E32\u0E23\u0E1B\u0E10\u0E21\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25",
      subtitle: "First Aid & CPR Training",
      gradient: "from-red-500 to-pink-600",
      icon: "\u{1F3E5}",
      image: cprImage
    },
    {
      id: 3,
      title: "\u0E28\u0E34\u0E25\u0E1B\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E15\u0E31\u0E27",
      subtitle: "Self Defense Techniques",
      gradient: "from-blue-600 to-purple-600",
      icon: "\u{1F6E1}\uFE0F",
      image: selfDefenseImage
    }
  ];
  return renderTemplate`<!-- Training Section -->${maybeRenderHead()}<section class="w-full bg-slate-50 py-20 px-4 md:px-8" data-astro-cid-6c7b7l36> <div class="max-w-6xl mx-auto" data-astro-cid-6c7b7l36> <!-- Section Header --> <div class="text-center mb-12" data-astro-cid-6c7b7l36> <div class="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm border border-slate-200 mb-4" data-astro-cid-6c7b7l36> <svg class="w-6 h-6 text-[#002147]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5 9 5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477 4 12 4z" data-astro-cid-6c7b7l36></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5 9 5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477 4 12 4z" data-astro-cid-6c7b7l36></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5 9 5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477 4 12 4z" data-astro-cid-6c7b7l36></path> </svg> </div> <h2 class="text-3xl md:text-4xl font-bold text-[#002147] mb-2" data-astro-cid-6c7b7l36>
หลักสูตรการฝึกอบรมที่เข้มข้น (Intensive Training)
</h2> <p class="text-slate-600 text-lg font-medium" data-astro-cid-6c7b7l36>
NSRS Standard <span class="text-amber-500 mx-2" data-astro-cid-6c7b7l36>•</span> ศูนย์ฝึก I.T.C. <span class="text-amber-500 mx-2" data-astro-cid-6c7b7l36>•</span> 40 ชั่วโมง
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-astro-cid-6c7b7l36> <!-- Left: Image Slider --> <div class="lg:col-span-5 flex flex-col h-full min-h-[320px] lg:min-h-[400px]" data-astro-cid-6c7b7l36> <div class="bg-slate-900 w-full h-full rounded-2xl relative overflow-hidden shadow-xl border border-slate-400/30 group" id="training-slider" data-astro-cid-6c7b7l36> <!-- SLIDES --> ${trainingSlides.map((slide, index) => renderTemplate`<div${addAttribute(index, "data-slide")}${addAttribute(`training-slide absolute inset-0 transition-opacity duration-700 ease-in-out ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`, "class")} data-astro-cid-6c7b7l36> ${renderComponent($$result, "Image", $$Image, { "src": slide.image, "alt": slide.title, "width": 400, "height": 500, "class": `w-full h-full object-cover  opacity-100`, "style": "object-position: center;", "data-astro-cid-6c7b7l36": true })} <!-- Gradient Overlay --> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-40`, "class")} data-astro-cid-6c7b7l36></div> </div>`)} <!-- OVERLAY --> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none" data-astro-cid-6c7b7l36></div> <!-- CAPTION --> <div class="absolute bottom-6 left-6 right-6 z-30 transition-all duration-500" id="slide-caption" data-astro-cid-6c7b7l36> <div class="flex items-center gap-2 mb-2" data-astro-cid-6c7b7l36> <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse" data-astro-cid-6c7b7l36></div> <span class="text-amber-400 font-bold text-xs uppercase tracking-widest" data-astro-cid-6c7b7l36>Live Training</span> </div> <h3 class="text-white font-bold text-xl md:text-2xl drop-shadow-md" id="slide-title" data-astro-cid-6c7b7l36> ${trainingSlides[0].title} </h3> <p class="text-slate-300 text-sm mt-1" id="slide-subtitle" data-astro-cid-6c7b7l36> ${trainingSlides[0].subtitle} </p> </div> <!-- CONTROLS --> <button id="prev-slide" class="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100" data-astro-cid-6c7b7l36> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-6c7b7l36></path> </svg> </button> <button id="next-slide" class="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100" data-astro-cid-6c7b7l36> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-6c7b7l36></path> </svg> </button> <!-- INDICATORS --> <div class="absolute bottom-6 right-6 z-30 flex gap-2" id="slide-indicators" data-astro-cid-6c7b7l36> ${trainingSlides.map((_, index) => renderTemplate`<button${addAttribute(index, "data-slide-index")}${addAttribute(`slide-indicator w-2 h-2 rounded-full transition-all duration-300 ${index === 0 ? "bg-amber-500 w-6" : "bg-white/50 hover:bg-white"}`, "class")} data-astro-cid-6c7b7l36></button>`)} </div> </div> </div> <!-- Right: Content Cards --> <div class="lg:col-span-7 flex flex-col gap-6" data-astro-cid-6c7b7l36> <!-- Card 1: Theory --> <div class="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow" data-astro-cid-6c7b7l36> <div class="flex items-start gap-4 mb-4" data-astro-cid-6c7b7l36> <div class="p-3 bg-amber-100 rounded-lg text-amber-600" data-astro-cid-6c7b7l36> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" data-astro-cid-6c7b7l36></path> </svg> </div> <div data-astro-cid-6c7b7l36> <h3 class="text-xl font-bold text-[#002147]" data-astro-cid-6c7b7l36>ภาคทฤษฎี & ระเบียบวินัย</h3> <p class="text-slate-500 text-sm" data-astro-cid-6c7b7l36>Theory & Discipline</p> </div> </div> <ul class="space-y-3 pl-2" data-astro-cid-6c7b7l36> <li class="flex items-center gap-3 text-slate-700" data-astro-cid-6c7b7l36> <div class="w-1.5 h-1.5 rounded-full bg-amber-500" data-astro-cid-6c7b7l36></div> <span class="flex-1" data-astro-cid-6c7b7l36>กฎหมายจราจร (Traffic Laws)</span> </li> <li class="flex items-center gap-3 text-slate-700" data-astro-cid-6c7b7l36> <div class="w-1.5 h-1.5 rounded-full bg-amber-500" data-astro-cid-6c7b7l36></div> <span class="flex-1" data-astro-cid-6c7b7l36>การเขียนรายงาน (Report Writing)</span> </li> <li class="flex items-center gap-3 text-slate-700" data-astro-cid-6c7b7l36> <div class="w-1.5 h-1.5 rounded-full bg-amber-500" data-astro-cid-6c7b7l36></div> <span class="flex-1" data-astro-cid-6c7b7l36>มารยาทและการบริการ (Service Mind)</span> </li> </ul> </div> <!-- Card 2: Practical --> <div class="bg-[#002147] p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-red-500 text-white relative overflow-hidden hover:shadow-xl transition-shadow" data-astro-cid-6c7b7l36> <!-- Background Decor --> <div class="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4" data-astro-cid-6c7b7l36> <svg class="w-40 h-40" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-astro-cid-6c7b7l36></path> </svg> </div> <div class="flex items-start gap-4 mb-4 relative z-10" data-astro-cid-6c7b7l36> <div class="p-3 bg-red-500/20 rounded-lg text-red-400 border border-red-500/30" data-astro-cid-6c7b7l36> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-6c7b7l36></path> </svg> </div> <div data-astro-cid-6c7b7l36> <h3 class="text-xl font-bold text-white" data-astro-cid-6c7b7l36>ภาคปฏิบัติ & เผชิญเหตุ</h3> <p class="text-slate-400 text-sm" data-astro-cid-6c7b7l36>Practical & Incident Response</p> </div> </div> <ul class="space-y-3 pl-2 relative z-10" data-astro-cid-6c7b7l36> <li class="flex items-center gap-3 text-white bg-white/10 p-2 rounded-lg -ml-2 pr-4 border border-white/5" data-astro-cid-6c7b7l36> <svg class="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" data-astro-cid-6c7b7l36></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" data-astro-cid-6c7b7l36></path> </svg> <span class="flex-1 font-bold" data-astro-cid-6c7b7l36>การดับเพลิงเบื้องต้น (Basic Fire Fighting)</span> <span class="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded uppercase tracking-wider" data-astro-cid-6c7b7l36>Highlight</span> </li> <li class="flex items-center gap-3 text-slate-300" data-astro-cid-6c7b7l36> <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-6c7b7l36></path> </svg> <span class="flex-1" data-astro-cid-6c7b7l36>การปฐมพยาบาล (First Aid / CPR)</span> </li> <li class="flex items-center gap-3 text-slate-300" data-astro-cid-6c7b7l36> <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-6c7b7l36></path> </svg> <span class="flex-1" data-astro-cid-6c7b7l36>ศิลปะการป้องกันตัว (Self Defense)</span> </li> </ul> </div> </div> </div> <!-- Footer Badge --> <div class="mt-8 flex justify-center" data-astro-cid-6c7b7l36> <div class="inline-flex items-center gap-2 bg-slate-200 text-slate-600 px-4 py-2 rounded text-xs font-mono border border-slate-300" data-astro-cid-6c7b7l36> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6c7b7l36> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.707.293L15.414 5H17a2 2 0 012 2v10a2 2 0 01-2 2H5z" data-astro-cid-6c7b7l36></path> </svg> <span data-astro-cid-6c7b7l36>ศูนย์ฝึกอบรมทะเบียนเลขที่ ก ๕๖๑๐๐๒๗</span> </div> </div> </div> </section>  `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/why-choose-us/TrainingSection.astro", void 0);

const $$ProfessionalTeam = createComponent(($$result, $$props, $$slots) => {
  const standardCards = [
    {
      id: 1,
      title: "\u0E17\u0E35\u0E21\u0E07\u0E32\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07 \u0E44\u0E21\u0E48\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E1A\u0E48\u0E2D\u0E22",
      engTitle: "Consistent Security Team",
      desc: "\u0E2B\u0E21\u0E14\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E1B\u0E20. \u0E25\u0E32\u0E2D\u0E2D\u0E01\u0E1A\u0E48\u0E2D\u0E22 \u0E14\u0E49\u0E27\u0E22\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E15\u0E25\u0E32\u0E14 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E07\u0E32\u0E19\u0E44\u0E21\u0E48\u0E2A\u0E30\u0E14\u0E38\u0E14",
      icon: "handshake",
      tag: "\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E04\u0E07\u0E2D\u0E22\u0E39\u0E48 95%",
      tagColor: "green",
      details: ["\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E40\u0E14\u0E34\u0E21 \u0E23\u0E39\u0E49\u0E07\u0E32\u0E19 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E2D\u0E19\u0E43\u0E2B\u0E21\u0E48", "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C\u0E14\u0E35\u0E01\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E1A\u0E49\u0E32\u0E19/\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19", "\u0E25\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E48\u0E22\u0E07\u0E04\u0E19\u0E41\u0E1B\u0E25\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48"]
    },
    {
      id: 2,
      title: "\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A 100%",
      engTitle: "Liability Protection",
      desc: "\u0E2D\u0E38\u0E48\u0E19\u0E43\u0E08\u0E14\u0E49\u0E27\u0E22\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01 \u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E2A\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01",
      icon: "shield",
      tag: "\u0E21\u0E35\u0E27\u0E07\u0E40\u0E07\u0E34\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E20\u0E31\u0E22",
      tagColor: "blue",
      details: ["\u0E1B\u0E23\u0E30\u0E01\u0E31\u0E19\u0E04\u0E27\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01", "\u0E23\u0E31\u0E1A\u0E1C\u0E34\u0E14\u0E0A\u0E2D\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E40\u0E2A\u0E35\u0E22\u0E2B\u0E32\u0E22\u0E08\u0E23\u0E34\u0E07", "\u0E04\u0E38\u0E49\u0E21\u0E04\u0E23\u0E2D\u0E07\u0E17\u0E31\u0E19\u0E17\u0E35\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19"]
    },
    {
      id: 3,
      title: "\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23",
      engTitle: "Combat-Ready Standards",
      desc: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23 NSRS \u0E41\u0E25\u0E30 ITC Center \u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E30\u0E07\u0E31\u0E1A\u0E40\u0E2B\u0E15\u0E38",
      icon: "award",
      tag: "\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07",
      tagColor: "amber",
      details: ["\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E1D\u0E36\u0E01\u0E2D\u0E1A\u0E23\u0E21 40 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07", "\u0E2D\u0E32\u0E22\u0E38 18-55 \u0E1B\u0E35 \u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E\u0E41\u0E02\u0E47\u0E07\u0E41\u0E23\u0E07", "\u0E21\u0E35\u0E43\u0E1A\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15 \u0E18\u0E20. \u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E15\u0E32\u0E21\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22"]
    },
    {
      id: 4,
      title: "\u0E01\u0E32\u0E23\u0E31\u0E19\u0E15\u0E35\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E02\u0E32\u0E27\u0E2A\u0E30\u0E2D\u0E32\u0E14 100%",
      engTitle: "Zero-Criminal Record",
      desc: "\u0E04\u0E31\u0E14\u0E01\u0E23\u0E2D\u0E07\u0E40\u0E02\u0E49\u0E21\u0E07\u0E27\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2D\u0E32\u0E0A\u0E0D\u0E32\u0E01\u0E23\u0E23\u0E21\u0E08\u0E32\u0E01\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E15\u0E33\u0E23\u0E27\u0E08\u0E41\u0E2B\u0E48\u0E07\u0E0A\u0E32\u0E15\u0E34\u0E17\u0E38\u0E01\u0E04\u0E19",
      icon: "fingerprint",
      tag: "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34",
      tagColor: "slate",
      details: ["\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22 100%", "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2D\u0E32\u0E0A\u0E0D\u0E32\u0E01\u0E23\u0E23\u0E21", "\u0E15\u0E23\u0E27\u0E08\u0E2B\u0E32\u0E2A\u0E32\u0E23\u0E40\u0E2A\u0E1E\u0E15\u0E34\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E07\u0E32\u0E19"]
    }
  ];
  function getTagStyle(color) {
    const styles = {
      green: "bg-green-100 text-green-700 border-green-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200",
      slate: "bg-slate-100 text-slate-700 border-slate-200"
    };
    return styles[color];
  }
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-50 py-20 px-4 md:px-8"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <div class="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm border border-slate-200 mb-4"> <svg class="w-6 h-6 text-[#002147]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg> </div> <h2 class="text-3xl md:text-4xl font-bold text-[#002147] mb-2">
ทีมงานมืออาชีพที่มั่นคง
</h2> <p class="text-slate-600 text-lg">
เราดูแลพนักงานดี → พนักงานไม่ลาออก → ดูแลคุณได้เต็มประสิทธิภาพ
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"> ${standardCards.map((card) => renderTemplate`<div class="group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col"> <div class="absolute inset-0 bg-[#002147] translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div> <div class="relative z-10 flex flex-col h-full"> <div class="flex justify-between items-start mb-6"> <div class="w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300 bg-slate-50 border border-slate-100 group-hover:bg-white/10 group-hover:border-transparent"> <div class="text-amber-500 group-hover:text-white transition-colors duration-300"> ${card.icon === "handshake" && renderTemplate`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path> </svg>`} ${card.icon === "shield" && renderTemplate`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg>`} ${card.icon === "award" && renderTemplate`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path> </svg>`} ${card.icon === "fingerprint" && renderTemplate`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8m0 0a8 8 0 00-8 8c0 2.472.345 4.865.99 7.131M8 8a8 8 0 008 8m8-8a8 8 0 00-8 8"></path> </svg>`} </div> </div> <span${addAttribute(`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1 transition-all duration-300 group-hover:bg-white group-hover:text-[#002147] group-hover:border-white ${getTagStyle(card.tagColor)}`, "class")}> ${card.tag} </span> </div> <h3 class="text-xl font-bold mb-1 transition-colors duration-300 text-[#002147] group-hover:text-white"> ${card.title} </h3> <p class="text-sm font-medium mb-4 transition-colors duration-300 text-slate-500 group-hover:text-amber-400"> ${card.engTitle} </p> <div class="mt-auto relative grid grid-cols-1 grid-rows-1"> <div class="col-start-1 row-start-1 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2"> <p class="text-slate-500 text-sm leading-relaxed"> ${card.desc} </p> </div> <div class="col-start-1 row-start-1 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pt-2 border-t border-white/10 pointer-events-none group-hover:pointer-events-auto"> ${card.details.map((detail) => renderTemplate`<div class="flex items-start gap-2 text-white/90 text-sm mb-1 last:mb-0"> <svg class="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${detail}</span> </div>`)} </div> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/why-choose-us/ProfessionalTeam.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const missions = [
    { icon: "shield", label: "\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21", title: "Coverage", description: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E31\u0E48\u0E27\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28" },
    { icon: "award", label: "\u0E21\u0E32\u0E15\u0E23\u0E10\u0E32\u0E19", title: "Standard", description: "SOP & NSRS" },
    { icon: "lightbulb", label: "\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21", title: "Innovation", description: "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22" },
    { icon: "zap", label: "\u0E23\u0E27\u0E14\u0E40\u0E23\u0E47\u0E27", title: "Speed", description: "\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E02\u0E49\u0E32\u0E07\u0E32\u0E19\u0E17\u0E31\u0E19\u0E17\u0E35" }
  ];
  const hardwarePartners = [
    { name: "Hikvision", image: hikivisionLogo },
    { name: "Dahua", image: dahuaLogo },
    { name: "HIP", image: hipLogo },
    { name: "Easy Pass", image: citLogo }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="why-us" class="bg-navy-950" data-astro-cid-fcgrrunm> <div class="container-custom section-padding" data-astro-cid-fcgrrunm> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-fcgrrunm> <div class="space-y-6" data-astro-cid-fcgrrunm> <p class="text-amber-500 font-medium tracking-wide uppercase text-sm" data-astro-cid-fcgrrunm>Why Choose RGS</p> <h2 class="text-white text-4xl lg:text-5xl font-bold hero-title" data-astro-cid-fcgrrunm>
มุ่งมั่นยกระดับมาตรฐานรักษาความปลอดภัย
<br data-astro-cid-fcgrrunm>
ด้วยนวัตกรรมและบุคลากรมืออาชีพ
</h2> <p class="text-gray-400 text-lg max-w-xl" data-astro-cid-fcgrrunm>
บริการงานระดับมืออาชีพที่หลากหลายและครบวงจรในหนึ่งเดียว
</p> </div> <div class="grid grid-cols-2 gap-4" data-astro-cid-fcgrrunm> ${missions.map((mission) => renderTemplate`<div class="group relative" data-astro-cid-fcgrrunm> <div class="absolute -inset-1 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-fcgrrunm></div> <div class="relative bg-navy-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-500/30 group-hover:-translate-y-1" data-astro-cid-fcgrrunm> <div class="w-12 h-12 mb-4" data-astro-cid-fcgrrunm> ${mission.icon === "shield" && renderTemplate`<svg class="w-full h-full text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fcgrrunm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-fcgrrunm></path> </svg>`} ${mission.icon === "award" && renderTemplate`<svg class="w-full h-full text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fcgrrunm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-fcgrrunm></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4" data-astro-cid-fcgrrunm></path> </svg>`} ${mission.icon === "lightbulb" && renderTemplate`<svg class="w-full h-full text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fcgrrunm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-fcgrrunm></path> </svg>`} ${mission.icon === "zap" && renderTemplate`<svg class="w-full h-full text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fcgrrunm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-fcgrrunm></path> </svg>`} </div> <p class="text-amber-500 text-sm font-medium mb-1" data-astro-cid-fcgrrunm>${mission.label}</p> <h3 class="text-white font-semibold text-lg" data-astro-cid-fcgrrunm>${mission.title}</h3> <p class="text-gray-500 text-sm mt-1" data-astro-cid-fcgrrunm>${mission.description}</p> </div> </div>`)} </div> </div> </div> <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" data-astro-cid-fcgrrunm></div> <div class="container-custom py-20" data-astro-cid-fcgrrunm> <div class="text-center mb-12" data-astro-cid-fcgrrunm> <p class="text-blue-400 font-medium tracking-wide uppercase text-sm mb-2" data-astro-cid-fcgrrunm>Standard & Technology</p> <h2 class="text-3xl font-bold text-white mb-3" data-astro-cid-fcgrrunm>มาตรฐานสากล + เทคโนโลยีทันสมัย</h2> <p class="text-gray-400 max-w-2xl mx-auto" data-astro-cid-fcgrrunm>ระบบความปลอดภัยอัจฉริยะที่ช่วยให้คุณตรวจสอบและมั่นใจได้ตลอด 24 ชั่วโมง</p> </div> <div class="py-12" data-astro-cid-fcgrrunm> ${renderComponent($$result, "TechShowcase", $$TechShowcase, { "data-astro-cid-fcgrrunm": true })} </div> <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12" data-astro-cid-fcgrrunm> <p class="text-gray-500 text-sm" data-astro-cid-fcgrrunm>ใช้งานอุปกรณ์จากแบรนด์ชั้นนำ:</p> ${hardwarePartners.map((partner) => renderTemplate`<div class="text-center" data-astro-cid-fcgrrunm> ${renderComponent($$result, "Image", $$Image, { "src": partner.image, "alt": partner.name, "width": 120, "height": 60, "class": "h-20 w-auto object-contain mx-auto mb-3  ", "format": "webp", "data-astro-cid-fcgrrunm": true })} </div>`)} </div> </div> <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" data-astro-cid-fcgrrunm></div> ${renderComponent($$result, "TrainingSection", $$TrainingSection, { "data-astro-cid-fcgrrunm": true })} <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" data-astro-cid-fcgrrunm></div> ${renderComponent($$result, "ProfessionalTeam", $$ProfessionalTeam, { "data-astro-cid-fcgrrunm": true })} <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" data-astro-cid-fcgrrunm></div> <div class="container-custom py-20" data-astro-cid-fcgrrunm> ${renderComponent($$result, "OnboardingTimeline", $$OnboardingTimeline, { "data-astro-cid-fcgrrunm": true })} </div> </section> `;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/components/WhyChooseUs.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Royal Guard Security - Professional Security Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Clients", $$Clients, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/pirawatwareetanyarat/Documents/rgs/src/pages/index.astro", void 0);

const $$file = "/Users/pirawatwareetanyarat/Documents/rgs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
