// import React from "react";
import HomeOne from '../../companents/Carusel/HomeOne'
import HomeTwo from '../../companents/HomeTwo/HomeTwo';
import HomeThree from '../../companents/HomeThree/HomeThree'
import HomeFour from '../../companents/HomeFour/HomeFour';
import HomeFive from '../../companents/HomeFive/HomeFive';
import NavbarFooter from '../../companents/NavbarFooter/NavbarFooter'
import Footer from '../../companents/Footer/Footer';

function Homepage(){
    return(
        <div className="container mx-auto">
            <HomeOne/>
            <HomeTwo/>
            <HomeThree/>
            <HomeFour/>
            <HomeFive/>
            <Footer/>
            <NavbarFooter/>
        </div>
    )
}

export default Homepage;