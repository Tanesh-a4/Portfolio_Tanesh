import React from 'react';
import { render } from '@testing-library/react';
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'
import {Sidebar,ThemeTemplates} from'./components'
import {Home,About,Contact,BlogPage,Gaming,ProjectPage,Errorpage,Tutorial} from './pages';

import "./App.scss"
import './utils/templateColors.scss'
const App= () => {
    return (
        <BrowserRouter>
            <Sidebar/>
            <ThemeTemplates/>
            <Routes>
                <Route path ='/' element={<Home/>}></Route>
                <Route path ='/about' element={<About/>}></Route>
                <Route path ='/contact' element={<Contact/>}></Route>
                <Route path ='/gaming' element={<Gaming/>}></Route>
                <Route path ='/blog' element={<BlogPage/>}></Route>   
                <Route path ='/project' element={<ProjectPage/>}></Route>  
                <Route path ='/tutorial' element={<Tutorial/>}></Route>
                <Route path ='*' element={<Errorpage/>}></Route>      
            
         
            </Routes>
        </BrowserRouter>
    )
}
export default App