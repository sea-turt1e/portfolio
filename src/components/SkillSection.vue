<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('skills.title') }}</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="skill in skills" :key="skill.name" class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4" :style="{ backgroundColor: skill.color + '20' }">
            {{ skill.icon }}
          </div>
          <div>
            <h3 class="font-semibold text-gray-800">{{ skill.name }}</h3>
            <p class="text-sm text-gray-600">{{ skill.level }}</p>
          </div>
        </div>
        
        <div class="mb-2">
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm font-medium text-gray-700">{{ $t('skills.proficiency') }}</span>
            <span class="text-sm text-gray-500">{{ skill.percentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="h-2 rounded-full transition-all duration-700 ease-out"
              :style="{ 
                width: skill.percentage + '%',
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
              }"
            ></div>
          </div>
        </div>
        
        <div class="mt-4">
          <p class="text-xs text-gray-600">{{ skill.description }}</p>
        </div>
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
        { 
          name: 'Python', 
          percentage: 90,
          level: 'Expert',
          color: '#3776ab',
          icon: '🐍',
          description: 'Web開発、データ分析、機械学習に使用'
        },
        { 
          name: 'Go', 
          percentage: 40,
          level: 'Intermediate',
          color: '#00add8',
          icon: '🐿️',
          description: 'API開発に使用'
        },
        { 
          name: 'Vue.js', 
          percentage: 20,
          level: 'Beginner',
          color: '#4fc08d',
          icon: 'V',
          description: 'フロントエンド開発に使用'
        },
      ],
    };
  },
});
</script>