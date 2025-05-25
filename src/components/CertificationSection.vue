<template>
  <section class="bg-white rounded-lg shadow-lg p-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ $t('certifications.title') }}</h2>
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

export default defineComponent({
  name: 'CertificationSection',
  computed: {
    certifications(): Array<{
      id: number;
      name: string;
      organization: string;
      url?: string;
      color: string;
      icon: string;
      description: string;
      skills: string[];
    }> {
      const certData = [
        {
          id: 1,
          nameKey: 'certifications.awsMl.name',
          organization: 'Amazon Web Services',
          url: 'https://www.credly.com/badges/c6bb5a04-378b-4fe2-a5a4-12b86c063382',
          color: '#ff9900',
          icon: '☁️',
          descriptionKey: 'certifications.awsMl.description',
          skillsKey: ['certifications.awsMl.skills.aws', 'certifications.awsMl.skills.ml', 'certifications.awsMl.skills.analysis', 'certifications.awsMl.skills.development']
        },
        {
          id: 2,
          nameKey: 'certifications.toeic.name',
          organization: 'ETS',
          color: '#059669',
          icon: '🌐',
          descriptionKey: 'certifications.toeic.description',
          skillsKey: ['certifications.toeic.skills.english', 'certifications.toeic.skills.listening', 'certifications.toeic.skills.reading', 'certifications.toeic.skills.communication']
        }
      ];

      return certData.map(cert => ({
        id: cert.id,
        name: this.$t(cert.nameKey),
        organization: cert.organization,
        url: cert.url,
        color: cert.color,
        icon: cert.icon,
        description: this.$t(cert.descriptionKey),
        skills: cert.skillsKey.map(skillKey => this.$t(skillKey))
      }));
    }
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
