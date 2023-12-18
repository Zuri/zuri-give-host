<template>
  <div>
    <DonationModal />
    <ToggleModalButton />
    <ToastContainer />
  </div>
</template>

<script>
// --> Components <--
import DonationModal from "./components/DonationModal.vue"
import ToggleModalButton from "./components/ToggleModalButton"
import ToastContainer from "./components/ToastContainer"

export default {
  name: "ZuriGive",
  components: {
    ToastContainer,
    ToggleModalButton,
    DonationModal,
  },
  methods: {},
  data: () => ({}),
  created() {},
  mounted() {},
}
</script>
