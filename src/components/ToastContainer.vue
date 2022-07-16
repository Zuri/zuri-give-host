<template>
  <div class="toast-container position-absolute bottom-0 end-0 m-md-3">
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="donationWidgetToastSuccess">
      <div class="toast-header">
        <!-- <div class="rounded me-2 bg-success border border-primary" /> -->
        <strong class="me-auto">Donation Form: Success</strong>
        <small></small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">Donation form completed</div>
    </div>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" id="donationWidgetToastFail">
      <div class="toast-header">
        <!-- <div class="rounded me-2 bg-success border border-primary" /> -->
        <strong class="me-auto">Donation Form: Failure</strong>
        <small></small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">Donation form is incomplete</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastContainer',
}
</script>

<style scoped></style>
