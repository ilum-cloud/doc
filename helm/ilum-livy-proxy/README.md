# ilum-livy-proxy packaged by ilum

## TL;DR

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum-livy-proxy ilum/ilum-livy-proxy
```

## Installing the Chart

To install the chart with the release name `ilum-livy-proxy`:

```bash
$ helm install ilum-livy-proxy ilum/ilum-livy-proxy
```

The command deploys `ilum-livy-proxy` on the Kubernetes cluster in the default configuration. The [Parameters](#parameters) section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `ilum-livy-proxy` deployment:

```bash
$ helm delete ilum-livy-proxy
```

The command removes all the Kubernetes components associated with the chart and deletes the release.


## Parameters

### Common parameters

| Name                   | Description                                                                                     | Value                          |
|------------------------|-------------------------------------------------------------------------------------------------|--------------------------------|
| `nameOverride`         | String to partially override ilum-livy-proxy.fullname template (will maintain the release name) | `""`                           |
| `fullnameOverride`     | String to fully override ilum-livy-proxy.fullname template                                      | `""`                           |
| `client.endpoint.ilum` | ilum core url                                                                                   | `http://ilum-core:9888/api/v1` |

### ilum-livy-proxy deployment parameters

| Name         | Description                       | Value                                         |
|--------------|-----------------------------------|-----------------------------------------------|
| `image`      | ilum-livy-proxy image             | `docker.ilum.cloud/ilum-livy-proxy:5.0.0` |
| `pullPolicy` | ilum-livy-proxy image pull policy | `IfNotPresent`                                |

### ilum-livy-proxy service parameters

| Name                     | Description                                                                              | Value       |
|--------------------------|------------------------------------------------------------------------------------------|-------------|
| `service.type`           | ilum-livy-proxy service type                                                             | `ClusterIP` |
| `service.port`           | ilum-livy-proxy service port                                                             | `9777`      |
| `service.nodePort`       | ilum-livy-proxy service node port - required when `type` is `LoadBalancer` or `NodePort` | `""`        |
| `service.clusterIP`      | ilum-livy-proxy service cluster IP - required when `type` is `ClusterIP`                 | `""`        |
| `service.loadBalancerIP` | ilum-livy-proxy service load balancer IP - required when `type` is `LoadBalancer`        | `""`        |

### ilum-livy-proxy ingress parameters

| Name                        | Description                                                                       | Value                                                                                                                                                  |
|-----------------------------|-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ingress.enabled`           | ilum-livy-proxy ingress enabled flag                                              | `false`                                                                                                                                                |
| `ingress.version`           | ilum-livy-proxy ingress version                                                   | `v1`                                                                                                                                                   |
| `ingress.className`         | ilum-livy-proxy ingress class name                                                | `""`                                                                                                                                                   |
| `ingress.host`              | ilum-livy-proxy ingress host                                                      | `host`                                                                                                                                                 |
| `ingress.tls`               | ilum-livy-proxy ingress tls configuration                                         | `[]`                                                                                                                                                   |
| `ingress.tls[x].secretName` | ilum-livy-proxy ingress secret name to apply for a single tls configuration entry |                                                                                                                                                        |
| `ingress.tls[x].hosts`      | ilum-livy-proxy ingress hosts list to apply for a single tls configuration entry  |                                                                                                                                                        |
| `ingress.annotations`       | ilum-livy-proxy ingress annotations in yaml format                                | `nginx.ingress.kubernetes.io/rewrite-target: /$2`<br>`nginx.ingress.kubernetes.io/proxy-body-size: "600m"`<br>`nginx.org/client-max-body-size: "600m"` |
