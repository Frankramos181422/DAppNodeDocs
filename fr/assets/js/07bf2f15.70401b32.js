(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(155)),i={sidebar_position:1},s={unversionedId:"get-started/intro",id:"get-started/intro",isDocsHomePage:!1,title:"What is DAppNode?",description:"DAppNode is a simple FOSS platform for deploying and hosting DApps, P2P clients and blockchain nodes. A censorship-resistant tool built to help bringing the decentralized world everyone wants for themselves, their friends and family.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/get-started/intro.md",sourceDirName:"get-started",slug:"/get-started/intro",permalink:"/fr/get-started/intro",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/get-started/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Welcome to the DAppNode Documentation",permalink:"/fr/"},next:{title:"Introduction",permalink:"/fr/get-started/installation/introduction"}},c=[{value:"The problem",id:"the-problem",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"DAppNode is a simple ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Free_and_open-source_software"},"FOSS")," platform for deploying and hosting DApps, P2P clients and blockchain nodes. A censorship-resistant tool built to help bringing the decentralized world everyone wants for themselves, their friends and family."),Object(a.b)("p",null,"For the user, DAppNode takes the shape of a platform, hosted in a machine that this person owns, that allows them to deploy Decentralized Apps and Blockchain Nodes in their own machine and access them directly via a decentralized protocol without using any centralized gateways or gatekeepers."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"It has a DAppStore where the available Apps can be downloaded and installed in a couple of clicks")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"It has several connection options that allow the user to access their DAppNode securely from anywhere and from any device, their phones, laptops, even from other countries.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"It allows users to earn cryptocurrencies by participating in the maintenance, validation or resource sharing of certain decentralized networks."))),Object(a.b)("h2",{id:"the-problem"},"The problem"),Object(a.b)("p",null,"Most nodes for public blockchains nowadays have a degree of architectural or/and political centralization. The first refers to the number of machines a system is made of, and the second concerns the ownership of such machines."),Object(a.b)("p",null,"A very common case is to host a node in a Virtual Private Server (VPS). This puts your node in the hands of a highly centralized company like Digital Ocean or Amazon, which could block and censor your access. Moreover, they could be hosting different nodes in the same machine, architecturally reducing decentralization too. Your DAppNode gives you complete control over your nodes and benefits the network."),Object(a.b)("p",null,"Another common case in the Ethereum blockchain is to connect through a node owned by Infura. While Infura's work on providing infrastructure for the network is amiable and a necessity at this stage, we can see how the ownership of a majority of nodes by the same company is a centralizing factor."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"We, DAppNode, have set up to empower everyone, regardless of their technical ability, to be able to break free of any centralization and possibility of access censorship by running their own node and host their favourite DApps.")),Object(a.b)("p",null,"DAppNode connects users to the decentralized web and creates the infrastructure for DApps to run services 24x7 in a truly decentralized manner."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"You can start using DAppNode in two ways:")),Object(a.b)("p",null,"Either you can ",Object(a.b)("a",{parentName:"p",href:"https://install.dappnode.io"},"install DAppNode")," on any compatible hardware, or\nyou can acquire one of our ",Object(a.b)("a",{parentName:"p",href:"https://shop.dappnode.io"},"pre-installed DAppNode servers")," for the easiest and most convenient way of to get easy censorship-resistant access to your favorite DApps. With both you will have the ability to host your own nodes and also share its access with family and friends."))}l.isMDXComponent=!0}}]);