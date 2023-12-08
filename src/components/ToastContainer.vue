<template>
  <div class="zuri-give">
    <div class="toast-container position-fixed bottom-0 end-0 m-md-3">
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="donationWidgetToastSuccess">
        <div class="toast-header">
          <!-- <div class="rounded me-2 bg-success border border-primary" /> -->
          <strong class="me-auto">Donation Form: Success</strong>
          <small></small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">Donation form completed</div>
      </div>

      <div
        class="toast animate__animated animate__fadeInUpBig animate__slower"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        id="donationWidgetToastFail"
      >
        <div class="toast-body">
          <button type="button" class="btn btn-primary mb-1 mt-2 rounded-pill position-relative w-100" id="resume-purchase">
            <span role="text"><span class="js-toast-text-prefix"></span> <span class="js-amount"></span> <span class="js-toast-text-suffix"></span></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { options } from "../../public/config"
export default {
  name: "ToastContainer",
  mounted() {
    function setButtonColors(button) {
      console.log("setButtonColors", button)
      const buttonBackgroundColor = options.toast.button.backgroundColor
      const buttonBackgroundColorHover = options.toast.button.backgroundColorHover
      const buttonTextColor = options.toast.button.textColor
      const buttonTextColorHover = options.toast.button.textColorHover

      if (buttonBackgroundColor) {
        button.style.setProperty("--zg-btn-bg", buttonBackgroundColor)
        button.style.setProperty("--zg-btn-active-bg", buttonBackgroundColor)
        button.style.setProperty("--zg-btn-border-color", buttonBackgroundColor)
        button.style.setProperty("--zg-btn-active-border-color", buttonBackgroundColor)
      }

      if (buttonBackgroundColorHover) {
        button.style.setProperty("--zg-btn-hover-bg", buttonBackgroundColorHover)
        button.style.setProperty("--zg-btn-hover-border-color", buttonBackgroundColorHover)
      }

      if (buttonTextColor) {
        button.style.setProperty("--zg-btn-color", buttonTextColor)
        button.style.setProperty("--zg-btn-active-color", buttonTextColor)
      }

      if (buttonTextColorHover) {
        button.style.setProperty("--zg-btn-hover-color", buttonTextColorHover)
      }
    }

    document.querySelectorAll(".toast-container .btn").forEach((el) => setButtonColors(el))
    document.querySelectorAll(".js-toast-text-prefix").forEach((el) => (el.textContent = options.toast.message.prefix))
    document.querySelectorAll(".js-toast-text-suffix").forEach((el) => (el.textContent = options.toast.message.suffix))
  },
}
</script>

<style scoped></style>
