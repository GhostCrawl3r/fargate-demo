"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FargateDemoStack = void 0;
const cdk = require("aws-cdk-lib");
const ec2 = require("aws-cdk-lib/aws-ec2");
const ecs = require("aws-cdk-lib/aws-ecs");
const ecs_patterns = require("aws-cdk-lib/aws-ecs-patterns");
const ecr = require("aws-cdk-lib/aws-ecr");
class FargateDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const repository = ecr.Repository.fromRepositoryName(this, 'fargate-demo-repository', 'fargate-demo-repository');
        const vpc = new ec2.Vpc(this, 'MyVpc', {
            maxAzs: 3,
        });
        const cluster = new ecs.Cluster(this, 'Fargate-Demo-Cluster', {
            vpc: vpc,
        });
        new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'FargateDemoService', {
            cluster: cluster,
            cpu: 512,
            desiredCount: 6,
            taskImageOptions: {
                image: ecs.EcrImage.fromEcrRepository(repository, 'latest'),
            },
            memoryLimitMiB: 2048,
            publicLoadBalancer: true,
        });
    }
}
exports.FargateDemoStack = FargateDemoStack;
//# sourceMappingURL=infrastructure-stack.js.map