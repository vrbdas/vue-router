<script setup>
import { ref, provide } from 'vue';
import TheNavbar from './components/TheNavbar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emails = [
  {
    id: 1,
    theme: 'New Features in Vue 3.2',
    body: 'Hello! The new Vue 3.2 release includes features like `<script setup>`, reactive optimizations, and performance improvements. Update your project and try them out in action!'
  },
  {
    id: 2,
    theme: 'How to Use the Composition API',
    body: 'Hi there! We’ve prepared a guide on working with the Composition API. In this email, we’ll show you how it enhances readability and reusability in your components.'
  },
  {
    id: 3,
    theme: 'Tips for Optimizing Vue Application Performance',
    body: 'Greetings! In this issue, we’re sharing the best practices for improving performance in Vue applications, including dynamic component loading and using Vuex for state management.'
  },
  {
    id: 4,
    theme: 'Introduction to Vue Router 4',
    body: 'Good day! Check out the features of Vue Router 4. In this email, you’ll find examples of route configuration, working with nested routes, and asynchronous component loading.'
  },
  {
    id: 5,
    theme: 'How to Integrate Vue with TypeScript',
    body: 'Hi! This article will show you how to integrate Vue with TypeScript to improve type safety and code reliability. Start using TypeScript in your project today!'
  }
];
const isAuth = ref(true);

function login() {
  isAuth.value = true;
  router.replace('/home'); // то же что push но не сохраняет переход в истории
}

function logout() {
  isAuth.value = false;
  router.replace('/login');
}

provide('providedData', {emails, login, logout})
</script>

<template>
  <TheNavbar v-show="isAuth" :logout="logout"></TheNavbar>
  <div class="container">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
