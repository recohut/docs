"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6764],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),m=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),g=m(t),p=r,_=g["".concat(l,".").concat(p)]||g[p]||d[p]||s;return t?i.createElement(_,o(o({ref:n},c),{},{components:t})):i.createElement(_,o({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=g;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var m=2;m<s;m++)o[m]=t[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},54907:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var i=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],a={},l="NGCF",m={unversionedId:"models/ngcf",id:"models/ngcf",title:"NGCF",description:"NGCF stands for Neural Graph Collaborative Filtering. This GNN-based approach follows basic operations inherited from the standard GCN to explore the high-order connectivity information. More specifically, NGCF stacks embedding layers and concatenates embeddings obtained in all layers to constitute the final embeddings.",source:"@site/docs/models/ngcf.md",sourceDirName:"models",slug:"/models/ngcf",permalink:"/docs/models/ngcf",editUrl:"https://github.com/recohut/docs/docs/docs/models/ngcf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NFM",permalink:"/docs/models/nfm"},next:{title:"PNN",permalink:"/docs/models/pnn"}},c=[{value:"Architecture",id:"architecture",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"PyTorch",id:"pytorch",children:[],level:3}],level:2},{value:"Links",id:"links",children:[],level:2}],d={toc:c};function g(e){var n=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,i.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ngcf"},"NGCF"),(0,s.kt)("p",null,"NGCF stands for Neural Graph Collaborative Filtering. This GNN-based approach follows basic operations inherited from the standard GCN to explore the high-order connectivity information. More specifically, NGCF stacks embedding layers and concatenates embeddings obtained in all layers to constitute the final embeddings."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"research paper")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.08108"},"Xiang Wang, Xiangnan He, Meng Wang, Fuli Feng, Tat-Seng Chua, \u201c",(0,s.kt)("em",{parentName:"a"},"Neural Graph Collaborative Filtering"),"\u201d. SIGIR, 2019.")),(0,s.kt)("blockquote",{parentName:"div"},(0,s.kt)("p",{parentName:"blockquote"},"Learning vector representations (aka. embeddings) of users and items lies at the core of modern recommender systems. Ranging from early matrix factorization to recently emerged deep learning based methods, existing efforts typically obtain a user\u2019s (or an item\u2019s) embedding by mapping from pre-existing features that describe the user (or the item), such as ID and attributes. We argue that an inherent drawback of such methods is that, the collaborative signal, which is latent in user-item interactions, is not encoded in the embedding process. As such, the resultant embeddings may not be sufficient to capture the collaborative filtering effect. In this work, we propose to integrate the user-item interactions \u2014 more specifically the bipartite graph structure \u2014 into the embedding process. We develop a new recommendation framework Neural Graph Collaborative Filtering (NGCF), which exploits the user-item graph structure by propagating embeddings on it. This leads to the expressive modeling of high-order connectivity in user-item graph, effectively injecting the collaborative signal into the embedding process in an explicit manner. We conduct extensive experiments on three public benchmarks, demonstrating significant improvements over several state-of-the-art models like HOPRec and Collaborative Memory Network. Further analysis verifies the importance of embedding propagation for learning better user and item representations, justifying the rationality and effectiveness of NGCF. - Wang et. al.")))),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"/img/content-models-raw-mp2-ngcf-untitled.png",src:t(32721).Z})),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("h3",{id:"pytorch"},"PyTorch"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"'''\nCreated on October 1, 2020\n\n@author: Tinglin Huang (huangtinglin@outlook.com)\n'''\nimport torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass NGCF(nn.Module):\n    def __init__(self, data_config, args_config, adj_mat):\n        super(NGCF, self).__init__()\n        self.n_users = data_config['n_users']\n        self.n_items = data_config['n_items']\n        self.adj_mat = adj_mat\n\n        self.decay = args_config.l2\n        self.emb_size = args_config.dim\n        self.context_hops = args_config.context_hops\n        self.mess_dropout = args_config.mess_dropout\n        self.mess_dropout_rate = args_config.mess_dropout_rate\n        self.edge_dropout = args_config.edge_dropout\n        self.edge_dropout_rate = args_config.edge_dropout_rate\n        self.pool = args_config.pool\n        self.n_negs = args_config.n_negs\n        self.ns = args_config.ns\n        self.device = torch.device(\"cuda:0\") if args_config.cuda else torch.device(\"cpu\")\n        self.K = args_config.K\n\n        \"\"\"\n        *********************************************************\n        Init the weight of user-item.\n        \"\"\"\n        self.embedding_dict, self.weight_dict = self.init_weight()\n\n        \"\"\"\n        *********************************************************\n        Get sparse adj.\n        \"\"\"\n        self.sparse_norm_adj = self._convert_sp_mat_to_sp_tensor(self.adj_mat).to(self.device)\n\n    def init_weight(self):\n        # xavier init\n        initializer = nn.init.xavier_uniform_\n\n        embedding_dict = nn.ParameterDict({\n            'user_emb': nn.Parameter(initializer(torch.empty(self.n_users,\n                                                 self.emb_size))),\n            'item_emb': nn.Parameter(initializer(torch.empty(self.n_items,\n                                                 self.emb_size)))\n        })\n\n        weight_dict = nn.ParameterDict()\n        layers = [self.emb_size] * (self.context_hops+1)\n        for k in range(self.context_hops):\n            weight_dict.update({'W_gc_%d'%k: nn.Parameter(initializer(torch.empty(layers[k],\n                                                                      layers[k+1])))})\n            weight_dict.update({'b_gc_%d'%k: nn.Parameter(initializer(torch.empty(1, layers[k+1])))})\n\n            weight_dict.update({'W_bi_%d'%k: nn.Parameter(initializer(torch.empty(layers[k],\n                                                                      layers[k+1])))})\n            weight_dict.update({'b_bi_%d'%k: nn.Parameter(initializer(torch.empty(1, layers[k+1])))})\n\n        return embedding_dict, weight_dict\n\n    def _convert_sp_mat_to_sp_tensor(self, X):\n        coo = X.tocoo()\n        i = torch.LongTensor([coo.row, coo.col])\n        v = torch.from_numpy(coo.data).float()\n        return torch.sparse.FloatTensor(i, v, coo.shape)\n\n    def sparse_dropout(self, x, rate, noise_shape):\n        random_tensor = 1 - rate\n        random_tensor += torch.rand(noise_shape).to(x.device)\n        dropout_mask = torch.floor(random_tensor).type(torch.bool)\n        i = x._indices()\n        v = x._values()\n\n        i = i[:, dropout_mask]\n        v = v[dropout_mask]\n\n        out = torch.sparse.FloatTensor(i, v, x.shape).to(x.device)\n        return out * (1. / (1 - rate))\n\n    def create_bpr_loss(self, user_gcn_emb, pos_gcn_embs, neg_gcn_embs):\n        batch_size = user_gcn_emb.shape[0]\n\n        u_e = self.pooling(user_gcn_emb)\n        pos_e = self.pooling(pos_gcn_embs)\n        neg_e = self.pooling(neg_gcn_embs.view(-1, neg_gcn_embs.shape[2], neg_gcn_embs.shape[3])).view(batch_size, self.K, -1)\n\n        pos_scores = torch.sum(torch.mul(u_e, pos_e), axis=1)\n        neg_scores = torch.sum(torch.mul(u_e.unsqueeze(dim=1), neg_e), axis=-1)  # [batch_size, K]\n\n        # mf_loss = -1 * torch.mean(nn.LogSigmoid()(pos_scores - neg_scores))\n        # mf_loss = torch.mean(nn.functional.softplus((neg_scores - pos_scores.unsqueeze(dim=1)).view(-1)))\n        mf_loss = torch.mean(torch.log(1+torch.exp(neg_scores - pos_scores.unsqueeze(dim=1)).sum(dim=1)))\n\n        # cul regularizer\n        regularize = (torch.norm(user_gcn_emb[:, 0, :]) ** 2\n                       + torch.norm(pos_gcn_embs[:, 0, :]) ** 2\n                       + torch.norm(neg_gcn_embs[:, :, 0, :]) ** 2) / 2  # take hop=0\n        emb_loss = self.decay * regularize / batch_size\n\n        return mf_loss + emb_loss, mf_loss, emb_loss\n\n    def rating(self, u_g_embeddings, pos_i_g_embeddings):\n        return torch.matmul(u_g_embeddings, pos_i_g_embeddings.t())\n\n    def gcn(self, edge_dropout=True, mess_dropout=True):\n        A_hat = self.sparse_dropout(self.sparse_norm_adj,\n                                    self.edge_dropout_rate,\n                                    self.sparse_norm_adj._nnz()) if edge_dropout else self.sparse_norm_adj\n\n        ego_embeddings = torch.cat([self.embedding_dict['user_emb'],\n                                    self.embedding_dict['item_emb']], 0)\n\n        all_embeddings = [ego_embeddings]\n\n        for k in range(self.context_hops):\n            side_embeddings = torch.sparse.mm(A_hat, ego_embeddings)\n\n            # transformed sum messages of neighbors.\n            sum_embeddings = torch.matmul(side_embeddings, self.weight_dict['W_gc_%d' % k]) \\\n                             + self.weight_dict['b_gc_%d' % k]\n\n            # bi messages of neighbors.\n            # element-wise product\n            bi_embeddings = torch.mul(ego_embeddings, side_embeddings)\n            # transformed bi messages of neighbors.\n            bi_embeddings = torch.matmul(bi_embeddings, self.weight_dict['W_bi_%d' % k]) \\\n                            + self.weight_dict['b_bi_%d' % k]\n\n            # non-linear activation.\n            ego_embeddings = nn.LeakyReLU(negative_slope=0.2)(sum_embeddings + bi_embeddings)\n\n            # message dropout.\n            if mess_dropout:\n                ego_embeddings = nn.Dropout(self.mess_dropout_rate)(ego_embeddings)\n\n            # normalize the distribution of embeddings.\n            norm_embeddings = F.normalize(ego_embeddings, p=2, dim=1)\n            all_embeddings += [norm_embeddings]\n\n        all_embeddings = torch.stack(all_embeddings, dim=1)  # [n_entity, n_hops+1, emb_size]\n        return all_embeddings[:self.n_users, :], all_embeddings[self.n_users:, :]\n\n    def generate(self, split=True):\n        user_gcn_emb, item_gcn_emb = self.gcn(edge_dropout=False, mess_dropout=False)\n        user_gcn_emb, item_gcn_emb = self.pooling(user_gcn_emb), self.pooling(item_gcn_emb)\n        if split:\n            return user_gcn_emb, item_gcn_emb\n        else:\n            return torch.cat([user_gcn_emb, item_gcn_emb], dim=0)\n\n    def negative_sampling(self, user_gcn_emb, item_gcn_emb, user, neg_candidates, pos_item):\n        batch_size = user.shape[0]\n        s_e, p_e = user_gcn_emb[user], item_gcn_emb[pos_item]  # [batch_size, n_hops+1, channel]\n        if self.pool != 'concat':\n            s_e = self.pooling(s_e).unsqueeze(dim=1)\n\n        \"\"\"positive mixing\"\"\"\n        seed = torch.rand(batch_size, 1, p_e.shape[1], 1).to(p_e.device)  # (0, 1)\n        n_e = item_gcn_emb[neg_candidates]  # [batch_size, n_negs, n_hops, channel]\n        n_e_ = seed * p_e.unsqueeze(dim=1) + (1 - seed) * n_e  # mixing\n\n        \"\"\"hop mixing\"\"\"\n        scores = (s_e.unsqueeze(dim=1) * n_e_).sum(dim=-1)  # [batch_size, n_negs, n_hops+1]\n        indices = torch.max(scores, dim=1)[1].detach()\n        neg_items_emb_ = n_e_.permute([0, 2, 1, 3])  # [batch_size, n_hops+1, n_negs, channel]\n        # [batch_size, n_hops+1, channel]\n        return neg_items_emb_[[[i] for i in range(batch_size)],\n                              range(neg_items_emb_.shape[1]), indices, :]\n\n    def pooling(self, embeddings):\n        # [-1, n_hops, channel]\n        if self.pool == 'mean':\n            return embeddings.mean(dim=1)\n        elif self.pool == 'sum':\n            return embeddings.sum(dim=1)\n        elif self.pool == 'concat':\n            return embeddings.view(embeddings.shape[0], -1)\n        else:  # final\n            return embeddings[:, -1, :]\n\n    def forward(self, batch):\n        user = batch['users']\n        pos_item = batch['pos_items']\n        neg_item = batch['neg_items']\n\n        user_gcn_emb, item_gcn_emb = self.gcn(edge_dropout=self.edge_dropout,\n                                              mess_dropout=self.mess_dropout)\n        pos_gcn_embs = item_gcn_emb[pos_item]\n\n        if self.ns == 'rns':  # n_negs = 1\n            neg_gcn_embs = item_gcn_emb[neg_item[:, :self.K]]\n        else:\n            neg_gcn_embs = []\n            for k in range(self.K):\n                neg_gcn_embs.append(self.negative_sampling(user_gcn_emb, item_gcn_emb,\n                                                           user, neg_item[:, k * self.n_negs: (k + 1) * self.n_negs],\n                                                           pos_item))\n            neg_gcn_embs = torch.stack(neg_gcn_embs, dim=1)\n\n        return self.create_bpr_loss(user_gcn_emb[user], pos_gcn_embs, neg_gcn_embs)\n")),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/xiangwang1223/neural_graph_collaborative_filtering"},"https://github.com/xiangwang1223/neural_graph_collaborative_filtering")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1905.08108.pdf"},"https://arxiv.org/pdf/1905.08108.pdf")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/huangtinglin/NGCF-PyTorch"},"https://github.com/huangtinglin/NGCF-PyTorch")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2108.06208v1"},"https://arxiv.org/abs/2108.06208v1")," ",(0,s.kt)("inlineCode",{parentName:"li"},"paper")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/jeongwhanchoi/LT-OCF"},"https://github.com/jeongwhanchoi/LT-OCF")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/newlei/LR-GCCF"},"https://github.com/newlei/LR-GCCF")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2001.10167"},"https://arxiv.org/abs/2001.10167")," ",(0,s.kt)("inlineCode",{parentName:"li"},"paper")," "),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2006.15516"},"https://arxiv.org/abs/2006.15516")," ",(0,s.kt)("inlineCode",{parentName:"li"},"paper")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Wenhui-Yu/LCFN"},"https://github.com/Wenhui-Yu/LCFN")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2011.02260"},"Graph Neural Networks in Recommender Systems: A Survey")," ",(0,s.kt)("inlineCode",{parentName:"li"},"paper")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://deeprs-tutorial.github.io/WWW_GNNs.pdf"},"https://deeprs-tutorial.github.io/WWW_GNNs.pdf")," ",(0,s.kt)("inlineCode",{parentName:"li"},"ppt")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/yazdotai/graph-networks"},"https://github.com/yazdotai/graph-networks")," ",(0,s.kt)("inlineCode",{parentName:"li"},"site")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Jhy1993/Awesome-GNN-Recommendation"},"https://github.com/Jhy1993/Awesome-GNN-Recommendation")," ",(0,s.kt)("inlineCode",{parentName:"li"},"site")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2002.02126"},"LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation")," ",(0,s.kt)("inlineCode",{parentName:"li"},"paper")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/kuandeng/LightGCN"},"LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/gusye1234/LightGCN-PyTorch"},"LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation")," ",(0,s.kt)("inlineCode",{parentName:"li"},"code"))))}g.isMDXComponent=!0},32721:function(e,n,t){n.Z=t.p+"assets/images/content-models-raw-mp2-ngcf-untitled-9f7004e5eefe214be364b531620e1c46.png"}}]);