import Errorpage from './pages/ErrorPage'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/homepage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'; // Include this for custom Tailwind styl
import { useState } from 'react'
// import Register from './components/Register'
import Login from './components/login'
import RequireAuth from './auth/requireAuth'
import PersistLogin from './auth/persistLogin'


const App = () => {
  
const router = createBrowserRouter(createRoutesFromElements(
<>
  //LAYOUTS
  //okay so we use layouts for mostly used components like nav bar like this we just wrap all the child routes inside the layout route and when we do this we have to use outlet in the layout file to display the child routes and you can see that in the MainLayout.tsx
  
  <Route element={<PersistLogin/>}>
  <Route index element={<Homepage />}/>
  </Route>

<Route path='/' element={<MainLayout/>}>

<Route element={<PersistLogin/>}>
<Route element={<RequireAuth allowedRoles={[2024]}/>}>

</Route>
<Route element={<RequireAuth allowedRoles={[1998,2004]}/>}>

</Route>
</Route>

<Route path='*' element={<Errorpage error={{status:404,data:{message:'Oops Page not found!'}}}/>}/>

</Route>
  {/* <Route path='/register' element={<Register/>}/> */}
<Route path='/login' element={<Login/>}/>
</>))


  return (

    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App