import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translations } from './translations'

// 支持的语言列表
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文' },
  { code: 'zh-TW', name: 'Chinese (Traditional)', nativeName: '繁體中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
] as const

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]['code']

// 翻译资源
const resources = translations

// 初始化i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en', // 回退语言
    
    interpolation: {
      escapeValue: false, // React已经转义了
    },
    
    // 启用调试模式（开发环境）
    debug: process.env.NODE_ENV === 'development',
  })

export default i18n 