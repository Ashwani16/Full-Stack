import {useState} from "react"
import {Link} from "react-router-dom"
const WomenEthnic=()=>{

    return <div className="sm"> 
             <div className="smd" >
                 <h3>All Women Ethnic</h3>
                 <Link to="/products/allsarees"><p>View All</p></Link>
             </div>
             <div className="smd" >
                 <h3>Sarees</h3>
                 <Link to="/products/allsarees"><p>Silk Sarees</p></Link>
                 <Link to="/products/allsarees"><p>Cotton Silk Sarees</p></Link>
                 <Link to="/products/allsarees"><p>Cotton Sarees</p></Link>
                 <Link to="/products/allsarees">  <p>Georgette</p></Link>
                 <Link to="/products/allsarees"><p>Chiffon Sarees</p></Link>
                 <Link to="/products/allsarees"><p>Satin Sarees</p></Link>
                 <Link to="/products/allsarees">  <p>Embroiderd</p></Link>
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