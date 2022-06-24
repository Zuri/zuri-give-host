export const hasTimerPassed = () => {
  // --> Setup timer and session storage <--
  const duration = 60 * 5;
  const date = new Date();
  const time = date.getTime() / 1000;
  const sessionTimeStart = sessionStorage.getItem("SessionTimeStart");
  const sessionTimeEnd = sessionStorage.getItem("SessionTimeEnd");
  let timerPassed = null;

  const startTimer = () => {
    sessionStorage.setItem("SessionTimeStart", time);
    sessionStorage.setItem("SessionTimeEnd", time + duration);
  };

  // --> If the session has not been started or the duration has passed output null, else output false <--
  if (sessionTimeStart === null || undefined) {
    startTimer();
  } else {
    if (time > sessionTimeEnd) {
      startTimer();
    } else {
      timerPassed = false;
    }
  }

  return timerPassed;
};
