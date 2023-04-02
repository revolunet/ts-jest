"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4985],{4137:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var s=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,s,o=function(t,e){if(null==t)return{};var n,s,o={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=s.createContext({}),p=function(t){var e=s.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return s.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},m=s.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||r;return n?s.createElement(d,a(a({ref:e},c),{},{components:n})):s.createElement(d,a({ref:e},c))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(7294),o=n(6010);const r="tabItem_Ymn6";function a(t){let{children:e,hidden:n,className:a}=t;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,a),hidden:n},e)}},3992:(t,e,n)=>{n.d(e,{Z:()=>w});var s=n(7462),o=n(7294),r=n(6010),a=n(2957),i=n(6775),l=n(5238),p=n(3609),c=n(2560);function u(t){return function(t){return o.Children.map(t,(t=>{if(!t||(0,o.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:s,default:o}}=t;return{value:e,label:n,attributes:s,default:o}}))}function m(t){const{values:e,children:n}=t;return(0,o.useMemo)((()=>{const t=e??u(n);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function f(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function d(t){let{queryString:e=!1,groupId:n}=t;const s=(0,i.k6)(),r=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(s.location.search);e.set(r,t),s.replace({...s.location,search:e.toString()})}),[r,s])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:s}=t,r=m(t),[a,i]=(0,o.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const s=n.find((t=>t.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:e,tabValues:r}))),[l,p]=d({queryString:n,groupId:s}),[u,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[s,r]=(0,c.Nk)(n);return[s,(0,o.useCallback)((t=>{n&&r.set(t)}),[n,r])]}({groupId:s}),b=(()=>{const t=l??u;return f({value:t,tabValues:r})?t:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((t=>{if(!f({value:t,tabValues:r}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),g(t)}),[p,g,r]),tabValues:r}}var b=n(1048);const h="tabList__CuJ",j="tabItem_LNqP";function y(t){let{className:e,block:n,selectedValue:i,selectValue:l,tabValues:p}=t;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),m=t=>{const e=t.currentTarget,n=c.indexOf(e),s=p[n].value;s!==i&&(u(e),l(s))},f=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e)},p.map((t=>{let{value:e,label:n,attributes:a}=t;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>c.push(t),onKeyDown:f,onClick:m},a,{className:(0,r.Z)("tabs__item",j,a?.className,{"tabs__item--active":i===e})}),n??e)})))}function k(t){let{lazy:e,children:n,selectedValue:s}=t;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=r.find((t=>t.props.value===s));return t?(0,o.cloneElement)(t,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==s}))))}function v(t){const e=g(t);return o.createElement("div",{className:(0,r.Z)("tabs-container",h)},o.createElement(y,(0,s.Z)({},t,e)),o.createElement(k,(0,s.Z)({},t,e)))}function w(t){const e=(0,b.Z)();return o.createElement(v,(0,s.Z)({key:String(e)},t))}},8602:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var s=n(7462),o=(n(7294),n(4137)),r=n(3992),a=n(425);const i={title:"TypeScript Config option"},l=void 0,p={unversionedId:"getting-started/options/tsconfig",id:"getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/docs/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/next/getting-started/options/tsconfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/tsconfig.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1680444905,formattedLastUpdatedAt:"Apr 2, 2023",frontMatter:{title:"TypeScript Config option"}},c={},u=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}],m={toc:u};function f(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,s.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," option allows you to define which ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," JSON file to use. An inline ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," object can also be specified instead of a file path."),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. If it cannot find one, it will use the default TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options"),"; except, ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2015")," is used as ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ES5"),"."),(0,o.kt)("p",null,"If you need to use defaults and force ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," to use the defaults even if there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project, you can set this option to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"path-to-a-tsconfig-file"},"Path to a ",(0,o.kt)("inlineCode",{parentName:"h4"},"tsconfig")," file"),(0,o.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"<rootDir>")," in the path to start from the project root dir."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(a.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: 'tsconfig.test.json',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(a.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": "tsconfig.test.json"\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,o.kt)("p",null,"Refer to the TypeScript ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," for reference.\nIt's basically the same object you'd put in your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(a.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: {\n          importHelpers: true,\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(a.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "importHelpers": true\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,o.kt)("h4",{id:"disable-auto-lookup"},"Disable auto-lookup"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n"))),(0,o.kt)(a.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        tsconfig: false,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,o.kt)(a.Z,{value:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "tsconfig": {\n            "tsconfig": false\n          }\n        }\n      ]\n    }\n  }\n}\n')))))}f.isMDXComponent=!0}}]);