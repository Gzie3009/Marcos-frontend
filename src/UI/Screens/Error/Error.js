import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Error = () => {
  const navigate=useNavigate()
  const login  = useSelector((state)=>{
    return state.users["auth"]
  })
useEffect(() => {
  // setTimeout(()=>{
  //   if(login){
  //     navigate("/")
  //   }else{
  //     navigate("/login")
  //   }
  // },1500)
}, [])

  return (
    <>
        <div className='h-[72vh] w-screen grid place-items-center'>
            <div className='text-6xl'>{login?<>Redirecting to HOME soon </>:<>Login First and then Try</>}</div>
        </div>
    </>
  )
}

export default Error