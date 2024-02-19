import React from 'react'
import Card from '../components/Card/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Card />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home