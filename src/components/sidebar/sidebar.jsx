import React from "react";
import './sidebar.css';
import { FaTint ,FaRunning ,FaAward } from "react-icons/fa";
export default function Sidebar(){


    return(
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Hermes God Burst</h3>
            <button className="buy-now">
                Buy Now
            </button>
            </div>
            <div className="price">

                <span>$147.88</span>
            </div>
            
            <img src="https://storage.googleapis.com/a1aa/image/n5ieErRNa8zjaKtaCYyH1YnvYd0czFtlXxu1Ven5CSg4eiQnA.jpg" alt="Hermes God Burst watch" />
            <div className="indicators">
                <span className="active"></span>
                <span></span>
                <span></span>
            </div>

            <div className="features">
                <div className="feature-item">
                    <FaTint/>
                    <p>WaterProof</p>
                </div>
                <div className="feature-item">
                    <FaRunning />
                    <p>Sports Wear</p>
                </div>
                <div className="feature-item">
                    <FaAward />
                    <p>14+ Awards</p>
                </div>

            </div>
        </aside>
    );
};