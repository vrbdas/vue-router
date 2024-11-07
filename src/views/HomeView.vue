<script setup>
import { onBeforeRouteLeave } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();

onBeforeRouteLeave(() => confirm('Are you sure to leave?'));
</script>

<template>
  <div class="card">
    <h1 class="title">Home page</h1>
    <p>From this page you can go to any page and read prepared emails.</p>
    <button class="btn" @click="counter.count++">Count</button>
    <p>Counter value: {{ counter.count }}</p>
    <RouterLink to="/mail">
      <button class="btn">Go to emails</button>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss"></style>
