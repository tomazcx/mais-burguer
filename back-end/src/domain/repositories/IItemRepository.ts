import { CreateItemDTO } from "@domain/dto/items/CreateItemDTO";
import { UpdateItemDTO } from "@domain/dto/items/UpdateItemDTO";
import { Item } from "@domain/entities/Item";

export interface IItemRepository{

    findById(id:string):Promise<Item | null>
    exists(id:string):Promise<boolean>
    create(data: CreateItemDTO):Promise<Item>
    updateAvailability(id:string, isAvailable:boolean):Promise<void>
    updateImage(id:string, image:string):Promise<void>
    update(id:string, data:UpdateItemDTO):Promise<void>
    delete(id:string):Promise<void>


}