import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/App';

async function main() {
    const app = await NestFactory.create(AppModule);
    await app.listen(7000);
}

main();