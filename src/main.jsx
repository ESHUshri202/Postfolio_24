import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Technologies from './components/Technologies.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Hero/>
//       }, {
//         path:"about",
//         element: <About/>
//       },{
//       }, {
//         path:"technologies",
//         element: <Technologies/>
//       },{
//       }, {
//         path:"project",
//         element: <Project/>
//       },{
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/technologies' element={<Technologies/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/project/:title" element={<ProjectDetails/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 
    selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <RouterProvider router={router}/>
      </div>  
    </div>
  </React.StrictMode>,
)
