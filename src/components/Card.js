import { useState } from "react";

function Card({id, name, info, image, image_missing, price, removeCard}) {
    const [readBtn, setReadBtn] = useState('Read More');
    const [desc, setDesc] = useState(`${info.substr(0, 200)}...`);
    const [isExpended, setExpended] = useState(false);

    function expandDesc(){
        setExpended(!isExpended);
        setReadBtn(isExpended ? 'Read More' : 'Show Less');
        setDesc(isExpended ? `${info.substr(0, 200)}...` : info);
    }
    return (
        <div className="card">
            <img src={image} alt={image_missing}></img>
            <div className="card-info">
                <h4>₹ {price}</h4>
                <div className="title">{name}</div>
                <p>
                    {desc} 
                    <span onClick={expandDesc}> {readBtn}</span>
                </p>
            </div>
            <button onClick={() => removeCard(id)}>Not Interested</button>
        </div>
    );
}

export default Card;