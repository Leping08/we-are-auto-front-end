<template>
  <div class="bg-white shadow px-4 py-5 rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Password</h3>
        <p class="mt-1 text-sm text-gray-500">
          Update or change your password.
        </p>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <div class="space-y-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-6">
              <div class="flex items-center">
                <v-input
                  class="w-full"
                  v-model="oldPassword"
                  color="blue"
                  label="Old Password"
                  placeholder=""
                  :rules="['min:2', 'max:255', 'required']"
                  :type="showOldPassword ? 'text' : 'password'"
                />
                <div
                  class="text-gray-500 pt-5 ml-2 cursor-pointer"
                  @click="showOldPassword = !showOldPassword"
                >
                  <eye v-if="!showOldPassword" class="h-6" />
                  <eye-off v-if="showOldPassword" class="h-6" />
                </div>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-6">
              <div class="flex items-center">
                <v-input
                  class="w-full"
                  v-model="newPassword"
                  color="blue"
                  label="New Password"
                  placeholder=""
                  :rules="['min:2', 'max:255', 'required']"
                  :type="showNewPasswords ? 'text' : 'password'"
                />
                <div
                  class="text-gray-500 pt-5 ml-2 cursor-pointer"
                  @click="showNewPasswords = !showNewPasswords"
                >
                  <eye v-if="!showNewPasswords" class="h-6" />
                  <eye-off v-if="showNewPasswords" class="h-6" />
                </div>
              </div>
            </div>

            <div class="col-span-6 sm:col-span-6">
              <div class="flex items-center">
                <v-input
                  class="w-full"
                  v-model="confirmNewPassword"
                  color="blue"
                  label="Confirm New Password"
                  placeholder=""
                  :rules="['min:2', 'max:255', 'required']"
                  :type="showNewPasswords ? 'text' : 'password'"
                />
                <div
                  class="text-gray-500 pt-5 ml-2 cursor-pointer"
                  @click="showNewPasswords = !showNewPasswords"
                >
                  <eye v-if="!showNewPasswords" class="h-6" />
                  <eye-off v-if="showNewPasswords" class="h-6" />
                </div>
              </div>
            </div>
          </div>
          <!-- <div>
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
import eyeOff from "@/assets/icons/eye-off-outline.vue";
import eye from "@/assets/icons/eye-outline.vue";
export default {
  name: "PasswordChange",
  components: {
    eyeOff,
    eye,
  },
  data() {
    return {
      user: {},
      oldPassword: "",
      showOldPassword: false,
      newPassword: "",
      confirmNewPassword: "",
      showNewPasswords: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters("user", ["user"]),
    eligibleForUpdate() {
      return (
        this.oldPassword &&
        this.newPassword &&
        this.confirmNewPassword &&
        this.newPassword === this.confirmNewPassword
      );
    },
  },
  methods: {
    async save() {
      this.loading = true;
      // todo handel error
      await api.post(`/user/${this.user.id}`, {
        old_password: this.oldPassword,
        password: this.newPassword,
        password_confirmation: this.confirmNewPassword,
      });
      this.loading = false;
      await this.getFreshUserData();
    },
    async getFreshUserData() {
      this.loading = true;
      const response = await api.get("/user/me");
      this.user = response?.data;
      this.loading = false;
    },
  },
  mounted() {
    this.getFreshUserData();
  },
};
</script>
