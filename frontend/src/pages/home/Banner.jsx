import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png"

const Banner = () => {
    return (
        <div className="section__container header__container">
            <div className="header__content z-30">
                <h4 className="uppercase">UP TO 20% DISCOUNT on</h4>
                <h1>Pet Adoption</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa, hic autem, nemo harum totam labore, omnis obcaecati quis pariatur eaque! Earum, aperiam ab! Exercitationem quos sint doloremque tempore aperiam!</p>
                <button className="btn"><Link to="/shop">EXPLORE NOW</Link></button>
            </div>
            <div className="header__image">
                <img src={bannerImg} alt="bannerImg" />
            </div>
        </div>
    );
};

export default Banner;