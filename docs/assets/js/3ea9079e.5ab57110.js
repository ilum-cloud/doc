"use strict";(self.webpackChunkilumdoc=self.webpackChunkilumdoc||[]).push([[661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8279:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"What is Ilum?",sidebar_position:1,description:"Welcome to the official documentation for Ilum, your comprehensive solution for managing and monitoring Apache Spark clusters.",slug:"/"},i=void 0,l={unversionedId:"what-is-ilum",id:"what-is-ilum",title:"What is Ilum?",description:"Welcome to the official documentation for Ilum, your comprehensive solution for managing and monitoring Apache Spark clusters.",source:"@site/docs/what-is-ilum.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is Ilum?",sidebar_position:1,description:"Welcome to the official documentation for Ilum, your comprehensive solution for managing and monitoring Apache Spark clusters.",slug:"/"},sidebar:"docSidebar",next:{title:"Architecture",permalink:"/architecture/"}},s={},u=[{value:"Watch video",id:"watch-video",level:2},{value:"Features",id:"features",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Roadmap",id:"roadmap",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:a(257).Z,alt:"Ilum logo",title:"Ilum",width:"250",align:"right",class:"main-logo"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Spark cluster manager and monitoring tool."))),(0,r.kt)("p",null,"Welcome to the official documentation for Ilum, your comprehensive solution for managing and monitoring ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Spark")," clusters. If you've ever sought a tool that could seamlessly handle multiple Spark clusters, whether they are deployed on the cloud or on-premise, your search ends here. No matter if your Spark setup uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Yarn")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", Ilum simplifies your operations and brings them under one unified umbrella."),(0,r.kt)("p",null,"Ilum offers an interactive Spark session that can be managed through a ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API")," and a user-friendly web interface. This eliminates the need for executing commands via CLI or pouring over extensive logs to locate errors."),(0,r.kt)("p",null,"Moreover, Ilum sets a new standard in integrating Apache Spark with Kubernetes. It makes managing Spark jobs in Kubernetes as straightforward as possible, allowing you to connect to your Kubernetes cluster, submit Spark jobs, and monitor them with ease. In addition, you can effortlessly integrate Ilum with Apache Hadoop Yarn, making the tool versatile for various setups."),(0,r.kt)("p",null,"One of the significant advantages of Ilum is its ",(0,r.kt)("inlineCode",{parentName:"p"},"REST API")," that lets you interact with Spark jobs. This feature opens up the possibility of building applications based on Apache Spark that can respond to user requests, adding a new layer of interactivity to your data operations. Ilum is also compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"Jupyter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Zeppelin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Object Storage"),", expanding its scope of operations."),(0,r.kt)("p",null,"In essence, Ilum combines the capabilities of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Hadoop Yarn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Livy"),", providing a holistic solution to cloud-native transformation."),(0,r.kt)("p",null,"Given its integration with ",(0,r.kt)("inlineCode",{parentName:"p"},"Object Storage"),", Ilum presents itself as a modern alternative to ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Hadoop"),", offering a more scalable, cost-effective, and efficient data storage solution for managing and monitoring Apache Spark clusters."),(0,r.kt)("h2",{id:"watch-video"},"Watch video"),(0,r.kt)("p",{align:"center"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/j6U7eYr5-78",title:"Ilum Intro",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple Cluster Setup"),": Ilum allows you to create and manage your own Apache Spark cluster with just a few commands. It can be installed in a few minutes, and it comes with auto-configuration features based on your existing Kubernetes cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unified Multi-Cluster Management"),": Irrespective of whether your Spark clusters are deployed on the cloud or on-premise, Ilum provides a unified platform for managing them all."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": Ilum is horizontally scalable. This means you can start with one node and seamlessly scale up to hundreds as your requirements grow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Built-in S3 Compatible K8s Storage"),": Ilum provides built-in S3 compatible Kubernetes storage, allowing easy and flexible data storage solutions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interactive Spark Sessions"),": Ilum allows interaction with Spark jobs via REST API, enabling you to build applications that can respond to user requests in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Apache Hadoop Yarn Integration"),": Ilum can integrate seamlessly with Apache Hadoop Yarn, providing additional versatility."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Web Interface"),": Ilum comes with a user-friendly web interface for monitoring your Spark cluster and jobs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatibility with other tools"),": Ilum integrates seamlessly with Jupyter, Zeppelin and Object Storage, allowing for a wider range of operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Error Monitoring"),": Ilum provides a streamlined process for locating and addressing errors, removing the need to sift through extensive logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Migration Support"),": Ilum can aid in the migration from Apache Hadoop to Kubernetes, providing an efficient pathway for transitioning to cloud-native operations.")),(0,r.kt)("p",null,"Report your idea for a new feature ",(0,r.kt)("a",{parentName:"p",href:"https://roadmap.ilum.cloud/boards/feature-requests"},"here"),"!"),(0,r.kt)("img",{src:a(314).Z,alt:"Ilum",title:"Ilum",width:"450",align:"right",class:"img-border"}),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-Environment Deployment"),": Ilum can be deployed in a variety of environments, whether they are on-premises, in the cloud, or a hybrid of both. This makes it adaptable to the unique needs and infrastructure of different organizations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Avoiding Vendor Lock"),": Ilum is a standalone engine, meaning it's not tied to a specific cloud provider or infrastructure. This offers flexibility and avoids the risk of vendor lock-in, a concern with solutions like Databricks, which is closely tied to specific cloud providers. Cloudera can also lead to lock-in due to the significant integration and customization it often requires."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unified Multi-Cluster Management"),": Unlike Databricks and Cloudera, Ilum allows you to control several Spark clusters from one place, regardless of whether they're deployed in the cloud or on-premises. This makes managing multiple clusters simpler."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kubernetes and Hadoop Yarn Integration"),": Ilum is built with Kubernetes integration in mind, making it easy to run Spark on Kubernetes. While Databricks and Cloudera do support running Spark, they may not offer the same level of integration with Kubernetes. Ilum also integrates seamlessly with Apache Hadoop Yarn, providing flexibility based on your needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Migration Support"),": Ilum can aid in the migration from Apache Hadoop to Kubernetes, providing an efficient pathway for transitioning to cloud-native operations. This can be particularly advantageous if you're looking to move away from a tool like Cloudera."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatibility and Flexibility"),": Ilum's compatibility with both Kubernetes and Hadoop Yarn allows for flexibility in deployment and management of Apache Spark clusters. This is an advantage over some other tools that might not support both or may favor one over the other.")),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"Explore Ilum's future roadmap to discover our exciting upcoming features and integrations ",(0,r.kt)("a",{parentName:"p",href:"https://roadmap.ilum.cloud/roadmap"},"here"),"!"))}c.isMDXComponent=!0},314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/i1-a9ea802f5b38ce551a65f9497ab6fc8f.png"},257:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/logo-shape-d95aec48472fa6b64f4122a2f75022b8.png"}}]);