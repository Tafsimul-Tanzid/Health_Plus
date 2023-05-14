import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HospitalService } from '../services/hospital.service';
import { HospitalPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm';

@Controller('hospitals')
export class HospitalController {
  constructor(private HospitalService: HospitalService) {}
  @Post()
  create(@Body() post: HospitalPost): Observable<HospitalPost> {
    return this.HospitalService.createPost(post);
  }

  @Get()
  findAll(): Observable<HospitalPost[]> {
    return this.HospitalService.findAllposts();
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() hospitalPost: HospitalPost,
  ): Observable<UpdateResult> {
    return this.HospitalService.updatePost(id, hospitalPost);
  }
  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.HospitalService.deletePost(id);
  }
}
