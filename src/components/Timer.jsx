import { useState,useEffect } from "react";
import { timer } from "../helpers/timer";

const deadline = '2024-01-14T14:34:00';

const Timer = () => {
    const [time, setTime] = useState({});
    const [timeEnd, setTimeEnd] = useState(true);

    const onSetTime = (times) => {
      setTime(times);
      if (times?.total === 0) {
        setTimeEnd(true);
      }
    }; 

    
    useEffect(() => {
      setTimeEnd(false);
      const tt = timer(deadline, onSetTime);

      if (tt <= '0') {
        setTimeEnd(true);
      }
      
      return () => {
        clearInterval(tt);
        setTimeEnd(true);
      };
    }, [deadline]); 
  return (
    <>
      {!timeEnd && (
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <div>{time?.day ? time.day : '00'}</div>
          <div>{time?.hour ? time.hour : '00'}</div>
          <div>{time?.minutes ? time.minutes : '00'}</div>
          <div>{time?.seconds ? time.seconds : '00'}</div>
        </div>
      )}
    </>
  );
}
export default Timer