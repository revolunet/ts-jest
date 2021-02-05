(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(o,".").concat(d)]||p[d]||j[d]||b;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,o=new Array(b);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<b;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),b=(n(0),n(132)),o={id:"options",title:"Options"},i={unversionedId:"getting-started/options",id:"version-26.5/getting-started/options",isDocsHomePage:!1,title:"Options",description:"Introduction",source:"@site/versioned_docs/version-26.5/getting-started/options.md",slug:"/getting-started/options",permalink:"/ts-jest/docs/getting-started/options",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/versioned_docs/version-26.5/getting-started/options.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Presets",permalink:"/ts-jest/docs/getting-started/presets"},next:{title:"Paths mapping",permalink:"/ts-jest/docs/getting-started/paths-mapping"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Options",id:"options",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"All ",Object(b.b)("inlineCode",{parentName:"p"},"ts-jest")," specific options are located under the ",Object(b.b)("inlineCode",{parentName:"p"},"globals.ts-jest")," path of your Jest config:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here\n    },\n  },\n}\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        // ts-jest configuration goes here\n      }\n    }\n  }\n}\n')),Object(b.b)("h4",{id:"ide-ts-jest-config-suggestion"},"IDE ",Object(b.b)("inlineCode",{parentName:"h4"},"ts-jest")," config suggestion"),Object(b.b)("p",null,"To utilize IDE suggestions, you can use ",Object(b.b)("inlineCode",{parentName:"p"},"JSDoc")," comments to provide suggested ",Object(b.b)("inlineCode",{parentName:"p"},"ts-jest")," configs for your Jest config:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/** @typedef {import('ts-jest/dist/types')} */\n/** @type {import('@jest/types').Config.InitialOptions} */\nconst config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      // ts-jest configuration goes here and your IDE will suggest which configs when typing\n    },\n  },\n}\n\nmodule.exports = config\n")),Object(b.b)("h3",{id:"options"},"Options"),Object(b.b)("p",null,"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/compiler"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"compiler")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/compiler"}),"TypeScript module to use as compiler.")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},'"typescript"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/tsconfig"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"tsconfig")," or ",Object(b.b)("inlineCode",{parentName:"strong"},"tsConfig(DEPRECATED)")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/tsconfig"}),"TypeScript compiler related configuration.")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"object"),"|",Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"auto"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/isolatedModules"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"isolatedModules")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/isolatedModules"}),"Disable type-checking")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"disabled"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/astTransformers"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"astTransformers")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/astTransformers"}),"Custom TypeScript AST transformers")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"auto"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/diagnostics"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"diagnostics")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/diagnostics"}),"Diagnostics related configuration.")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"enabled"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/babelConfig"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"babelConfig")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/babelConfig"}),"Babel(Jest) related configuration.")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"disabled"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/stringifyContentPathRegex"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"stringifyContentPathRegex")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/stringifyContentPathRegex"}),"Files which will become modules returning self content.")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"RegExp")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"disabled"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/useESM"}),Object(b.b)("strong",{parentName:"a"},Object(b.b)("inlineCode",{parentName:"strong"},"useESM")))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"options/useESM"}),"Enable ESM support")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"auto"))))))}s.isMDXComponent=!0}}]);