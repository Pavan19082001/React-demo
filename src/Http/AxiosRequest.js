import React from 'react';
import axios from "axios";

function AxiosRequest() {
    let getUser = () =>{
        axios.get("http://localhost:8080/allusers").then((res)=>console.log(res.data));
    };
    let postUser = () =>{
      let requestBody = {
        "userName": "NaveenNKR",
        "firstName": "Naveen",
        "lastName": "Kumar",
        "emailId": "naveenkyadav133@gmail.com",
        "password": "naveen123",
        "contact": {
          "addressLine": "IDL Line showroom, Kommarapet",
          "zipCode": 543627,
          "city": "vijayawada",
          "state": "Andhra Pradesh",
          "country": "India",
          "mobileNo": 9912830382
        },
        "bookings": {
          "bookingNumber": 2468,
          "bookingDate": "02-05-2022",
          "seat": {
            "seatNo": 100
          }
        }
      }
      axios.get("http://localhost:8080/user/register", requestBody).then((res)=>console.log(res.data));
    };
  return (
    <div>
        <button onClick={()=>getUser()}>GetUser</button>
        <button onClick={()=>postUser()}>AddUser</button>
    </div>
  )
}

export default AxiosRequest