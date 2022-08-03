import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Tarefas from './pages/Tarefas'
import Posts from './pages/Posts'
import Comments from './pages/Comments'
import './index.css'

import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Alert from '@mui/material/Alert'
import { Link, Typography } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tarefas/:user_id" element={<Tarefas />} />
        <Route path="posts/:user_id" element={<Posts />} />
        <Route path="comments/:post_id" element={<Comments />} />
        <Route
          path="*"
          element={
            <>
              <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 40, color: '#EC7E31' }}>Essa página não existe.</Typography>
              <Link href='/' sx={{ fontFamily: 'Comfortaa' }}>Voltar para página inicial</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
