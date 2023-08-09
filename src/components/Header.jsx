import React from "react"
import style from './Header.module.css'
import Logo from "../assets/IgniteLogo.svg"

export function Header() {
  return (
    <div className={style.header}>
      <img src={Logo} alt="" />
    </div>
  )
}
