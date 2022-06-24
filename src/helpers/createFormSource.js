export function createFormSource() {
  // --> Example Params: ?form.id=29654&ea.profile.id=1234&supporter.appealCode=1234&form.open=true <--

  // --> Supported url parameters <--
  const urlParams = ["form.id", "ea.profile.id", "supporter.appealCode"];

  // --> Default values config <--
  const defaultsConfig = {
    rootURL: "collegefund.org",
    enFormID: 29654,
    isDemo: true,
    // 40031 < old | 29654 < new
    // HELP. I want the formID to come from /public/config.json
  };

  // --> Get params from site URL <--
  let searchParams = new URLSearchParams(document.location.search);
  let enFormID = searchParams.get(urlParams[0]);
  let enProfileID = searchParams.get(urlParams[1]);
  let enAppealCode = searchParams.get(urlParams[2]);

  // --> Construct parts of the URL string for the Iframe <--
  let enFormIDtext = enFormID ? enFormID : defaultsConfig.enFormID;
  let demoModeText = defaultsConfig.isDemo ? "mode=DEMO&" : "";
  let enProfileIDtext = enProfileID
    ? urlParams[1] + "=" + enProfileID + "&"
    : "";
  let enAppealCodeText = enAppealCode ? urlParams[2] + "=" + enAppealCode : "";

  // --> Construct the final URL string for the Iframe <--
  let output =
    "https://engage." +
    defaultsConfig.rootURL +
    "/page/" +
    enFormIDtext +
    "/donate/1/?" +
    demoModeText +
    enProfileIDtext +
    enAppealCodeText;

  // --> Testing <--
  console.log("FORM DATA OUTPUT URL: ", output);

  return output;
}
