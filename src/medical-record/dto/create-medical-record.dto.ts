import { IsOptional, IsString } from "class-validator";

export class CreateMedicalRecordDto {

    @IsString()
    id: string;

    @IsString()
    petId: string;

    @IsOptional()
    @IsString()
    verId?: string;

    data: Date;

    @IsString()
    description: string;
}
