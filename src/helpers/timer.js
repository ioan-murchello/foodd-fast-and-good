 
export const timer = (rtime, cb) => {
  const getRemainigTime = (time) => {
    const total = Date.parse(time) - Date.parse(new Date());

    const day = Math.floor(total / (1000 * 60 * 60 * 24));
    const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60); 
    return {
      t: total,
      day,
      hour,
      minutes,
      seconds,
    };
  };

  const setClock = (dif) => {
    const timer = setInterval(updateClock, 1000);

    const updatedClock = updateClock();

    function updateClock() {
      const t = getRemainigTime(dif); 

      if (t.t <= 0) { 

        const nulls = Object.fromEntries(
          Object.entries(t).map(([key, value]) => [key, 0])
        );

        cb(nulls);
        
        clearInterval(timer);
      }

      cb({
        total: t.t,
        day: t.day < 10 ? `0${t.day}` : t.day,
        hour: t.hour < 10 ? `0${t.hour}` : t.hour,
        minutes: t.minutes < 10 ? `0${t.minutes}` : t.minutes,
        seconds: t.seconds < 10 ? `0${t.seconds}` : t.seconds,
      });

      return t.t;
    }

    return updatedClock;
  };

  let resultTime = setClock(rtime);
  return resultTime;
};
