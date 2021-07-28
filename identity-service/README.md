### To run the database locally

```docker
docker run --name hospe_is -e POSTGRES_DB=hospe -e POSTGRES_USER=hospe -e POSTGRES_PASSWORD=password -p 4001:5432 -d postgres:13.3
```

### To access the database

```docker
docker exec -it hospe_is psql -U hospe -d hospe -W
```
