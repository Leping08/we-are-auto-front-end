<template>
  <div>
    <div class="space-y-6 m-4">
      <profile />

      <password-change />

      <!-- <div class="bg-white shadow px-4 py-5 rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
            <p class="mt-1 text-sm text-gray-500">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form class="space-y-6" action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                  <div class="contents text-base font-medium text-gray-900">
                    Series Subscriptions
                  </div>
                  <div class="text-sm text-gray-500">
                    We'll send you emails when new episodes are available.
                  </div>
                </div>
                <div class="md:col-span-2 sm:col-span-3 col-span-6">
                  <v-check-box 
                    color="cyan"
                    v-model="user.subscribedToSeries"
                    value="1"
                    label="IMSA"
                    sub-title="International Motor Sports Association" />
                </div>
                <div class="md:col-span-2 sm:col-span-3 col-span-6">
                  <v-check-box 
                    color="cyan"
                    v-model="user.subscribedToSeries"
                    value="1"
                    label="WEC"
                    sub-title="FIA World Endurance Championship" />
                </div>
                <div class="md:col-span-2 sm:col-span-3 col-span-6">
                  <v-check-box 
                    color="cyan"
                    v-model="user.subscribedToSeries"
                    value="1"
                    label="24H"
                    sub-title="24H Series" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// todo move over to setup
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/auth.js";
import profile from "@/components/user/profile.vue";
import passwordChange from "@/components/user/passwordChange.vue";
export default {
  components: {
    profile,
    passwordChange,
  },
  computed: {
    ...mapState(useAuthStore, {
      user: (store) => store.user,
    })
  },
};
</script>
