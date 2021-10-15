<h1 align="center">
  Ilum
</h1>

> A fully manageable [Spark](https://github.com/apache/spark) cluster on [Kubernetes](https://github.com/kubernetes/kubernetes) with interactive sessions.

## 📖 Project

Ilum is a software focused on providing interactive spark sessions manageable through REST API and web interface, independently of cluster manager type. With the many years of development, Ilum was enhanced with full integration between the S3 interface and OLAP datastore.

#### Spark Environment

Several years ago many organizations started to work on moving their Spark clusters into Kubernetes environment. Before 2018 running production ready Spark on K8s was [incredibly brave](https://github.com/apache-spark-on-k8s/spark).
With the release of [Spark 2.3](https://spark.apache.org/releases/spark-release-2-3-0.html) the K8s became a native cluster manager, in the same year we released the [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0).

From [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0) kubernetes grow into a default cluster manager within the Ilum environment, but a user can choose from any supported cluster managers listed below:

- Kubernetes
- Yarn
- Standalone
- Mesos

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

### 🐳 Quick start with docker and minikube

If you don't want to install Ilum to your system, feel free to use it on minikube.

```https://minikube.sigs.k8s.io/docs/start/```

```bash
helm install --create-namespace -n <k8s-namespace> -f conf.yaml --set image=ilum:2.0.0 --set mongo.uri=<mongo uri> --set kafka.address=<kafka broker address> ilum/core
```
