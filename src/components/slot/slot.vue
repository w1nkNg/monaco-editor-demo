<template>
  <div v-for="item in slotData">
    <slot :slot_data="item"></slot>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
type person = {
  name: string;
  age: number;
};

let slotData = reactive([
  { name: "nick", age: 20 },
  {
    name: "Jack",
    age: 30,
  },
]);
</script>

<style></style>
