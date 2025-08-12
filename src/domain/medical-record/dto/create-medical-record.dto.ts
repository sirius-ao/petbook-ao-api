import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMedicalRecordDto {

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    id: number;

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    petId: number;

    @ApiProperty({example:'01010e0w'})
    @IsOptional()
    @IsNumber()
    verId?: number;

    @ApiProperty({example:'01010e0w'})
    @IsDate()
    data: Date;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    description: string;
}
