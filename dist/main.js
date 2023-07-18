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
    .then(() => console.log(`SUCCESS - server is running on PORT: ${process.env.PORT}.`))
    .catch((e) => console.log(e));
//# sourceMappingURL=main.js.map