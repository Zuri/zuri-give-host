<template>
  <div class="zuri-give">
    <button
      type="button"
      class="btn-open position-fixed align-items-center btn btn-lg btn-primary d-flex fade justify-content-center text-nowrap widget-opener"
      id="donationWidgetOpener"
    >
      <span class="js-button-text"></span>
    </button>
  </div>
</template>

<script>
import { options } from "../../public/config"
export default {
  name: "ToggleModalButton",
  mounted() {
    function makeBootstrapPlacementClass(placement) {
      let placementClasses = []

      // Horizontal placement
      switch (placement.x) {
        case "left":
          placementClasses.push("start-0")
          break
        case "center":
          placementClasses.push("start-50")
          break
        case "right":
          placementClasses.push("start-100")
          break
        default:
          placementClasses.push("start-100")
          break
      }
      // Vertical placement
      switch (placement.y) {
        case "top":
          placementClasses.push("top-0")
          break
        case "center":
          placementClasses.push("top-50")
          break
        case "bottom":
          placementClasses.push("top-100")
          break
        default:
          placementClasses.push("top-50")
          break
      }

      return placementClasses
    }

    function setButtonColors(button) {
      const buttonBackgroundColor = options.button.backgroundColor
      const buttonBackgroundColorHover = options.button.backgroundColorHover
      const buttonTextColor = options.button.textColor
      const buttonTextColorHover = options.button.textColorHover

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

    document.querySelectorAll(".js-button-text").forEach((el) => (el.textContent = options.button.text))
    document.querySelectorAll(".btn-open").forEach((el) => {
      const placementClass = makeBootstrapPlacementClass(options.button.placement)

      el.classList.add(...placementClass)
      setButtonColors(el)
    })
  },
}
</script>

<style scoped></style>
