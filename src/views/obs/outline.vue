<template>
  <div class="h-screen relative">
    <slot></slot>
    <div
      class="
        w-1/5
        p-2
        absolute
        top-0
        left-0
        bg-white
        border-b-4 border-r-4 border-primary
        rounded-br-lg
      "
    >
      <div class="flex items-center">
        <div>
          <img
            class="h-16 w-auto"
            src="@/assets/logos/waa-logo-dark.svg"
            alt="We Are Auto"
          />
        </div>
        <div>
          <div class="text-4xl text-gray-900">We Are Auto</div>
          <div class="text-gray-400">
            For <span class="text-primary">Enthusiasts</span> By
            <span class="text-primary">Enthusiasts</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full absolute bottom-0">
      <div
        class="
          w-1/2
          bg-white
          p-2
          mx-auto
          border-r-4 border-l-4 border-t-4 border-primary
          rounded-t-lg
        "
      >
        <div class="flex items-center justify-around text-gray-600">
          <div class="flex items-center">
            <div>
              <monitor-cellphone class="h-5 text-primary" />
            </div>
            <div class="ml-1">weareauto.io</div>
          </div>
          <div class="flex items-center">
            <div>
              <youtube class="h-6 text-primary" />
            </div>
            <div class="ml-1">We Are Auto</div>
          </div>
          <div class="flex items-center">
            <div>
              <instagram class="h-5 text-primary" />
            </div>
            <div class="ml-1">@weareauto_</div>
          </div>
          <div class="flex items-center">
            <div>
              <tiktok class="h-5 text-primary" />
            </div>
            <div class="ml-1">@weareauto</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tiktok from "@/assets/icons/tiktok.vue";
import monitorCellphone from "@/assets/icons/monitor-cellphone.vue";
import instagram from "@/assets/icons/instagram.vue";
import youtube from "@/assets/icons/youtube.vue";
export default {
  components: {
    tiktok,
    monitorCellphone,
    instagram,
    youtube,
  },
};
</script>
