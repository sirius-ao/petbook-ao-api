import { IsArray, IsString } from 'class-validator';
import { Appointment, Client, Product, Service, User } from 'generated/prisma';

export class CreateBusinessDto {
  @IsString() 
  id: string;
  
  @IsString()
  name: string;

@IsString()
  adress: string;

  @IsString()  
  phone: string;

  @IsString()
  email: string;

  @IsArray()
  user: User[];
  product: Product[];
  service: Service[];
  client: Client[];
  Sales: Sales[];
  appointments: Appointment[];
}
