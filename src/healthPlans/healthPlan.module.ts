import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthPlanPostEntity } from './models/post.entity';
import { HealthPlanService } from './services/healthPlan.service';
import { HealthPlanController } from './controllers/healthPlan.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HealthPlanPostEntity])],
  providers: [HealthPlanService],
  controllers: [HealthPlanController],
})
export class HealthPlanModule {}
