<template>
  <div class="zuri-give">
    <div class="position-fixed start-100 top-50">
      <button
        type="button"
        class="align-items-center btn btn-lg btn-primary d-flex fade justify-content-center text-nowrap widget-opener"
        id="donationWidgetOpener"
      >
        <span class="js-button-text"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { options } from '../../public/config'
export default {
  name: 'ToggleModalButton',
  mounted() {
    document.querySelectorAll('.js-button-text').forEach((el) => (el.textContent = options.button.text))
  },
}
</script>

<style scoped></style>
