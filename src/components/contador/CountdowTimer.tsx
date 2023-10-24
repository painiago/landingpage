'use client';
import styled from "styled-components";
import React, {useState, useEffect} from "react";

interface CountDownTimerProps{
    targetDate: Date;
}

const BoxTimeIntro = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  font-weight: bold;
  p:nth-of-type(1){
    font-size: 2rem;
  }
  p:nth-of-type(2){
    font-size: 1.5rem;
  }
  @media (max-width:768px) {
    p{
      font-size: 1rem !important;
    }
  }
`
const BoxIntroIntro = styled.div`
  display: flex;
  margin-top: 20px;

  @media (max-width:768px) {
  align-items: center;
  margin-left: 30px;
  }
`

const CountdowTimer: React.FC<CountDownTimerProps> = ({targetDate})=>{
    const [timeLeft, setTimeLeft] = useState (() => calculateTimeLeft(targetDate));

    useEffect(() =>{
        const TimerInterval = setInterval(() =>{
            (setTimeLeft(calculateTimeLeft(targetDate)));
        }, 1000);

        return () =>{
            clearInterval(TimerInterval);
        };
    }, [targetDate]);


    function calculateTimeLeft (targetDate: Date){
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        if(difference <= 0){
            return{
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 *24 )) / (1000 * 60 * 60 ));
        const minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60 ));
        const seconds = Math.floor((difference % (1000 * 60 )) / 1000 );
        
        return{
            days,
            hours,
            minutes,
            seconds
        };
    }
    return(
      <>
       <BoxIntroIntro id='contador'>
            <BoxTimeIntro>
              <p>{timeLeft.days.toString().padStart(2, '0')}</p>
              <p>Dias</p>
            </BoxTimeIntro>
            <BoxTimeIntro>
              <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
              <p>Horas</p>
            </BoxTimeIntro>
            <BoxTimeIntro>
              <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
              <p>Min</p>
            </BoxTimeIntro>
            <BoxTimeIntro>
              <p>{timeLeft.seconds.toString().padStart(2 ,'0')} </p>
              <p>Seg</p>
            </BoxTimeIntro>
          </BoxIntroIntro>  
      </>
  )
}


export default CountdowTimer;