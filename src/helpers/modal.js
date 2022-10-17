import iframeResize from 'iframe-resizer/js/iframeResizer'
import { Toast } from "bootstrap"
import { clearSessionStorage } from "./sessionStorageLoadManager"
import { shouldOpenFormOnPageLoad } from "./shouldOpenFormOnPageLoad"
// import { tsParticles } from "tsparticles-engine"
// import { loadConfettiPreset } from "tsparticles-preset-confetti"
// import { loadImageShape } from "tsparticles-shape-image"

let modal = null
let complete = false

export const initModal = (el) => {
  modal = el

  initOpeners()
  initClosers()
  initResizer()
  // preloadConfetti()
}

const initOpeners = () => {
  const additionalButton = null
  const additionalButtonElement = null

  modal._element.addEventListener('shown.bs.modal', function(event) {
    hideOpeners()
    hideToast(donationWidgetToastFail)
    window.dispatchEvent(new Event('resize'))
  })

  document.querySelectorAll('.widget-opener, #buttonAction').forEach((el) => {
    el.addEventListener('click', () => modal.show())
  })

  // Converts additional button to an opener
  window.addEventListener('load', () => {
    if (additionalButton && additionalButtonElement) {
      setTimeout(() => {
        additionalButtonElement.removeAttribute('href')
        additionalButtonElement.replaceWith(additionalButtonElement.cloneNode(true))
        document.querySelector(additionalButton).addEventListener('click', (e) => {
          e.preventDefault()
          modal.show()
        })
      }, 1000)
    }
  })
}

export const hideOpeners = () => {
  document.querySelectorAll('.widget-opener').forEach(el => {
    if (el.classList.contains('fade')) {
      el.classList.remove('show')
    } else {
      el.classList.add('d-none')
    }
  })
}

const showOpeners = () => {
  setTimeout(() => {
    document.querySelectorAll('.widget-opener').forEach(el => {
      if (el.classList.contains('fade')) {
        el.classList.add('show')
      } else {
        el.classList.remove('d-none')
      }
    })
  }, 750)
}

const hideToast = (toastElement) => {
  Toast.getInstance(toastElement)?.hide()
}

const showToast = (toastElement) => {
  const toast = new Toast(toastElement, {
    autohide: false
  })
  toast.show()
}

const initClosers = () => {
  modal._element.addEventListener("hidden.bs.modal", (e) => {
    if (!complete) {
      showToast(donationWidgetToastFail)
    } else {
      // reset form
      document.getElementById("donationIframe").src = document.getElementById("donationIframe").src
    }
  })
}

const updateAmount = (amount) => {
  document.querySelectorAll(".js-amount").forEach((el) => {
    el.textContent = amount
  })
}

// const doThankYou = () => {
//   const tsParticlesConfig = {
//     "fullScreen": {
//       "zIndex": 99999
//     },
//     "emitters": {
//       "startCount": 30,
//       "position": {
//         "x": 50,
//         "y": 100
//       },
//       "size": {
//         "width": 0,
//         "height": 0
//       },
//       "rate": {
//         "delay": 0,
//         "quantity": .1
//       },
//       "life": {
//         "duration": .5,
//         "count": 1.5
//       }
//     },
//     "particles": {
//       "move": {
//         "decay": 0.01,
//         "direction": "top",
//         "enable": true,
//         "gravity": {
//           "enable": true,
//           "acceleration": 2,
//         },
//         "outModes": {
//           "top": "none",
//           "default": "destroy"
//         },
//         "speed": {
//           "min": 20,
//           "max": 50
//         }
//       },
//       "number": {
//         "value": 0
//       },
//       "opacity": {
//         "value": 1
//       },
//       "rotate": {
//         "value": {
//           "min": 0,
//           "max": 360
//         },
//         "direction": "random",
//         "animation": {
//           "enable": true,
//           "speed": 15
//         }
//       },
//       "size": {
//         "value": 3,
//         "animation": {
//           "enable": true,
//           "startValue": "min",
//           "count": 1,
//           "speed": 16,
//           "sync": true
//         }
//       },
//       "wobble": {
//         "distance": 30,
//         "enable": true,
//         "speed": {
//           "min": -7,
//           "max": 7
//         }
//       },
//       "shape": {
//         "type": "image",
//         "options": {
//           "image": [
//             {
//               "src": "https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10065/graduation-cap-smiley.png?v=1660152921000",
//               "width": 64,
//               "height": 62,
//               "particles": {
//                 "size": {
//                   "value": 32
//                 }
//               }
//             },
//             {
//               "src": "https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10065/graduation-cap_01.png?v=1660152918000",
//               "width": 195,
//               "height": 117,
//               "particles": {
//                 "size": {
//                   "value": 32
//                 }
//               }
//             },
//             {
//               "src": "https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10065/graduation-cap_02.png?v=1660152919000",
//               "width": 211,
//               "height": 110,
//               "particles": {
//                 "size": {
//                   "value": 36
//                 }
//               }
//             },
//             {
//               "src": "https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10065/graduation-cap_03.png?v=1660152920000",
//               "width": 218,
//               "height": 133,
//               "particles": {
//                 "size": {
//                   "value": 38
//                 }
//               }
//             },
//             {
//               "src": "https://acb0a5d73b67fccd4bbe-c2d8138f0ea10a18dd4c43ec3aa4240a.ssl.cf5.rackcdn.com/10065/graduation-cap_04.png?v=1660152920000",
//               "width": 196,
//               "height": 115,
//               "particles": {
//                 "size": {
//                   "value": 32
//                 }
//               }
//             },
//           ]
//         }
//       }
//     },
//     // "responsive": [
//     //   {
//     //     "maxWidth": 1024,
//     //     "options": {
//     //       "particles": {
//     //         "move": {
//     //           "speed": {
//     //             "min": 33,
//     //             "max": 66
//     //           }
//     //         }
//     //       }
//     //     }
//     //   }
//     // ]
//   }
//   setTimeout(() => {
//     tsParticles.load("tsparticles", tsParticlesConfig)
//   }, 1000)
// }

const initResizer = () => {
  let ready = false

  iFrameResize({
    log: false,
    checkOrigin: false,
    onMessage: ({ iframe, message }) => {
      switch (message.type || message) {
        case "ready":
          if (!ready) {
            if (shouldOpenFormOnPageLoad()) {
              modal.show()
            } else if (!modal._element.classList.contains('show')) {
              showOpeners()
            }
            ready = !ready
          }
          break
        case "amount change":
          updateAmount(message.value)
          break
        case "thank you":
          complete = true
          hideOpeners()
          clearSessionStorage()
          break
      }
    },
  },
    "#donationIframe"
  )
}

// const preloadConfetti = () => {
//   document.body.appendChild(document.getElementById("tsparticles"))
//   loadConfettiPreset(tsParticles)
//   loadImageShape(tsParticles)
// }
