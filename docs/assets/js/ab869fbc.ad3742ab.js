"use strict";(self.webpackChunkilumdoc=self.webpackChunkilumdoc||[]).push([[777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Production",sidebar_position:7},o=void 0,l={unversionedId:"production",id:"production",title:"Production",description:"For production environments, it's recommended to deploy all dependencies in separate namespaces.",source:"@site/docs/production.md",sourceDirName:".",slug:"/production",permalink:"/doc/production",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Production",sidebar_position:7},sidebar:"docSidebar",previous:{title:"API Reference",permalink:"/doc/api_ref"},next:{title:"Security",permalink:"/doc/security/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"MongoDB",id:"mongodb",level:3},{value:"Apache Kafka",id:"apache-kafka",level:3},{value:"MinIO",id:"minio",level:3},{value:"Security keys",id:"security-keys",level:2},{value:"Generate private key",id:"generate-private-key",level:3},{value:"Generate public key",id:"generate-public-key",level:3},{value:"ilum-livy-proxy",id:"ilum-livy-proxy",level:2},{value:"Jupyter",id:"jupyter",level:2},{value:"Apache Zeppelin",id:"apache-zeppelin",level:2},{value:"Apache Airflow",id:"apache-airflow",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For production environments, it's recommended to deploy all dependencies in separate namespaces."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The table below provides necessary prerequisites and related instructions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prerequisite"),(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("inlineCode",{parentName:"td"},"https://bitnami.com/stack/mongodb/helm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("inlineCode",{parentName:"td"},"https://bitnami.com/stack/kafka/helm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ObjectStorage"),(0,r.kt)("td",{parentName:"tr",align:null},"Refer to ",(0,r.kt)("inlineCode",{parentName:"td"},"https://min.io/docs/minio/kubernetes/upstream/operations/installation.html"))))),(0,r.kt)("p",null,"ilum-core"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install ilum-core --create-namespace -n ilum --set mongo.instances=<mongo uri> --set kafka.address=<kafka broker address> --set s3a.host=<s3 host> --set s3a.port=<s3 port> ilum/ilum-core\n")),(0,r.kt)("p",null,"ilum-ui"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install ilum-ui --create-namespace -n ilum ilum/ilum-ui\n")),(0,r.kt)("h3",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"Ilum employs MongoDB as its storage layer, preserving all data required between restarts within the MongoDB database.\nIlum automatically creates all necessary databases and collections during the startup process."),(0,r.kt)("h3",{id:"apache-kafka"},"Apache Kafka"),(0,r.kt)("p",null,"Apache Kafka serves as Ilum's communication layer, facilitating interaction between Ilum-Core and Spark jobs, as well as\nbetween different Ilum-Core instances when scaled. It is critical to ensure Apache Kafka brokers are accessible by both\nIlum-Core and Spark jobs, especially when Spark jobs are launched on a different Kubernetes cluster."),(0,r.kt)("p",null,"Ilum utilizes Kafka to carry out communication using several topics, all created during Ilum's startup. Therefore, users\ndon't need to manage these topics manually."),(0,r.kt)("h3",{id:"minio"},"MinIO"),(0,r.kt)("p",null,"Ilum uses MinIO as the storage layer for Spark application components. All files (including jars, configurations, data\nfiles) needed for the operation of Spark components (driver, executors) are stored and made available for download via\nMinIO."),(0,r.kt)("p",null,"MinIO implements the S3 interface, which also enables it to store input/output data."),(0,r.kt)("h2",{id:"security-keys"},"Security keys"),(0,r.kt)("p",null,"This application uses JSON Web Tokens (JWT) for authentication purposes. By default, the application employs an RSA key\npair, which is randomly generated at runtime, to sign these tokens."),(0,r.kt)("p",null,"In its standard configuration, the application creates a fresh RSA key pair each time it starts. This approach\nsimplifies local development and testing by automatically handling the key generation process. However, it must be\nemphasized that this approach is not suitable for a production environment."),(0,r.kt)("p",null,"The primary issue with using randomly generated keys in a production environment is the lack of persistence. Each time\nthe application restarts, it generates a new RSA key pair, invalidating all previously issued tokens. This could lead to\nan abrupt and unanticipated logout for all users, disrupting user experience and potentially leading to data loss."),(0,r.kt)("h3",{id:"generate-private-key"},"Generate private key"),(0,r.kt)("p",null,"For a production environment, a stable and secure key pair should be manually generated and used consistently. This\nensures that tokens remain valid across multiple application restarts, thus providing a consistent user experience."),(0,r.kt)("p",null,"You can generate an RSA key pair manually using tools like OpenSSL. A common command to generate a 2048-bit RSA private key is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openssl genpkey -algorithm RSA \\\n    -pkeyopt rsa_keygen_bits:2048 \\\n    -pkeyopt rsa_keygen_pubexp:65537 | \\\n  openssl pkcs8 -topk8 -nocrypt -outform pem > private-key.p8\n")),(0,r.kt)("p",null,"The contents of the private key should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsRnE83rm6BJya\nnTyzVqX0SG+D4zBjkyWsOmGG+CoDdgQ6Z8AaocmnjP1SbRykQsQSMf6SeW+fdpH+\nccmzuHe7pZIa2o2Mg8xbk/UszJDaPztwoQbUt/2gHi/rZP8cIVkquzhnN/yxrMls\n...\n-----END PRIVATE KEY-----\n")),(0,r.kt)("p",null,"In order to use private key as the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"security.jwt.privateKey"),", remove header and footer from the key."),(0,r.kt)("h3",{id:"generate-public-key"},"Generate public key"),(0,r.kt)("p",null,"To generate the corresponding public key, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"openssl pkey -pubout -inform pem -outform pem -in private-key.p8 -out public-key.spki\n")),(0,r.kt)("p",null,"The contents of the public key should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArEZxPN65ugScmp08s1al\n9Ehvg+MwY5MlrDphhvgqA3YEOmfAGqHJp4z9Um0cpELEEjH+knlvn3aR/nHJs7h3\nu6WSGtqNjIPMW5P1LMyQ2j87cKEG1Lf9oB4v62T/HCFZKrs4Zzf8sazJbMN3E/mJ\n...\n-----END PUBLIC KEY-----\n")),(0,r.kt)("p",null,"In order to use public key as the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"security.jwt.publicKey"),", remove header and footer from the key."),(0,r.kt)("h1",{id:"starter-kits"},"Starter Kits"),(0,r.kt)("p",null,"Ilum provides several starter kits to facilitate the integration and deployment of various services."),(0,r.kt)("h2",{id:"ilum-livy-proxy"},"ilum-livy-proxy"),(0,r.kt)("p",null,"To include the Ilum-Livy-Proxy service in your Ilum installation, you need to specify this during the installation\nprocess. Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ilum-livy-proxy.enabled=true")," flag to your installation command."),(0,r.kt)("h2",{id:"jupyter"},"Jupyter"),(0,r.kt)("p",null,"Please be aware, that Jupyter notebook is not bundled in ilum package by default. If you want to run this service, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ilum-jupyter.enabled=true")," to your installation command."),(0,r.kt)("p",null,"If you want to access the Jupyter UI, the best way to do it is by configuring an ingress or using the port-forward command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/ilum-jupyter 8888:8888")),(0,r.kt)("h2",{id:"apache-zeppelin"},"Apache Zeppelin"),(0,r.kt)("p",null,"Please be aware, that Zeppelin notebook is not bundled in ilum package by default. If you want to run this service, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set ilum-zeppelin.enabled=true")," to your installation command."),(0,r.kt)("p",null,"If you want to access the Zeppelin UI, the best way to do it is by configuring an ingress or using the port-forward command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/ilum-zeppelin 8080:8080")),(0,r.kt)("h2",{id:"apache-airflow"},"Apache Airflow"),(0,r.kt)("p",null,"Please be aware, that Airflow is not bundled in ilum package by default. If you want to run this service, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--set airflow.enabled=true")," to your installation command."),(0,r.kt)("p",null,"If you want to access the Airflow UI, the best way to do it is by configuring an ingress or using the port-forward command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward svc/ilum-webserver 8080:8080")))}d.isMDXComponent=!0}}]);