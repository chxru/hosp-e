# `/database`

## Directory Structure

```
.
|-- pgadmin       # Mount location for dpage/pgadmin4. ignored in git
|-- sql           # Contain sql files required to hospe pg db
└── Dockerfile    # Docker file related to postgres
```

## PGAdmin Credentials

- For login email and password is written in `docker-compose.yml` file
- To add a new server, goto create server, insert a name and in connection tab add `postgres` as location and paste username and password in the `docker-compose.yml`

## Notes

- When using dpage/pgadmin4 with a separate volume in docker-compose, it throws an error "no permission to create dir". A dirty way to solve this is binding a mount point. Here `/pgadmin` dir is a mount point made for that task
- Files in sql folder is copied to postgres container when boot up. These sql files responsible for creating tables, functions and other stuff required for hospe database
