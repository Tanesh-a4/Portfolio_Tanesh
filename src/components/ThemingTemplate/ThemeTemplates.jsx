import React from 'react'
import './themetemplate.scss'
import { useGLobalContext } from '../../hooks/contextAPI'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars, BsFillSunFill, BsXLg } from 'react-icons/bs'
const ThemeTemplates = () => {
    const {changeTemp,setChangeTemp,handleTemp,isTemplateOpen,setIsTemplate,closeTemplate,openTemplate,colorTheme,handleTheme,} = useGLobalContext()
    // console.log(useGLobalContext())
  return (
    <>
    {/*Fisettings  wrapper*/}
     <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className='theme-icon switch__color'/>
     </div>
     {/* Theeme wrapper*/}
    <div className={`${isTemplateOpen ?"theme-wrapper show-template":"theme-wrapper"}`}>
        {/*thee header */}
        <div className="theme-header">
            <span>Theme Template</span>
            <span> <BsXLg className='close-template switch__color' onClick={closeTemplate}/></span>
        </div>
        {/*Mode */}
        <div className="mode">
            <div onClick={() => handleTheme("light-mode")} className={`${colorTheme === 'light-mode' ? 'active-mode' : ''}`}>
                <BsFillSunFill className='icon switch__color'/>
            </div>
            <div onClick={() => handleTheme("dark-mode")}  className={`${colorTheme === 'dark-mode' ? 'active-mode' : ''}`} >
                <BsMoonStars className='icon switch__color'/>
            </div>
        </div>
        {/*Template wrapper */}
        <div className="template-wrapper">
            {/*template wrapper1 */}
            <div onClick={()=>handleTemp("template-1")}  className={`template ${
              changeTemp === 'template-1' ? 'switch__border-color' : ''
            }`}>
                <div className='template-1'></div>
            </div>
            {/*template wrapper2 */}
            <div onClick={()=>handleTemp("template-2")}  className={`template ${
              changeTemp === 'template-2' ? 'switch__border-color' : ''
            }`}>
                <div className='template-2'></div>
            </div>
            {/*template wrapper3 */}
            <div onClick={()=>handleTemp("template-3")}  className={`template ${
              changeTemp === 'template-3' ? 'switch__border-color' : ''
            }`}>
                <div className='template-3'></div>
            </div>
            {/*template wrapper4 */}
            <div onClick={()=>handleTemp("template-4")}  className={`template ${
              changeTemp === 'template-4' ? 'switch__border-color' : ''
            }`}>
                <div className='template-4'></div>
            </div>
            {/*template wrapper5 */}
            <div onClick={()=>handleTemp("template-5")}  className={`template ${
              changeTemp === 'template-5' ? 'switch__border-color' : ''
            }`}>
                <div className='template-5'></div>
            </div>
            {/*template wrapper6 */}
            <div onClick={()=>handleTemp("template-6")}  className={`template ${
              changeTemp === 'template-6' ? 'switch__border-color' : ''
            }`}>
                <div className='template-6'></div>
            </div>
            {/*template wrapper7 */}
            <div onClick={()=>handleTemp("template-7")}  className={`template ${
              changeTemp === 'template-7' ? 'switch__border-color' : ''
            }`}>
                <div className='template-7'></div>
            </div>
        </div>
    </div>
        </>
  )
}

export default ThemeTemplates
