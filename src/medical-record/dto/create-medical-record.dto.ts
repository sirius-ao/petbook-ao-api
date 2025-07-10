import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateMedicalRecordDto {

    @ApiProperty({example:'01010e0w'})
    @IsString()
    id: string;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    petId: string;

    @ApiProperty({example:'01010e0w'})
    @IsOptional()
    @IsString()
    verId?: string;

    @ApiProperty({example:'01010e0w'})
    @IsDate()
    data: Date;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    description: string;
}
