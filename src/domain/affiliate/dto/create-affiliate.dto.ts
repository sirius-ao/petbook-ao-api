import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { AffiliateReferral } from "generated/prisma";

export class CreateAffiliateDto {

    // @ApiProperty({example:'01010e0w'})
    // @IsString()
    // id: string;

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    userId: number;

    @ApiProperty({example:'01010e0w'})
    @IsString()
    code: string;

    @ApiProperty({example:12341})
    @IsNumber()
    earning: number;
    affiliateReferral: AffiliateReferral[];
}
