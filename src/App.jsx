import './App.css'
import { Nav, Footer } from "./Index"
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Nav />
      <main className='h-[80vh] main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
