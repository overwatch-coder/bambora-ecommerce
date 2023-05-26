import axios from "axios";
import { NextResponse } from "next/server"

export async function POST(request) {
    const cardDetails = await request.json();
    const res = await axios.post('https://api.na.bambora.com/scripts/tokenization/tokens', cardDetails);
    if(res.status !== 200) return new NextResponse("There was a problem making payment!");

    const data = await res.data;
    
    return NextResponse.json(data.token);
}