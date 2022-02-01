"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8466],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),h=a,u=m["".concat(c,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(u,o(o({ref:t},l),{},{components:n})):r.createElement(u,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c="TAGNN-PP",d={unversionedId:"models/tagnn-pp",id:"models/tagnn-pp",title:"TAGNN-PP",description:"TAGNN-PP models item interactions with GNN, and both local and global user interactions with  a Transformer.",source:"@site/docs/models/tagnn-pp.md",sourceDirName:"models",slug:"/models/tagnn-pp",permalink:"/docs/models/tagnn-pp",editUrl:"https://github.com/recohut/docs/docs/docs/models/tagnn-pp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SVAE",permalink:"/docs/models/svae"},next:{title:"TAGNN",permalink:"/docs/models/tagnn"}},l=[{value:"Architecture",id:"architecture",children:[{value:"Architecture of a closely-matching model (for better understanding)",id:"architecture-of-a-closely-matching-model-for-better-understanding",children:[],level:3}],level:2},{value:"Implementation",id:"implementation",children:[{value:"PyTorch Implementation (forward method)",id:"pytorch-implementation-forward-method",children:[],level:3}],level:2}],p={toc:l};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tagnn-pp"},"TAGNN-PP"),(0,i.kt)("p",null,"TAGNN-PP models item interactions with GNN, and both local and global user interactions with  a Transformer. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"research paper")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2107.01516v2"},"Sai Mitheran, Abhinav Java, Surya Kant Sahu and Arshad Shaikh, \u201c",(0,i.kt)("em",{parentName:"a"},"Improved Representation Learning for Session-based Recommendation"),"\u201d. arXiv, 2021.")),(0,i.kt)("blockquote",{parentName:"div"},(0,i.kt)("p",{parentName:"blockquote"},"Session-based recommendation systems suggest relevant items to users by modeling user behavior and preferences using short-term anonymous sessions. Existing methods leverage Graph Neural Networks (GNNs) that propagate and aggregate information from neighboring nodes i.e., local message passing. Such graph-based architectures have representational limits, as a single sub-graph is susceptible to overfit the sequential dependencies instead of accounting for complex transitions between items in different sessions. We propose using a Transformer in combination with a target attentive GNN, which allows richer Representation Learning. Our experimental results and ablation show that our proposed method is competitive with the existing methods on real-world benchmark datasets, improving on graph-based hypotheses.")))),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Untitled",src:n(58857).Z})),(0,i.kt)("h3",{id:"architecture-of-a-closely-matching-model-for-better-understanding"},"Architecture of a closely-matching model (for better understanding)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"We first model user\u2019s interaction sequences as session graphs which serves as the input of the graph neural network, and we can obtain each node vector involved in session graph via graph neural network. Next, target attentive network activates different user interests corresponding to varied target items adaptively (i.e., the learned interest representation vector varies with different target items). Then, we leverage the self-attention mechanism to accurately capture users\u2019 long-term interests. Finally, we combine long-term and short-term interests to infer the probabilities for each candidate item for recommendation task.",src:n(65357).Z})),(0,i.kt)("p",null,"We first model user\u2019s interaction sequences as session graphs which serves as the input of the graph neural network, and we can obtain each node vector involved in session graph via graph neural network. Next, target attentive network activates different user interests corresponding to varied target items adaptively (i.e., the learned interest representation vector varies with different target items). Then, we leverage the self-attention mechanism to accurately capture users\u2019 long-term interests. Finally, we combine long-term and short-term interests to infer the probabilities for each candidate item for recommendation task."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("h3",{id:"pytorch-implementation-forward-method"},"PyTorch Implementation (forward method)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def forward(self, inputs, A):\n        hidden = self.embedding(inputs)\n        hidden = self.tagnn(A, hidden)\n        hidden = hidden.permute(1, 0, 2)\n\n        skip = self.layer_norm1(hidden)\n        hidden, attn_w = self.attn(\n            hidden, hidden, hidden, attn_mask=get_mask(hidden.shape[0]))\n        hidden = hidden+skip\n        hidden = hidden.permute(1, 0, 2)\n")))}m.isMDXComponent=!0},65357:function(e,t,n){t.Z=n.p+"assets/images/content-models-raw-mp1-tagnn-pp-untitled-1-c92bc858417ad5a4580d8561da2e1f4f.png"},58857:function(e,t,n){t.Z=n.p+"assets/images/content-models-raw-mp1-tagnn-pp-untitled-83644f2ab0364fd6ce44c87c46ed02c3.png"}}]);