<template>
  <main class="tw-flex tw-relative tw-flex-col tw-bg-[#014643] tw-mt-96">
    <!-- Image  -->
    <div class="tw-flex tw-absolute -tw-mt-96 tw-self-center">
      <img
        class="tw-rounded-3xl"
        style="object-fit: contain; height: 700px"
        src="~/assets/image.jpg"
        alt="hero-overlay-img"
      />
    </div>

    <!-- Text -->

    <div class="tw-flex tw-flex-col tw-mt-96 tw-top-96">
      <Text
        class="tw-text-white tw-text-center tw-self-center tw-mt-24 tw-mb-20 tw-text-3xl tw-font-light"
      >
        Over 32k+ software business growing with our saas</Text
      >

      <!-- Software Business Slider -->
      <div class="tw-flex tw-justify-between tw-gap-1">
        <div class="slider">
          <div
            class="slider-content tw-gap-x-8 sm:tw-gap-x-28"
            :style="{ transform: `translateX(${translateValue}px)` }"
          >
            <img
              class="tw-fill-white tw-opacity-30"
              style="object-fit: contain; height: 30px"
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              alt="slider-image"
            />
          </div>
        </div>
      </div>

      <!-- Heading   -->
      <text
        class="tw-font-bold tw-w-2/3 tw-text-xl md:tw-text-5xl tw-mt-36 tw-text-white tw-text-center tw-self-center md:tw-w-1/2"
        >What Can You Expect To Recieve From Our Platform?</text
      >

      <!-- Pragraph -->
      <div
        class="tw-font-light tw-mb-20 tw-opacity-50 tw-mt-12 tw-text-white md:tw-text-2xl tw-text-center tw-self-center"
      >
        <text class="tw-leading-loose"
          >Connect Slick to Google Drive, Slick, Dropbox and 100+ other tools
          that help you manage your SaaS.
          <br />
          <span> No More Juggling between apps to look for information. </span>
        </text>
      </div>

      <!-- Circle Main Div -->
    </div>
  </main>
</template>

<script>
import sonosImage from "../assets/Images/Sonos.svg";

export default {
  data() {
    return {
      images: [
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
        sonosImage,
      ],
      translateValue: 0,
      containerWidth: 0,
      duplicateImages: [],
    };
  },
  mounted() {
    this.containerWidth = document.querySelector(".slider").offsetWidth;
    this.duplicateImages = [...this.images, ...this.images]; // Duplicate images for continuous loop
    this.startAutoSlide();
  },
  methods: {
    startAutoSlide() {
      requestAnimationFrame(this.slideNext);
    },
    slideNext() {
      this.translateValue -= 0.6; // Adjust the speed as needed

      if (this.translateValue <= -this.containerWidth / 2) {
        this.translateValue = 0;
      }

      requestAnimationFrame(this.slideNext);
    },
  },
};
</script>

<style scoped>
.slider {
  overflow: hidden;
  width: 100%;
}

.slider-content {
  display: flex;
}

img {
  width: 100%;
  height: auto;
}
</style>
