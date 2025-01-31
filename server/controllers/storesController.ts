import { Request, Response } from "express"
import * as nano from 'nanoid'
interface ratingsType{

    oneStar:number,
    twoStar:number,
    threeStar:number
    fourStar:number
    fiveStar:number
}

interface reviewType{

    storeId:string,
    reviewerName:string,
    comment:string
}

interface requestType extends Request{

    body:{
    
        id?:string,
        stripeid?:string,
        name?:string,
        type?:string,
          description?:string,
          city?:string,
          country?:string,
            location?:string
            ratings?:ratingsType
          reviews?:reviewType[]
    },
}


const createStore=async (req:Request,res:Response)=>{

   const id= nano.nanoid()
}