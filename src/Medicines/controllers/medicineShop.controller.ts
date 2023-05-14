import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { MedicineShopPost } from '../models/post.interface';
import { MedicineShopService } from '../services/medicineShop.service';
import { UpdateResult } from 'typeorm/query-builder/result/UpdateResult';
import { DeleteResult } from 'typeorm';

@Controller('medicineShops')
export class MedicineShopController {
  constructor(private MedicineShopService: MedicineShopService) {}
  @Post()
  create(@Body() post: MedicineShopPost): Observable<MedicineShopPost> {
    return this.MedicineShopService.createPost(post);
  }
  @Get()
  findAll(): Observable<MedicineShopPost[]> {
    return this.MedicineShopService.findAllposts();
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() medicineShopPost: MedicineShopPost,
  ): Observable<UpdateResult> {
    return this.MedicineShopService.updatePost(id, medicineShopPost);
  }
  @Delete('id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.MedicineShopService.deletePost(id);
  }
}
