"use client"

import { useEffect } from 'react'
import '@/lib/i18n/config'

interface ClientI18nProviderProps {
  children: React.ReactNode
}

export function ClientI18nProvider({ children }: ClientI18nProviderProps) {
  // 客户端初始化i18n
  useEffect(() => {
    // i18n已经在config文件中初始化
  }, [])

  return <>{children}</>
} 