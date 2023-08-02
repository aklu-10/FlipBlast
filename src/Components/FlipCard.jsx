import React, { useState } from 'react'

const FlipCard = ({cardId, cardName, frontSideImg, backSideImg, checkMatchingCard}) => {

    const [de_rotate, setDe_rotate] = useState(false);

    const handleCardFlip = (e) =>
    {
        if(de_rotate)
        {
            e.target.parentElement.style.transform = 'rotateY(0deg)';
            setDe_rotate(false)
        }
        else
        {
            checkMatchingCard(cardId, cardName, e.target.parentElement, setDe_rotate)
            e.target.parentElement.style.transform = 'rotateY(180deg)';
            setDe_rotate(true)
        }
    }

    return (
        <>
            <div className='card' onClick={handleCardFlip}>
                <img className='frontSide' src={frontSideImg}/>
                <img className='backSide' src={backSideImg}/>
            </div>
        </>
    )
}

export default FlipCard