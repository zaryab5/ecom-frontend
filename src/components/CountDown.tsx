import React, { useState, useEffect } from 'react';

const CountDown = () => {

    const [countdown, setCountdown] = useState({
        days: 15,
        hours: 10,
        minutes: 24,
        seconds: 37,
      });
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCountdown((prevCountdown) => {
            // Destructure the previous countdown values
            let { days, hours, minutes, seconds } = prevCountdown;
      
            // Update the countdown logic
            seconds -= 1;
      
            if (seconds < 0) {
              seconds = 59;
              minutes -= 1;
      
              if (minutes < 0) {
                minutes = 59;
                hours -= 1;
      
                if (hours < 0) {
                  hours = 23;
                  days -= 1;
                }
              }
            }
      
            // Return the updated countdown values
            return { days, hours, minutes, seconds };
          });
        }, 1000);
      
        // Clear the interval on component unmount
        return () => clearInterval(interval);
      }, []);



  return (
    <div>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-2xl font-extrabold">
      <span style={{"--value":15} as React.CSSProperties}>{countdown.days}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-2xl font-extrabold">
      <span style={{"--value":10} as React.CSSProperties}>{countdown.hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-2xl font-extrabold">
      <span style={{"--value":24} as React.CSSProperties}>{countdown.minutes}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-2xl font-extrabold">
      <span style={{"--value":37} as React.CSSProperties}>{countdown.seconds}</span>
    </span>
    sec
  </div>
</div>
        </div>
  )
}

export default CountDown