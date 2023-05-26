import axios from "axios";
import { NextResponse } from "next/server"

export async function POST(request) {
    const paymentDetails = await request.json();
    console.log(paymentDetails);

    const res = await axios.post('https://api.na.bambora.com/v1/payments', paymentDetails, {
        headers: {
            "Authorization": `Passcode ${process.env.BAMBORA_PAYMENT_PASSCODE}`,
            "Content-Type": "application/json"
        }
    });


    if(res.status !== 200) return NextResponse("There was a problem making payment. Try again later!");

    const data = await res.data;

    return NextResponse.json(data);
}
