import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`)
    setUsers(data.users||[])
  }
  useEffect(() => {
    getUser();
  }, [users])
  const deleteUser=async(id)=>{
    const { data } = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`)
    setUsers(data.users||[])
  }
  return (
    <>
    <div className="row gap-3">
      {users.map(user=>
        <div key={user._id} className="card" style={{ width: '16rem' }}>
          <div className="card-body">
            <h5 className="card-title">{user.userName}</h5>
            <p className="card-text">{user.email}</p>
            <div className="d-flex gap-2">
            <Link to={`/users/${user._id}`} className="btn btn-primary">Details</Link>
            <button onClick={()=>deleteUser(user._id)} className="btn btn-danger ">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
      <div className="d-flex justify-content-center align-items-center m-3">
      <Link to={'/create-users'} className="btn btn-success w-25 ">Create Users</Link>
      </div>
      </>
  )
}

export default Home