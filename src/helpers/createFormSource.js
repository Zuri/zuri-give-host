import { config, options } from "../../public/config"

export function createFormSource() {
  // --> Example Params: ?ea.profile.id=1234&supporter.appealCode=1234 <--

  // --> Get params from site URL <--
  let searchParams = new URLSearchParams(document.location.search)
  let enProfileID = searchParams.get(config.urlParams.profileID)
  let enAppealCode = searchParams.get(config.urlParams.appealCode)

  // --> Construct parts of the URL string for the Iframe <--
  let enProfileIdText = enProfileID ? `?${config.urlParams.profileID}=${enProfileID}` : ""
  let enAppealCodeText = enAppealCode ? `&${config.urlParams.appealCode}=${enAppealCode}` : ""

  // --> Construct the final URL string for the Iframe <--
  let output = `https://${options.baseUrl}/page/${options.formId}/${options.formType}/1${enProfileIdText}${enAppealCodeText}`

  // --> Testing <--
  console.log("FORM DATA OUTPUT URL: ", output)

  return output
}
