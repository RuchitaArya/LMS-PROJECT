
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import GetCom from './GetCom'
import { BrowserRouter } from 'react-router-dom'
import './TestModule'



function ProjectRun() {
      return (
        <>
        <div>
        <Header></Header>
        </div>
        <div>
          <BrowserRouter>
          <GetCom ></GetCom>  
       </BrowserRouter>
          </div>
        </>
      )
    }
    export default ProjectRun;