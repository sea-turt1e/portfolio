<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">資格・認定</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="certification in certifications" :key="certification.id" class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow border">
        <div class="flex items-start mb-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4" :style="{ backgroundColor: certification.color + '20' }">
            {{ certification.icon }}
          </div>
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800 mb-1">
              <a
                v-if="certification.url"
                :href="certification.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline"
              >
                {{ certification.name }}
              </a>
              <span v-else>{{ certification.name }}</span>
            </h3>
            <!-- <p class="text-sm text-gray-600 mb-2">{{ certification.organization }}</p> -->
            <!-- <div class="flex items-center text-xs text-gray-500"> -->
              <!-- <span class="mr-4">取得日: {{ formatDate(certification.date) }}</span>
              <span v-if="certification.expiryDate" class="text-orange-600">
                有効期限: {{ formatDate(certification.expiryDate) }}
              </span> -->
              <!-- <span v-else class="text-green-600">永続</span> -->
            <!-- </div> -->
          </div>
        </div>
        
        <div class="mb-3">
          <p class="text-sm text-gray-700">{{ certification.description }}</p>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-3">
          <span 
            v-for="skill in certification.skills" 
            :key="skill"
            class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
          >
            {{ skill }}
          </span>
        </div>
        
        <!-- <div v-if="certification.credentialId" class="text-xs text-gray-500">
          認定ID: {{ certification.credentialId }}
        </div> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Certification {
  id: number;
  name: string;
  organization: string;
  // date: string;
  // expiryDate?: string;
  // credentialId?: string;
  url?: string;
  color: string;
  icon: string;
  description: string;
  skills: string[];
}

export default defineComponent({
  name: 'CertificationSection',
  data() {
    return {
      certifications: [
        {
          id: 1,
          name: 'AWS Certified Machine Learning - Specialty',
          organization: 'Amazon Web Services',
          // date: '',
          // expiryDate: '',
          // credentialId: '',
          url: 'https://www.credly.com/badges/c6bb5a04-378b-4fe2-a5a4-12b86c063382',
          color: '#ff9900',
          icon: '☁️',
          description: 'AWSでの機械学習に関する専門的な知識とスキルを証明する認定資格',
          skills: ['AWS', '機械学習', 'データ分析', 'モデル開発']
        },
        {
          id: 2,
          name: 'TOEIC L&R 795点',
          organization: 'ETS',
          // date: '',
          // expiryDate: '',
          // url: '',
          color: '#059669',
          icon: '🌐',
          description: '英語によるリスニング&リーディング能力を測定するテスト',
          skills: ['英語', 'リスニング', 'リーディング', 'コミュニケーション'],
        }
      ] as Certification[]
    };
  },
  methods: {
    formatDate(dateString: string): string {
      const date = new Date(dateString);
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }
});
</script>
