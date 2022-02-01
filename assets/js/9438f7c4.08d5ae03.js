"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7043],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,u=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77190:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={},c="MB-GMN",l={unversionedId:"models/mb-gmn",id:"models/mb-gmn",title:"MB-GMN",description:"MB-GMN stands for Multi-behavior pattern modeling with meta-knowledge learner.",source:"@site/docs/models/mb-gmn.md",sourceDirName:"models",slug:"/models/mb-gmn",permalink:"/docs/models/mb-gmn",editUrl:"https://github.com/recohut/docs/docs/docs/models/mb-gmn.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Markov Chains",permalink:"/docs/models/markov-chains"},next:{title:"MF",permalink:"/docs/models/mf"}},m=[{value:"Architecture",id:"architecture",children:[],level:2}],p={toc:m};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mb-gmn"},"MB-GMN"),(0,a.kt)("p",null,"MB-GMN stands for Multi-behavior pattern modeling with meta-knowledge learner."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"research paper")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.03969"},"Lianghao Xia, Yong Xu, Chao Huang, Peng Dai and Liefeng Bo, \u201c",(0,a.kt)("em",{parentName:"a"},"Graph Meta Network for Multi-Behavior Recommendation"),"\u201d. SIGIR, 2021.")),(0,a.kt)("blockquote",{parentName:"div"},(0,a.kt)("p",{parentName:"blockquote"},"Modern recommender systems often embed users and items into low-dimensional latent representations, based on their observed interactions. In practical recommendation scenarios, users often exhibit various intents which drive them to interact with items with multiple behavior types (e.g., click, tag-as-favorite, purchase). However, the diversity of user behaviors is ignored in most of the existing approaches, which makes them difficult to capture heterogeneous relational structures across different types of interactive behaviors. Exploring multi-typed behavior patterns is of great importance to recommendation systems, yet is very challenging because of two aspects: i) The complex dependencies across different types of user-item interactions; ii) Diversity of such multi-behavior patterns may vary by users due to their personalized preference. To tackle the above challenges, we propose a Multi-Behavior recommendation framework with Graph Meta Network to incorporate the multi-behavior pattern modeling into a meta-learning paradigm. Our developed MB-GMN empowers the user-item interaction learning with the capability of uncovering type-dependent behavior representations, which automatically distills the behavior heterogeneity and interaction diversity for recommendations. Extensive experiments on three real-world datasets show the effectiveness of MB-GMN by significantly boosting the recommendation performance as compared to various state-of-the-art baselines. The source code is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akaxlh/MB-GMN"},"https://github.com/akaxlh/MB-GMN"),".")))),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The model architecture of MB-GMN. (a) Multi-behavior pattern modeling with meta-knowledge learner for behavior heterogeneity; (b) Meta graph neural network which preserves the behavior semantics with high-order connectivity; (c) Metaknowledge transfer networks that customize the parameter of prediction layer to capture cross-type behavior dependency.",src:r(21789).Z})),(0,a.kt)("p",null,"The model architecture of MB-GMN. (a) Multi-behavior pattern modeling with meta-knowledge learner for behavior heterogeneity; (b) Meta graph neural network which preserves the behavior semantics with high-order connectivity; (c) Metaknowledge transfer networks that customize the parameter of prediction layer to capture cross-type behavior dependency."))}d.isMDXComponent=!0},21789:function(e,t,r){t.Z=r.p+"assets/images/content-models-raw-mp1-mb-gmn-untitled-10d102229526ec1f35bf0e375131345f.png"}}]);