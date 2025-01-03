<template>
    <section class="mb-6">
      <h2 class="text-2xl font-bold mb-2">Education</h2>
      <ul class="list-disc pl-6">
        <li v-for="edu in education" :key="edu.school">
          <p>
            <span class="font-bold">{{ edu.school }}</span> - {{ edu.degree }} ({{ edu.year }})
          </p>
        </li>
      </ul>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        education: [
          { school: 'University of XYZ', degree: 'B.S. in Computer Science', year: '2014-2018' },
          { school: 'High School ABC', degree: 'High School Diploma', year: '2010-2014' },
        ],
      };
    },
  });
  </script>
  