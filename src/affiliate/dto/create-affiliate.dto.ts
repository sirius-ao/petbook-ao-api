import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { AffiliateReferral } from "generated/prisma";

export class CreateAffiliateDto {
    @ApiProperty({ description: '1', example: 1})
    @IsString()
    id: string;

    @IsString()
    userId: string;

    @IsString()
    code: string;

    @IsNumber()
    earning: number;
    affiliateReferral: AffiliateReferral[];
}
