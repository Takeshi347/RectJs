import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//importa o css
import './App.css'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

function App() {
//Sempre tem que ter uma div vazia
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

export default App
