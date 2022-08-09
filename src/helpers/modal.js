import { Modal } from "bootstrap"
import { Toast } from "bootstrap"

let modal = null
let complete = false

const hideOpeners = () => {
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
  setTimeout(() => {
    toast.show()
  }, 500)
}

const initOpeners = () => {
  document.querySelectorAll(".widget-opener").forEach((el) => {
    // el.classList.remove("fade")
    el.addEventListener("click", () => {
      hideOpeners()
      hideToast(donationWidgetToastFail)
      modal.show()
    })
  })
}

const initClosers = () => {
  modal._element.addEventListener("hidden.bs.modal", (e) => {
    if (!complete) {
      // donationWidgetOpener.classList.remove("d-none")

      showToast(donationWidgetToastFail)
      showOpeners()
    } else {
      // reset form
      document
        .getElementById("donationIframe")
        .contentDocument.location.reload(true)

      showToast(donationWidgetToastSuccess)
    }
  })
}

const updateAmount = (amount) => {
  document.querySelectorAll(".js-amount").forEach((el) => {
    el.textContent = amount
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
  // console.log("INIT RESIZER")
  iFrameResize(
    {
      log: false,
      checkOrigin: false,
      onMessage: ({ iframe, message }) => {
        switch (message.type || message) {
          case "ready":
            showOpeners()
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
}
