import { Additional } from "./Additional"

export interface Item {

    id:string
    title:string
    price: number
    isAvailable:boolean
    image?:string
    additionals?: Additional[]
    description?:string
    created_at:Date
    updated_at:Date

}