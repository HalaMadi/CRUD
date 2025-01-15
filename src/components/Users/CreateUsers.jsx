import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const registerUser = async (userData) => {
    const data = await axios.post(`${import.meta.env.VITE_BURL}/users`, userData)
    if (data.status == 201) {
      navigate('/')
    }
  }
  return (
    <form onSubmit={handleSubmit(registerUser)}>
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
        <input type="password" className={`form-control ${errors.password ? 'Invalid' : ''}`} id="Password" {...register('password', { required: 'Password is required', min: 4 })} />
        <label htmlFor="Password">Password</label>
        {errors.password && (
          <span className="errorMessage">{errors.password.message}</span>
        )}
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="phone" {...register('phone')} />
        <label htmlFor="phone">Phone</label>
      </div>
      <button className="btn btn-primary" type='submit' >Submit</button>
    </form>
  )
}

export default CreateUsers