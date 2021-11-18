(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||a;return n?o.a.createElement(m,u(u({ref:t},c),{},{components:n})):o.a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(155)),i={sidebar_position:1},u={unversionedId:"user-guide/ui/recommended-set-ups/auto-updates",id:"user-guide/ui/recommended-set-ups/auto-updates",isDocsHomePage:!1,title:"Auto-Updates",description:"We recommend having activated the auto-updates, at least for the System Packages. If you activate this option, when your DAppNode detect there is a new version, the update will be done after 24 hours later. This is valid for non-major updates, in which an admin intervention will always be needed.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/auto-updates.md",sourceDirName:"user-guide/ui/recommended-set-ups",slug:"/user-guide/ui/recommended-set-ups/auto-updates",permalink:"/fr/user-guide/ui/recommended-set-ups/auto-updates",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/recommended-set-ups/auto-updates.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Select a type of Client",permalink:"/fr/user-guide/ui/initial-configurations/select-a-client"},next:{title:"Add VPN Devices",permalink:"/fr/user-guide/ui/recommended-set-ups/add-vpn-devices"}},s=[{value:"Turn off the auto-updates",id:"turn-off-the-auto-updates",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend having activated the auto-updates, at least for the System Packages. If you activate this option, when your DAppNode detect there is a new version, the update will be done after 24 hours later. This is valid for non-major updates, in which an admin intervention will always be needed."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/system_view_auto-updates.png"})),Object(a.b)("p",null,"The packages that are not system packages, like Prysm, geth, bitcoin, bee, etc. If there is an update of the official application, the package with this version will release for DAppNode several days later because we have to test this new version before releasing the package to the DAppStore."),Object(a.b)("p",null,"You should go to System Auto updates and click on the button that is on the ",Object(a.b)("strong",{parentName:"p"},"Enabled")," button on the right side."),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/auto-updates-on.png"})),Object(a.b)("h2",{id:"turn-off-the-auto-updates"},"Turn off the auto-updates"),Object(a.b)("p",null,"In case you don't want to activate the auto-updates, you have to see something like:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"../../../../img/auto-updates-off.png"})))}p.isMDXComponent=!0}}]);