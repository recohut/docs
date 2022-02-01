"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[189],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return i?n.createElement(m,r(r({ref:t},d),{},{components:i})):n.createElement(m,r({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},59254:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=i(87462),a=i(63366),s=(i(67294),i(3905)),r=["components"],o={},l="Bias & Fairness",c={unversionedId:"concept-extras/bias-&-fairness",id:"concept-extras/bias-&-fairness",title:"Bias & Fairness",description:"It can\u2019t be denied that there is bias all around us. A bias is a prejudice against a person or group of people, including, but not limited to their gender, race, and beliefs. Many of these biases arise from emergent behavior in social interactions, events in history, and cultural and political views around the world. These biases affect the data that we collect. Because AI algorithms work with this data, it is an inherent problem that the machine will \u201clearn\u201d these biases. From a technical perspective, we can engineer the system perfectly, but at the end of the day, humans interact with these systems, and it\u2019s our responsibility to minimize bias and prejudice as much as possible. The algorithms we use are only as good as the data provided to them. Understanding the data and the context in which it is being used is the first step in battling bias, and this understanding will help you build better solutions\u2014because you will be well versed in the problem space. Providing balanced data with as little bias as possible should result in better solutions.",source:"@site/docs/concept-extras/bias-&-fairness.mdx",sourceDirName:"concept-extras",slug:"/concept-extras/bias-&-fairness",permalink:"/docs/concept-extras/bias-&-fairness",editUrl:"https://github.com/recohut/docs/docs/docs/concept-extras/bias-&-fairness.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Types of Recommender Systems",permalink:"/docs/concept-basics/types-of-recommender-systems"},next:{title:"Cold Start",permalink:"/docs/concept-extras/cold-start"}},d=[{value:"Types of biases",id:"types-of-biases",children:[{value:"Selection bias",id:"selection-bias",children:[],level:3},{value:"Conformity bias",id:"conformity-bias",children:[],level:3}],level:2},{value:"Debiasing methods",id:"debiasing-methods",children:[{value:"IPS",id:"ips",children:[],level:3},{value:"IPS-C",id:"ips-c",children:[],level:3},{value:"IPS-CN",id:"ips-cn",children:[],level:3},{value:"IPS-CNSR",id:"ips-cnsr",children:[],level:3},{value:"CausE",id:"cause",children:[],level:3}],level:2},{value:"Random",id:"random",children:[],level:2},{value:"Concepts",id:"concepts",children:[{value:"Equal opportunity",id:"equal-opportunity",children:[],level:3},{value:"Rawlsian Max-Min fairness principle of distributive justice",id:"rawlsian-max-min-fairness-principle-of-distributive-justice",children:[],level:3}],level:2},{value:"AutoDebias",id:"autodebias",children:[],level:2}],u={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"bias--fairness"},"Bias & Fairness"),(0,s.kt)("p",null,"It can\u2019t be denied that there is bias all around us. A bias is a prejudice against a person or group of people, including, but not limited to their gender, race, and beliefs. Many of these biases arise from emergent behavior in social interactions, events in history, and cultural and political views around the world. These biases affect the data that we collect. Because AI algorithms work with this data, it is an inherent problem that the machine will \u201clearn\u201d these biases. From a technical perspective, we can engineer the system perfectly, but at the end of the day, humans interact with these systems, and it\u2019s our responsibility to minimize bias and prejudice as much as possible. The algorithms we use are only as good as the data provided to them. Understanding the data and the context in which it is being used is the first step in battling bias, and this understanding will help you build better solutions\u2014because you will be well versed in the problem space. Providing balanced data with as little bias as possible should result in better solutions."),(0,s.kt)("p",null,"Recommender systems are important for connecting users to the right items. But are items recommended fairly? For example, in a recruiting recommender that recommends job candidates (the items here), are candidates of different genders treated equally? In a news recommender, are news stories with different political ideologies recommended fairly? And even for product recommenders, are products from big companies favored over products from new entrants? The danger of unfair recommendations for items has been recognized in the literature, with potential negative impacts on item providers, user satisfaction, the recommendation platform itself, and ultimately social good."),(0,s.kt)("p",null,"In practice, the data is observational rather than experimental, and is often affected by many factors, including but not limited to self-selection of the user (selection bias), exposure mechanism of the system (exposure bias), public opinions (conformity bias) and the display position (position bias). De-biasing the data is an important and critical pre-processing step. Biases cause training data distribution deviate from the ideal unbiased one."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Untitled",src:i(78770).Z})),(0,s.kt)("h2",{id:"types-of-biases"},"Types of biases"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Untitled",src:i(96183).Z})),(0,s.kt)("h3",{id:"selection-bias"},"Selection bias"),(0,s.kt)("p",null,"Selection bias originates from users\u2019 numerical ratings on items (i.e., explicit feedback), which is defined as - ",(0,s.kt)("em",{parentName:"p"},'"Selection Bias happens as users are free to choose which items to rate, so that the observed ratings are not a representative sample of all ratings. In other words, the rating data is often missing not at random (MNAR)."')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Distribution of rating values for randomly selected items and user-selected items, as demonstrated in [this](https://www.notion.so/04c70cf18dbe401980fe9b00bb1a2077) paper.",src:i(16724).Z})),(0,s.kt)("p",null,"Distribution of rating values for randomly selected items and user-selected items, as demonstrated in ",(0,s.kt)("a",{parentName:"p",href:"https://www.notion.so/04c70cf18dbe401980fe9b00bb1a2077"},"this")," paper."),(0,s.kt)("h3",{id:"conformity-bias"},"Conformity bias"),(0,s.kt)("p",null,"Another bias inherent in the explicit feedback data is conformity bias, which is defined as: ",(0,s.kt)("em",{parentName:"p"},'"Conformity bias happens as users tend to rate similarly to the others in a group, even if doing so goes against their own judgment, making the rating values do not always signify user true preference"'),"."),(0,s.kt)("p",null,"For example, influenced by high ratings of public comments on an item, one user is highly likely to change her low rate, avoiding being too harsh. Such phenomenon of conformity is common and cause biases in user ratings. As shown in ",(0,s.kt)("a",{parentName:"p",href:"https://www.notion.so/A-methodology-for-learning-analyzing-and-mitigating-social-influence-bias-in-recommender-systems-e304120c16f1415583e396f786cac335"},"Krishnan et al."),", user ratings follow different distributions when users rate items before or after being exposed to the public opinions. Moreover, conformity bias might be caused by social influence, where users tend to behave similarly with their friends. Hence, the observed ratings are skewed and might not reflect users\u2019 real preference on items."),(0,s.kt)("h2",{id:"debiasing-methods"},"Debiasing methods"),(0,s.kt)("h3",{id:"ips"},"IPS"),(0,s.kt)("p",null,"IPS eliminates popularity bias by re-weighting each instance according to item popularity. Specifically, weight for an instance is set as the inverse of corresponding item popularity value, hence popular items are imposed lower weights, while the importance for long-tail items are boosted."),(0,s.kt)("h3",{id:"ips-c"},"IPS-C"),(0,s.kt)("p",null,"This method adds max-capping on IPS value to reduce the variance of IPS."),(0,s.kt)("h3",{id:"ips-cn"},"IPS-CN"),(0,s.kt)("p",null,"This method further adds normalization which also achieved lower variance than plain IPS, at the expense of introducing a small amount of bias."),(0,s.kt)("h3",{id:"ips-cnsr"},"IPS-CNSR"),(0,s.kt)("p",null,"Smoothing and re-normalization are added to attain more stable output of IPS."),(0,s.kt)("h3",{id:"cause"},"CausE"),(0,s.kt)("p",null,"This method requires a large biased dataset and a small unbiased dataset. Each user or item has two embeddings to perform matrix factorization (MF) on the two datasets respectively, and L1 or L2 regularization is exploited."),(0,s.kt)("h2",{id:"random"},"Random"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Aim for ethical and legal applications of technology",src:i(64809).Z})),(0,s.kt)("p",null,"Aim for ethical and legal applications of technology"),(0,s.kt)("h2",{id:"concepts"},"Concepts"),(0,s.kt)("h3",{id:"equal-opportunity"},(0,s.kt)("a",{parentName:"h3",href:"https://arxiv.org/abs/1610.02413"},"Equal opportunity")),(0,s.kt)("p",null,"In a classification task, equal opportunity requires a model to produce the same true positive rate (TPR) for all individuals or groups. The goal is to ensure that items from different groups can be equally recommended to matched users during testing (the same true positive rate): for example, candidates of different genders are equally recommended to job openings that they are qualified for. In contrast, demographic parity fairness only focuses on the difference in the amount of exposure to users without considering the ground-truth of user-item matching. However, because only the exposure to matched users (as considered by equal opportunity fairness) can influence the feedback or economic gain of items, in recommendation tasks, equal opportunity is better aligned than demographic parity fairness."),(0,s.kt)("h3",{id:"rawlsian-max-min-fairness-principle-of-distributive-justice"},"Rawlsian Max-Min fairness principle of distributive justice"),(0,s.kt)("p",null,"Rawlsian Max-Min fairness requires a model to maximize the minimum utility of individuals or groups so that no subject is underserved by the model. Unlike equality (or parity) based notions of fairness aiming to eliminate difference among individuals or groups but neglecting a decrease of utility for betterserved subjects, Rawlsian Max-Min fairness accepts inequalities and thus does not requires decreasing utility of better-served subjects. So, Rawlsian Max-Min fairness is preferred in applications where perfect equality is not necessary, such as recommendation tasks, and it can also better preserve the overall model utility."),(0,s.kt)("h2",{id:"autodebias"},"AutoDebias"),(0,s.kt)("p",null,"AutoDebias is an automatic debiasing method for recommendation system based on meta learning, exploiting a small amount of uniform data to learn de-biasing parameters and using these parameters to guide the learning of the recommendation model."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"The working flow of AutoDebias, consists of three steps: (1) tentatively updating \ud835\udf03 to \ud835\udf03 \u2032 on the training data \ud835\udc37\ud835\udc47 with current \ud835\udf19 (black arrows); (2) updating \ud835\udf19 based on \ud835\udf03 \u2032 on the uniform data (blue arrows); (3) actually updating \ud835\udf03 with the updated \ud835\udf19 (black arrows).",src:i(45356).Z})),(0,s.kt)("p",null,"The working flow of AutoDebias, consists of three steps: (1) tentatively updating \ud835\udf03 to \ud835\udf03 \u2032 on the training data \ud835\udc37\ud835\udc47 with current \ud835\udf19 (black arrows); (2) updating \ud835\udf19 based on \ud835\udf03 \u2032 on the uniform data (blue arrows); (3) actually updating \ud835\udf03 with the updated \ud835\udf19 (black arrows)."))}p.isMDXComponent=!0},96183:function(e,t,i){t.Z=i.p+"assets/images/content-concepts-raw-bias-&-fairness-untitled-1-c0494b16fb2ef50b14cce3f94a2991c1.png"},16724:function(e,t,i){t.Z=i.p+"assets/images/content-concepts-raw-bias-&-fairness-untitled-2-783d9b3c06b9edb7a88c0c717f6e8d17.png"},64809:function(e,t,i){t.Z=i.p+"assets/images/content-concepts-raw-bias-&-fairness-untitled-3-b27bd256c9ce69e4b2b68cb103f314bc.png"},45356:function(e,t,i){t.Z=i.p+"assets/images/content-concepts-raw-bias-&-fairness-untitled-4-1de344d9d5f6cc9b44f273e17b564c6a.png"},78770:function(e,t,i){t.Z=i.p+"assets/images/content-concepts-raw-bias-&-fairness-untitled-64a535748137172862ffe40cdbfeede7.png"}}]);