<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border"
    >
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 12.236 11.618 14z" clip-rule="evenodd"/>
      </svg>
      <span class="text-sm font-medium">{{ currentLanguage }}</span>
      <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isOpen }" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
      </svg>
    </button>
    
    <div 
      v-show="isOpen"
      class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center space-x-2"
        :class="{ 'bg-blue-50 text-blue-600': currentLocale === lang.code }"
      >
        <span>{{ lang.flag }}</span>
        <span>{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()
    const isOpen = ref(false)

    const languages = [
      { code: 'ja', name: '日本語', flag: '🇯🇵' },
      { code: 'en', name: 'English(US)', flag: '🇺🇸' }
    ]

    const currentLocale = computed(() => locale.value)
    
    const currentLanguage = computed(() => {
      const lang = languages.find(l => l.code === currentLocale.value)
      return lang ? `${lang.flag} ${lang.name}` : ''
    })

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const changeLanguage = (langCode: string) => {
      locale.value = langCode
      localStorage.setItem('locale', langCode)
      isOpen.value = false
      
      // ページタイトルも更新
      document.title = langCode === 'ja' ? "sea-turt1e's Portfolio" : "sea-turt1e's Portfolio"
    }

    // クリック外しでドロップダウンを閉じる
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement
      if (!target.closest('.relative')) {
        isOpen.value = false
      }
    }

    // マウント時にイベントリスナーを追加
    document.addEventListener('click', handleClickOutside)

    return {
      isOpen,
      languages,
      currentLocale,
      currentLanguage,
      toggleDropdown,
      changeLanguage
    }
  }
})
</script>
