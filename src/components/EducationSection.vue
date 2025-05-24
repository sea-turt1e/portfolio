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
            school: '東京工業大学', 
            degree: '情報理工学修士', 
            year: '2016-2018',
            description: 'コンピュータサイエンス専攻。機械学習とWebシステム開発を専門的に学習。',
            achievements: [
              '優秀論文賞受賞（機械学習を用いたWebアプリケーション最適化）',
              'ACM学生研究コンテスト入賞',
              'プログラミングコンテスト全国大会出場'
            ]
          },
          { 
            school: '東京工業大学', 
            degree: '情報工学学士', 
            year: '2012-2016',
            description: 'プログラミング基礎、データ構造・アルゴリズム、データベース設計等を学習。',
            achievements: [
              'GPA 3.8/4.0（首席卒業）',
              '学部代表として国際学会発表',
              '学生チューターとして後輩指導'
            ]
          },
        ],
      };
    },
  });
  </script>
  