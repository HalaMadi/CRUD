import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails=()=> {
  const {id}=useParams();

// const Details=async()=>{
//   const {data}=await axios.get(`${import.meta.env.VITE_BURL}/${id}`)

// }
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails