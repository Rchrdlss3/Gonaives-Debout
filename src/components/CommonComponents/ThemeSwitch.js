import { useEffect,useState } from 'react';
import { getCurrentTheme, setCurrentTheme } from "../../helper/commonhelper"
import { darkTheme } from '../../helper/styles';

export default function ThemeSwitch ({theme,setTheme}){
const [isChecked,setIsChecked] = useState((getCurrentTheme() == darkTheme));

useEffect(() => {
    setIsChecked(theme == darkTheme)
    document.getElementById('body').style.transition = '.4s'
    document.getElementById('body').style.backgroundColor = theme.primary
},[theme])

return (
<div style = {{
    display: 'inline-flex'
}}>
    <label className ='switch'
    style = {{
        position: 'relative',
        display: 'inline-block',
        width: '44px',
        height: '14px'       
    }} >
        <input 
        type = 'checkbox' 
        defaultChecked = {isChecked}
        style = {{
            opacity: 0,
            width: 0,
            height: 0
        }}
        onClick = {
            (e) => {
            setTheme(setCurrentTheme(e.target.checked))
            }}>
        </input>
        <span style = {{
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius:' 15px',
        WebKitTransition: '.4s',
        transition: '.4s',
        border: `1px solid ${theme.primary}`,
        backgroundColor: `${theme.secondary}`
    }}
    >
    </span>
    <span style = {{
        width: '13px',
        height: '14px',
        position: 'absolute',
        borderRadius: '50%',
        transition: '.4s',
        WebKitTransition: '.4s',
        backgroundColor: `${theme.tertiary}`,
        right: isChecked ? 0:null,
        left: isChecked ? null:0
    }}>
    </span>
    </label>
</div>
)
}