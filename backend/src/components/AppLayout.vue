<template>
  <!-- Agar data load ho raha hai to loader dikhayenge -->
  <div v-if="isLoading" class="min-h-full bg-gray-200 flex items-center justify-center">
    <div class="flex flex-col items-center">
      <svg
        class="animate-spin -ml-1 mr-3 h-8 w-8 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <div class="mt-2">Loading, please wait...</div>
    </div>
  </div>

  <!-- Jab user data load ho jaye to content dikhao -->
  <div v-show="!isLoading && currentUser" class="min-h-full bg-gray-200 flex">
    <!-- Sidebar -->
    <Sidebar :class="{'-ml-[200px]': !sidebarOpened}" />
    <!-- Sidebar End -->

    <div class="flex-1">
      <Navbar @toggle-sidebar="toggleSidebar" />
      
      <!-- Content Area -->
      <main class="p-6">
        <router-view />
      </main>
      <!-- Content End -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store";

// Sidebar state
const sidebarOpened = ref(true);

// Current user from store
const currentUser = computed(() => store.state.user.data);
const isLoading = ref(true); // Loader state

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value;
}

// Update sidebar state based on screen width
function updateSidebarState() {
  sidebarOpened.value = window.outerWidth > 768;
}

onMounted(() => {
  console.log("Fetching user data...");
  store
    .dispatch("getUser")
    .then(() => {
      console.log("User data loaded:", store.state.user.data);
      isLoading.value = false;
    })
    .catch((error) => {
      console.error("Error fetching user:", error);
      isLoading.value = false;
    });

  updateSidebarState();
  window.addEventListener("resize", updateSidebarState);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSidebarState);
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
