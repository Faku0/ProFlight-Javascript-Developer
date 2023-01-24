import React, { useState } from "react";
import './ChallengeCss.css';

export default function Challenge() {
    
    const images = ['https://i.imgur.com/YL1Kw1k.png', 'https://i.imgur.com/YL1Kw1k.png', 'https://i.imgur.com/YL1Kw1k.png', 'https://i.imgur.com/YL1Kw1k.png'];
    const [currentImg, setCurrentImg] = useState(0);

    function handleChange(a) {

        if(a) {
            setCurrentImg(currentImg - 1)
        } 
        else{
            setCurrentImg(currentImg + 1)
        }
    }

    images.splice(currentImg, 1, 'https://i.imgur.com/eNQKGGn.png')
    if(currentImg > 3) setCurrentImg(0);
    if(currentImg < 0) setCurrentImg(3); 

    return (
        <div className="page">
            <div className="content">
                <button type="button" onClick={(a) => handleChange(a)}><img id="left"src="https://i.imgur.com/NsaiGqe.png" alt=""/></button>
                <img src={images[0]} alt=""/>
                <img src={images[1]} alt=""/>
                <img src={images[2]} alt=""/>
                <img src={images[3]} alt=""/>
                <button type="button" onClick={() => handleChange()}><img id="rigth" src="https://i.imgur.com/YkFXd1g.png" alt=""/></button>
            </div>
        </div>
    )
}