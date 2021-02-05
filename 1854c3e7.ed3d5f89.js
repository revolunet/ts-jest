(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(132)),i={id:"babel7-or-ts",title:"Babel7 or TypeScript"},c={unversionedId:"babel7-or-ts",id:"version-26.5/babel7-or-ts",isDocsHomePage:!1,title:"Babel7 or TypeScript",description:"In Sept. 2018 Babel7 got released with an interesting preset: @babel/preset-typescript.",source:"@site/versioned_docs/version-26.5/babel7-or-ts.md",slug:"/babel7-or-ts",permalink:"/ts-jest/docs/babel7-or-ts",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/docs/versioned_docs/version-26.5/babel7-or-ts.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"Troubleshooting",permalink:"/ts-jest/docs/guides/troubleshooting"},next:{title:"Migration from <=23.10",permalink:"/ts-jest/docs/migration"}},p=[{value:"Limitations",id:"limitations",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Sept. 2018 Babel7 got released with an interesting preset: ",Object(o.b)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),"."),Object(o.b)("p",null,"The goal is to make it easy for users using Babel to try TypeScript without moving out from Babel, just by adding a preset in their Babel config (here is the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/"}),"MSDN blog post")," about TypeScript and Babel 7)."),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"While ",Object(o.b)("inlineCode",{parentName:"p"},"@babel/preset-typescript")," is a great preset, you must know the limitation of it. Here is what is possible with TypeScript (and ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest"),"), which is not with Babel7 and ",Object(o.b)("inlineCode",{parentName:"p"},"@babel/preset-typescript"),":"),Object(o.b)("h4",{id:"no-type-checking"},"No type-checking"),Object(o.b)("p",null,"This is the big ",Object(o.b)("strong",{parentName:"p"},"PRO")," of using TypeScript vs Babel, you have type-checking out of the box."),Object(o.b)("p",null,"You'll get a more fluent TDD experience (when using ",Object(o.b)("inlineCode",{parentName:"p"},"ts-jest"),") since files will be type-checked at the same time they're compiled and ran."),Object(o.b)("p",null,"Here TypeScript will throw while Babel won't:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const str: string = 42\n")),Object(o.b)("p",null,'With Babel, files are transpiled as isolated modules, there is no notion of "project". With TypeScript, files are part of a project and are compiled in that scope.'),Object(o.b)("hr",null),Object(o.b)("h4",{id:"no-namespace"},"No ",Object(o.b)("inlineCode",{parentName:"h4"},"namespace")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"namespace app {\n  export const VERSION = '1.0.0'\n  export class App {\n    /* ... */\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"no-const-enum"},"No ",Object(o.b)("inlineCode",{parentName:"h4"},"const enum")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const enum Directions {\n  Up,\n  Down,\n  Left,\n  Right,\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"no-declaration-merging-enum-namespace-"},"No declaration merging (",Object(o.b)("inlineCode",{parentName:"h4"},"enum"),", ",Object(o.b)("inlineCode",{parentName:"h4"},"namespace"),", ...)"),Object(o.b)("p",null,"You won't be able to do ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html"}),"declaration merging"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"no-legacy-importexport"},"No legacy ",Object(o.b)("inlineCode",{parentName:"h4"},"import"),"/",Object(o.b)("inlineCode",{parentName:"h4"},"export")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import lib = require('lib')\n// ...\nexport = myVar\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"no-caret-type-casting-with-jsx-enabled"},"No caret type-casting with JSX enabled"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const val = <string>input\n")))}b.isMDXComponent=!0}}]);