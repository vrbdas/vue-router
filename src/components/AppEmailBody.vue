<script setup>
import { inject, computed } from 'vue';

const props = defineProps(['mailId']);
const { emails } = inject('providedData');
const email = computed(() => {
  return emails.find((item) => item.id == props.mailId);
});
</script>

<template>
  <div v-if="email" class="card">
    <div class="card__content">
      <h2 class="subtitle">{{ email.theme }}</h2>
      <p>{{ email.body }}</p>
    </div>
    <button class="btn" @click.prevent="$router.push('/mail')">Close</button>
  </div>
</template>

<style scoped lang="scss">
.card {
  grid-column: span 2;
}
</style>
