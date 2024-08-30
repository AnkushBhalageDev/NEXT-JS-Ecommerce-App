import { Metadata } from "next";
import Form from './Form'
export const metadata:Metadata={
    title:'Payment Option'
}
export default async function PaymentPage(){
    return <Form/>
}