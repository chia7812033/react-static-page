import React from "react"
import Photo from "./components/Photo"
import Name from "./components/Name"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Photo />
            <div className="main">
                <Name /> 
                <Buttons />  
                <About />
                <Interests />
            </div>
            <Footer />
        </div>     
    )
}