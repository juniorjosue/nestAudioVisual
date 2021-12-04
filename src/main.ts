import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //configuracino de swagger
  const config = new DocumentBuilder()
    .setTitle('Audio visual')
    .setDescription('API descripcion')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  //url donde esta corriendo swagger "api"
  SwaggerModule.setup('api', app, document);
//fin configuracino de swagger

//para q acepte llamadas de otra url
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
