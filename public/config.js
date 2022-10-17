export const config = {
  // --> Default values config <--
  defaults: {
    autoOpen: false, // Should the modal open on page load - true | false
    baseUrl: "engage.collegefund.org", // EN base URL
    button: { // Fixed position button that opens the modal
      enable: true, // Toggles button vivbility - true | false
      placement: {
        x: "right", // Where to place button horizontally - left | center | right
        y: "center", // Where to place the button vertically - top | center | bottom
      },
      text: "Give More Life", // Text for widget opener button - string
    },
    formId: 29654, // EN form ID - integer
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

// Combines the default values with  option values
export const options = typeof zgOptions === "object" ? Object.assign(config.defaults, zgOptions) : config.defaults