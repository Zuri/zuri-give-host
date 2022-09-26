export const config = {
  // --> Default values config <--
  defaults: {
    autoOpen: false, // Should the modal open on page load - true | false
    baseUrl: "en.zurigroup.com", // EN base URL
    button: { // Fixed button that opens the modal
      enable: true, // Toggles button vivbility - true | false
      placement: {
        x: "right", // Where to place button horizontally - left | center | right
        y: "center", // Where to place the button vertically - top | center | bottom
      },
      text: "Donate", // Text for widget opener button - string
    },
    buttonAdditional: { // Additional button that opens the modal
      enable: false, // Toggles additional button. Setting this to true will overwrite any existing event handlers - true | false
      selector: "" // CSS selector for additional button - string
    },
    enableAnimations: true, // Toggles animations - true | false
    formId: 113400, // EN form ID - integer
    formType: "donate", // EN page type - data-capture | donate | emailtotarget | petition | survey | tweettotarget
    toastMessage: {
      prefix: "Complete my", // Toast text before gift amount and recurrence - string
      suffix: "gift!", // Toast text after gift amount and recurrence - string
    }
  },

  // --> Supported url parameters <--
  urlParams: {
    formID: "form.id",
    profileID: "ea.profile.id",
    appealCode: "supporter.appealCode",
    formOpen: "form.open",
  },
}
export const options = typeof zgOptions === "object" ? Object.assign(config.defaults, zgOptions) : config.defaults
