<template>
    <section class="mb-6">
      <h2 class="text-2xl font-bold mb-2">Experience</h2>
      <ul class="list-disc pl-6">
        <li v-for="exp in experiences" :key="exp.company">
          <p><span class="font-bold">{{ exp.company }}</span> - {{ exp.role }} ({{ exp.year }})</p>
        </li>
      </ul>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        experiences: [
          { company: 'Tech Corp', role: 'Frontend Developer', year: '2020-2023' },
          { company: 'Code Studio', role: 'Backend Developer', year: '2018-2020' },
        ],
      };
    },
  });
  </script>
  