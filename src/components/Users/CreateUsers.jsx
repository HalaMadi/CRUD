import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const { register, handleSubmit } = useForm();
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
        <input type="text" className="form-control" id="userName" {...register('userName')} />
        <label htmlFor="userName">User Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="email" {...register('email')} />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" id="Password" placeholder="Password" {...register('password')} />
        <label htmlFor="Password">Password</label>
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