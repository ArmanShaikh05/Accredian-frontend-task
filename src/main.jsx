import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './context/GlobalContext'
import './index.css'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
    <Toaster />
  </GlobalContextProvider>,
)
