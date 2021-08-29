# NGINX Reverse-Proxy

> Hosp-e uses a layer 7 reverse proxy for load balancing across api-gateways

### How to use

```docker
docker build -t nginx-rp .
docker run -d -p 80:80 nginx-rp
```

Then visit `localhost` to view the web-app.
If you running this without docker, change `host.docker.internal` to localhost in `nginx.conf` file
