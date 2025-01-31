import Stripe from 'stripe';
import { Request,Response } from "express"
import services from "../model/servicesSchema"
import * as dotenv from 'dotenv'

dotenv.config()

const processPayment= async (req:Request,res:Response)=>{


    const {storeid,serviceid}=req.params

     const foundService = await services.findOne({ where: { serviceid: serviceid } })

     if(!foundService){
        return res.status(404).json({message:'service not found!'})
     }

     let finalprice;
     if(foundService?.discount){
       finalprice= foundService.rate=foundService.rate-(foundService?.discount/foundService.rate)*foundService.rate
       finalprice= finalprice*100
     }
     else{
        finalprice=foundService?.rate*100
     }

     const stripe = new Stripe(process.env.STRIPE_SECRET as string);
     try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: finalprice, // Amount in cents (e.g., $50 = 5000)
          currency: 'usd',
          transfer_data: {
            destination: process.env.STRIPE_ID as string, // Specify the store's Stripe Account ID
          },
          application_fee_amount: 2000, 
        });
        
        res.json({ clientSecret: paymentIntent.client_secret });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}