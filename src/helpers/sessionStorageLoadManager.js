export const hasAlreadyLoaded = () => {
  const sessionLoadStart = sessionStorage.getItem('SessionLoadStart')

  if (!sessionLoadStart) {
    setSessionStorage()
    return false
  } else {
    return true
  }
}

export const setSessionStorage = () => {
  // --> Setup timer and session storage <--
  const date = new Date()
  const time = date.getTime() / 1000

  sessionStorage.setItem('SessionLoadStart', time)
}

export const clearSessionStorage = () => {
  sessionStorage.removeItem('SessionLoadStart')
}
