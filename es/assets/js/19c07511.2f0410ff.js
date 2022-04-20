(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=i,d=p["".concat(o,".").concat(b)]||p[b]||h[b]||r;return n?a.a.createElement(d,s(s({ref:t},c),{},{components:n})):a.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(156)),o={},s={unversionedId:"user-guide/dapps/multiclient",id:"user-guide/dapps/multiclient",isDocsHomePage:!1,title:"Ethereum Consensus Layer (Eth 2.0) Multiclient",description:"DAppNode is a key piece of infrastructure decentralization. Our mission is to make running infrastructure easy for everyone, so we are now introducing multiple clients to validate the Ethereum Consensus Layer.",source:"@site/docs/user-guide/dapps/multiclient.md",sourceDirName:"user-guide/dapps",slug:"/user-guide/dapps/multiclient",permalink:"/es/user-guide/dapps/multiclient",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/dapps/multiclient.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Support View",permalink:"/es/user-guide/ui/support"},next:{title:"FAQ's",permalink:"/es/user-guide/support/faqs"}},l=[{value:"Current Situation",id:"current-situation",children:[{value:"Basics to start validating",id:"basics-to-start-validating",children:[]},{value:"Previously on Prater tesnet and currently on mainnet (NOT MULTICLIENT):",id:"previously-on-prater-tesnet-and-currently-on-mainnet-not-multiclient",children:[]},{value:"Currently on Prater (MULTICLIENT):",id:"currently-on-prater-multiclient",children:[]}]},{value:"What is the web3signer package and why is it required?",id:"what-is-the-web3signer-package-and-why-is-it-required",children:[]},{value:"1. Installing a client from scratch",id:"1-installing-a-client-from-scratch",children:[{value:"1.1 Teku",id:"11-teku",children:[]},{value:"1.2 Lighthouse",id:"12-lighthouse",children:[]},{value:"1.3 Prysm",id:"13-prysm",children:[]}]},{value:"2. Import the keystore files",id:"2-import-the-keystore-files",children:[]},{value:"3. Metrics and Checks",id:"3-metrics-and-checks",children:[{value:"3.1 Validator metrics",id:"31-validator-metrics",children:[]},{value:"3.2 Check process",id:"32-check-process",children:[]}]},{value:"Change from one client to another",id:"change-from-one-client-to-another",children:[{value:"Example of changing client",id:"example-of-changing-client",children:[]}]},{value:"Fast sync option",id:"fast-sync-option",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"DAppNode is a key piece of infrastructure decentralization. Our mission is to make running infrastructure easy for everyone, so we are now introducing multiple clients to validate the Ethereum Consensus Layer."),Object(r.b)("p",null,"In this document we will talk about the following chapters:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Current situation"),Object(r.b)("li",{parentName:"ul"},"Basics to start validating"),Object(r.b)("li",{parentName:"ul"},"Installing a consensus layer client"),Object(r.b)("li",{parentName:"ul"},"Migrating from one client to another")),Object(r.b)("h2",{id:"current-situation"},"Current Situation"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Status for Prater Testnet:")," Testing phase of the new multiclient setup. Objective is to get as much feedback before releasing to Mainnet."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Status for Mainnet:")," Validating on Eth Mainnet on a DAppNode is supported with Prysm only. "),Object(r.b)("h3",{id:"basics-to-start-validating"},"Basics to start validating"),Object(r.b)("p",null,"Assumptions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The user has generated a minimum of one keystore"),Object(r.b)("li",{parentName:"ul"},"A deposit of 32 ETH to the validator account has been made")),Object(r.b)("h3",{id:"previously-on-prater-tesnet-and-currently-on-mainnet-not-multiclient"},"Previously on Prater tesnet and currently on mainnet (NOT MULTICLIENT):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The user connects to their DAppNode via Wifi or VPN"),Object(r.b)("li",{parentName:"ol"},"Installs the Prysm package"),Object(r.b)("li",{parentName:"ol"},"Complete the onboarding process where he imports their keystore/s."),Object(r.b)("li",{parentName:"ol"},"Once the Prysm Beacon Chain is synced and the deposit phase is completed, the validator starts aggregating, attesting and proposing, generating rewards.")),Object(r.b)("h3",{id:"currently-on-prater-multiclient"},"Currently on Prater (MULTICLIENT):"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The user connects to their DAppNode via Wifi or VPN"),Object(r.b)("li",{parentName:"ol"},"Picks between their validator client of choice: Prysm, Lighthouse or Teku (Nimbus and Lodestar coming soon)"),Object(r.b)("li",{parentName:"ol"},"With the installation of any client, a 2nd package gets installed: ",Object(r.b)("inlineCode",{parentName:"li"},"Web3Signer"),". This package will hold the keys and avoid having them in two places at the same time"),Object(r.b)("li",{parentName:"ol"},"Import the keys into the Web3Signer via the UI of the package"),Object(r.b)("li",{parentName:"ol"},"Once the selected client's Beacon Chain is synced and the deposit phase is completed, the validator starts aggregating, attesting and proposing, generating rewards.")),Object(r.b)("h2",{id:"what-is-the-web3signer-package-and-why-is-it-required"},"What is the web3signer package and why is it required?"),Object(r.b)("p",null,"The Web3signer is a remote signer that can hold validation keys and communicate with different clients. It comes bundled with a UI that makes it easier to import keystores and slashing protection data.\nThe Web3signer package and its combined use with the client packages is the solution to making it easier and safer for DAppNode users to set up a validator and use multiple clients."),Object(r.b)("h2",{id:"1-installing-a-client-from-scratch"},"1. Installing a client from scratch"),Object(r.b)("p",null,"We suppose that you have generated your keystore files and completed a deposit already. Access your DAppNode via Wifi or VPN and go to the DAppStore and select your Consensus Layer Client of choice. "),Object(r.b)("p",null,"You can select some of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Teku"),Object(r.b)("li",{parentName:"ul"},"Lighthouse"),Object(r.b)("li",{parentName:"ul"},"Prysm")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test1.png"})),Object(r.b)("p",null,"Once you have installed a Ethereum Consensus Layer client, you need to set up the web3signer package, which was installed automatically when you installed one of the previous mentioned packages. In the web3signer package you'll decide which Consensus Layer client you want to use to validate."),Object(r.b)("h3",{id:"11-teku"},"1.1 Teku"),Object(r.b)("p",null,"Once you select the Teku package you will see the Package Information page, then click on the Install button."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_teku_1.png"})),Object(r.b)("p",null,"Fill out the other bits of information as needed:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_teku_2.png"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Graffiti"),": this is a message your validator writes on the blocks you have created,"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth1.x node URL"),": This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CHECKPOINT_SYNC_URL for fast sync"),": By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.\n(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth2 client"),": Select the client you want to use, in this case, Teku."),Object(r.b)("p",null,"Click on the submit button, now you have to wait some minutes until the package gets installed."),Object(r.b)("h3",{id:"12-lighthouse"},"1.2 Lighthouse"),Object(r.b)("p",null,"Once you select the Lighthouse package you will see the Package Information page, then click on the Install button."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_light_1.png"})),Object(r.b)("p",null,"Fill out the other bits of information as needed:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_light_2.png"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Graffiti"),": this is a message your validator writes on the blocks you have created,"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth1.x node URL"),": This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CHECKPOINT_SYNC_URL for fast sync"),": By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.\n(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth2 client"),": Select the client you want to use, in this case, Lightouse."),Object(r.b)("p",null,"Click on the submit button, now you have to wait some minutes until the package gets installed."),Object(r.b)("h3",{id:"13-prysm"},"1.3 Prysm"),Object(r.b)("p",null,"Once you select the Prysm package you will see the Package Information page, then click on the Install button."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_prysm_1.png"})),Object(r.b)("p",null,"Fill out the other bits of information as needed:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_prysm_2.png"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Graffiti"),": this is a message your validator writes on the blocks you have created,"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth1.x node URL"),": This is the prater testnet, you'll need a Ethereum Goerli testnet RPC endpoint"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CHECKPOINT_SYNC_URL for fast sync"),": By default, the package will start to sync from the genesis, if you paste here an URL your node will start to work immediately, and it will download all the chains in the background. Below you have a little guide how to get this url.\n(We recommend using this option because makes the client works faster. In case you don't set it up, you need to wait for the client to sync from scratch and that takes time.) Fast Sync option is explained at the bottom of this page."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Eth2 client"),": Select the client you want to use, in this case, Prysm."),Object(r.b)("p",null,"Click on the submit button, now you have to wait some minutes until the package gets installed."),Object(r.b)("h2",{id:"2-import-the-keystore-files"},"2. Import the keystore files"),Object(r.b)("p",null,"You will realise that 2 packages have been installed. The package you have selected and another one is called Web3Signer Prater. Click on the last one."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_web3signer_1.png"})),Object(r.b)("p",null,"Click on UI link, and you will be redirected to ",Object(r.b)("a",{parentName:"p",href:"http://ui.web3signer-prater.dappnode/?signer_url=http://web3signer.web3signer-prater.dappnode:9000"},"http://ui.web3signer-prater.dappnode/?signer_url=http://web3signer.web3signer-prater.dappnode:9000"),", and you will see something like this:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_web3signer_2.png"})),Object(r.b)("p",null,"Click on the import Keystores button:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_web3signer_3.png"})),Object(r.b)("p",null,"Select your keystore files, if this keystore has not been validated yet, it's the first time you import the keystores you don't need to import the slashing protection data. In another case, you need to import the slashing protection data or wait for 2 epochs (30 min) to avoid being slashed."),Object(r.b)("p",null,"When you select your keystore, you will be asked for the password you used when you created the keystore files during the keystore generation process."),Object(r.b)("p",null,"Finally, click on submit keystores."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_web3signer_4.png"})),Object(r.b)("h2",{id:"3-metrics-and-checks"},"3. Metrics and Checks"),Object(r.b)("p",null,"People who have running ethereum validators on DAppNode are used to using the Prysm UI dashboard, but that dashboard does not exist in this infrastructure anymore."),Object(r.b)("p",null,"You should install the DMS package to check the performance of your validator and the resources it using and the beaconcha web page to check your validator is attesting."),Object(r.b)("h3",{id:"31-validator-metrics"},"3.1 Validator metrics"),Object(r.b)("p",null,"Firstly, go to the dappstore and install the DMS package, ",Object(r.b)("a",{parentName:"p",href:"http://my.dappnode/#/installer/dms.dnp.dappnode.eth"},"http://my.dappnode/#/installer/dms.dnp.dappnode.eth"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/dms_package_1.png"})),Object(r.b)("p",null,"When the package is installed, go to Packages > DMS > click on the UI link (",Object(r.b)("a",{parentName:"p",href:"http://dms.dappnode/dashboards/"},"http://dms.dappnode/dashboards/"),"):"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/dms_package_2.png"})),Object(r.b)("h3",{id:"32-check-process"},"3.2 Check process"),Object(r.b)("h2",{id:"change-from-one-client-to-another"},"Change from one client to another"),Object(r.b)("p",null,"If you have installed and set up a validator and you want to change the client you are using for validating the recommended process would be the following one:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the client you want, wait until this client is synced to the head of the chain"),Object(r.b)("li",{parentName:"ul"},"Set up the web3signer package to work with this new client"),Object(r.b)("li",{parentName:"ul"},"Check it's working and delete, if you wish to do so, the previous client you have installed.")),Object(r.b)("h3",{id:"example-of-changing-client"},"Example of changing client"),Object(r.b)("p",null,"In this example we will change from Prysm to Teku. Firstly, we should go to the DAppStore and install the Teku package."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_teku_1.png"})),Object(r.b)("p",null,"You should fill the next configurations:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_teku_2.png"})),Object(r.b)("p",null,"Wait until this package is synced. When this happens, its time to go to the web3signer package, config section and change this parameter to the new client you want to use."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_change_1.png"})),Object(r.b)("p",null,"Change to the new client."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_change_2.png"})),Object(r.b)("h2",{id:"fast-sync-option"},"Fast sync option"),Object(r.b)("p",null,"Go to ",Object(r.b)("a",{parentName:"p",href:"https://infura.io/dashboard"},"https://infura.io/dashboard")," , click on create new project."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_infura_1.png"})),Object(r.b)("p",null,"Select Endpoints Prater:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"1000",src:"../../../img/multiclient_test_infura_2.png"})),Object(r.b)("p",null,"Then, copy the https url. This is the url you should paste in the field.\nIn this example, i should copy and paste this ",Object(r.b)("inlineCode",{parentName:"p"},"https://27Tg3BWDMSnd7sE4LLQt5jYwRVs:f6a18cd69f23267d1b5acacfc4fa37f8@eth2-beacon-prater.infura.io"),"."))}u.isMDXComponent=!0}}]);