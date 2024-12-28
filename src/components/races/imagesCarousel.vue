<template>
  <div class="hidden sm:flex items-center justify-center w-full h-full">
    <img :src="images[currentImageIndex]" @click="nextImage"
      class="w-full h-full object-cover cursor-pointer rounded-xl shadow-xl ring-1 ring-gray-400/10" />
  </div>
</template>

<script>
// Imports all the iamges in the race cars folder
const images = Object.values(import.meta.glob('@/assets/images/race-cars/*.jpg', { eager: true, import: 'default' }))

export default {
  data() {
    return {
      images,
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