import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ReferralStatus, ReferralType } from "generated/prisma";

export class CreateAffiliateReferralDto {

    @IsString()
    id: string;
    
    @IsString()
    affiliated: string;

    @IsString()
    @IsOptional()
    referredUserId?: string;

    @IsEnum(ReferralType)
    type: ReferralType;

    @IsNumber()
    value:number;

    @IsEnum(ReferralStatus)
    status:ReferralStatus;

}
