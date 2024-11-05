<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goToLogin() {
  router.push('/login');
}
</script>

<template>
  <div class="card">
    <h2 class="subtitle">Forget password?</h2>
    <p>Try to remember!</p>
    <button @click="goToLogin" class="btn">Back to login</button>
    <!-- <button @click="$router.push('/login')" class="btn">Back to login</button> -->
  </div>
</template>

<style scoped lang="scss"></style>
