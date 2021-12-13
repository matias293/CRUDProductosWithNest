import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './productos/dto/productos.schema';

dotenv.config();
console.log(process.env.MONGO_ATLAS);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_ATLAS),
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
  ],
  controllers: [AppController, ProductosController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
