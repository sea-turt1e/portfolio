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
            company: '株式会社Ｚ会', 
            role: '研究開発チームリーダー', 
            year: '2023/10-現在',
            description: '機械学習モデル開発とデータ分析、LLMを用いたプロトタイプ開発を担当。チームリーダーとしてプロジェクトの進行管理を行う。',
            technologies: ['Python', 'PyTorch', 'LLM', 'AWS']
          },
          { 
            company: '株式会社Ｚ会', 
            role: 'AIサーバーのバックエンドエンジニア', 
            year: '2023/10-現在',
            description: '自社の他サービスからアクセスされるAI関連サービスのAPIの開発と運用',
            technologies: ['Python', 'OpenAPI', 'FastAPI', 'GitHub Actions']
          },
          { 
            company: '株式会社Ｚ会', 
            role: 'toB向けサービスのバックエンド/フロントエンドエンジニア', 
            year: '2024/06-2024/08, 2025/04-2025/05',
            description: 'toB向けサービスの改修を担当。GoとVue.jsを使用して、バックエンド開発とフロントエンド開発を行う。',
            technologies: ['Go', 'Vue.js', 'TypeScript']
          },
          {
            company: 'モリカトロン株式会社',
            role: 'ゲーム開発のバックエンドエンジニア',
            year: '2023/04-2023/07',
            description: 'インディーゲーム祭典用の自社ゲームのプロトタイプ開発',
            technologies: ['Python', 'Git', 'GitHub', 'FastAPI']
          },
          {
            company: 'モリカトロン株式会社',
            role: '生成モデル開発の機械学習/バックエンドエンジニア',
            year: '2020/10-2023/03',
            description: '機械学習を用いた雑談のできるテキスト生成モデルの開発と、そのモデルのボットへの適用。',
            technologies: ['Python', 'MySQL', 'Pytorch', 'FastAPI']
          },
          {
            company: 'モリカトロン株式会社',
            role: '自然言語処理モデル開発の機械学習エンジニア',
            year: '2022/09-2022/12',
            description: 'ニューラルネットワークを用いた自然言語処理分類モデルの構築',
            technologies: ['Python', 'Pytorch']
          },
          {
            company: 'モリカトロン株式会社',
            role: '採用（機械学習エンジニア）',
            year: '2021/04-2022/12',
            description: '採用におけるカジュアル面談と書類選考'
          },
        ],
      };
    },
  });
  </script>
  