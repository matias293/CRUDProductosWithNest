import { IsNotEmpty, IsNumber, Length } from 'class-validator';

export class productoDTO {
  readonly id: string;

  @IsNotEmpty()
  readonly nombre: string;
  @IsNotEmpty()
  @IsNumber()
  readonly precio: number;
  @IsNotEmpty()
  @Length(6)
  readonly descripcion: string;
  @IsNotEmpty()
  readonly codigo: string;
  @IsNotEmpty()
  @IsNumber()
  readonly stock: number;
  readonly foto: string;
}
