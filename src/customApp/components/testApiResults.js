import React from 'react'
import GuestDetailStyle from "./guestDetailsResult.style";

export default function testApiResults({data}) {
    console.log(data);
  return (
    <GuestDetailStyle>
    {
        JSON.stringify(data) !== "{}" ? 
        <div style={{align: "center"}}>
            <p>Post Id = {data.id}</p>
            <p>User Id = {data.userId}</p>
            <p>Title = {data.title}</p>
            <p>{data.body}</p>
        </div> 
        :
        <p>no data</p> 
    }
    </GuestDetailStyle>
  )
}
