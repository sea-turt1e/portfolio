<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-xl font-semibold text-gray-800">山田 光（Yamada Hikaru）</h3>
        <p class="text-gray-600 leading-relaxed">
          フルスタック開発者として、革新的なWebアプリケーションの開発に情熱を注いでいます。
          バックエンドからフロントエンドまで、幅広い技術スタックを駆使して、
          ユーザーにとって価値のあるソリューションを提供することを目指しています。
        </p>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <h4 class="font-semibold text-blue-800">専門分野</h4>
            <p class="text-sm text-blue-600">Web開発・API設計</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <h4 class="font-semibold text-purple-800">経験年数</h4>
            <p class="text-sm text-purple-600">5年</p>
          </div>
        </div>
      </div>
      
      <div class="flex justify-center">
        <div class="relative">
          <div class="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1">
            <div class="w-full h-full bg-white rounded-full flex items-center justify-center">
              <div class="text-6xl">👨‍💻</div>
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-3">
            <span class="text-2xl">✨</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  