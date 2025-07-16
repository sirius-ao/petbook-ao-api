import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BusinessModule } from './business/business.module';
import { ClientModule } from './client/client.module';
import { PetModule } from './pet/pet.module';
import { AppointmentModule } from './appointment/appointment.module';
import { MedicalRecordModule } from './medical-record/medical-record.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { SaleItemModule } from './sale-item/sale-item.module';
import { ServiceModule } from './service/service.module';
import { AffiliateModule } from './affiliate/affiliate.module';
import { AffiliateReferralModule } from './affiliate-referral/affiliate-referral.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports:[ 
       // DatabaseModule,
        UserModule,
        BusinessModule,
        ClientModule,
        PetModule,
        AppointmentModule,
        MedicalRecordModule,
        ProductModule,
        SaleModule,
        SaleItemModule,
        ServiceModule,
        AffiliateModule,
        AffiliateReferralModule,],
    controllers:[],
    providers:[DomainModule],
    exports:[DomainModule]
})
export class DomainModule {}
