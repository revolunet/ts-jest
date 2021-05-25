(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),s=n(7),a=(n(0),n(158)),i={id:"presets",title:"Presets"},o={unversionedId:"getting-started/presets",id:"version-27.0/getting-started/presets",isDocsHomePage:!1,title:"Presets",description:"The presets",source:"@site/versioned_docs/version-27.0/getting-started/presets.md",slug:"/getting-started/presets",permalink:"/ts-jest/docs/getting-started/presets",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-27.0/getting-started/presets.md",version:"27.0",sidebar:"version-27.0-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/getting-started/options"}},b=[{value:"The presets",id:"the-presets",children:[]},{value:"Basic usage",id:"basic-usage",children:[]},{value:"Advanced",id:"advanced",children:[]}],c={toc:b};function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"the-presets"},"The presets"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," comes with several presets, covering most of the project's base configuration:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Preset name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/default"),Object(a.b)("br",null),"or ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"CommonJS")," syntax, leaving JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/default-esm"),Object(a.b)("br",null)),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"ESM")," syntax, leaving JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},"jsx"),") as-is.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript and JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),", ",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},".jsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"CommonJS")," syntax.",Object(a.b)("br",null),"You'll need to set ",Object(a.b)("inlineCode",{parentName:"td"},"allowJs")," to ",Object(a.b)("inlineCode",{parentName:"td"},"true")," in your ",Object(a.b)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-ts-esm")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript and JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),", ",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},".jsx"),", ",Object(a.b)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"ESM")," syntax.",Object(a.b)("br",null),"You'll need to set ",Object(a.b)("inlineCode",{parentName:"td"},"allowJs")," to ",Object(a.b)("inlineCode",{parentName:"td"},"true")," in your ",Object(a.b)("inlineCode",{parentName:"td"},"tsconfig.json")," file.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"CommonJS")," syntax, and JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},"jsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"babel-jest"),".")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"ts-jest/presets/js-with-babel-esm")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TypeScript files (",Object(a.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"td"},".tsx"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"ts-jest")," to ",Object(a.b)("strong",{parentName:"td"},"ESM")," syntax, and JavaScript files (",Object(a.b)("inlineCode",{parentName:"td"},".js"),", ",Object(a.b)("inlineCode",{parentName:"td"},"jsx"),", ",Object(a.b)("inlineCode",{parentName:"td"},".mjs"),") will be transformed by ",Object(a.b)("inlineCode",{parentName:"td"},"babel-jest"),".")))),Object(a.b)("h3",{id:"basic-usage"},"Basic usage"),Object(a.b)("p",null,"In most cases, simply setting the ",Object(a.b)("inlineCode",{parentName:"p"},"preset")," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies")," of course):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," presets use ",Object(a.b)("inlineCode",{parentName:"p"},"testMatch"),", like Jest does in its defaults. If you want to use ",Object(a.b)("inlineCode",{parentName:"p"},"testRegex")," instead in your configuration, you MUST set ",Object(a.b)("inlineCode",{parentName:"p"},"testMatch")," to ",Object(a.b)("inlineCode",{parentName:"p"},"null")," or Jest will bail."),Object(a.b)("h3",{id:"advanced"},"Advanced"),Object(a.b)("p",null,"Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n")),Object(a.b)("p",null,"Or through TypeScript (if ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," is installed):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// jest.config.ts\nimport type { InitialOptionsTsJest } from 'ts-jest/dist/types'\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets'\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'\n\nconst config: InitialOptionsTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default config\n")))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=s.a.createContext({}),l=function(e){var t=s.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},j=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=l(n),j=r,m=p["".concat(i,".").concat(j)]||p[j]||d[j]||a;return n?s.a.createElement(m,o(o({ref:t},c),{},{components:n})):s.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=j;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return s.a.createElement.apply(null,i)}return s.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);