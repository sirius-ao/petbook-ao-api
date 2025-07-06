import { IsNumber, IsString } from "class-validator";
import { AffiliateReferral } from "generated/prisma";

export class CreateAffiliateDto {
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
