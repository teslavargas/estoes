import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CreateProject from "../components/create/CreateProject";
import Edit from "../components/edit/Edit";
import MyProjects from "../components/home/MyProjects";

export const AppRouter = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="home" element={<MyProjects />} /> 
               <Route path="create" element={<CreateProject/>}/>
               <Route path="edit/:id" element={<Edit />}/>
               <Route path="/*" element={<Navigate to="home" replace />} /> 
           </Routes>
        </BrowserRouter> 
    )
}
  
