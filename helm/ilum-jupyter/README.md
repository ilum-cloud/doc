# ilum-jupyter packaged by ilum

## TL;DR

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum/ilum-jupyter
```

## Installing the Chart

To install the chart with the release name `ilum-jupyter`:

```bash
$ helm install ilum/ilum-jupyter
```

The command deploys `ilum-jupyter` on the Kubernetes cluster in the default configuration. The [Parameters](#parameters) section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `ilum-jupyter` deployment:

```bash
$ helm delete ilum-jupyter
```

The command removes all the Kubernetes components associated with the chart and deletes the release.


## Parameters

### Common parameters

| Name               | Description                                                                                  | Value                         |
|--------------------|----------------------------------------------------------------------------------------------|-------------------------------|
| `nameOverride`     | String to partially override ilum-jupyter.fullname template (will maintain the release name) | `""`                          |
| `fullnameOverride` | String to fully override ilum-jupyter.fullname template                                      | `""`                          |
| `livyEndpint`      | ilum-livy-proxy url                                                                          | `http://ilum-livy-proxy:8998` |

### ilum-jupyter deployment parameters

| Name         | Description                    | Value                                      |
|--------------|--------------------------------|--------------------------------------------|
| `image`      | ilum-jupyter image             | `docker.ilum.cloud/ilum-jupyter:5.0.0` |
| `pullPolicy` | ilum-jupyter image pull policy | `IfNotPresent`                             |

### ilum-jupyter service parameters

| Name                     | Description                                                                           | Value       |
|--------------------------|---------------------------------------------------------------------------------------|-------------|
| `service.type`           | ilum-jupyter service type                                                             | `ClusterIP` |
| `service.port`           | ilum-jupyter service port                                                             | `8888`      |
| `service.nodePort`       | ilum-jupyter service node port - required when `type` is `LoadBalancer` or `NodePort` | `""`        |
| `service.clusterIP`      | ilum-jupyter service cluster IP - required when `type` is `ClusterIP`                 | `""`        |
| `service.loadBalancerIP` | ilum-jupyter service load balancer IP - required when `type` is `LoadBalancer`        | `""`        |

### ilum-jupyter ingress parameters

| Name                        | Description                                                                    | Value                                                                                                                                                  |
|-----------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ingress.enabled`           | ilum-jupyter ingress enabled flag                                              | `false`                                                                                                                                                |
| `ingress.version`           | ilum-jupyter ingress version                                                   | `v1`                                                                                                                                                   |
| `ingress.className`         | ilum-jupyter ingress class name                                                | `""`                                                                                                                                                   |
| `ingress.host`              | ilum-jupyter ingress host                                                      | `host`                                                                                                                                                 |
| `ingress.tls`               | ilum-jupyter ingress tls configuration                                         | `[]`                                                                                                                                                   |
| `ingress.tls[x].secretName` | ilum-jupyter ingress secret name to apply for a single tls configuration entry |                                                                                                                                                        |
| `ingress.tls[x].hosts`      | ilum-jupyter ingress hosts list to apply for a single tls configuration entry  |                                                                                                                                                        |
| `ingress.annotations`       | ilum-jupyter ingress annotations in yaml format                                | `nginx.ingress.kubernetes.io/rewrite-target: /$2`<br>`nginx.ingress.kubernetes.io/proxy-body-size: "600m"`<br>`nginx.org/client-max-body-size: "600m"` |
