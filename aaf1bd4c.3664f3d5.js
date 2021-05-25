(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(158)),i={title:"Isolated Modules option"},s={unversionedId:"getting-started/options/isolatedModules",id:"version-26.5/getting-started/options/isolatedModules",isDocsHomePage:!1,title:"Isolated Modules option",description:"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.",source:"@site/versioned_docs/version-26.5/getting-started/options/isolatedModules.md",slug:"/getting-started/options/isolatedModules",permalink:"/ts-jest/docs/26.5/getting-started/options/isolatedModules",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-26.5/getting-started/options/isolatedModules.md",version:"26.5"},c=[{value:"Example",id:"example",children:[]},{value:"Performance",id:"performance",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Caveats",id:"caveats",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By default ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",Object(r.b)("inlineCode",{parentName:"p"},"isolatedModules")," option (which defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),") does."),Object(r.b)("p",null,"You'll lose type-checking ability and some features such as ",Object(r.b)("inlineCode",{parentName:"p"},"const enum"),", but in the case you plan on using Jest with the cache disabled (",Object(r.b)("inlineCode",{parentName:"p"},"jest --no-cache"),"), your tests will then run much faster."),Object(r.b)("p",null,"Here is how to disable type-checking and compile each file as an isolated module:"),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      isolatedModules: true,\n    },\n  },\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "isolatedModules": true\n      }\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"isolatedModules: false")," comes with a cost of performance comparing to ",Object(r.b)("inlineCode",{parentName:"p"},"isolatedModules: true"),". There is a way\nto improve the performance when using this mode by changing the value of ",Object(r.b)("inlineCode",{parentName:"p"},"include")," in ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig")," which is used by ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest"),".\nThe least amount of files which are provided in ",Object(r.b)("inlineCode",{parentName:"p"},"include"),", the more performance the test run can gain."),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n')),Object(r.b)("h2",{id:"caveats"},"Caveats"),Object(r.b)("p",null,"Limiting the amount of files loaded via ",Object(r.b)("inlineCode",{parentName:"p"},"include")," can greatly boost performance when running tests. However, the trade off\nis ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," might not recognize all files which are intended to use with ",Object(r.b)("inlineCode",{parentName:"p"},"jest"),". One can run into issues with custom typings,\nglobal modules, etc..."),Object(r.b)("p",null,"The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",Object(r.b)("inlineCode",{parentName:"p"},"include"),", to gain both performance boost and avoid breaking behaviors."))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);