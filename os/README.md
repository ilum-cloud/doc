# MinIO used by ilum

At the moment in `ilum` we use default bitnami `MinIO` helm chart.

**Important!** This is only an instance used by a testing/small data deployments. 
For a production deployment a bigger `MinIO` cluster with at least 4 servers should 
be provided, check https://docs.min.io/docs/minio-deployment-quickstart-guide.html.

## MinIO deployment

To install `MinIO` on kubernetes cluster run:

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install --create-namespace -n minio --set accessKey.password=minioadmin --set secretKey.password=minioadmin --set defaultBuckets=spark-jars minio bitnami/minio
```

**Important!** Default `spark-jars` bucket is used by `ilum-service` to upload spark 
required resources.

After invoking these instructions, default `MinIO` configuration should be used and all required 
resources should be created.

`MinIO` can be found at `minio.minio.svc.cluster.local` inside a kubernetes cluster. 

To access `MinIO` console use `kubectl port-forward --namespace minio svc/minio 9001:9001` 
and then hit `localhost:9001` and use provided access and secret keys.

## Accessing MinIO

To access `MinIO` through S3 API use this configuration:

| property        | value                                                                       |
|---              |---                                                                          |
| S3 host         | `minio.minio.svc.cluster.local`                                             |
| S3 endpoint     | `kubectl -n minio get service minio` and get the ClusterIP with 9000 port   |
| S3 bucket       | `s3a://spark-jars` or create another one through `MinIO` console            |
| S3 access key   | `accessKey.password` given during helm chart installing                     |
| S3 secret key   | `secretKey.password` given during helm chart installing                     |

**Important!** Not that this configuration works only from inside kubernetes cluster as `MinIO`, 
by default, is not accessible externally. To achieve that either NodePort or ingress should 
be configured, check https://github.com/bitnami/charts/tree/master/bitnami/minio for details.

Given example can be used to launch `MinIO` with `NodePort` service configured:
```shell
helm install --create-namespace -n minio --set accessKey.password=minioadmin --set secretKey.password=minioadmin --set defaultBuckets=spark-jars --set service.type=NodePort --set service.nodePorts.api=30100 --set service.nodePorts.console=30101 minio bitnami/minio
```

