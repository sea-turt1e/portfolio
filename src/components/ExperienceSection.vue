<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Work Experience</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="space-y-6">
      <div v-for="(exp, index) in experiences" :key="exp.company" class="relative">
        <div class="flex items-start">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
            {{ index + 1 }}
          </div>
          <div class="flex-1 bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 class="text-xl font-semibold text-gray-800">{{ exp.role }}</h3>
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ exp.year }}
              </span>
            </div>
            <h4 class="text-lg font-medium text-blue-600 mb-2">{{ exp.company }}</h4>
            <p class="text-gray-600 mb-4">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in exp.technologies" :key="tech" 
                    class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="index < experiences.length - 1" class="absolute left-6 top-16 w-0.5 h-6 bg-gray-300"></div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        experiences: [
          { 
            company: 'Tech Corp', 
            role: 'シニアフルスタック開発者', 
            year: '2020-2023',
            description: 'Webアプリケーションの設計・開発・運用を担当。チームリードとして5名のメンバーをマネジメント。',
            technologies: ['Python', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS']
          },
          { 
            company: 'Code Studio', 
            role: 'バックエンド開発者', 
            year: '2018-2020',
            description: 'REST APIの開発とマイクロサービスアーキテクチャの構築。パフォーマンス最適化により応答時間を50%改善。',
            technologies: ['Go', 'MongoDB', 'Redis', 'Kubernetes', 'GCP']
          },
        ],
      };
    },
  });
  </script>
  