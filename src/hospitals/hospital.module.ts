import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalService } from './services/hospital.service';
import { HospitalPostEntity } from './models/post.entity';
import { HospitalController } from './controllers/hospital.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalPostEntity])],
  providers: [HospitalService],
  controllers: [HospitalController],
})
export class HospitalModule {}
