<template>
  <div class="h-screen relative">
    <div class="flex justify-around items-center h-screen">
      <div class="relative w-2/5 border-2 border-primary rounded">
        <div
          class="
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-white
            border-t-2 border-l-2 border-r-2 border-primary
            text-lg text-gray-900
          "
        >
          Michael
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
      <div class="relative w-2/5 border-2 border-primary rounded">
        <div
          class="
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-white
            border-t-2 border-l-2 border-r-2 border-primary
            text-lg text-gray-900
          "
        >
          Derek
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
    </div>
    <div
      class="
        w-1/5
        p-2
        absolute
        top-0
        left-0
        bg-white
        border-b-2 border-r-2 border-primary
        rounded-br-lg
      "
    >
      <div class="flex items-center">
        <div>
          <img
            class="h-20 w-auto"
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
          border-r-2 border-l-2 border-t-2 border-primary
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
              <facebook class="h-6 text-primary" />
            </div>
            <div class="ml-1">@weareauto</div>
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
import facebook from "@/assets/icons/facebook.vue";
export default {
  components: {
    tiktok,
    monitorCellphone,
    instagram,
    facebook,
  },
};
</script>

<style>
.-mt-46 {
  margin-top: -46px;
}
</style>
