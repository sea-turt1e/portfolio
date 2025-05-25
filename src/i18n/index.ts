import { createI18n } from 'vue-i18n'
import en from './locales/en'
import ja from './locales/ja'

export type MessageSchema = typeof ja

// 保存されている言語設定を取得、なければブラウザの言語設定を使用
const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
const browserLocale = typeof navigator !== 'undefined' && navigator.language.startsWith('ja') ? 'ja' : 'en'
const defaultLocale = savedLocale || browserLocale

export default createI18n<[MessageSchema], 'ja' | 'en'>({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    ja,
    en
  }
})
