<template>
  <div class="h-screen relative">
    <Particles
      class="absolute h-screen w-full"
      id="tsparticles"
      :options="options"
    />
  </div>
</template>

<script>
export default {
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
