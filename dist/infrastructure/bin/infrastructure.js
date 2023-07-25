#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const infrastructure_stack_1 = require("../lib/infrastructure-stack");
const app = new cdk.App();
new infrastructure_stack_1.FargateDemoStack(app, 'FargateDemoStack', {});
//# sourceMappingURL=infrastructure.js.map