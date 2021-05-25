(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(a,".").concat(f)]||u[f]||b[f]||i;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(158)),a={title:"Stringify content option"},s={unversionedId:"getting-started/options/stringifyContentPathRegex",id:"version-27.0/getting-started/options/stringifyContentPathRegex",isDocsHomePage:!1,title:"Stringify content option",description:"The stringifyContentPathRegex option has been kept for backward compatibility of HTML_TRANSFORM",source:"@site/versioned_docs/version-27.0/getting-started/options/stringifyContentPathRegex.md",slug:"/getting-started/options/stringifyContentPathRegex",permalink:"/ts-jest/docs/getting-started/options/stringifyContentPathRegex",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-27.0/getting-started/options/stringifyContentPathRegex.md",version:"27.0"},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," option has been kept for backward compatibility of ",Object(i.b)("inlineCode",{parentName:"p"},"__HTML_TRANSFORM__"),"\nIt's a regular expression pattern used to match the path of file to be transformed.\nIf it matches, the file will be exported as a module exporting its content."),Object(i.b)("p",null,"Let's say for example that you have a file ",Object(i.b)("inlineCode",{parentName:"p"},"foo.ts")," which contains ",Object(i.b)("inlineCode",{parentName:"p"},'export default "bar"'),", and your ",Object(i.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"foo\\\\.ts$"),", the resulting module won't be the result of compiling ",Object(i.b)("inlineCode",{parentName:"p"},"foo.ts")," source, but instead it'll be a module which exports the string ",Object(i.b)("inlineCode",{parentName:"p"},'"export default \\"bar\\""'),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"CAUTION"),": Whatever file(s) you want to match with ",Object(i.b)("inlineCode",{parentName:"p"},"stringifyContentPathRegex")," pattern, you must ensure the Jest ",Object(i.b)("inlineCode",{parentName:"p"},"transform")," option pointing to ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest")," matches them. You may also have to add the extension(s) of this/those file(s) to ",Object(i.b)("inlineCode",{parentName:"p"},"moduleFileExtensions")," Jest option."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"jest.config.js")," version, you could do as in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," version of the config, but extending from the preset will ensure more compatibility without any changes when updating."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\n// Here `defaults` can be replaced with any other preset\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  // [...]\n  moduleFileExtensions: [...tsjPreset.moduleFileExtensions, 'html'],\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.html$': 'ts-jest',\n  },\n  globals: {\n    'ts-jest': {\n      stringifyContentPathRegex: /\\.html$/,\n    },\n  },\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "moduleFileExtensions": ["js", "ts", "html"],\n    "transform": {\n      "\\\\.(html|ts|js)$": "ts-jest"\n    },\n    "globals": {\n      "ts-jest": {\n        "stringifyContentPathRegex": "\\\\.html$"\n      }\n    }\n  }\n}\n')))}l.isMDXComponent=!0}}]);