# Apache Kafka used by ilum

At the moment in `ilum` we use default `Apache Kafka` helm chart.

## Apache Kafka deployment

To install `Apache Kafka` on kubernetes cluster run:

```shell
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo update
helm install --create-namespace -n kafka kafka bitnami/kafka 
```

Default `Apache Kafka` pods should be created and available at `kafka-0.kafka-headless.kafka.svc.cluster.local:9092`

