export const timer = (deadline, cb) => {

  const getRemainigTime = (time) => {
    let ll = new Date(time)
    const total = Date.parse(ll) - Date.parse(new Date());

    const days = Math.floor((total / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {
      t: total,
      days,
      hours,
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
      } else {
        cb({
          total: t.t,
          days: t.days < 10 ? `0${t.days}` : t.days,
          hours: t.hours < 10 ? `0${t.hours}` : t.hours,
          minutes: t.minutes < 10 ? `0${t.minutes}` : t.minutes,
          seconds: t.seconds < 10 ? `0${t.seconds}` : t.seconds,
        });
      }

      return t.t;
    }

    return updatedClock;
  };

  let resultTime = setClock(deadline);
  return resultTime;
};


export const createDeadlineTime = () => {

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  const day = currentDate.getDate();

  if (month === 0) {
    month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  }

  const promotionDate = `${year}-${month}-${day + 1}T12:00:00`;

  const nameOfMonth = currentDate.toLocaleDateString('en-GB', {
    month: 'short',
  });

  return {promotionDate, nameOfMonth, dayName: day+1}

}