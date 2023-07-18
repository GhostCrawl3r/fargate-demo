# Fargate ECR demo

This is a small demo of a NestJS application with the route "/demo" that returns string when the route is called.

This demo has a Github workflow that simply creates the docker image and pushes it to an AWS ECR repository.

I found a really cool script online that applies automatic semantic versioning to your images on push, and you can tweak if it's a patch, major or minor.
I thought this was cool and may be of use for others.

Check out the semantic versioning script [here](build/git_update.sh).