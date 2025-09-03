import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

export default function App() {
  return (<>
   <Header/>
   <section id="home">

  <Hero />
   </section>
   <section id="about">

   <AboutMe />
   </section>
   <section id='skills'>

   <Skills/>
   </section>
   <section id='projects'>

   <Projects />
   </section>
   <section id='certifications'>

   <Certifications />
   </section>
   <section id='contact'>

   <Contact />
   </section>
   <Footer/>
   <Sidebar/>
  </>
  )
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
