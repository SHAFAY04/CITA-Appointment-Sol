import { useSelector } from "react-redux"
import Hero from "../components/Hero"
import { RootState } from "../store"
{/*React Router and setting multiple pages*/}

const homepage = () => {

  const access= useSelector((state:RootState)=>state.auth.accessToken)
  const name= useSelector((state:RootState)=>state.auth.username)
  const sub= access?`WELCOME ${name}`:undefined
  return (
    <>
     <Hero title='TheJobPoint' subtitle={sub}>
Your All in One Jobs Solution!      </Hero>
      
    </>
  )
}

export default homepage