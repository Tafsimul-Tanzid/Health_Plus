import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';

import { HealthPlanPostEntity } from '../models/post.entity';
import { HealthPlanPost } from '../models/post.interface';

@Injectable()
export class HealthPlanService {
  findAllposts(): Observable<HealthPlanPost[]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(HealthPlanPostEntity)
    private readonly healthplanpostRepository: Repository<HealthPlanPostEntity>,
  ) {}
  createPost(healthPlanPost: HealthPlanPost): Observable<HealthPlanPost> {
    return from(this.healthplanpostRepository.save(healthPlanPost));
  }
  findAllPosts(): Observable<HealthPlanPost[]> {
    return from(this.healthplanpostRepository.find());
  }
  updatePost(
    id: number,
    healthPlanPost: HealthPlanPost,
  ): Observable<UpdateResult> {
    return from(this.healthplanpostRepository.update(id, healthPlanPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.healthplanpostRepository.delete(id));
  }
}
