<h1 align="center">
  <a href="https://ilum.cloud" target="_blank"><img src="logo.svg" width="224px" alt="Ilum"/></a><br/>
</h1>


<p align="center">
<a href="https://roadmap.ilum.cloud/updates" target="_blank"><img src="https://img.shields.io/badge/version-6.0.0-blue?style=for-the-badge&logo=none" alt="ilum version" /></a>
<a href="https://spark.apache.org/releases/spark-release-3-4-1.html" target="_blank"><img src="https://img.shields.io/badge/Spark-3.4.1-red?style=for-the-badge&logo=apache-spark" alt="spark version" /></a>
<a href="https://github.com/kubernetes/kubernetes/releases/tag/v1.27.5" target="_blank"><img src="https://img.shields.io/badge/Kubernetes-1.27.5-blue?style=for-the-badge&logo=kubernetes" alt="kubernetes version" /></a>
</p>

> [!IMPORTANT]
> The documentation was moved to [Ilum Official Doc](https://ilum.cloud/docs/)

## 📖 Project

> A fully manageable [Spark](https://github.com/apache/spark) cluster on [Kubernetes](https://github.com/kubernetes/kubernetes) with interactive sessions.

`Ilum` is a powerful software designed to manage interactive Spark sessions through REST API and web interface, regardless of the cluster manager type. With full S3 interface integration, `Ilum` makes it easy to manage Spark jobs on Kubernetes clusters with web UI or REST API.

Check [Quick Start](#%EF%B8%8F-quick-start) section for the installation details.

`Ilum` provides a fully manageable Spark cluster on Kubernetes with interactive sessions. For more information on getting started, visit the [Ilum Blog](https://ilum.cloud/blog/).

### Spark Environment

Several years ago many organizations started to work on moving their Spark clusters into the Kubernetes environment. Before 2018 running production ready Spark on K8s was [incredibly brave](https://github.com/apache-spark-on-k8s/spark).
With the release of [Spark 2.3](https://spark.apache.org/releases/spark-release-2-3-0.html) the K8s became a native cluster manager, in the same year we released the [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0).

From [Ilum 2.0](https://github.com/ilum-cloud/ilum-core/releases/tag/ilum-2.0.0) Kubernetes grow into a default cluster manager within the `Ilum` environment, but a user can choose from any supported cluster managers listed below:

- Kubernetes
- Yarn
- Standalone

### Features

Thanks to `Ilum` you can easily manage Spark jobs run on Kubernetes cluster with web UI or by REST API:
- Flexible deployment with helm
- Horizontally scalable - you can start using it when you have one node and continue when you have hundreds
- Simple and lightweight – can be installed in few minutes with auto configuration based on existing K8s cluster
- Access to build in S3 compatible K8s storage.

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

To use `Ilum` job API, add it to your project with some dependency managers, such as Maven or Gradle.

###### Maven

```xml
<dependency>
  <groupId>cloud.ilum</groupId>
  <artifactId>ilum-job-api</artifactId>
  <version>{ilum-version}</version>
</dependency>
```

###### Gradle

```groovy
dependencies {
    implementation 'cloud.ilum:ilum-job-api:<ilum-version>'
}
```

##### Code Execution Mode

Users can run live code within an existing interactive job similar to the spark-shell.
Instructions can be sent, calculated immediately and returned. It is possible to use every spark feature, as the spark itself is exposed to users with some predefined functions and variables.
You can do live coding with spark jobs running on the kubernetes cluster, which allows calculating even substantial data sets.

##### Single Spark jobs

Normal Spark jobs can be submitted with a usage of `Ilum` API as well. It makes it simple to launch your existing Spark applications on different environments without any changes to the Spark application logic. `Ilum` makes them easier
to launch, monitor and stop.

### Communication Types

`ilum` supports two communication types between spark jobs and `ilum-core`. Users can choose either `Apache Kafka` or
`gRPC`.

#### Apache Kafka communication

Communication with the usage of `Apache Kafka` supports all `ilum` features, such as scalability and HA. All events are exchanged by auto-created topics with usage of `Apache Kafka` brokers.

#### gRPC communication (default)

`gRPC` as a communication type is also supported. If the user wants to use a simpler deployment method, he can use `gRPC`
mode to omit `Apache Kafka` during installation. `gRPC` creates direct connections between `ilum-core` and spark jobs,
so there is no need to have a separate message broker.

One of the disadvantages is that, using `gRPC` causes that `ilum-core` is not HA. The current implementation doesn't
support spreading subscriptions and requests dynamically between many instances of `ilum-core`. You can scale
`ilum-core`, but all the existing spark jobs will keep talking with only the same `ilum-core` instances.

#### Cluster types

`Ilum` makes Spark cluster configuration easier. Once the cluster is configured it can be used for different jobs not depending either on their type or their amount. Cluster validation prevents users from making configuration mistakes.

At the moment, we support three types of clusters in `Ilum` - `kubernetes`, `yarn` and `local`.

##### Kubernetes

`Ilum` was introduced with an easy Spark and Kubernetes integration in mind. It is one of the core features of the `Ilum` application. It makes it simple to configure and launch Spark applications on Kubernetes.

Some default configuration has to be provided to create a link to an existing Kubernetes cluster, such as Kubernetes API URL and authentication parameters. Currently, user/password and certificate based authentication are supported.

Many Kubernetes clusters can be configured and managed by `Ilum` as long as they are reachable. It gives a possibility to create a HUB which can manage multiple Spark environments from the one place.

It should be used as a default cluster for running Spark applications in production.

For a detailed Spark application configuration for a given Kubernetes cluster check [spark job configuration](#apache-spark-job-configuration) section.

##### Yarn

`Ilum` also supports well known `Apache Yarn` cluster. It is easy configurable with `yarn` configuration files that can
be found in your `yarn` installation.

For a detailed spark application configuration for a given kubernetes cluster check
[spark job on yarn configuration](#spark-job-on-yarn-configuration) section.

##### Local

Local is a simple cluster implementation which runs Spark applications there, where `ilum-core` is deployed. That means it runs Spark applications either inside the `ilum-core` container when deployed on docker/Kubernetes, or on the current machine when deployed without usage of any orchestrator.

It should be really used only for testing purposes as it can use only a limited amount of resources.

Only the number of threads of an available ones should be provided to configure local cluster type. It will be used by Spark application to calculate the results.

#### Scalability

`ilum-core` was created with having in mind making it able to scale. It gives a possibility to either increase or decrease `Ilum` instances amount according to load.

`ilum-core` is completely stateless, which makes it able to recover all the existing state after the crash and easy to scale up and down.

#### High availability

`ilum-core` and all the required components support HA deployments. It is possible to configure `Ilum`, `MongoDB`, `Apache Kafka` and `MinIO` to provide a fully high availability environment.

**Important!** Note that HA deployment forces the use of Apache Kafka as the communication type. Using gRPC makes ilum
  deployment not HA.

#### Security

ilum delivers a simple mechanism to secure access to the ilum-ui web console. It allows setting the default admin username and password during the deployment. At the moment only access to ilum-ui web console is secured.

## ⚡️ Quick start

`Ilum` is supposed to be launched in a Kubernetes environment.
It requires `MongoDB`, `Apache Kafka` and `ObjectStorage` to be present and configured as well.

The best way to start with `Ilum` is to install the All In One version with [helm](https://helm.sh/) which contains all dependencies in a single package.
You can do it within your existing kubernetes environment or play with [minikube](#-quick-start-with-docker-and-minikube)

- Example:

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum ilum/ilum --devel
$ kubectl port-forward svc/ilum-ui 9777:9777
```

Visit `localhost:9777` to reach an `ilum-ui`. (admin/admin as default credentials)

We recommend using a separate namespace for the installation in the production environment

```bash
$ helm install ilum --create-namespace -n ilum ilum/ilum
```

That's all you need to know to start! 🎉

## Standard deployment

In production environments, it's best to deploy all dependencies in different namespaces.

### Prerequisites

To speed up the deployment we recommend the use of [helm](https://helm.sh/)

| Prerequisite  | Instruction                                    |
|---------------|------------------------------------------------|
| MongoDB       | [Check the `mongo/README.md`](mongo/README.md) |
| Kafka         | [Check the `kafka/README.md`](kafka/README.md) |
| ObjectStorage | [Check the `os/README.md`](os/README.md)       |

#### MongoDB

`Ilum` uses `MongoDB` as a storage layer. All the data that needs to be saved between restarts are stored in the `MongoDB` database.

All the required databases and collections are created by default during `Ilum` start.

#### Apache Kafka

`Ilum` uses `Apache Kafka` as a communication layer between `ilum-core` and Spark jobs (also between `ilum-core` instances when scaled). That requires `Apache Kafka` brokers to be reachable by both `ilum-core` and Spark job -- especially when Spark jobs are launched on some different Kubernetes cluster, connectivity must be assured.

With Kafka, communication is performed with usage of a few topics, which are created at the `Ilum` start, so the user doesn't have to bother managing them.

#### MinIO

`Ilum` uses `MinIO` as a Spark application component storage layer. All the files (jars, configuration, data files) that Spark components (driver, executors) use to work have to be stored and available for download.

`MinIO` implements `S3` interface which makes it possible to store input/output data there as well.

### Installation

#### Ilum Core

The best way to start with `ilum-core` is to install it with [helm](https://helm.sh/)

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm repo update
$ helm install ilum-core --create-namespace -n <k8s-namespace> --set mongo.instances=<mongo uri> --set kafka.address=<kafka broker address> --set s3a.host=<s3 host> --set s3a.port=<s3 port> ilum/ilum-core
```

#### Ilum UI

The best way to start with `ilum-ui` is to install it with [helm](https://helm.sh/)

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm repo update
$ helm install ilum-ui --create-namespace -n <k8s-namespace> ilum/ilum-ui
```

That's all you need to know to start! 🎉

### 🐳 Quick start with docker and minikube

If you don't want to install `Ilum` to your system, feel free to use it on minikube.

Start minikube with docker driver and install `Ilum`:

```bash
$ minikube start --cpus 4 --memory 8192 --addons metrics-server
```

Install `Ilum` in the same way as in normal `Kubernetes` deployment. Check [Quick Start](#%EF%B8%8F-quick-start) section for details.

Existing instance of minikube cluster can be started/stopped many times,
configured deployments should remain configured and running, use:

```bash
$ minikube start
$ minikube stop
```

## First time configuration

To check the status of installed pods use:

```bash
$ kubectl get pods
```

`ilum-core` pod needs to have status `running` .

Accessing `ilum-core` can be done by using NodePort or through port forward:

```bash
$ kubectl port-forward svc/ilum-core 9888:9888
```

Listing clusters:

```bash
$ curl 'http://localhost:9888/api/dev/reactive/cluster'
```

The first cluster is created during initial deployment. It's preconfigured to work with the K8s instance used by `Ilum`.

To start the work with `Ilum` the scalable Spark job group needs to be created by adding the `jar` file with your application. For testing purposes the [ilum-job-example.jar](https://ilum.cloud/release/latest/ilum-job-example.jar) can be used. To create group the below curl can be used:

```bash
$ curl -XPOST 'http://localhost:9888/api/dev/reactive/group' \
	--form 'jars=@"/path/to/local/file/ilum-job-example.jar"' \
	--form 'scale="1"' \
	--form 'clusterName="default"' \
	--form 'name="example-group"'
```

As a result the Group ID will be displayed, it can be later on displayed by running:

```bash
$ curl http://localhost:9888/api/dev/reactive/group
```

To run a job and get a result the following curl can be executed, using Group ID as a path parameter:

```bash
$ curl -XPOST 'http://localhost:9888/api/dev/reactive/group/GROUP_ID/job' \
	--header 'Cache-Control: no-store' \
	--header 'Content-Type: application/json' \
	--data-raw '{
	    "clazz": "cloud.ilum.job.example.ExampleJob",
	    "config": {
	        "parameter": "Welcome to ILUM"
	    }
	}'
```

### Swagger UI

To get familiar with `Swagger` and to discover `Ilum` REST API visit `Swagger UI`. To do it expose `ilum-core` port with:
```bash
$ kubectl port-forward svc/ilum-core 9888:9888
```
And then reach `localhost:9888/swagger-ui.html`

## Additional configuration

### Apache Spark

#### Apache Spark job configuration

Spark jobs on Kubernetes to be able to run, require some configurations to be performed.

While creating Kubernetes cluster in `Ilum`, default Spark job configuration should be provided. It should contain information which docker image should be used, where to store required files (jars, configuration), and all the other optional configuration that should be applied to all Spark jobs launched on this cluster.

Such configuration should be specified as a part of `defaultApplicationConfig` during Kubernetes cluster creation.

#### Apache Spark job on yarn configuration

No additional configuration is required to be able to run Spark jobs on yarn.

All the optional spark configurations can be added to the created cluster/group/job instances, and they will be passed to the spark job.

#### Apache Spark job docker image

Different Spark versions can be used to run different Spark jobs. To achieve this docker image name should be set in a cluster/session configuration. For example:

```
"spark.kubernetes.container.image": "datamechanics/spark:3.1.1-hadoop-3.2.0-java-11-scala-2.12-python-3.8-latest"
```

Any Spark container image can be provided and used bym `Ilum`. The only requirement is the image to be reachable in an `Ilum` environment (this can be an issue when environment doesn't have an internet connection).

#### Jar, configuration resources storage

`MinIO` is used by `Ilum` as a S3 file storage. Some other S3 compatible file system can be used as well, but at the moment `MinIO` is the quickest and the most advanced way to have file storage reachable by both `ilum-core` and Spark drivers/executors.

Spark job resources, such as jar or configuration files have to be uploaded to some file storage by `ilum-core` and downloaded by Spark components during Spark job initialization.

To make Spark job aware of this file storage, some parameters must be provided during `Ilum` Kubernetes cluster creation.

Below required parameters with some default values (assuming `spark-jars` is the name of default Spark resources bucket) are listed:
```
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
```
"spark.kubernetes.namespace": "<namespace-to-use>",
```

#### Ability to create Kubernetes resources

In RBAC protected Kubernetes clusters Spark drivers have to use a service account that has the rights to create required Kubernetes resources - pods, services etc.

**Important!** If Spark components are hosted one the same Kubernetes cluster and in the same namespace as the `ilum-core` then no actions are required. Default service account used in this namespace already has proper rules configured.

When another namespace to host Spark components is used then it should contain a service account with edit rights configured.

To do this, with Kubernetes cluster to host Spark components set as active, use:
```bash
$ kubectl create serviceaccount spark --namespace=<used-namespace>
$ kubectl create clusterrolebinding spark-role --clusterrole=edit --serviceaccount=<used-namespace>:spark --namespace=<used-namespace>
```

Then, these parameters should be added to default application config:
```
"spark.kubernetes.namespace": "<used-namespace>",
"spark.kubernetes.authenticate.driver.serviceAccountName": "spark"
```

## Some known issues

### Ivy configuration issue in Kubernetes

To get rid of ivy configuration problems, add such parameter to default application config:
```
"spark.driver.extraJavaOptions": "-Divy.cache.dir=/tmp -Divy.home=/tmp"
```

## Example deployments

### Using kafka as a communication type

```bash
helm install --dependency-update --set kafka.enabled=true --set ilum-core.communication.type=kafka ilum ilum/ilum
```

### Using gRPC as a communication type (default)

```bash
helm install --dependency-update ilum ilum/ilum
```

### Using gRPC as a communication type and gRPC port exposed

e.g. for Yarn to be able to reach gRPC service
```bash
helm install --dependency-update --set kafka.enabled=false --set ilum-core.communication.type=grpc --set ilum-core.grpc.host=<k8s-exposed-host> --set ilum-core.grpc.nodePort=<k8s-exposed-port> --set ilum-core.grpc.type=NodePort ilum ilum/ilum
```

## ilum-livy-proxy

Please be aware, that ilum-livy-proxy is not bundled in ilum package by default. If you want to run this service,
add `--set ilum-livy-proxy.enabled=true` to your installation command.

## Jupyter

Please be aware, that Jupyter notebook is not bundled in ilum package by default. If you want to run this service,
add `--set ilum-jupyter.enabled=true` to your installation command.

## Apache Zeppelin

Please be aware, that Zeppelin notebook is not bundled in ilum package by default. If you want to run this service,
add `--set ilum-zeppelin.enabled=true` to your installation command.

