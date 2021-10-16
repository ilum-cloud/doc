<h1 align="center">
  <img src="logo.svg" width="224px"/><br/>
</h1>

> A fully manageable [Spark](https://github.com/apache/spark) cluster on [Kubernetes](https://github.com/kubernetes/kubernetes) with interactive sessions.

<p align="center">
<a href="https://github.com/ilum-cloud/ilum-core/releases/" target="_blank"><img src="https://img.shields.io/badge/version-3.1.2.6-blue?style=for-the-badge&logo=none" alt="ilum version" /></a>
<a href="https://spark.apache.org/releases/spark-release-3-1-2.html" target="_blank"><img src="https://img.shields.io/badge/Spark-3.1.2-red?style=for-the-badge&logo=apache-spark" alt="spark version" /></a>
<a href="https://github.com/kubernetes/kubernetes/releases/tag/v1.22.1" target="_blank"><img src="https://img.shields.io/badge/Kubernetes-1.22.1-blue?style=for-the-badge&logo=kubernetes" alt="kubernetes version" /></a>
</p>


## 📖 Project

Ilum is a software focused on providing interactive spark sessions manageable through REST API and web interface, independently of cluster manager type. With the many years of development, Ilum was enhanced with full integration between the S3 interface and OLAP datastore.

#### Spark Environment

Several years ago many organizations started to work on moving their Spark clusters into Kubernetes environment. Before 2018 running production ready Spark on K8s was [incredibly brave](https://github.com/apache-spark-on-k8s/spark).
With the release of [Spark 2.3](https://spark.apache.org/releases/spark-release-2-3-0.html) the K8s became a native cluster manager, in the same year we released the [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0).

From [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0) kubernetes grow into a default cluster manager within the Ilum environment, but a user can choose from any supported cluster managers listed below:

- Kubernetes
- Yarn
- Standalone

> 🔔 Please note: the `core`package is in a **private** repository

#### Features

- Spark Cluster management through API and web UI.
- Flexible deployment.
- Horizontally scalable.
- Simple and lightweight.
- Access to build in S3 compatible K8s storage.
- Access to build in OLAP datastore.

## ⚡️ Quick start

Ilum is supposed to be launched in a kubernetes environment.
It requires MongoDB, Apache Kafka and ObjectStorage to be present and configured as well.

### Prerequisites

- [Check the `mongo/README.md`](mongo/)
- [Check the `kafka/README.md`](kafka/)
- [Check the `os/README.md`](os/)

The best way to start with ilum is to install it with [helm](https://helm.sh/)

```bash
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install --create-namespace -n <k8s-namespace> -f https://ilum.cloud/release/latest/ilum-config.yaml --set image=ilum:3.1.2.6 --set mongo.uri=<mongo uri> --set kafka.address=<kafka broker address> ilum/core
```

That's all you need to know to start! 🎉

### 🐳 Quick start with docker and minikube

If you don't want to install Ilum to your system, feel free to use it on minikube.
```https://minikube.sigs.k8s.io/docs/start/```

Start minikube with docker driver:

```bash
minikube start --driver=docker --addons ingress
```
Add minikube IP to /etc/hosts:
```
minikube ip
add returned ip to /etc/hosts file as `<ip> minikube ilum.minikube`
```
To use local docker registry run given command before loading ilum docker image in terminal -- works only in current 
terminal session
```shell
eval $(minikube docker-env)
```
Then build docker image and use that image during helm deployment.

Existing instance of minikube cluster can be started/stopped many times, 
configured deployments should remain configured and running, use:
```shell
minikube start
minikube stop
```

> 🔔 Please note: the `core`package is in **private** repository

### MongoDB deployment

Same as in normal deployment on kubernetes.

### Apache Kafka deployment

Same as in normal deployment on kubernetes.

### ObjectStorage deployment

Same as in normal deployment on kubernetes.

### ilum-core deployment

```bash
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install --create-namespace -n <k8s-namespace> -f https://ilum.cloud/release/latest/values-minikube.yaml --set image=ilum:3.1.2.6 --set mongo.uri=<mongo uri> --set kafka.address=<kafka broker address> ilum/core
```

## Apache Spark job configuration

Spark jobs on kubernetes to be able to run, require some configurations to be performed.

While creating kubernetes cluster in `ilum`, default spark job configuration should be provided. It should contain
information which docker image should be used, where to store required files (jars, configuration), and all the other 
optional configuration that should be applied to all spark jobs launched on this cluster.

Such configuration should be specified as a part of `defaultApplicationConfig` during kubernetes cluster creation.

## Kubernetes namespace

To host spark components on the other namespace that the default one, use:
```shell
"spark.kubernetes.namespace": "<namespace-to-use>",
```

## Apache Spark job docker image

Different spark versions can be used to run different spark jobs. To achieve this docker image name should be set in 
a cluster/session configuration. For example:
```shell
"spark.kubernetes.container.image": "spark:version"
```

**Important!** Note that registry holding this image have to be reachable by nodes hosting `ilum-core` and 
spark components. It might be an issue when `ilum-core` is hosted on one kubernetes cluster, and spark components
are hosted on the another one.

## Ability to create kubernetes resources

In RBAC protected kubernetes clusters spark driver has to use a service account that has the rights to create required
kubernetes resources - pods, services etc.

**Important!** If spark components are hosted one the same kubernetes cluster and in the same namespace as the 
`ilum-core` then no actions are required. Default service account used in this namespace already has proper 
rule configured.

When other namespace to host spark components is used then it should contain service account with edit rights 
configured.

To do this, with kubernetes cluster to host spark components set as active, use:
```shell
kubectl create serviceaccount spark --namespace=<used-namespace>
kubectl create clusterrolebinding spark-role --clusterrole=edit --serviceaccount=<used-namespace>:spark --namespace=<used-namespace>
```

Then, these parameters should be added to default application config:
```shell
"spark.kubernetes.namespace": "<used-namespace>",
"spark.kubernetes.authenticate.driver.serviceAccountName": "spark"
```

## Some known issues

### ivy configuration issue

To get rid of ivy configuration problems, add such parameter to default application config:
```shell
"spark.driver.extraJavaOptions": "-Divy.cache.dir=/tmp -Divy.home=/tmp"
```

## ilum-manager deployment

### Prerequisites

- [Check the `mongo/README.md`](mongo/)
- [Check the `kafka/README.md`](kafka/)
- [Check the `os/README.md`](os/)
- [ilum-core](### ilum-core deployment)

#### ⚙️ Conciguration options

- ILUM_STAGE = demo/prod
- ILUM_DEBUG = true/false
- ILUM_BACKEND_API = https://ilum.minikube/ilum/api/dev/group
- ILUM_FRONTEND_URL = https://ilum.minikube/ilum/frontend/

#### Deploy ilum-manager

```bash
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install --create-namespace -n <k8s-namespace> -f https://ilum.cloud/release/latest/values-minikube.yaml --set image=ilum-manager:3.1.2.6 --set mongo.uri=<mongo uri> --set kafka.address=<kafka broker address> ilum/manager
```

