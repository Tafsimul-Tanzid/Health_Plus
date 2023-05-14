import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicineShopController } from './controllers/medicineShop.controller';
import { MedicineShopService } from './services/medicineShop.service';
import { MedicineShopPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineShopPostEntity])],
  providers: [MedicineShopService],
  controllers: [MedicineShopController],
})
export class MedicineShopModule {}
