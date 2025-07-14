import type { Metadata } from "next"
import { PasswordGeneratorContent } from "@/components/password-generator-content"
import { ClientI18nProvider } from "@/components/client-i18n-provider"

export const metadata: Metadata = {
  title: "Password Generator - Create Secure Passwords",
  description: "Generate strong and secure passwords with customizable options. Choose length, character types, and get instant security analysis.",
  keywords: ["password generator", "secure password", "random password", "password security", "strong password"],
  openGraph: {
    title: "Password Generator - Create Secure Passwords",
    description: "Generate strong and secure passwords with customizable options",
    type: "website",
  },
}

export default function Home() {
  return (
    <ClientI18nProvider>
      <PasswordGeneratorContent />
    </ClientI18nProvider>
  )
}
