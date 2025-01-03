<template>
    <section class="mb-6">
      <h2 class="text-2xl font-bold mb-2">Projects</h2>
      <ul class="list-disc pl-6">
        <li v-for="project in projects" :key="project.name">
          <a :href="project.link" class="text-blue-500 underline" target="_blank">{{ project.name }}</a>
        </li>
      </ul>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        projects: [
          { name: 'Portfolio Site', link: 'https://github.com/username/portfolio' },
          { name: 'E-commerce App', link: 'https://github.com/username/ecommerce-app' },
        ],
      };
    },
  });
  </script>
  