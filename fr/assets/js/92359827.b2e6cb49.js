(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),r=(n(0),n(155)),o={sidebar_position:2},l={unversionedId:"get-started/installation/custom-hardware/installation/iso",id:"get-started/installation/custom-hardware/installation/iso",isDocsHomePage:!1,title:"ISO Installation",description:"When you want to perform a clean installation by installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/iso.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/iso",permalink:"/fr/get-started/installation/custom-hardware/installation/iso",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/iso.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/fr/get-started/installation/custom-hardware/installation/overview"},next:{title:"Script Installation",permalink:"/fr/get-started/installation/custom-hardware/installation/script"}},s=[{value:"Get the ISO",id:"get-the-iso",children:[]},{value:"Burn the ISO in a USB",id:"burn-the-iso-in-a-usb",children:[]},{value:"Boot from ISO",id:"boot-from-iso",children:[]},{value:"Post-Installation",id:"post-installation",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you want to perform a clean installation by installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode."),Object(r.b)("h2",{id:"get-the-iso"},"Get the ISO"),Object(r.b)("p",null,"You can get the image downloading directly from ",Object(r.b)("a",{parentName:"p",href:"https://iso.dappnode.io/"},"DAppNodeISO")," or if you prefer you can ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dappnode/DAppNode_Installer"},"build it from the source"),"."),Object(r.b)("h2",{id:"burn-the-iso-in-a-usb"},"Burn the ISO in a USB"),Object(r.b)("p",null,"Burn the ISO to an USB stick. To do so we recommend using ",Object(r.b)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher")," for the OS with which you will prepare the USB to boot from your server and install DAppNode"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server")),Object(r.b)("p",null,"IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA, ALL EXISTING DATA WILL BE ERASED."),Object(r.b)("p",null,"Also, DAppNode is intended to run 24/7 so if you install it on a laptop or desktop machine and you turn it off, it will not stay synced."),Object(r.b)("h2",{id:"boot-from-iso"},"Boot from ISO"),Object(r.b)("p",null,"Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/VirtualBox_install.png"})),Object(r.b)("p",null,"Select a language."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_1.png"})),Object(r.b)("p",null,"Select a location."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_2.png"})),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_3.png"})),Object(r.b)("p",null,"Select a keyboard configuration."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_4.png"})),Object(r.b)("p",null,"Type a hostname. This is the name your machine will have on the network. It's not important."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_5.png"})),Object(r.b)("p",null,"Define a password for the user root."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_6.png"})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down this password, you will need it in case you need to access as root to the command line interface (cli) of DAppNode.")),Object(r.b)("p",null,"Select a username for your DAppNode and set a password."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_7.png"})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down this DAppNode username and password.")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_8.png"})),Object(r.b)("p",null,"Set up your time zone."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_9.png"})),Object(r.b)("p",null,"Partition disk configuration. On this guide we will use the second option ",Object(r.b)("strong",{parentName:"p"},"Partitioning method: ","[Guided - use entire disk and set up LVM]"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../../img/iso_install_10.png"})),Object(r.b)("p",null,"After choosing the disk, we need to define the partioning scheme. We will select ",Object(r.b)("strong",{parentName:"p"},"All files in one partition (recommended for new users)"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_11.png"})),Object(r.b)("p",null,"Confirm we will write the disk."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_12.png"})),Object(r.b)("p",null,"We want to use all the disk ont he partioning process. So we dont modificate the value."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_13.png"})),Object(r.b)("p",null,"Confirm we want to write the changes to disks."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_14.png"})),Object(r.b)("p",null,"The next decision depends on you. We recommend you choose 'Yes' because you don't have to confirm all the operations."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_15.png"})),Object(r.b)("p",null,"Install the grub."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_16.png"})),Object(r.b)("p",null,"Select the disk."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../../img/iso_install_17.png"})),Object(r.b)("p",null,"If you have an IP you should define here. Otherwise, leave the field blank."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../../img/iso_install_18.png"})),Object(r.b)("p",null,"You will see this message indicating you have finished this installation."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_19.png"})),Object(r.b)("p",null,"The machine will restart and you will see this screen."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"../../../../../img/iso_install_20.png"})),Object(r.b)("p",null,"Log in into the machine with the DAppNode username and password you chose earlier."),Object(r.b)("h2",{id:"post-installation"},"Post-Installation"),Object(r.b)("p",null,"Once the installation process has finished, DAppNode will try to automatically prepare the first access to your DAppNode on the next order:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/local-proxy"},"Local Proxy")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/wifi"},"Wifi")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#wireguard"},"Wireguard")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#openvpn"},"OpenVPN"))))}b.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);