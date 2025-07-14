"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu"
import { Languages, Check } from "lucide-react"
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/lib/i18n/config"
import Cookies from "js-cookie"

export function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  // 确保组件在客户端渲染时正确挂载
  useEffect(() => {
    setMounted(true)
    
    // 从cookie中读取保存的语言设置
    const savedLanguage = Cookies.get('language')
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Languages className="h-4 w-4" />
      </Button>
    )
  }

  // 更改语言函数
  const changeLanguage = (languageCode: SupportedLanguage) => {
    i18n.changeLanguage(languageCode)
    // 保存语言设置到cookie（7天过期）
    Cookies.set('language', languageCode, { expires: 7 })
  }

  // 获取当前语言信息
  const currentLanguage = SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language) 
    || SUPPORTED_LANGUAGES[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[120px] justify-start">
          <Languages className="mr-2 h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <span className="sm:hidden">{currentLanguage.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[240px] max-h-[400px] overflow-y-auto">
        <DropdownMenuLabel>{t('ui.language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {/* 主要语言 */}
        {SUPPORTED_LANGUAGES.slice(0, 5).map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
            {i18n.language === language.code && (
              <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        {/* 其他语言 */}
        {SUPPORTED_LANGUAGES.slice(5).map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-xs text-muted-foreground">{language.name}</span>
            </div>
            {i18n.language === language.code && (
              <Check className="h-4 w-4 text-green-600" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 