"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const process = require("process");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            port: parseInt(process.env.USERS_SERVICES_PORT, 10) || 3006,
        },
    });
    await app.listen();
    console.log(`Microservice 'users' is listening on port ${process.env.USERS_SERVICES_PORT || 3006}`);
}
bootstrap();
//# sourceMappingURL=main.js.map