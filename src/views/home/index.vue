<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden">
    <div class="mx-auto">
      <div
        class="
          relative
          z-10
          pb-8
          bg-white
          sm:pb-16
          md:pb-20
          lg:max-w-4xl lg:w-full lg:pb-28
          xl:pb-32
        "
      >
        <svg
          class="
            hidden
            lg:block
            absolute
            right-0
            inset-y-0
            h-full
            w-96
            text-white
            transform
            translate-x-1/2
          "
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main
          class="
            mt-10
            mx-auto
            max-w-7xl
            px-4
            sm:mt-0 sm:px-6
            md:mt-0
            lg:mt-0 lg:px-8
            xl:mt-0
          "
        >
          <div class="sm:text-center lg:text-left pl-20">
            <h1
              class="
                text-2xl
                tracking-tight
                font-bold
                text-gray-900
                sm:text-3xl
                md:text-5xl
                pt-24
              "
            >
              <span class="block xl:inline">For</span>
              {{ " " }}
              <span class="block text-blue-500 xl:inline">Enthusiasts</span>
              <br />
              <span class="block xl:inline">By</span>
              {{ " " }}
              <span class="block text-blue-500 xl:inline">Enthusiasts</span>
            </h1>
            <p
              class="
                mt-3
                text-base text-gray-500
                sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
                md:mt-5 md:text-xl
                lg:mx-0
              "
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-white
                    bg-blue-500
                    hover:bg-blue-400
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="
                    w-full
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-md
                    text-blue-500
                    bg-blue-100
                    hover:bg-blue-200
                    md:py-4 md:text-lg md:px-10
                  "
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="@/assets/images/sebring.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test: "",
    };
  },
};
</script>
