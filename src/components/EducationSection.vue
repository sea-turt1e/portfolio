<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Education</h2>
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
          <h5 class="font-medium text-gray-800 mb-2">主な成果</h5>
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
    data() {
      return {
        education: [
          { 
            school: 'NAIST（奈良先端科学技術大学院大学）', 
            degree: '情報理工学修士', 
            // year: '2020',
            description: '自然言語処理学研究室。自然言語処理と機械学習を専門的に学習。',
            achievements: [
              '修士論文: 会話における文脈を考慮した皮肉検出',
              'インターンシップ: 株式会社ニューズピックス（現:株式会社ユーザベース）にて、ニュースコンテンツアルゴリズムの改善に従事'
            ]
          },
          { 
            school: '筑波大学', 
            degree: '工学士（経営工学）', 
            // year: '2015',
            description: '組織行動論研究室。行動心理学を学び、データ分析/統計の基礎を習得。',
            achievements: [
              '卒業論文: 看護師の抑うつ対処に関する分析/統計の研究',
              'インターンシップ: 株式会社レアジョブのフィリピンオフィスにてマーケティング業務に従事'
            ]
          },
        ],
      };
    },
  });
  </script>
  