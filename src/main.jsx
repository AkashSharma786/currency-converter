import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className='flex flex-col items-center justify-center min-h-screen gap-5 bg-[url(./backGround.jpg)] bg-cover'>
    <App />
  </div>
  

)
