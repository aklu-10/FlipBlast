import React, { useRef, useState } from 'react'
import './App.css';
import FlipCard from './Components/FlipCard';
import Timer from './Components/Timer';

const App = () => {

  let backSideImage = './backSide.png';

  let frontSideImages = ['./frontSide.jpg', './frontSide2.jpg', './frontSide3.jpg']

  const [points, setPoints] = useState(0);

  const duoIds = useRef({});

  const checkMatchingCard = (id, cardName, cardEvent, setRotator) =>
  {
    if(Object.keys(duoIds.current).length !== 2 )
    {
      duoIds.current = {...duoIds.current, [cardName]:{id,cardEvent,setRotator}};

      if(Object.keys(duoIds.current).length === 2)
      {
          let keys = Object.keys(duoIds.current);

          if(duoIds.current[keys[0]].id===duoIds.current[keys[1]].id)
          {
            setPoints(points+1);
            let card1 = duoIds.current[keys[0]];
            let card2 = duoIds.current[keys[1]];
            duoIds.current={};
            
            // card1.cardEvent.style.transition = '.4s ease';
            // card2.cardEvent.style.transition = '.4s ease';
            // card1.cardEvent.style.opacity = '.2';
            // card2.cardEvent.style.opacity = '.2';

            setTimeout(()=>
            {
              card1.cardEvent.remove();  
              card2.cardEvent.remove();  
            },400)
          }
          else
          {
            let card1 = duoIds.current[keys[0]];
            let card2 = duoIds.current[keys[1]];
            duoIds.current={};
            card1.setRotator(false)
            card2.setRotator(false)
            setTimeout(()=>
            {
              card1.cardEvent.style.transform = 'rotateY(0deg)'
              card2.cardEvent.style.transform = 'rotateY(0deg)'
            },200);
          }
      }

    }
  }

  return (
    <>
      <div className='wrapper'>

        <FlipCard cardId={1} cardName={"card1"} frontSideImg={frontSideImages[0]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard} />

        <FlipCard cardId={2} cardName={"card2"} frontSideImg={frontSideImages[1]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard}/>

        <FlipCard cardId={1} cardName={"card3"} frontSideImg={frontSideImages[0]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard}/>

        <FlipCard cardId={2} cardName={"card4"} frontSideImg={frontSideImages[1]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard}/>

        <FlipCard cardId={3} cardName={"card5"} frontSideImg={frontSideImages[2]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard}/>

        <FlipCard cardId={3} cardName={"card6"} frontSideImg={frontSideImages[2]} backSideImg={backSideImage} checkMatchingCard={checkMatchingCard}/>

      </div>

      <div>
        <p>Points - {points}</p>
        <Timer minutes={2}/>
      </div>

    </>

  )

}

export default App