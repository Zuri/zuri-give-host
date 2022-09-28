// import { hasTimerPassed } from "./sessionStorageTimeManager"
import { config } from "../../public/config"
import { hasAlreadyLoaded } from "./sessionStorageLoadManager"

export function shouldOpenFormOnPageLoad() {
  // --> Supported url parameters <--
  const urlParam = config.urlParams.formOpen //form.open
  const autoOpen = typeof zgAutoOpen !== 'undefined' ? zgAutoOpen : false

  // --> Get params from site URL <--
  let searchParams = new URLSearchParams(document.location.search)

  // --> If form_open URL param is true then return true <--
  let paramValue = searchParams.get(urlParam)
    ? searchParams.get(urlParam).toString().toUpperCase()
    : null

  let shouldOpenOnPageLoad = paramValue == "TRUE" || paramValue == "1" ? true : false

  // --> If not enough time has passed since the last time the page was refreshed, don't open the modal <--
  // let timerPassed = hasTimerPassed()
  // shouldOpenOnPageLoad = timerPassed !== null ? timerPassed : shouldOpenFormOnPageLoad

  // return (shouldOpenOnPageLoad || autoOpen) && !hasAlreadyLoaded()
  return (shouldOpenOnPageLoad || autoOpen)
}
