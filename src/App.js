import { Route, Routes} from 'react-router-dom';
import HomePage from './views/HomePage';
import ContactPage from './views/ContactPage';
import ProjectsPage from './views/ProjectsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      
    </Routes>
  )
}

export default App
