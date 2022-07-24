<template>
  <div class="bg-white shadow px-4 py-5 rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-500">
          Information used to login and out.
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="space-y-6">
          <div class="grid grid-cols-6 gap-6">
            <!-- <div class="col-span-6 sm:col-span-6">
              <label class="block text-sm font-medium text-gray-700"> Photo </label>
              <div class="mt-1 flex items-center space-x-5">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
              </div>
            </div> -->
            <div class="col-span-6 sm:col-span-6">
              <v-input
                v-model="name"
                color="blue"
                label="Name"
                placeholder=""
                :rules="['min:2', 'max:255', 'required']"
                type="text"
              />
            </div>

            <div class="col-span-6 sm:col-span-6">
              <v-input
                v-model="email"
                color="blue"
                label="Email"
                placeholder=""
                :rules="['min:2', 'max:255', 'required']"
                type="text"
              />
            </div>
          </div>
          <div class="flex justify-end items-center">
            <!-- <div class="mr-2 text-sm text-red-600">
              Error messages will appear here.
            </div> -->
            <div class="mr-2">
              <v-progress-spinner v-if="loading" :size="7" color="blue" />
            </div>
            <div class="flex justify-end">
              <v-button
                @click="save()"
                :disabled="!eligibleForUpdate || loading"
                type="submit"
                >Save</v-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/api/auth/index.js";
export default {
  name: "Account",
  data() {
    return {
      oldUser: {},
      name: "",
      email: "",
      loading: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
    eligibleForUpdate() {
      return this.oldUser.name != this.name || this.oldUser.email != this.email;
    },
  },
  methods: {
    async save() {
      this.loading = true;
      // todo handel error
      await api.post(`/user/${this.oldUser.id}`, {
        ...(this.name != this.oldUser.name && { name: this.name }),
        ...(this.email != this.oldUser.email && { email: this.email }),
      });
      this.loading = false;
      await this.getFreshUserData();
    },
    async getFreshUserData() {
      this.loading = true;
      const response = await api.get("/user/me");
      this.oldUser = response?.data;
      this.email = response?.data?.email;
      this.name = response?.data?.name;
      this.loading = false;
    },
  },
  mounted() {
    this.getFreshUserData();
  },
};
</script>
