(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(158)),o={id:"installation",title:"Installation"},c={unversionedId:"getting-started/installation",id:"version-27.0/getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-27.0/getting-started/installation.md",slug:"/getting-started/installation",permalink:"/ts-jest/docs/getting-started/installation",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-27.0/getting-started/installation.md",version:"27.0",sidebar:"version-27.0-docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/getting-started/presets"}},s=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Jest config file",id:"jest-config-file",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"You can install ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with one of the following commands."),Object(r.b)("h4",{id:"npm"},"NPM"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save-dev jest typescript ts-jest @types/jest\n")),Object(r.b)("h4",{id:"yarn"},"Yarn"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev jest typescript ts-jest @types/jest\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Tip: If you get an error with the following ",Object(r.b)("inlineCode",{parentName:"p"},"npm")," commands such as ",Object(r.b)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",Object(r.b)("inlineCode",{parentName:"p"},"npx XXX")," with ",Object(r.b)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project."))),Object(r.b)("h3",{id:"jest-config-file"},"Jest config file"),Object(r.b)("h4",{id:"creating"},"Creating"),Object(r.b)("p",null,"By default, Jest can run without any config files, but it will not compile ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file that will tell Jest to use a ",Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," preset."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),Object(r.b)("h4",{id:"npm-1"},"NPM"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx ts-jest config:init\n")),Object(r.b)("h4",{id:"yarn-1"},"Yarn"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn ts-jest config:init\n")),Object(r.b)("p",null,"This will create a basic Jest configuration file which will inform Jest about how to handle ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," files correctly."),Object(r.b)("p",null,"You can also use the ",Object(r.b)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",Object(r.b)("inlineCode",{parentName:"p"},"npx")," or ",Object(r.b)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",Object(r.b)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",Object(r.b)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",Object(r.b)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),Object(r.b)("h4",{id:"customizing"},"Customizing"),Object(r.b)("p",null,"For customizing jest, please follow their ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/configuration.html"}),"official guide online"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"options"}),"here"),"."))}p.isMDXComponent=!0}}]);