import { Modal } from "bootstrap"
import { Toast } from "bootstrap"

let modal = null
let complete = false

const openToast = (toastElement) => {
  const toast = new Toast(toastElement)
  setTimeout(() => {
    toast.show()
  }, 500)
}

const initOpeners = () => {
  document.querySelectorAll(".widget-opener").forEach((el) => {
    // el.classList.remove("fade")
    el.addEventListener("click", () => {
      modal.show()
    })
  })
}

const initClosers = () => {
  modal._element.addEventListener("hidden.bs.modal", (e) => {
    if (!complete) {
      donationWidgetOpener.classList.remove("d-none")

      openToast(donationWidgetToastFail)
    } else {
      // reset form
      document
        .getElementById("donationIframe")
        .contentDocument.location.reload(true)

      openToast(donationWidgetToastSuccess)
    }
  })
}

const doThankYou = () => {
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 90,
      gravity: 0.5,
      zIndex: 9999999,
      origin: {
        x: 0.5,
        y: 0.4126,
      },
    })
  }, 1500)
}

const initResizer = () => {
  console.log("INIT RESIZER")
  iFrameResize(
    {
      log: false,
      checkOrigin: false,
      onMessage: ({ iframe, message }) => {
        switch (message.type || message) {
          case "ready":
            document.querySelectorAll(".widget-opener.fade").forEach((el) => {
              el.classList.add("show")
            })
            break
          case "amount change":
            updateAmount(message.value)
            break
          case "cancel":
            modal.hide()
            break
          case "complete":
            complete = true
            modal.hide()
            break
          case "thank you":
            doThankYou()
            break
        }
      },
    },
    "#donationIframe"
  )
}

export const initModal = (el) => {
  modal = el

  initOpeners()
  initClosers()
  initResizer()

  const updateAmount = (amount) => {
    document.querySelectorAll(".js-amount").forEach((el) => {
      el.textContent = amount
    })
  }
}
