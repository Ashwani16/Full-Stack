import {useState} from "react"
import {Link} from "react-router-dom"
const WomenEthnic=()=>{

    return <div className="sm"> 
             <div className="smd" >
                 <h3>All Women Ethnic</h3>
                 <p>View All</p>
             </div>
             <div className="smd" >
                 <h3>Sarees</h3>
                 <Link to="/products/:type"><p>Silk Sarees</p></Link>
                 
                  <p>Cotton Silk Sarees</p>
                  <p>Cotton Sarees</p>
                 <p>Georgette</p>
                <p>Chiffon Sarees</p>
                <p>Satin Sarees</p>
                <p>Embroiderd</p>
            </div>
            <div className="smd" >
                <h3>Kurtis</h3>
                <p>All Kurtis</p>
                <p>Anarkali Kurtis</p>
                <p>Rayon Kurtis</p>
                <p>Cotton Kurtis</p>
                <p>Embroidered Kurtis</p>
            </div>
            <div className="smd" >
                <h3>Kurta Sets</h3>
                <p>All Kurta Sets</p>
            </div>
            <div className="smd" >
                <h3>All Suits & Dress Materials</h3>
                <p>All Suits & Dress Materials</p>
                <p>Cotton Suits</p>
                <p>Embroidered Suits</p>
                <p>Chaneri Suits</p>
                <p>Embroidered Kurtis</p>
            </div>
            <div className="smd" >
                <h3>Other Ethnic</h3>
                <p>Blouse</p>
                <p>Dupattas</p>
                <p>Lehanga</p>
                <p>Gown</p>
                <p>Ethnic Bottomwear</p>
            </div>
    </div>
}
export default WomenEthnic