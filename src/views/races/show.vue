<template>
  <div>
    {{ race }}
  </div>
</template>

<script>
import Race from "@/api/races";
export default {
  data() {
    return {
      race: [],
    };
  },
  async created() {
    const response = await new Race().show(this.$route.params.id);
    this.race = response.data;
  },
};
</script>
