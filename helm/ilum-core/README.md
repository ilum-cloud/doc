# ilum-core packaged by ilum

## TL;DR

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum-core ilum/ilum-core
```

## Installing the Chart

To install the chart with the release name `ilum-core`:

```bash
$ helm install ilum-core ilum/ilum-core
```

The command deploys `ilum-core` on the Kubernetes cluster in the default configuration. The [Parameters](#parameters)
section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `ilum-core` deployment:

```bash
$ helm delete ilum-core
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

### Common parameters

| Name               | Description                                                                               | Value |
|--------------------|-------------------------------------------------------------------------------------------|-------|
| `nameOverride`     | String to partially override ilum-core.fullname template (will maintain the release name) | `""`  |
| `fullnameOverride` | String to fully override ilum-core.fullname template                                      | `""`  |

### ilum-core deployment parameters

| Name         | Description                 | Value                                   |
|--------------|-----------------------------|-----------------------------------------|
| `image`      | ilum-core image             | `docker.ilum.cloud/ilum-core:5.0.0` |
| `pullPolicy` | ilum-core image pull policy | `IfNotPresent`                          |

### ilum-core communication parameters

| Name                 | Description                                                                      | Value  |
|----------------------|----------------------------------------------------------------------------------|--------|
| `communication.type` | ilum-core communication type with spark jobs, available options: `grpc`, `kafka` | `grpc` |

### ilum-core service parameters

| Name                     | Description                                                                        | Value       |
|--------------------------|------------------------------------------------------------------------------------|-------------|
| `service.type`           | ilum-core service type                                                             | `ClusterIP` |
| `service.port`           | ilum-core service port                                                             | `9888`      |
| `service.nodePort`       | ilum-core service node port - required when `type` is `LoadBalancer` or `NodePort` | `""`        |
| `service.clusterIP`      | ilum-core service cluster IP - required when `type` is `ClusterIP`                 | `""`        |
| `service.loadBalancerIP` | ilum-core service load balancer IP - required when `type` is `LoadBalancer`        | `""`        |

### ilum-core ingress parameters

| Name                        | Description                                                                 | Value                                                                                                                                                  |
|-----------------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ingress.enabled`           | ilum-core ingress enabled flag                                              | `false`                                                                                                                                                |
| `ingress.version`           | ilum-core ingress version                                                   | `v1`                                                                                                                                                   |
| `ingress.className`         | ilum-core ingress class name                                                | `""`                                                                                                                                                   |
| `ingress.host`              | ilum-core ingress host                                                      | `host`                                                                                                                                                 |
| `ingress.tls`               | ilum-core ingress tls configuration                                         | `[]`                                                                                                                                                   |
| `ingress.tls[x].secretName` | ilum-core ingress secret name to apply for a single tls configuration entry |                                                                                                                                                        |
| `ingress.tls[x].hosts`      | ilum-core ingress hosts list to apply for a single tls configuration entry  |                                                                                                                                                        |
| `ingress.annotations`       | ilum-core ingress annotations in yaml format                                | `nginx.ingress.kubernetes.io/rewrite-target: /$1`<br>`nginx.ingress.kubernetes.io/proxy-body-size: "600m"`<br>`nginx.org/client-max-body-size: "600m"` |

### ilum-core mongo parameters

| Name                   | Description                             | Value         |
|------------------------|-----------------------------------------|---------------|
| `mongo.instances`      | ilum-core mongo instances to connect to | `mongo:27017` |
| `mongo.replicaSetName` | ilum-core mongo replica set name        | `rs0`         |

### ilum-core kafka parameters

| Name            | Description                           | Value        |
|-----------------|---------------------------------------|--------------|
| `kafka.address` | ilum-core kafka address to connect to | `kafka:9092` |

### ilum-core grpc service parameters

| Name                          | Description                                                                             | Value       |
|-------------------------------|-----------------------------------------------------------------------------------------|-------------|
| `grpc.service.type`           | ilum-core grpc service type                                                             | `ClusterIP` |
| `grpc.service.port`           | ilum-core grpc service port                                                             | `9999`      |
| `grpc.service.nodePort`       | ilum-core grpc service node port - required when `type` is `LoadBalancer` or `NodePort` | `""`        |
| `grpc.service.clusterIP`      | ilum-core grpc service cluster IP - required when `type` is `ClusterIP`                 | `""`        |
| `grpc.service.loadBalancerIP` | ilum-core grpc service load balancer IP - required when `type` is `LoadBalancer`        | `""`        |

### ilum-core grpc parameters for spark job

| Name            | Description                                     | Value       |
|-----------------|-------------------------------------------------|-------------|
| `grpc.job.host` | ilum-core grpc host for spark job to connect to | `ilum-grpc` |
| `grpc.job.port` | ilum-core grpc port for spark job to connect to | `9999`      |

### ilum-core kubernetes cluster initializer parameters

| Name                              | Description                                                                         | Value                                |
|-----------------------------------|-------------------------------------------------------------------------------------|--------------------------------------|
| `kubernetes.initClusterOnStartup` | ilum-core default kubernetes cluster initialization flag                            | `true`                               |
| `kubernetes.api.url`              | ilum-core default kubernetes cluster api url                                        | `https://kubernetes.default.svc`     |
| `kubernetes.container.image`      | ilum-core default kubernetes cluster container image                                | `docker.ilum.cloud/ilum-spark:3.3.0` |
| `kubernetes.sparkNamespace`       | ilum-core default kubernetes cluster namespace to store spark resources             | `{{ .Release.Namespace }}`           |
| `kubernetes.s3.host`              | ilum-core default kubernetes cluster S3 storage host to store spark resources       | `s3`                                 |
| `kubernetes.s3.port`              | ilum-core default kubernetes cluster S3 storage port to store spark resources       | `7000`                               |
| `kubernetes.s3.bucket`            | ilum-core default kubernetes cluster S3 storage bucket to store spark resources     | `ilum-files`                         |
| `kubernetes.s3.accessKey`         | ilum-core default kubernetes cluster S3 storage access key to store spark resources | `""`                                 |
| `kubernetes.s3.secretKey`         | ilum-core default kubernetes cluster S3 storage secret key to store spark resources | `""`                                 |

**Important!** Make sure S3 bucket is already created and reachable!

### ilum-core security parameters

| Name                        | Description                              | Value   |
|-----------------------------|------------------------------------------|---------|
| `security.admin.username`   | ilum-core admin username                 | `admin` |
| `security.admin.password`   | ilum-core admin password                 | `admin` |
| `security.token.expiration` | ilum-core token expiration time in hours | `24`    |

