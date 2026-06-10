import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RoguelikeGame from './game/ui/RoguelikeGame'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoguelikeGame />
  </StrictMode>,
)
