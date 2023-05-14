import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthPlanService } from '../services/healthPlan.service';
import { HealthPlanPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm';

@Controller('healthPlans')
export class HealthPlanController {
  constructor(private HealthPlanService: HealthPlanService) {}
  @Post()
  create(@Body() post: HealthPlanPost): Observable<HealthPlanPost> {
    return this.HealthPlanService.createPost(post);
  }

  @Get()
  findAll(): Observable<HealthPlanPost[]> {
    return this.HealthPlanService.findAllposts();
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() healthPlanPost: HealthPlanPost,
  ): Observable<UpdateResult> {
    return this.HealthPlanService.updatePost(id, healthPlanPost);
  }
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.HealthPlanService.deletePost(id);
  }
}
