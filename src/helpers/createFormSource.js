import { options } from "../../public/config"

export function createFormSource() {
  // --> Example Params: ?ea.profile.id=1234&supporter.appealCode=1234 <--

  // --> Get params from site URL <--
  // let searchParams = new URLSearchParams(document.location.search)
  // let enProfileID = searchParams.get(config.urlParams.profileID)
  // let enTrackingID = searchParams.get(config.urlParams.trackingID)
  // let enAppealCode = searchParams.get(config.urlParams.appealCode)

  // --> Construct parts of the URL string for the Iframe <--
  // let enProfileIdText = enProfileID ? `?${config.urlParams.profileID}=${enProfileID}` : ""
  // let enTrackingIdText = enTrackingID ? `&${config.urlParams.trackingID}=${enTrackingID}` : ""
  // let enAppealCodeText = enAppealCode ? `&${config.urlParams.appealCode}=${enAppealCode}` : ""

  // --> Construct the final URL string for the Iframe <--
  // let output = `https://${options.baseUrl}/page/${options.formId}/${options.formType}/1${enProfileIdText}${enAppealCodeText}`

  let searchParams = new URLSearchParams(document.location.search)
  let newSearchParams = `?${searchParams.toString().replace(/ea_profile_id/, 'ea.profile.id').replace(/ea_tracking_id/, 'ea.tracking.id').replace(/supporter_appealCode/, 'supporter.appealCode')}`
  let output = `https://${options.baseUrl}/page/${options.formId}/${options.formType}/1${typeof newSearchParams !== 'undefined' ? newSearchParams : ''}`

  // --> Testing <--
  console.log("FORM DATA OUTPUT URL: ", output)

  return output
}
