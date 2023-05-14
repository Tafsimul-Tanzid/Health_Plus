import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';

import { HospitalPostEntity } from '../models/post.entity';
import { HospitalPost } from '../models/post.interface';

@Injectable()
export class HospitalService {
  findAllposts(): Observable<HospitalPost[]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(HospitalPostEntity)
    private readonly hospitalpostRepository: Repository<HospitalPostEntity>,
  ) {}
  createPost(hospitalPost: HospitalPost): Observable<HospitalPost> {
    return from(this.hospitalpostRepository.save(hospitalPost));
  }
  findAllPosts(): Observable<HospitalPost[]> {
    return from(this.hospitalpostRepository.find());
  }
  updatePost(id: number, hospitalPost: HospitalPost): Observable<UpdateResult> {
    return from(this.hospitalpostRepository.update(id, hospitalPost));
  }
  deletePost(id: number): Observable<DeleteResult> {
    return from(this.hospitalpostRepository.delete(id));
  }
}
