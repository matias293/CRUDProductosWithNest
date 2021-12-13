import { Schema } from 'mongoose';
import { productoDTO } from './productos.dto';

export const ProductoSchema = new Schema<productoDTO>({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  foto: { type: String },
  stock: { type: Number, required: true },
});
