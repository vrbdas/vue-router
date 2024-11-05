<script setup>
import { ref, computed, inject } from 'vue';

const email = ref('');
const password = ref('');
const isValid = computed(() => {
  return email.value !== '' && password.value !== '';
});
// const login = inject('login');
// const logout = inject('logout');
const {login} = inject('providedData');

function submitForm() {
  if (isValid.value) {
    login();
  }
}
</script>

<template>
  <form class="card" @submit.prevent="submitForm">
    <h1 class="title">Mail App</h1>
    <label>Email:<input type="text" v-model="email"/></label>
    <label>Password:<input type="text" v-model="password"/></label>
    <button class="btn" type="submit">Login</button>
    <RouterLink to="/forget">
      <button class="btn">Forget password?</button>
    </RouterLink>
  </form>
</template>

<style scoped lang="scss">

</style>
