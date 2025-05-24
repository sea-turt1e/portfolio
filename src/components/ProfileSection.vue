<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-xl font-semibold text-gray-800">sea-turt1e</h3>
        <p class="text-gray-600 leading-relaxed">
          メインは機械学習エンジニアとして、機械学習モデルの開発やデータ分析を行っています。
          また、バックエンドやフロントエンドの開発、インフラの構築なども行います。<br>
          専門は自然言語処理です。<br>
        </p>
        <div class="grid grid-cols-2 gap-4 mt-6">
          <div class="bg-blue-50 p-4 rounded-lg text-center">
            <h4 class="font-semibold text-blue-800">専門分野</h4>
            <p class="text-sm text-blue-600">機械学習モデル開発<br>自然言語処理</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg text-center">
            <h4 class="font-semibold text-purple-800">経験年数</h4>
            <p class="text-sm text-purple-600">5年</p>
          </div>
        </div>
      </div>
      
      <div class="flex justify-center">
        <div class="relative">
          <div class="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-1 hover-lift">
            <div class="w-full h-full bg-white rounded-full overflow-hidden">
              <!-- オプション1: ローカル画像を使用する場合 -->
              <img 
                src="@/assets/images/profile.jpg" 
                alt="プロフィール画像" 
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
              
              <!-- オプション2: Gravatar または外部画像を使用する場合 -->
              <!-- <img 
                src="https://via.placeholder.com/250x250/4F46E5/FFFFFF?text=Profile" 
                alt="プロフィール画像" 
                class="w-full h-full object-cover"
                @error="handleImageError"
              /> -->
              
              <!-- オプション3: アバター生成サービスを使用 -->
              <!-- <img 
                src="https://ui-avatars.com/api/?name=Yamada+Hikaru&size=250&background=4F46E5&color=fff&format=svg" 
                alt="プロフィール画像" 
                class="w-full h-full object-cover"
              /> -->
            </div>
          </div>
          <div class="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-3 hover-lift">
            <span class="text-2xl">🏀</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    methods: {
      handleImageError(event: Event) {
        // 画像の読み込みに失敗した場合のフォールバック
        const target = event.target as HTMLImageElement;
        target.src = 'https://ui-avatars.com/api/?name=Profile&size=250&background=6B7280&color=fff&format=svg';
      }
    }
  });
  </script>
  