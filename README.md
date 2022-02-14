<h1 align="center">
  <img src="logo.svg" width="224px"/><br/>
</h1>


<p align="center">
<a href="https://github.com/ilum-cloud/ilum-core/releases/" target="_blank"><img src="https://img.shields.io/badge/version-3.1.2.7-blue?style=for-the-badge&logo=none" alt="ilum version" /></a>
<a href="https://spark.apache.org/releases/spark-release-3-1-2.html" target="_blank"><img src="https://img.shields.io/badge/Spark-3.1.2-red?style=for-the-badge&logo=apache-spark" alt="spark version" /></a>
<a href="https://github.com/kubernetes/kubernetes/releases/tag/v1.22.1" target="_blank"><img src="https://img.shields.io/badge/Kubernetes-1.22.1-blue?style=for-the-badge&logo=kubernetes" alt="kubernetes version" /></a>
</p>


## 📖 Project

> A fully manageable [Spark](https://github.com/apache/spark) cluster on [Kubernetes](https://github.com/kubernetes/kubernetes) with interactive sessions.

`Ilum` is a software focused on providing interactive Spark sessions manageable through REST API and web interface, independently of cluster manager type. With the many years of development, `Ilum` was enhanced with full integration between the S3 interface and OLAP datastore. 

### Spark Environment

Several years ago many organizations started to work on moving their Spark clusters into the Kubernetes environment. Before 2018 running production ready Spark on K8s was [incredibly brave](https://github.com/apache-spark-on-k8s/spark).
With the release of [Spark 2.3](https://spark.apache.org/releases/spark-release-2-3-0.html) the K8s became a native cluster manager, in the same year we released the [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0).

From [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0) Kubernetes grow into a default cluster manager within the `Ilum` environment, but a user can choose from any supported cluster managers listed below:

- Kubernetes
- Standalone

### Features

Thanks to `Ilum` you can easily manage Spark jobs run on Kubernetes cluster with web UI or by REST API:
- Flexible deployment with helm 
- Horizontally scalable - you can start using it when you have one node and continue when you have hundreds
- Simple and lightweight – can be installed in few minutes with auto configuration based on existing K8s cluster
- Access to build in S3 compatible K8s storage.
- Access to build in OLAP datastore.

#### Spark jobs

`Ilum` was introduced to make managing Spark jobs easy. It provides an API to launch, monitor and control them.
It was built with Kubernetes as a Spark containers manager in mind making Spark and Kubernetes integration trivial.

There are two main types of Spark jobs that can be run with `Ilum` help - `interactive` and `single`.

##### Interactive Spark jobs

The main idea behind interactive Spark jobs is to give a user a possibility to run consecutive Spark jobs without a long Spark application initialization time. It wraps Spark application logic into a long-running Spark job which is able to handle calculation requests immediately.

Long-running jobs can be scaled within a long-running jobs group which gives a possibility to run the multiple job instances at the same time. Groups can hold multiple jobs and jobs can run multiple job instances. This design creates a flexible tool for users to manipulate their applications and resources. 

Simple interactive job API requiring implementing only one method gives a gateway to every Spark feature:
```kotlin
trait Job {
  def run(sparkSession: SparkSession, config: Map[String, Any]): Option[String]
}
```

Spark session is shared between interactive jobs invocations makes sharing Spark state possible. All the Spark resources can be isolated as well by creating a new Spark session from the given one.

##### Single Spark jobs

Normal Spark jobs can be submitted with a usage of `Ilum` API as well. It makes it simple to launch your existing Spark applications on different environments without any changes to the Spark application logic. `Ilum` makes them easier 
to launch, monitor and stop.

#### Cluster managing

`Ilum` makes Spark cluster configuration easier. Once the cluster is configured it can be used for different jobs not depending either on their type or their amount. Cluster validation prevents users from making configuration mistakes.

At the moment two types of cluster are supported in `Ilum` - `kubernetes` and `local`.

##### Kubernetes

`Ilum` was introduced with an easy Spark and Kubernetes integration in mind. It is one of the core features of the `Ilum` application. It makes it simple to configure and launch Spark applications on Kubernetes.

Some default configuration has to be provided to create a link to an existing Kubernetes cluster, such as Kubernetes API URL and authentication parameters. Currently, user/password and certificate based authentication are supported.

Many Kubernetes clusters can be configured and managed by `Ilum` as long as they are reachable. It gives a possibility to create a HUB which can manage multiple Spark environments from the one place.

It should be used as a default cluster for running Spark applications in production.

For a detailed Spark application configuration for a given Kubernetes cluster check [spark job configuration](#spark-job-configuration) section.

##### Local

Local is a simple cluster implementation which runs Spark applications there, where `Ilum` core is deployed. That means it runs Spark applications either inside the `ilum-core` container when deployed on docker/Kubernetes, or on the current machine when deployed without usage of any orchestrator.

It should be really used only for testing purposes as it can use only a limited amount of resources.

Only the number of threads of an available ones should be provided to configure local cluster type. It will be used by Spark application to calculate the results. 

#### Scalability

`ilum-core` was created with having in mind making it able to scale. It gives a possibility to either increase or decrease `ilum` instances amount according to load.

`ilum-service` is completely stateless, which makes it able to recover all the existing state after the crash and easy to scale up and down.

#### High availability

`Ilum` service and all the required components support HA deployments. It is possible to configure `Ilum`, `MongoDB`, `Apache Kafka` and `MinIO` to provide a fully high availability environment.

## ⚡️ Quick start

`Ilum` is supposed to be launched in a Kubernetes environment.
It requires `MongoDB`, `Apache Kafka` and `ObjectStorage` to be present and configured as well.

The best way to start with `Ilum` is to install the All In One version with [helm](https://helm.sh/) which contains all dependencies in a single package.

- Example:

```bash
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install ilum-aio ilum/core
```

We recommend using a separate namespace for the installation 

```shell
helm install ilum-aio --create-namespace -n ilum ilum/core
```

That's all you need to know to start! 🎉

## Standard deployment

In production environments, it's best to deploy all dependencies in different namespaces.

### Prerequisites

To speed up the deployment we recommend the use of [helm](https://helm.sh/)

| Prerequisite  | Instruction                           |
| ------------- | ------------------------------------- |
| MongoDB       | [Check the `mongo/README.md`](mongo/) |
| Kafka         | [Check the `kafka/README.md`](kafka/) |
| ObjectStorage | [Check the `os/README.md`](os/)       |

#### MongoDB

`Ilum` uses `MongoDB` as a storage layer. All the data that needs to be saved between restarts are stored in the `MongoDB` database.

All the required databases and collections are created by default during `Ilum` start.

#### Apache Kafka

`Ilum` uses `Apache Kafka` as a communication layer between `ilum-core` and Spark jobs (also between `ilum-core` instances when scaled). That requires `Apache Kafka` brokers to be reachable by both `ilum-core` and Spark job -- especially when Spark jobs are launched on some different Kubernetes cluster, connectivity must be assured.

By default, communication is performed with usage of a few topics, which are created at the `Ilum` start, so the user doesn't have to bother managing them.

#### MinIO

`Ilum` uses `MinIO` as a Spark application component storage layer. All the files (jars, configuration, data files) that Spark components (driver, executors) use to work have to be stored and available for download.

`MinIO` implements `S3` interface which makes it possible to store input/output data there as well.

### Installation
The best way to start with `Ilum` is to install it with [helm](https://helm.sh/)

```bash
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install ilum-core --create-namespace -n <k8s-namespace> --set mongo.instances=<mongo uri> --set kafka.address=<kafka broker address> --set s3a.host=<s3 host> --set s3a.port=<s3 port> ilum
```

That's all you need to know to start! 🎉

### 🐳 Quick start with docker and minikube

If you don't want to install `Ilum` to your system, feel free to use it on minikube.

Start minikube with docker driver and install `Ilum`:

```bash
minikube start --driver=docker
helm repo add ilum https://ilum.cloud/release/latest/helm
helm repo update
helm install ilum-aio ilum/core
```

Existing instance of minikube cluster can be started/stopped many times, 
configured deployments should remain configured and running, use:

```shell
minikube start
minikube stop
```

## First time configuration

To check the status of installed pods use:

```shell
kubectl get pods
```

`ilum-core` pod needs to have status `running` .

Accessing `Ilum` backend can be done by using NodePort or through port forward:

```shell
kubectl port-forward svc/ilum-core-service 8080:80
```

Listing clusters:

```shell
curl 'http://localhost:8080/api/dev/cluster'
```

The first cluster is created during initial deployment. It's preconfigured to work with the K8s instance used by `Ilum`. 

To start the work with `Ilum` the scalable Spark job group needs to be created by adding the `jar` file with your application. For testing purposes the [ilum-job-example.jar](https://ilum.cloud/release/latest/ilum-job-example.jar) can be used. To create group the below curl can be used:

```shell
curl -XPOST 'http://localhost:8080/api/dev/group' \
	--form 'jars=@"/path/to/local/file/ilum-job-example.jar"' \
	--form 'scale="1"' \
	--form 'clusterName="default"' \
	--form 'name="example-group"'
```

As a result the Group ID will be displayed, it can be later on displayed by running:

```shell
curl http://localhost:8080/api/dev/group
```

To run a job and get a result the following curl can be executed, using Group ID as a path parameter:

```shell
curl -XPOST 'http://localhost:8080/api/dev/group/GROUP_ID/job' \
	--header 'Cache-Control: no-store' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	    "clazz": "com.ilum.job.example.ExampleJob",
	    "config": {
	        "parameter": "Welcome to ILUM"
	    }
	}'
```



## Additional configuration

### Apache Spark

#### Apache Spark job configuration

Spark jobs on Kubernetes to be able to run, require some configurations to be performed.

While creating Kubernetes cluster in `Ilum`, default Spark job configuration should be provided. It should contain information which docker image should be used, where to store required files (jars, configuration), and all the other optional configuration that should be applied to all Spark jobs launched on this cluster.

Such configuration should be specified as a part of `defaultApplicationConfig` during Kubernetes cluster creation.

#### Apache Spark job docker image

Different Spark versions can be used to run different Spark jobs. To achieve this docker image name should be set in a cluster/session configuration. For example:

```shell
"spark.kubernetes.container.image": "datamechanics/spark:3.1.1-hadoop-3.2.0-java-11-scala-2.12-python-3.8-latest"
```

Any Spark container image can be provided and used bym `Ilum`. The only requirement is the image to be reachable in an `Ilum` environment (this can be an issue when environment doesn't have an internet connection).

#### Jar, configuration resources storage

`MinIO` is used by `Ilum` as a S3 file storage. Some other S3 compatible file system can be used as well, but at the moment `MinIO` is the quickest and the most advanced way to have file storage reachable by both `ilum-service` and Spark drivers/executors.

Spark job resources, such as jar or configuration files have to be uploaded to some file storage by `ilum-service` and downloaded by Spark components during Spark job initialization.

To make Spark job aware of this file storage, some parameters must be provided during `Ilum` Kubernetes cluster creation.

Below required parameters with some default values (assuming `spark-jars` is the name of default Spark resources bucket) are listed:
```shell
"spark.kubernetes.file.upload.path": "s3a://spark-jars/ilum-ilum",
"spark.hadoop.fs.s3a.impl": "org.apache.hadoop.fs.s3a.S3AFileSystem",
"spark.hadoop.fs.s3a.bucket.spark-jars.host": "minio.minio.svc.cluster.local",
"spark.hadoop.fs.s3a.bucket.spark-jars.endpoint": minio service ClusterIP with 9000 port,
"spark.hadoop.fs.s3a.bucket.spark-jars.access.key": "minio-access-key",
"spark.hadoop.fs.s3a.bucket.spark-jars.secret.key": "minio-secret-key",
"spark.hadoop.fs.s3a.bucket.spark-jars.connection.ssl.enabled": "false",
"spark.hadoop.fs.s3a.bucket.spark-jars.fast.upload": "true"
```
**Important!** Note that access configuration is set here only for a default `spark-jars` bucket. Each parameter
followed by `bucket.<bucket name>` will apply only for a given bucket. Such configuration allows Spark job to use
multiple S3 buckets at the same time. At the moment only `fs.s3a.impl` cannot be set for a particular bucket.

### Kubernetes

#### Kubernetes namespace

To host Spark components on the other namespace that the default one, use:
```shell
"spark.kubernetes.namespace": "<namespace-to-use>",
```

#### Ability to create Kubernetes resources

In RBAC protected Kubernetes clusters Spark drivers have to use a service account that has the rights to create required Kubernetes resources - pods, services etc.

**Important!** If Spark components are hosted one the same Kubernetes cluster and in the same namespace as the `ilum-core` then no actions are required. Default service account used in this namespace already has proper rules configured.

When another namespace to host Spark components is used then it should contain a service account with edit rights configured.

To do this, with Kubernetes cluster to host Spark components set as active, use:
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

### Ivy configuration issue

To get rid of ivy configuration problems, add such parameter to default application config:
```shell
"spark.driver.extraJavaOptions": "-Divy.cache.dir=/tmp -Divy.home=/tmp"
```
