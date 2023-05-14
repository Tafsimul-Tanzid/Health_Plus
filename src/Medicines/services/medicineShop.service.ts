import { Delete, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { DeleteResult,Repository,UpdateResult } from "typeorm";


import { MedicineShopPostEntity } from "../models/post.entity";
import { MedicineShopPost } from "../models/post.interface";



@Injectable()
export class MedicineShopService{
    
    
    findAllposts():Observable<MedicineShopPost[]>{
        throw new Error('Method not implemented.');
        
    }
    constructor(
        @InjectRepository(MedicineShopPostEntity)
        private readonly medicineShoppostRepository : Repository<MedicineShopPostEntity>
    ){}
    createPost(medicineShopPost : MedicineShopPost):Observable<MedicineShopPost>{
        return from(this.medicineShoppostRepository.save(medicineShopPost));
    }
    findAllPosts():Observable<MedicineShopPost[]>{
        return from(this.medicineShoppostRepository.find());
    }
    updatePost(id:number, medicineShopPost:MedicineShopPost):Observable<UpdateResult>{
        return from(this.medicineShoppostRepository.update(id,medicineShopPost));
    }
    deletePost(id: number):Observable<DeleteResult>{
        return from(this.medicineShoppostRepository.delete(id));
    }
}
