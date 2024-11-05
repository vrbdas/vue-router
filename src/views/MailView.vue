<script setup>
import { inject } from 'vue';

const { emails } = inject('providedData');
</script>

<template>
  <div class="mail">
    <ul class="card card__list">
      <li class="card__list-item" v-for="item in emails" :key="item.id">
        <RouterLink :to="`/mail/${item.id}`">{{ item.theme }}</RouterLink>
      </li>
    </ul>
    <RouterView/>
  </div>
</template>

<style scoped lang="scss">

</style>
