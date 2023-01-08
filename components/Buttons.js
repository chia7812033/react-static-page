import React from "react"
import Email from "./Email"
import LinkedIn from "./LinkedIn"

export default function Buttons() {
    return (
        <div className="buttons">
            <button className="button email"><Email />Email</button> 
            <button className="button linkedin"><LinkedIn />LinkedIn</button> 
        </div>
    )
}