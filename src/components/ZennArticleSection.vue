<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Zenn記事</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>

    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-2 text-gray-600">記事を読み込み中...</p>
    </div>

    <div v-else-if="error" class="text-center py-8">
      <p class="text-red-600">{{ error }}</p>
      <a 
        href="https://zenn.dev/sea_turt1e" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-block mt-4 text-blue-600 hover:text-blue-800 underline"
      >
        Zennページで記事を見る
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
            {{ article.body_letters_count > 100 ? article.body_letters_count + '文字' : '' }}
          </p>
          <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span>{{ formatDate(article.published_at) }}</span>
            <div class="flex items-center space-x-2">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
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
          記事を読む
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
        すべての記事を見る
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
        
        // ZennのRSSフィードまたは公開APIを試す
        // 直接APIが利用できない場合は、手動で設定した記事リストを表示
        const hardcodedArticles: ZennArticle[] = [
          {
            id: 1,
            title: "【kanjiconv】固有名詞にも対応した「漢字」→「かな/ローマ字」Python変換ライブラリ",
            slug: "kanjiconv-python",
            published_at: "2024-10-24",
            body_letters_count: 2500,
            liked_count: 15,
            path: "https://zenn.dev/sea_turt1e",
            topics: [{ name: "機械学習" }, { name: "Python" }]
          },
          {
            id: 2,
            title: "グラフニューラルネットワークでNBA選手の相性を予測してみた話",
            slug: "nba-gnn-prediction",
            published_at: "2025-01-07",
            body_letters_count: 2000,
            liked_count: 5,
            path: "https://zenn.dev/sea_turt1e/articles/2410af8823e6bd",
            topics: [{ name: "機械学習" }, { name: "グラフニューラルネットワーク" }]
          },
          {
            id: 3,
            title: "ルールベースで表記揺れを解消するPythonライブラリ「yurenizer」を作成しました",
            slug: "yurenizer-python",
            published_at: "2024-11-25",
            body_letters_count: 2746,
            liked_count: 18,
            path: "https://zenn.dev/sea_turt1e/articles/afbe326366f1e7",
            topics: [{ name: "Python" }, { name: "表記揺れ" }]
          }
        ];

        // 実際のAPIを試す（CORS問題がある場合はハードコードされた記事を使用）
        try {
          const response = await fetch('https://zenn.dev/api/articles?username=sea_turt1e&order=latest', {
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            articles.value = data.articles.slice(0, 6).map((article: any) => ({
              id: article.id,
              title: article.title,
              slug: article.slug,
              published_at: article.published_at,
              body_letters_count: article.body_letters_count,
              liked_count: article.liked_count,
              path: `https://zenn.dev${article.path}`,
              topics: article.topics || []
            }));
          } else {
            throw new Error('API response not ok');
          }
        } catch (apiError) {
          console.log('API呼び出しに失敗したため、ハードコードされた記事を表示します:', apiError);
          articles.value = hardcodedArticles;
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
