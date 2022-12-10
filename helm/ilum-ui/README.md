# ilum-ui packaged by ilum

## TL;DR

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum-ui ilum/ilum-ui
```

## Installing the Chart

To install the chart with the release name `ilum-ui`:

```bash
$ helm install ilum-ui ilum/ilum-ui
```

The command deploys `ilum-ui` on the Kubernetes cluster in the default configuration. The [Parameters](#parameters) section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `ilum-ui` deployment:

```bash
$ helm delete ilum-ui
```

The command removes all the Kubernetes components associated with the chart and deletes the release.


## Parameters

### Common parameters

| Name               | Description                                                                             | Value |
|--------------------|-----------------------------------------------------------------------------------------|-------|
| `nameOverride`     | String to partially override ilum-ui.fullname template (will maintain the release name) | `""`  |
| `fullnameOverride` | String to fully override ilum-ui.fullname template                                      | `""`  |

### ilum-ui deployment parameters

| Name         | Description               | Value                                 |
|--------------|---------------------------|---------------------------------------|
| `image`      | ilum-ui image             | `docker.ilum.cloud/ilum-ui:5.0.0` |
| `pullPolicy` | ilum-ui image pull policy | `IfNotPresent`                        |

### ilum-ui service parameters

| Name                     | Description                                                                      | Value       |
|--------------------------|----------------------------------------------------------------------------------|-------------|
| `service.type`           | ilum-ui service type                                                             | `ClusterIP` |
| `service.port`           | ilum-ui service port                                                             | `9777`      |
| `service.nodePort`       | ilum-ui service node port - required when `type` is `LoadBalancer` or `NodePort` | `""`        |
| `service.clusterIP`      | ilum-ui service cluster IP - required when `type` is `ClusterIP`                 | `""`        |
| `service.loadBalancerIP` | ilum-ui service load balancer IP - required when `type` is `LoadBalancer`        | `""`        |

### ilum-ui ingress parameters

| Name                        | Description                                                               | Value                                                                                                                                                  |
|-----------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ingress.enabled`           | ilum-ui ingress enabled flag                                              | `false`                                                                                                                                                |
| `ingress.version`           | ilum-ui ingress version                                                   | `v1`                                                                                                                                                   |
| `ingress.className`         | ilum-ui ingress class name                                                | `""`                                                                                                                                                   |
| `ingress.tls`               | ilum-ui ingress tls configuration                                         | `[]`                                                                                                                                                   |
| `ingress.tls[x].secretName` | ilum-ui ingress secret name to apply for a single tls configuration entry |                                                                                                                                                        |
| `ingress.tls[x].hosts`      | ilum-ui ingress hosts list to apply for a single tls configuration entry  |                                                                                                                                                        |
| `ingress.annotations`       | ilum-ui ingress annotations in yaml format                                | `nginx.ingress.kubernetes.io/rewrite-target: /$2`<br>`nginx.ingress.kubernetes.io/proxy-body-size: "600m"`<br>`nginx.org/client-max-body-size: "600m"` |
