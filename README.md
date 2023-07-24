# Fargate ECR demo

This is a small demo of a NestJS application with the route "/demo" that returns string when the route is called.

This demo has a Github workflow that simply creates the docker image and pushes it to an AWS ECR repository.


## Run the docker image locally

First build the docker image:

```shell
docker build . -t fargate-demo
```

Then run the image:
```sh
docker run --publish 8080:8080 fargate-demo
```