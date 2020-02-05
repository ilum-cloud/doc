# MongoDB used by ilum

At the moment in `ilum` we use default `MongoDB` helm chart with replica set configured 
as `ilum` requires replica set to support native `MongoDB` transactions.

## MongoDB deployment

To install `MongoDB` on kubernetes cluster run:

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install --create-namespace -n mongo mongo bitnami/mongodb --set architecture="replicaset",auth.enabled=false
```

Default `MongoDB` pods should be created and available at `mongodb://mongo-mongodb-0.mongo-mongodb-headless.mongo.svc.cluster.local:27017,mongo-mongodb-1.mongo-mongodb-headless.mongo.svc.cluster.local:27017`

