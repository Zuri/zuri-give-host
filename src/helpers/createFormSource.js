import { config } from "../../public/config"

export function createFormSource() {
  // --> Example Params: ?form.id=29654&ea.profile.id=1234&supporter.appealCode=1234&form.open=true <--

  // --> Get params from site URL <--
  let searchParams = new URLSearchParams(document.location.search)
  let enFormID = searchParams.get(config.urlParams.formID)
  let enProfileID = searchParams.get(config.urlParams.profileID)
  let enAppealCode = searchParams.get(config.urlParams.appealCode)

  // --> Construct parts of the URL string for the Iframe <--
  let enFormIDtext = enFormID ? enFormID : config.defaults.enFormID
  let demoModeText = config.defaults.isDemo ? "mode=DEMO&" : ""
  let enProfileIDtext = enProfileID
    ? config.urlParams.profileID + "=" + enProfileID + "&"
    : ""
  let enAppealCodeText = enAppealCode
    ? config.urlParams.appealCode + "=" + enAppealCode
    : ""

  let paramsPlaceholderText = demoModeText
    ? "?"
    : enProfileIDtext
      ? "?"
      : enAppealCodeText
        ? "?"
        : ""

  // --> Construct the final URL string for the Iframe <--
  let output =
    "https://engage." +
    config.defaults.rootURL +
    "/page/" +
    enFormIDtext +
    "/donate/" +
    paramsPlaceholderText +
    demoModeText +
    enProfileIDtext +
    enAppealCodeText

  // --> Testing <--
  console.log("FORM DATA OUTPUT URL: ", output)

  return output
}
