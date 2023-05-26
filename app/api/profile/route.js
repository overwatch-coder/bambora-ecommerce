import axios from "axios";
import { NextResponse } from "next/server"

export async function POST(request) {
    const profile = await request.json();

    const res = await axios.post('https://api.na.bambora.com/v1/profiles', profile, {
        "headers": {
            "Authorization": `Passcode ${process.env.BAMBORA_PROFILE_PASSCODE}`,
            "Content-Type": "application/json"
        }
    });
    if(res.status !== 200) return new NextResponse("There was a problem making payment!");

    const data = await res.data;

    return NextResponse.json({customer_code: data.customer_code, order_number: data.order_number});
}

export async function DELETE(request) {
    const profileId = await request.json();

    const res = await axios.delete(`https://api.na.bambora.com/v1/profiles/${profileId}`, {
        "headers": {
            "Authorization": `Passcode ${process.env.BAMBORA_PROFILE_PASSCODE}`,
            "Content-Type": "application/json"
        }
    });

    if(res.status !== 200) return new NextResponse("There was a problem making payment!");

    const data = await res.data;

    return NextResponse.json(data.customer_code);
}