import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <Router>
      <ScrollToTop/>
      <App />
    </Router>

 
)
