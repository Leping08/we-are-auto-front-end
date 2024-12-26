<template>
  <!-- @todo add nice transition or fade when the image changes -->
  <img :src="images[currentImageIndex]" @click="nextImage"
    class="hidden sm:block cursor-pointer w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0" />
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/src/assets/images/race-cars/porsche-gtp.jpg',
        '/src/assets/images/race-cars/glickenhaus.jpg',
        '/src/assets/images/race-cars/proton.jpg',
        '/src/assets/images/race-cars/mercedes-rolex-24.jpg',
        '/src/assets/images/race-cars/turn-7.jpg',
        '/src/assets/images/race-cars/mustang.jpg',
        '/src/assets/images/race-cars/mclaren.jpg',
        '/src/assets/images/race-cars/pfaff.jpg',
      ],
      currentImageIndex: 0,
    }
  },
  created() {
    // Get random image
    this.currentImageIndex = Math.floor(Math.random() * this.images.length)

    // Set interval to change image every 15 seconds
    setInterval(() => {
      this.nextImage()
    }, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  }
} 
</script>