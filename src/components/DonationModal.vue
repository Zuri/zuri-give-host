<template>
  <div class="zuri-give">
    <div class="modal fade" ref="donationModal" id="donationModal" tabindex="-1" aria-hidden="true">
      <!-- Modal & IFrame -->
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body">
            <div class="bg-primary rounded-circle d-flex p-2" style="position: absolute; right: -0.25rem; top: -0.25rem">
              <button type="button" class="btn-close btn-close-white m-auto bg-transparent" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <iframe
              class="border-0 overflow-auto shadow-lg"
              src="https://engage.collegefund.org/page/29654/donate/1"
              id="donationIframe"
              title="Donation Widget"
            ></iframe>
          </div>
          <div class="modal-footer bg-transparent border-0 d-block text-center text-white">
            <p class="fs-5">
              AICF custom message goes here.
              <span class="fs-6 fw-light d-block">This demo is currently under development 💻</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// --> Packages <--
import { Modal } from 'bootstrap'
// --> Helpers <--
import { initModal } from '../helpers/modal'
import { shouldOpenFormOnPageLoad } from '../helpers/shouldOpenFormOnPageLoad.js'
import { createFormSource } from '../helpers/createFormSource.js'

export default {
  name: 'DonationModal',
  data: () => ({
    modal: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.donationModal, {
      backdrop: 'static',
    })
    initModal(this.modal)

    // if (shouldOpenFormOnPageLoad()) {
    //   this.modal.show()
    // }

    donationIframe.src = createFormSource()
  },
}
</script>

<style scoped></style>
