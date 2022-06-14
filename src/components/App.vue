<template>
  <div>
    <div class="modal fade" ref="donationModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body bg-white p-0 shadow-lg">
            <iframe class="border-0" src="https://ca.engagingnetworks.app/page/95575/donate/1" id="donationIframe" title="Donation Widget"></iframe>
            <!-- <iframe class="border-0" src="https://cannonbbis.dev.alumni.uoguelph.ca/BBIS_Design/give/uofg" id="donationIframe" title="Donation Widget"></iframe> -->
          </div>
          <div class="modal-footer bg-transparent d-block text-center text-white">
            <p>Donations to Cystic Fibrosis Canada are tax-deductible to the fullest extent allowed by law.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="position-fixed start-100 top-50">
      <button
        type="button"
        class="align-items-center btn btn-lg btn-warning d-flex fade justify-content-center text-nowrap widget-opener"
        id="donationWidgetOpener"
      >
        <span>Give More Life</span>
      </button>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import { initModal } from '../js/modal'

export default {
  name: 'App',
  data: () => ({
    modal: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.donationModal)
    initModal(this.modal)
  },
}
</script>
