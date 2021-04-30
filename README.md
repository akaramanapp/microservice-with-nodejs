# microservice-with-nodejs
Microservice With Node Js

# Build
```shell
cd customer-service
docker build . -t customer-service

cd notification-service
docker build . -t notification-service

cd gateway-service
docker build . -t gateway-service
```

# Run
```shell
docker-compose up -d
```

| service | port | tech |
|--|--|--|
| gateway-service | 5000 | nodejs |
| notification-service | 5001 | nodejs |
| customer-service | 5002 | nodejs |
