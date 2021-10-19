# Reverse Proxy

Initial design of hospe' system architecture is to use different subdomains for different services.  
For the initial stages of development we have implemented a reverse proxy for forwarding each requests to localhost ports which local servers are running

> i.e patients' dashboard running on localhost:3000. Reverse proxy points hospe.charukahs.com to localhost:3000

This is accomplished by using DNS redirect to 127.0.0.1 for `*.hospe.charukahs.com`

### Why Traefik

To be frank, my inital suggestion was to use something like nginx and it turns out nginx's documentation is very hard to read 😅  
Traefik advertise itself as an "edge-router", open-source, 30K+ stars in github and simple to use.

### TODO

- Implement Let's Encrypt
- Disasble Older TLS versions?
