<template>
  <div class="modal fade" ref="donationModal" tabindex="-1" aria-hidden="true">
    <!-- Modal & IFrame -->
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-body bg-white p-2 shadow-lg">
          <iframe
            class="border-0 overflow-auto"
            src="https://engage.collegefund.org/page/40031/donate/1"
            id="donationIframe"
            title="Donation Widget"
          ></iframe>
        </div>
        <div class="modal-footer bg-transparent d-block text-center text-white">
          <p>Donations to the American Indian College Fund are...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// --> Packages <--
import { Modal } from "bootstrap";
// --> Helpers <--
import { initModal } from "../helpers/modal";
import { shouldOpenFormOnPageLoad } from "../helpers/shouldOpenFormOnPageLoad.js";
import { createFormSource } from "../helpers/createFormSource.js";

export default {
  name: "DonationModal",
  data: () => ({
    modal: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.donationModal);
    initModal(this.modal);

    if (shouldOpenFormOnPageLoad()) {
      this.modal.show();
    }

    donationIframe.src = createFormSource();
  },
};
</script>

<style scoped></style>
