<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('education.title') }}</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="space-y-6">
      <div v-for="edu in education" :key="edu.school" 
           class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h3>
          <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {{ edu.year }}
          </span>
        </div>
        <h4 class="text-lg font-medium text-blue-600 mb-2">{{ edu.school }}</h4>
        <p class="text-gray-600 mb-3">{{ edu.description }}</p>
        <div v-if="edu.achievements && edu.achievements.length > 0">
          <h5 class="font-medium text-gray-800 mb-2">{{ $t('education.achievements') }}</h5>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li v-for="achievement in edu.achievements" :key="achievement">{{ achievement }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    computed: {
      education() {
        const educationData = [
          { 
            schoolKey: 'education.naist.school',
            degreeKey: 'education.naist.degree',
            yearKey: 'education.naist.year',
            descriptionKey: 'education.naist.description',
            achievementsKey: [
              'education.naist.achievements.thesis',
              'education.naist.achievements.internship'
            ]
          },
          { 
            schoolKey: 'education.tsukuba.school',
            degreeKey: 'education.tsukuba.degree',
            yearKey: 'education.tsukuba.year',
            descriptionKey: 'education.tsukuba.description',
            achievementsKey: [
              'education.tsukuba.achievements.thesis',
              'education.tsukuba.achievements.internship'
            ]
          },
        ];

        return educationData.map(edu => ({
          school: this.$t(edu.schoolKey),
          degree: this.$t(edu.degreeKey),
          year: this.$t(edu.yearKey),
          description: this.$t(edu.descriptionKey),
          achievements: edu.achievementsKey.map(key => this.$t(key))
        }));
      }
    }
  });
  </script>
  