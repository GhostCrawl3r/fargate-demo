"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT);
}
bootstrap()
    .then(() => console.log(`SUCCESS - View the graphql playground here: http://localhost:${process.env.PORT}/graphql`))
    .catch((e) => console.log(e));
//# sourceMappingURL=main.js.map