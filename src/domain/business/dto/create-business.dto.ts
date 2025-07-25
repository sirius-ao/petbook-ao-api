import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Appointment, Client, Product, Sale, Service, User } from 'generated/prisma';

export class CreateBusinessDto {
  // @ApiProperty({example:'01010e0w'})
  // @IsString() 
  // id: string;
  
  @ApiProperty({example:'01010e0w'})
  @IsString()
  name: string;

 @ApiProperty({example:'01010e0w'})
 @IsString()
  address: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()  
  phone: string;

  @ApiProperty({example:'01010e0w'})
  @IsString()
  email: string;

  @ApiProperty({example:'01010e0w'})
  @IsArray()
  user: User[];
  
  product: Product[];
  service: Service[];
  client: Client[];
  Sales: Sale[];
  appointments: Appointment[];
}
