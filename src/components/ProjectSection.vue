<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div v-for="project in projects" :key="project.name" 
           class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl mr-4">
            {{ project.icon }}
          </div>
          <h3 class="text-xl font-semibold text-gray-800">{{ project.name }}</h3>
        </div>
        
        <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="tech in project.technologies" :key="tech" 
                class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
            {{ tech }}
          </span>
        </div>
        
        <div class="flex space-x-4">
          <a :href="project.link" target="_blank" 
             class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
            </svg>
            View Project
          </a>
          <a :href="project.github" target="_blank" 
             class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
            </svg>
            GitHub
          </a>
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
        projects: [
          { 
            name: 'Portfolio Site', 
            link: 'https://github.com/username/portfolio',
            github: 'https://github.com/username/portfolio',
            icon: '🌐',
            description: 'Vue.js と Tailwind CSS を使用して構築した個人ポートフォリオサイト。レスポンシブデザインとモダンなUIを実装。',
            technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite']
          },
          { 
            name: 'E-commerce App', 
            link: 'https://github.com/username/ecommerce-app',
            github: 'https://github.com/username/ecommerce-app',
            icon: '🛒',
            description: 'フルスタックECサイト。決済システム、在庫管理、ユーザー認証機能を実装。Docker でのコンテナ化も実施。',
            technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker']
          },
          { 
            name: 'API Gateway Service', 
            link: 'https://github.com/username/api-gateway',
            github: 'https://github.com/username/api-gateway',
            icon: '⚡',
            description: 'Go言語で構築した高パフォーマンスAPIゲートウェイ。レート制限、認証、ログ機能を提供。',
            technologies: ['Go', 'gRPC', 'MongoDB', 'Kubernetes', 'Prometheus']
          },
          { 
            name: 'Data Analytics Dashboard', 
            link: 'https://github.com/username/analytics-dashboard',
            github: 'https://github.com/username/analytics-dashboard',
            icon: '📊',
            description: 'リアルタイムデータ可視化ダッシュボード。WebSocketを使用したリアルタイム更新とインタラクティブなチャートを実装。',
            technologies: ['React', 'D3.js', 'WebSocket', 'Python', 'FastAPI']
          },
        ],
      };
    },
  });
  </script>
  