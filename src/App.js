import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import HeadLineCard from "./Components/HeadLineCard";
import Food from "./Components/Food/Food";
import Category from "./Components/Category";

function App(props) {
    return (
        <div className={"bg-blend-color-dodge drop-shadow-lg "}>
            <Navbar/>
            <Hero/>
            <HeadLineCard/>
            <Food data={props.data}/>
            <Category/>
        </div>
    );
}

export default App;
