import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para citas */}
        <Route path="/citas" element={<Citas />} />

        {/* Ruta para usuarios */}
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}
export default App
