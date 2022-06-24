<template>
  <div>
    <DonationModal />
    <ToggleModalButton />
    <ToastContainer />
  </div>
</template>

<script>
// --> Components <--
import ToastContainer from "./components/ToastContainer";
import ToggleModalButton from "./components/ToggleModalButton";
import DonationModal from "./components/DonationModal.vue";

export default {
  name: "App",
  components: {
    ToastContainer,
    ToggleModalButton,
    DonationModal,
  },
  methods: {},
  data: () => ({}),
  created() {},
  mounted() {},
};
</script>

<!-- https://engage.collegefund.org/page/40031/donate/1/ -->
<!-- https://engage.collegefund.org/page/29654/donate/1?mode=DEMO -->
