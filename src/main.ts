import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.listen(process.env.PORT ?? 3000).then((val) =>{
    console.log(`App running on port ${process.env.PORT}`);
  }).catch((err) =>{
    console.log(`Unable to run project ${err}`);
  })
}
bootstrap();
