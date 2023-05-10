import React, { FC, HtmlHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends HtmlHTMLAttributes <HTMLButtonElement> {
    type: "dark" | "light",
    children: React.ReactNode,
    widthFull?:true,
    fontSize?:string,
    letterSpacing?:string
}

const Button: FC<ButtonProps> = ({type, widthFull, children, fontSize ,letterSpacing, ...props}) => {
    let colors = type==="dark"?(
        {
            "color": "white",
            "border": "1px solid black",
            "backgroundColor" :"#1f1f1f"
        }
    ):(
        {
            "color": "black",
            "border": "1px solid black",
            "backgroundColor" :"white"
        }
    )
    let width = widthFull?{"width":"100%"}:{"width":"fit-content"}
    let fontsize = fontSize?{"fontSize" :fontSize}:{"fontSize" :"14px"}
    let letterspacing = letterSpacing?{"letterSpacing" : letterSpacing}:{"letterSpacing":"0px"}

  return (
    <button 
    className={'btn-style ' + (type==="dark"? 'hover-btn-dark': 'hover-btn-light')}
    {...props}
    style={{
        "padding":"0px 25px",
        "height":"50px",
        ...fontsize,
        ...letterspacing,
        "fontFamily":"'IBM Plex Mono', monospace",
        "cursor":"pointer",
        ...width,
        ...colors
    }}>
        {children}
    </button>
  )
}

export default Button