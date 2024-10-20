import React from "react";
import Featuredcollectibles from "../featuredcollection/featuredcollectibles";
import './mainsection.css'
export default function Mainsection(){



    return (
        <>
        <section className="main-section">
            <h1>Watches that show much more than just time</h1>
            <p>Handpicked collection of premium time keepers for all purposes and age</p>
            <button>Explore Now</button>
            <h2>Featured Collectibles</h2>
            <Featuredcollectibles/>
        </section>
        </>
    );
};