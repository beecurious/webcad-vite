
import { useState } from "react";
import supabase from "../supabaseClient"


export default function Dashboard() 
{
    const getData = async() =>
    {
        const data = await supabase.from("projects").select("*");
        console.log("t")
    }

    return (

    <div className="">


    </div> 
         
         
)
}