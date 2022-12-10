# ilum-zeppelin packaged by ilum

## TL;DR

```bash
$ helm repo add ilum https://charts.ilum.cloud
$ helm install ilum/ilum-zeppelin
```

## Installing the Chart

To install the chart with the release name `ilum-zeppelin`:

```bash
$ helm install ilum/ilum-zeppelin
```

The command deploys `ilum-zeppelin` on the Kubernetes cluster in the default configuration.
The [Parameters](#parameters)
section lists the parameters that can be configured during installation.

## Uninstalling the Chart

To uninstall/delete the `ilum-zeppelin` deployment:

```bash
$ helm delete ilum-zeppelin
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Parameters

### Common parameters

| Name               | Description                                                                                   | Value                         |
|--------------------|-----------------------------------------------------------------------------------------------|-------------------------------|
| `nameOverride`     | String to partially override ilum-zeppelin.fullname template (will maintain the release name) | `""`                          |
| `fullnameOverride` | String to fully override ilum-zeppelin.fullname template                                      | `""`                          |
| `livyEndpoint`     | ilum-livy-proxy url                                                                           | `http://ilum-livy-proxy:8998` |

### ilum-zeppelin deployment parameters

| Name         | Description                     | Value                    |
|--------------|---------------------------------|--------------------------|
| `image`      | ilum-zeppelin image             | `apache/zeppelin:0.10.1` |
| `pullPolicy` | ilum-zeppelin image pull policy | `IfNotPresent`           |

### ilum-zeppelin service parameters

| Name                     | Description                | Value       |
|--------------------------|----------------------------|-------------|
| `service.type`           | ilum-zeppelin service type | `ClusterIP` |
| `service.port`           | ilum-zeppelin service port | `8080`      |

### ilum-zeppelin ingress parameters

| Name                        | Description                                                                     | Value                                                                                                                                                  |
|-----------------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ingress.enabled`           | ilum-zeppelin ingress enabled flag                                              | `false`                                                                                                                                                |
| `ingress.version`           | ilum-zeppelin ingress version                                                   | `v1`                                                                                                                                                   |
| `ingress.className`         | ilum-zeppelin ingress class name                                                | `""`                                                                                                                                                   |
| `ingress.host`              | ilum-zeppelin ingress host                                                      | `host`                                                                                                                                                 |
| `ingress.tls`               | ilum-zeppelin ingress tls configuration                                         | `[]`                                                                                                                                                   |
| `ingress.tls[x].secretName` | ilum-zeppelin ingress secret name to apply for a single tls configuration entry |                                                                                                                                                        |
| `ingress.tls[x].hosts`      | ilum-zeppelin ingress hosts list to apply for a single tls configuration entry  |                                                                                                                                                        |
| `ingress.annotations`       | ilum-zeppelin ingress annotations in yaml format                                | `nginx.ingress.kubernetes.io/rewrite-target: /$2`<br>`nginx.ingress.kubernetes.io/proxy-body-size: "600m"`<br>`nginx.org/client-max-body-size: "600m"` |
