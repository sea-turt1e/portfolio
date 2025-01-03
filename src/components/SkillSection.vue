<template>
    <section class="mb-6">
      <h2 class="text-2xl font-bold mb-2">Skills</h2>
      <div v-for="skill in skills" :key="skill.name" class="mb-2">
        <p>{{ skill.name }}</p>
        <div class="w-full bg-gray-300 rounded h-4">
          <div
            class="bg-blue-500 h-4 rounded"
            :style="{ width: skill.percentage + '%' }"
          ></div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        skills: [
          { name: 'JavaScript', percentage: 80 },
          { name: 'TypeScript', percentage: 80 },
          { name: 'Vue.js', percentage: 85 },
          { name: 'Python', percentage: 70 },
        ],
      };
    },
  });
  </script>
  