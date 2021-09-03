<template>
  <div class="h-screen relative">
    <Particles
      class="absolute h-screen w-full"
      id="tsparticles"
      :options="options"
    />
    <div class="flex justify-around items-center h-screen">
      <div
        class="
          relative
          w-2/5
          bg-gradient-to-br
          from-blue-500
          via-indigo-500
          to-blue-600
        "
      >
        <div
          class="
            bg-blue-500
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-gradient-to-r
            from-blue-600
            to-blue-400
            text-lg text-white
          "
        >
          Michael
        </div>
        <div class="aspect-w-16 aspect-h-9"></div>
      </div>
      <div
        class="
          relative
          w-2/5
          bg-gradient-to-br
          from-blue-500
          via-indigo-500
          to-blue-600
        "
      >
        <div
          class="
            bg-blue-500
            p-2
            top-0
            w-1/6
            -mt-46
            rounded-t-lg
            ml-4
            bg-gradient-to-br
            from-blue-600
            via-indigo-500
            to-blue-400
            border-t-2 border-l-2 border-r-2 border-white
            text-lg text-white
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
        bg-blue-800
        border-b-2 border-r-2 border-white
        rounded-br-lg
      "
    >
      <div class="flex items-center">
        <div>
          <img
            class="h-20 w-auto"
            src="@/assets/logos/waa-logo-light.svg"
            alt="We Are Auto"
          />
        </div>
        <div>
          <div class="text-4xl text-blue-50">We Are Auto</div>
          <div class="text-gray-400">
            For <span class="text-white">Enthusiasts</span> By
            <span class="text-white">Enthusiasts</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full absolute bottom-0">
      <div
        class="
          w-1/3
          bg-white
          p-2
          mx-auto
          border-r-2 border-l-2 border-t-2 border-blue-500
          rounded-t-lg
        "
      >
        <div class="flex items-center justify-around text-gray-600">
          <div class="flex items-center">
            <div>
              <monitor-cellphone class="h-5 text-blue-500" />
            </div>
            <div class="ml-2">weareauto.io</div>
          </div>
          <div class="flex items-center">
            <div>
              <facebook class="h-6 text-blue-500" />
            </div>
            <div class="ml-2">@WeAreAuto</div>
          </div>
          <div class="flex items-center">
            <div>
              <instagram class="h-5 text-blue-500" />
            </div>
            <div class="ml-2">@weareauto_</div>
          </div>
          <div class="flex items-center">
            <div>
              <tiktok class="h-5 text-blue-500" />
            </div>
            <div class="ml-2">@weareauto</div>
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
  data() {
    return {
      options: {
        background: {
          color: {
            // value: '#FFFFF'
            value: "#000000",
            // value: '#334155'
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 1,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: '#1E293B'
            value: "#F8FAFC",
          },
          links: {
            // color: '#1E293B',
            color: "#F8FAFC",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      },
    };
  },
};
</script>

<style>
.-mt-46 {
  margin-top: -46px;
}
</style>
