<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('articles.title') }}</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>

    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-2 text-gray-600">{{ $t('articles.loading') }}</p>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">{{ $t('articles.error') }}</p>
      <a 
        href="https://zenn.dev/sea_turt1e" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
      >
        {{ $t('articles.viewOnZenn') }}
      </a>
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article 
        v-for="article in articles" 
        :key="article.id"
        class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border"
      >
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {{ article.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-3 line-clamp-3">
            {{ article.body_letters_count > 100 ? article.body_letters_count + $t('articles.characters') : '' }}
          </p>
          <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span>{{ formatDate(article.published_at) }}</span>
            <div class="flex items-center space-x-2">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
                {{ article.liked_count }}
              </span>
            </div>
          </div>
          <div class="flex flex-wrap gap-1 mb-3">
            <span 
              v-for="topic in article.topics" 
              :key="topic.name"
              class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {{ topic.name }}
            </span>
          </div>
        </div>
        <a 
          :href="article.path" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
        >
          {{ $t('articles.readArticle') }}
        </a>
      </article>
    </div>

    <div v-if="!loading && !error && articles.length > 0" class="text-center mt-8">
      <a 
        href="https://zenn.dev/sea_turt1e" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-full hover:shadow-lg transition-shadow"
      >
        {{ $t('articles.viewAll') }}
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

interface ZennTopic {
  name: string;
}

interface ZennArticle {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  body_letters_count: number;
  liked_count: number;
  path: string;
  topics: ZennTopic[];
}

export default defineComponent({
  name: 'ZennArticleSection',
  setup() {
    const articles = ref<ZennArticle[]>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const fetchZennArticles = async () => {
      try {
        loading.value = true;
        error.value = null;
        
        // ZennのAPIから記事を取得する（複数のフォールバック方法を実装）
        // 1. CORSプロキシ経由でのAPI呼び出し
        // 2. 静的JSONファイルからの読み込み  
        // 3. ハードコードされた記事データ
        const hardcodedArticles: ZennArticle[] = [
          {
            id: 1,
            title: "https://zenn.dev/sea_turt1e/articles/manga-graph-db",
            slug: "manga-graph-db",
            published_at: "2025-07-14",
            body_letters_count: 2000,
            liked_count: 5,
            path: "https://zenn.dev/sea_turt1e/articles/manga-graph-db",
            topics: [{ name: "グラフDB" }, { name: "Graph" }]
          },
          {
            id: 3,
            title: "ルールベースで表記揺れを解消するPythonライブラリ「yurenizer」を作成しました",
            slug: "afbe326366f1e7",
            published_at: "2024-11-25",
            body_letters_count: 2746,
            liked_count: 5,
            path: "https://zenn.dev/sea_turt1e/articles/afbe326366f1e7",
            topics: [{ name: "Python" }, { name: "表記揺れ" }]
          },
          {
            id: 2,
            title: "【kanjiconv】固有名詞にも対応した「漢字」→「かな/ローマ字」Python変換ライブラリ",
            slug: "e7dc022231a86c",
            published_at: "2024-10-24",
            body_letters_count: 2500,
            liked_count: 5,
            path: "https://zenn.dev/sea_turt1e/articles/e7dc022231a86c",
            topics: [{ name: "機械学習" }, { name: "Python" }]
          },
        ];

        // 実際のAPIを試す（CORSプロキシ経由）
        try {
          // CORSプロキシを使用してZenn APIにアクセス
          const proxyUrl = 'https://api.allorigins.win/get?url=';
          const targetUrl = encodeURIComponent('https://zenn.dev/api/articles?username=sea_turt1e');
          const response = await fetch(`${proxyUrl}${targetUrl}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          });
          
          if (response.ok) {
            const proxyData = await response.json();
            // CORSプロキシから返されたデータを解析
            const data = JSON.parse(proxyData.contents);
            articles.value = data.articles
              .slice(0, 9)
              .map((article: any) => ({
                id: article.id,
                title: article.title,
                slug: article.slug,
                published_at: article.published_at,
                body_letters_count: article.body_letters_count,
                liked_count: article.liked_count,
                path: `https://zenn.dev${article.path}`,
                topics: article.topics || []
              }))
              .sort((a: ZennArticle, b: ZennArticle) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
          } else {
            throw new Error('Proxy API response not ok');
          }
        } catch (apiError) {
          console.log('API呼び出しに失敗したため、静的ファイルからデータを取得します:', apiError);
          
          // 静的ファイルから記事データを取得
          try {
            const staticResponse = await fetch('/zenn-articles.json');
            if (staticResponse.ok) {
              const staticData = await staticResponse.json();
              articles.value = staticData.articles
                .slice(0, 6)
                .sort((a: ZennArticle, b: ZennArticle) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
            } else {
              throw new Error('Static file not found');
            }
          } catch (staticError) {
            console.log('静的ファイルからの取得も失敗したため、ハードコードされた記事を表示します:', staticError);
            articles.value = hardcodedArticles.sort((a: ZennArticle, b: ZennArticle) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
          }
        }
        
      } catch (err) {
        console.error('Zenn記事の取得エラー:', err);
        error.value = '記事の取得に失敗しました。しばらく後でもう一度お試しください。';
      } finally {
        loading.value = false;
      }
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    };

    onMounted(() => {
      fetchZennArticles();
    });

    return {
      articles,
      loading,
      error,
      formatDate
    };
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
