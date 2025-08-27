import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
// import { } from "generated/prisma";
import { ReferralStatus, ReferralType } from 'generated/prisma';

export class CreateAffiliateReferralDto {

    // @ApiProperty({example:'01010e0w'})
    // @IsString()
    // id: string;
    
    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    affiliated: number;

    @ApiProperty({example:'01010e0w'})
    @IsNumber()
    @IsOptional()
    referredUserId?: number;

    @ApiProperty({example:'01010e0w'})
    @IsEnum(ReferralType)
    type: ReferralType;

    @ApiProperty({example:'20000'})
    @IsNumber()
    value:number;

    @ApiProperty({example:'01010e0w'})
    @IsEnum(ReferralStatus)
    status:ReferralStatus;

}
