"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3871],{3905:function(a,e,t){t.d(e,{Zo:function(){return N},kt:function(){return k}});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var i=s.createContext({}),l=function(a){var e=s.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},N=function(a){var e=l(a.components);return s.createElement(i.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,i=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=n,h=c["".concat(i,".").concat(k)]||c[k]||o[k]||m;return t?s.createElement(h,p(p({ref:e},N),{},{components:t})):s.createElement(h,p({ref:e},N))}));function k(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,p=new Array(m);p[0]=c;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:n,p[1]=r;for(var l=2;l<m;l++)p[l]=t[l];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}c.displayName="MDXCreateElement"},89316:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return N},default:function(){return c}});var s=t(87462),n=t(63366),m=(t(67294),t(3905)),p=["components"],r={},i="AFM",l={unversionedId:"models/afm",id:"models/afm",title:"AFM",description:"AFM stands for Attentional Factorization Machines. It Improves FM by discriminating the importance of different feature interactions, and learns the importance of each feature interaction from data via a neural attention network. Empirically, it is shown on regression task that AFM performs betters than FM with a 8.6% relative improvement, and consistently outperforms the state-of-the-art deep learning methods Wide&Deep and DeepCross with a much simpler structure and fewer model parameters.",source:"@site/docs/models/afm.md",sourceDirName:"models",slug:"/models/afm",permalink:"/docs/models/afm",editUrl:"https://github.com/recohut/docs/docs/docs/models/afm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"A3C",permalink:"/docs/models/a3c"},next:{title:"AFN",permalink:"/docs/models/afn"}},N=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Links",id:"links",children:[],level:2}],o={toc:N};function c(a){var e=a.components,r=(0,n.Z)(a,p);return(0,m.kt)("wrapper",(0,s.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"afm"},"AFM"),(0,m.kt)("p",null,"AFM stands for Attentional Factorization Machines. It Improves FM by discriminating the importance of different feature interactions, and learns the importance of each feature interaction from data via a neural attention network. Empirically, it is shown on regression task that AFM performs betters than FM with a 8.6% relative improvement, and consistently outperforms the state-of-the-art deep learning methods Wide&Deep and DeepCross with a much simpler structure and fewer model parameters."),(0,m.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,m.kt)("div",{parentName:"div",className:"admonition-heading"},(0,m.kt)("h5",{parentName:"div"},(0,m.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,m.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,m.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"research paper")),(0,m.kt)("div",{parentName:"div",className:"admonition-content"},(0,m.kt)("p",{parentName:"div"},(0,m.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1708.04617"},"Jun Xiao et al. \u201c",(0,m.kt)("em",{parentName:"a"},"Attentional Factorization Machines: Learning the Weight of Feature Interactions via Attention Networks"),"\u201d in IJCAI 2017.")),(0,m.kt)("blockquote",{parentName:"div"},(0,m.kt)("p",{parentName:"blockquote"},"Factorization Machines (FMs) are a supervised learning approach that enhances the linear regression model by incorporating the second-order feature interactions. Despite effectiveness, FM can be hindered by its modelling of all feature interactions with the same weight, as not all feature interactions are equally useful and predictive. For example, the interactions with useless features may even introduce noises and adversely degrade the performance. In this work, we improve FM by discriminating the importance of different feature interactions. We propose a novel model named Attentional Factorization Machine (AFM), which learns the importance of each feature interaction from data via a neural attention network. Extensive experiments on two real-world datasets demonstrate the effectiveness of AFM. Empirically, it is shown on regression task AFM betters FM with a 8.6% relative improvement, and consistently outperforms the state-of-the-art deep learning methods Wide&Deep and DeepCross with a much simpler structure and fewer model parameters.")))),(0,m.kt)("h2",{id:"architecture"},"Architecture"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"Untitled",src:t(90976).Z})),(0,m.kt)("p",null,"Formally, the AFM model can be defined as:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mover",{parentName:"msub",accent:"true"},(0,m.kt)("mi",{parentName:"mover"},"y"),(0,m.kt)("mo",{parentName:"mover"},"^")),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"A"),(0,m.kt)("mi",{parentName:"mrow"},"F"),(0,m.kt)("mi",{parentName:"mrow"},"M"))),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"w"),(0,m.kt)("mn",{parentName:"msub"},"0")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("munderover",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munderover"},"\u2211"),(0,m.kt)("mrow",{parentName:"munderover"},(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("mi",{parentName:"munderover"},"n")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"w"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"p"),(0,m.kt)("mi",{parentName:"msup"},"T")),(0,m.kt)("munderover",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munderover"},"\u2211"),(0,m.kt)("mrow",{parentName:"munderover"},(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("mi",{parentName:"munderover"},"n")),(0,m.kt)("munderover",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munderover"},"\u2211"),(0,m.kt)("mrow",{parentName:"munderover"},(0,m.kt)("mi",{parentName:"mrow"},"j"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("mi",{parentName:"munderover"},"n")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"a"),(0,m.kt)("mrow",{parentName:"msub"},(0,m.kt)("mi",{parentName:"mrow"},"i"),(0,m.kt)("mi",{parentName:"mrow"},"j"))),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"v"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow"},"\u2299"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"v"),(0,m.kt)("mi",{parentName:"msub"},"j")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"j"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\hat{y}_{AFM} (x) = w_0 + \\sum_{i=1}^nw_ix_i + p^T\\sum_{i=1}^n\\sum_{j=i+1}^na_{ij}(v_i\\odot v_j)x_ix_j")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord accent"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1944em"}},(0,m.kt)("span",{parentName:"span",className:"mord"},"^")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1944em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3283em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"A"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"FM"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7333em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"3.0652em",verticalAlign:"-1.4138em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T")))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.2777em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.6514em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-1.8723em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j"),(0,m.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop op-symbol large-op"},"\u2211"))),(0,m.kt)("span",{parentName:"span",style:{top:"-4.3em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3.05em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.4138em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"ij"))))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2299"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.05724em"}},"j")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,m.kt)("span",{parentName:"span"}))))))))))),(0,m.kt)("h2",{id:"links"},"Links"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://recbole.io/docs/recbole/recbole.model.context_aware_recommender.afm.html#afm"},"https://recbole.io/docs/recbole/recbole.model.context_aware_recommender.afm.html#afm")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://github.com/hexiangnan/attentional_factorization_machine"},"https://github.com/hexiangnan/attentional_factorization_machine")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://deepctr-torch.readthedocs.io/en/latest/deepctr_torch.models.afm.html"},"https://deepctr-torch.readthedocs.io/en/latest/deepctr_torch.models.afm.html")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://deepctr-doc.readthedocs.io/en/latest/deepctr.models.afm.html"},"https://deepctr-doc.readthedocs.io/en/latest/deepctr.models.afm.html"))))}c.isMDXComponent=!0},90976:function(a,e,t){e.Z=t.p+"assets/images/content-models-raw-mp1-afm-untitled-0b41a18dc68333d61c7a78f8ce445479.png"}}]);