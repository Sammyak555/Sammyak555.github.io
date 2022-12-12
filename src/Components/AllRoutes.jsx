import { Route, Routes } from "react-router-dom"
import  Skills  from "../Pages/Skills"


export const AllRoutes=()=>{

    return(
        <Routes>
            <Route path="/#about" element="about"/>
            <Route path="/#skills" element={<Skills/>}/>
        </Routes>
    )
}