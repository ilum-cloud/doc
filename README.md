<h1 align="center">
  Ilum
</h1>

> A fully manageable [Spark](https://github.com/apache/spark) cluster on [Kubernetes](https://github.com/kubernetes/kubernetes) with interactive sessions.

## 📖 Project

Ilum is a software focused on providing interactive spark sessions manageable through REST API and web interface, independently of cluster manager type. With the many years of development, Ilum was enhanced with full integration between the S3 interface and OLAP datastore.


```bash
helm install --create-namespace -n <k8s-namespace> -f conf.yaml --set image=ilum:2.0.0 --set mongo.uri=<mongo uri> --set kafka.address=<kafka broker address> ilum/core
```
