(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(155)),o={sidebar_position:2},l={unversionedId:"get-started/installation/arm-hardware/installation",id:"get-started/installation/arm-hardware/installation",isDocsHomePage:!1,title:"Installation",description:"Prepare and boot ISO",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/arm-hardware/installation.md",sourceDirName:"get-started/installation/arm-hardware",slug:"/get-started/installation/arm-hardware/installation",permalink:"/es/get-started/installation/arm-hardware/installation",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/arm-hardware/installation.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Hardware Recommendations",permalink:"/es/get-started/installation/arm-hardware/hardware-recommendations"},next:{title:"Overview",permalink:"/es/user-guide/overview"}},p=[{value:"Prepare and boot ISO",id:"prepare-and-boot-iso",children:[]},{value:"Basic Set up",id:"basic-set-up",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"prepare-and-boot-iso"},"Prepare and boot ISO"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the file ",Object(i.b)("inlineCode",{parentName:"p"},"DAppNodeARM-x.x.xx.img.gz/zip")," from ",Object(i.b)("a",{parentName:"p",href:"https://github.com/dappnode/DAppNode/releases/tag/v0.2.39"},"here"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Write the image into the microSD. To do that, there are different tools such as ",Object(i.b)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"Raspberry Pi imager")," and Rufus(for windows). In this example we used Raspberry Pi imager."))),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/arm_installation_1.png"})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Insert the microSD into the Raspberry Pi.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect the Raspberry Pi to a screen and a keyboard.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Switch on the Raspberry Pi and wait for the startup process."))),Object(i.b)("p",null,"You will see this screen."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"../../../../img/arm_installation_2.png"})),Object(i.b)("p",null,"The default credentials are.\nUser:\n",Object(i.b)("inlineCode",{parentName:"p"},"dappnode"),"\nPassword:\n",Object(i.b)("inlineCode",{parentName:"p"},"dappnodepi")),Object(i.b)("p",null,"Once you have logged in, you will see the next message:\n",Object(i.b)("inlineCode",{parentName:"p"},"If you want to add any additional partition or disk, do it now."),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Run 'sudo dappnodepi-install' command to install DAppNode when ready."),"\nConnect your raspberry to the internet.\nExecute ",Object(i.b)("inlineCode",{parentName:"p"},"sudo dappnodedepi-install")," to finalize the dappnode installation."),Object(i.b)("h2",{id:"basic-set-up"},"Basic Set up"),Object(i.b)("p",null,"In case you have installed DAppNode in a raspberry using a sd card and you want to use a ssd hard disk you should to mount docker in this ssd. To do this follow the next steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Stop Docker service\n",Object(i.b)("inlineCode",{parentName:"p"},"systemctl stop docker"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create a new mountpoint for docker data. As an example:\n",Object(i.b)("inlineCode",{parentName:"p"},"mkdir /data"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add your partition on the new device to ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/fstab"),". You can identify its UUID using the ",Object(i.b)("inlineCode",{parentName:"p"},"blkid")," tool. Make sure your device is properly partitioned first. Your line in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/fstab")," should look like this:\n",Object(i.b)("inlineCode",{parentName:"p"},"UUID=b311b983-bda6-4e9f-835c-266d40d64f07 /data/ ext4 defaults 0 0"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Mount your SSD drive\n",Object(i.b)("inlineCode",{parentName:"p"},"mount /data"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Move docker data to the mountpoint\n",Object(i.b)("inlineCode",{parentName:"p"},"mv /var/lib/docker/* /data/"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit Docker settings to use the alternative location. Edit ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," as follows:"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "data-root": "/data"\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Restart docker")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"systemctl start docker")))}s.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);