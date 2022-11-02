import iframeResize from 'iframe-resizer/js/iframeResizer'
import { Toast, Tooltip } from "bootstrap"
import { clearSessionStorage } from "./sessionStorageLoadManager"
import { shouldOpenFormOnPageLoad } from "./shouldOpenFormOnPageLoad"
import { tsParticles } from "tsparticles-engine"
import { loadConfettiPreset } from "tsparticles-preset-confetti"
import { loadImageShape } from "tsparticles-shape-image"
import { options } from "../../public/config"
import { loadHeartShape } from "tsparticles-shape-heart"
import { loadStarShape } from "tsparticles-shape-star"

let modal = null
let complete = false

export const initModal = (el) => {
  modal = el

  initOpeners()
  initClosers()
  initResizer()
  if (options.enableAnimations) {
    preloadConfetti()
  }
}

const initOpeners = () => {
  // console.log(options.buttonAdditional.selector)
  const additionalButton = options.buttonAdditional.enable ? document.querySelector(options.buttonAdditional.selector) : null
  // console.log(options.buttonAdditional.enable ? document.querySelector(options.buttonAdditional.selector) : null)
  // console.log(`additionalButton: ${additionalButton}`)

  modal._element.addEventListener('shown.bs.modal', function(event) {
    hideOpeners()
    hideToast(donationWidgetToastFail)
    window.dispatchEvent(new Event('resize'))
  })

  document.querySelectorAll('.widget-opener, #resume-purchase').forEach((el) => {
    el.addEventListener('click', () => modal.show())
  })

  // Converts additional button to an opener
  window.addEventListener('load', () => {
    if (additionalButton) {
      let newButton
      let tooltip

      setTimeout(() => {
        // Cloning and replacing the original element removes all previously attached event listeners
        newButton = additionalButton.cloneNode(true)
        newButton.removeAttribute('href')
        newButton.removeAttribute('target')
        // Demo tooltip for additional button
        // newButton.dataset.bsContainer = newButton
        newButton.dataset.bsTitle = "I can open the demo too!"
        newButton.dataset.bsToggle = 'tooltip'
        newButton.dataset.bsSelector = options.buttonAdditional.selector
        additionalButton.replaceWith(newButton)
        tooltip = new Tooltip(newButton, {
          selector: options.buttonAdditional.selector,
          title: "I can open the demo too!",
        })
        newButton.addEventListener('click', (e) => {
          e.preventDefault()
          modal.show()
        })
      }, 100)
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

const initResizer = () => {
  const iframe = document.getElementById('donationIframe')
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
          iframe.iFrameResizer.resize()
          complete = true
          if (options.enableAnimations) {
            doThankYou()
          }
          hideOpeners()
          clearSessionStorage()
          break
      }
    },
  },
    "#donationIframe"
  )
  window.addEventListener('resize', () => {
    iframe.iFrameResizer.resize()
  })
}

const preloadConfetti = () => {
  document.body.appendChild(document.getElementById("tsparticles"))
  loadConfettiPreset(tsParticles)
  loadHeartShape(tsParticles)
  loadImageShape(tsParticles)
  loadStarShape(tsParticles)
}

const doThankYou = () => {
  const tsParticlesConfig = {
    "fullScreen": {
      "zIndex": 2147483646
    },
    "particles": {
      "number": {
        "value": 0
      },
      "color": {
        "value": [
          "#CF4C59",
          "#CF0E22",
          "#C10E21",
          "#990000",
          "#820915",
          "#FFFFFF"
        ]
      },
      "shape": {
        "type": [
          "heart",
          "image"
        ],
        "options": {
          "image": [
            {
              "src": "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1666/star.png?v=1664238115000",
              "width": 26,
              "height": 28,
              "particles": {
                "size": {
                  "value": 10
                }
              }
            },
          ]
        }
      },
      "opacity": {
        "value": 1,
        "animation": {
          "enable": true,
          "minimumValue": 0,
          "speed": 2,
          "startValue": "max",
          "destroy": "min"
        }
      },
      "size": {
        "value": 8,
        "random": {
          "enable": true,
          "minimumValue": 8
        }
      },
      "links": {
        "enable": false
      },
      "life": {
        "duration": {
          "sync": true,
          "value": 5
        },
        "count": 1
      },
      "move": {
        "enable": true,
        "gravity": {
          "enable": true,
          "acceleration": 10
        },
        "speed": {
          "min": 10,
          "max": 20
        },
        "decay": 0.05,
        "direction": "none",
        "straight": false,
        "outModes": {
          "default": "destroy",
          "top": "none"
        }
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": "random",
        "move": true,
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "move": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 25
        },
        "enable": true,
        "speed": {
          "min": 15,
          "max": 25
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "move": true,
        "speed": {
          "min": -15,
          "max": 15
        }
      }
    },
    "emitters": {
      "position": {
        "x": 50,
        "y": 0
      },
      "life": {
        "count": 1,
        "duration": 0.1,
        "delay": 0.4
      },
      "rate": {
        "delay": 0.1,
        "quantity": 150
      },
      "size": {
        "width": 0,
        "height": 0
      }
    }
  }

  setTimeout(() => {
    tsParticles.load("tsparticles", tsParticlesConfig)
  }, 500)
}
