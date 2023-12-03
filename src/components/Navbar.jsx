
import React from "react"
import { FaReact } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav>
            <FaReact className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}