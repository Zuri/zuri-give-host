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
          <button type="button" class="btn btn-primary mb-1 mt-2 rounded-pill position-relative w-100" id="buttonAction">
            <span role="text"><span class="js-toast-text-prefix"></span> <span class="js-amount"></span> <span class="js-toast-text-suffix"></span></span>
          </button>
          <!-- <button type="button" class="btn btn-link btn-sm w-100" data-bs-dismiss="toast" aria-label="Close this alert">Not today</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { options } from '../../public/config'
export default {
  name: 'ToastContainer',
  mounted() {
    document.querySelectorAll('.js-toast-text-prefix').forEach((el) => (el.textContent = options.toastMessage.prefix))
    document.querySelectorAll('.js-toast-text-suffix').forEach((el) => (el.textContent = options.toastMessage.suffix))
  },
}
</script>

<style scoped></style>
