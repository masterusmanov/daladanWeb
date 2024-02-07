// import React from "react";
import HomeOne from '../../companents/Carusel/HomeOne'
import HomeTwo from '../../companents/HomeTwo/HomeTwo';
import HomeThree from '../../companents/HomeThree/HomeThree'

function Homepage(){
    return(
        <div className="container mx-auto">
            <HomeOne/>
            <HomeTwo/>
            <HomeThree/>
        </div>
    )
}

export default Homepage;