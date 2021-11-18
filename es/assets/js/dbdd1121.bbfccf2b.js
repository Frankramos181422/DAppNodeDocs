(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(155)),c={sidebar_position:3},i={unversionedId:"user-guide/ui/recommended-set-ups/backup-functionality",id:"user-guide/ui/recommended-set-ups/backup-functionality",isDocsHomePage:!1,title:"Backup Functionality",description:"What is a backup and why is important to do regular backups?",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/backup-functionality.md",sourceDirName:"user-guide/ui/recommended-set-ups",slug:"/user-guide/ui/recommended-set-ups/backup-functionality",permalink:"/es/user-guide/ui/recommended-set-ups/backup-functionality",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/backup-functionality.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Add VPN Devices",permalink:"/es/user-guide/ui/recommended-set-ups/add-vpn-devices"},next:{title:"Add IPFS Peers",permalink:"/es/user-guide/ui/recommended-set-ups/add-ipfs-peers"}},u=[{value:"What is a backup and why is important to do regular backups?",id:"what-is-a-backup-and-why-is-important-to-do-regular-backups",children:[]},{value:"How to do a backup?",id:"how-to-do-a-backup",children:[]},{value:"How to restore your data from a backup",id:"how-to-restore-your-data-from-a-backup",children:[]}],s={toc:u};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-a-backup-and-why-is-important-to-do-regular-backups"},"What is a backup and why is important to do regular backups?"),Object(r.b)("p",null,"When you make a backup of a package on DAppNode, you will download a compressed file that contains the sensitive data of the package, this information depends on the package. Usually, this information is relative to keys or some kind of identification."),Object(r.b)("p",null,"It's important making backups of the important packages because in case the data is corrupted, the DAppNode machine is broken, or any catastrophe. If you have a backup, you will not have a problem to back to the situation before the catastrophe."),Object(r.b)("p",null,"We recommend to do backups regularly, and always if there is an important update, before and after."),Object(r.b)("h2",{id:"how-to-do-a-backup"},"How to do a backup?"),Object(r.b)("p",null,"The DAppNode user interface let you to do a backup of the package you want on a easy way.\nWe will show how to do it step by step:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Firstly, you need to go to Packages view. Selecting the Packages item on the left menu.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_1.png"})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Select one package that have sensitive information. For example, bee package. Click on the name of the package you want to do the backup, and select the ",Object(r.b)("strong",{parentName:"li"},"Backup")," tab.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_2.png"})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Backup now")," button.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_3.png"})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"You will see a pop up where you can choose where to store the compressed file with your backup file.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_4.png"})),Object(r.b)("p",null,"And ",Object(r.b)("strong",{parentName:"p"},"that's all"),", you have a backup that package, in this example I would have a backup of my bee package."),Object(r.b)("h2",{id:"how-to-restore-your-data-from-a-backup"},"How to restore your data from a backup"),Object(r.b)("p",null,"Once you have learnt how to do a backup, it's so important know how to use this backup file to restore your configuration."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Bee package is so because when you start the package first time, internally it creates an ethereum address, so if you don't save these keys and address in someplace you can't recover the access to that created address, in other packages like Prysm you could set up the package as before if you have the 24 words, but you had to set up the package, UI, etc. What we want you to say is every package works differently. But bee package is a good example to release how important is to do backups of your important packages.")),Object(r.b)("p",null,"Following the same example above, let's imagine that my be package crashed and all its data is damaged. I could set up my package the same way before only if I did a backup."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to the view of the package, in this case, Packages > Bee > Backup and click on the ",Object(r.b)("strong",{parentName:"li"},"Restore")," button:")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_5.png"})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"It will appear a pop up asking you select your backup file, you have to select the same compressed file you download when you do the backup, as simple as that.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../img/backup-functionality_6.png"})),Object(r.b)("p",null,"After this two steps, you would have restore your package."))}p.isMDXComponent=!0},155:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(a),d=o,m=l["".concat(c,".").concat(d)]||l[d]||b[d]||r;return a?n.a.createElement(m,i(i({ref:t},s),{},{components:a})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);