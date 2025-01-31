import Hero from "../components/Hero"
{/*React Router and setting multiple pages*/}

const homepage = () => {

  // const access= useSelector((state:RootState)=>state.auth.accessToken)
  // const name= useSelector((state:RootState)=>state.auth.username)
  return (
    <>
       <Hero/>
      {/* <HomeCards /> */}
      {/* <JobListing isHome={true}/>
      <ViewAllJobs /> */}
    </>
  )
}

export default homepage