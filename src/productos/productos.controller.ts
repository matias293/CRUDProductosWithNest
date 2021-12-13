import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { productoDTO } from './dto/productos.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoService: ProductosService) {}
  @Get(':id')
  getProducto(@Param('id') idProducto: string) {
    return this.productoService.findOne(idProducto);
  }
  @Get()
  getProductos() {
    return this.productoService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  crearProducto(@Body() producto: productoDTO) {
    return this.productoService.createOne(producto);
  }

  @Put(':id')
  actualizarProducto(
    @Param('id') idProducto: string,
    @Body() producto: productoDTO,
  ) {
    return this.productoService.updateOne(idProducto, producto);
  }

  @Delete(':id')
  deleteProducto(@Param('id') idProducto: string) {
    return this.productoService.deleteOne(idProducto);
  }
}
