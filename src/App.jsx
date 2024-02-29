import { BrowserRouter } from 'react-router-dom'
import './App.module.scss'
import BaseLayout from './components/BaseLayout'

export default function App() {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  )
}
