import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { productoDTO } from './dto/productos.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('Producto') private readonly productoModel: Model<productoDTO>,
  ) {}
  async findAll(): Promise<productoDTO[]> {
    return await this.productoModel.find();
  }

  async findOne(idProducto: string): Promise<productoDTO> {
    return await this.productoModel.findById(idProducto);
  }

  async createOne(data: productoDTO): Promise<productoDTO> {
    const nuevoProducto = new this.productoModel(data);
    return nuevoProducto.save();
  }

  async deleteOne(idProducto: string): Promise<void> {
    await this.productoModel.findByIdAndDelete(idProducto);
    return;
  }

  async updateOne(idProducto: string, data: productoDTO) {
    return await this.productoModel.findByIdAndUpdate(idProducto, data);
  }
}
