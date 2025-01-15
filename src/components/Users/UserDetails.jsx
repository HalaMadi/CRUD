import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const userDetails = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`)
    setValue('userName',data.user.userName)
    setValue('email', data.user.email)
    setValue('phone', data.user.phone)
  }
  useEffect(() => {
    userDetails();
  }, [])
  const updateUser=async(value)=>{
    const response =await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,{
      userName:value.userName,
      email:value.email,
      phone:value.phone
    })
    if(response.status==200){
      navigate('/')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(updateUser)}>
        <div className="form-floating mb-3">
          <input type="text" className={`form-control ${errors.userName ? 'Invalid' : ''}`} id="userName" {...register('userName', { required: 'User Name is required!', maxLength: 20 })} />
          <label htmlFor="userName">User Name</label>
          {errors.userName && (
            <span className="errorMessage">{errors.userName.message}</span>
          )}
        </div>
        <div className="form-floating mb-3">
          <input type="email" className={`form-control ${errors.email ? 'Invalid' : ''}`} id="email" {...register('email', { required: 'User Email is required!' })} />
          <label htmlFor="email">Email address</label>
          {errors.email && (
            <span className="errorMessage">{errors.email.message}</span>
          )}
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="phone" {...register('phone')} />
          <label htmlFor="phone">Phone</label>
        </div>
        <button className="btn btn-primary" onClick={userDetails}>Update</button>
      </form>
    </div>
  )
}

export default UserDetails