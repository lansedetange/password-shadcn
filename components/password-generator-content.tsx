"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Copy, RefreshCw, Shield, AlertTriangle, CheckCircle2 } from "lucide-react"

interface PasswordOptions {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

export function PasswordGeneratorContent() {
  // 密码生成选项状态
  const [options, setOptions] = useState<PasswordOptions>({
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
  })

  // 生成的密码和相关状态
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  // 字符集定义
  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  }

  // 生成密码的核心函数
  const generatePassword = useCallback(() => {
    setIsGenerating(true)
    
    // 构建可用字符集
    let availableChars = ""
    if (options.includeUppercase) availableChars += charSets.uppercase
    if (options.includeLowercase) availableChars += charSets.lowercase
    if (options.includeNumbers) availableChars += charSets.numbers
    if (options.includeSymbols) availableChars += charSets.symbols

    if (availableChars === "") {
      setPassword("")
      setIsGenerating(false)
      return
    }

    // 生成密码
    let generatedPassword = ""
    
    // 确保每种选中的字符类型至少包含一个字符
    if (options.includeUppercase) {
      generatedPassword += charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]
    }
    if (options.includeLowercase) {
      generatedPassword += charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]
    }
    if (options.includeNumbers) {
      generatedPassword += charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]
    }
    if (options.includeSymbols) {
      generatedPassword += charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]
    }

    // 填充剩余长度
    for (let i = generatedPassword.length; i < options.length; i++) {
      generatedPassword += availableChars[Math.floor(Math.random() * availableChars.length)]
    }

    // 打乱密码字符顺序
    const passwordArray = generatedPassword.split("")
    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [passwordArray[j], passwordArray[i]]
    }

    setPassword(passwordArray.join(""))
    setIsGenerating(false)
    setCopied(false)
  }, [options])

  // 复制到剪贴板函数
  const copyToClipboard = async () => {
    if (!password) return
    
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy password:", err)
    }
  }

  // 计算密码强度
  const getPasswordStrength = () => {
    if (!password) return { level: 0, text: "No Password", color: "gray" }
    
    let score = 0
    let criteria = 0
    
    if (options.includeUppercase) criteria++
    if (options.includeLowercase) criteria++
    if (options.includeNumbers) criteria++
    if (options.includeSymbols) criteria++
    
    // 基于长度评分
    if (options.length >= 8) score += 1
    if (options.length >= 12) score += 1
    if (options.length >= 16) score += 1
    
    // 基于字符类型多样性评分
    score += criteria
    
    if (score <= 2) return { level: 1, text: "Weak", color: "red" }
    if (score <= 4) return { level: 2, text: "Medium", color: "yellow" }
    if (score <= 6) return { level: 3, text: "Strong", color: "green" }
    return { level: 4, text: "Very Strong", color: "emerald" }
  }

  const strength = getPasswordStrength()

  // 获取强度图标
  const getStrengthIcon = () => {
    switch (strength.level) {
      case 1:
        return <AlertTriangle className="h-4 w-4" />
      case 2:
        return <Shield className="h-4 w-4" />
      case 3:
      case 4:
        return <CheckCircle2 className="h-4 w-4" />
      default:
        return <Shield className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="container mx-auto max-w-2xl pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Password Generator
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Create strong and secure passwords with customizable options
          </p>
        </div>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Generate Secure Password
            </CardTitle>
            <CardDescription>
              Customize your password settings and generate a secure password
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* 密码显示区域 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-display">Generated Password</Label>
                {password && (
                  <Badge 
                    variant="outline" 
                    className={`
                      ${strength.color === 'red' ? 'border-red-500 text-red-600' : ''}
                      ${strength.color === 'yellow' ? 'border-yellow-500 text-yellow-600' : ''}
                      ${strength.color === 'green' ? 'border-green-500 text-green-600' : ''}
                      ${strength.color === 'emerald' ? 'border-emerald-500 text-emerald-600' : ''}
                    `}
                  >
                    {getStrengthIcon()}
                    {strength.text}
                  </Badge>
                )}
              </div>
              
              <div className="flex gap-2">
                <Input
                  id="password-display"
                  value={password}
                  readOnly
                  placeholder="Generated password will appear here..."
                  className="font-mono text-lg"
                />
                <Button
                  onClick={copyToClipboard}
                  disabled={!password}
                  variant="outline"
                  size="icon"
                  className="shrink-0"
                >
                  {copied ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Separator />

            {/* 密码长度设置 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Password Length</Label>
                <Badge variant="secondary">{options.length} characters</Badge>
              </div>
              <Slider
                value={[options.length]}
                onValueChange={(value) => setOptions({ ...options, length: value[0] })}
                min={4}
                max={50}
                step={1}
                className="w-full"
              />
            </div>

            <Separator />

            {/* 字符类型选择 */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Character Types</Label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="uppercase" className="text-sm font-normal">
                    Uppercase Letters (A-Z)
                  </Label>
                  <Switch
                    id="uppercase"
                    checked={options.includeUppercase}
                    onCheckedChange={(checked) => 
                      setOptions({ ...options, includeUppercase: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="lowercase" className="text-sm font-normal">
                    Lowercase Letters (a-z)
                  </Label>
                  <Switch
                    id="lowercase"
                    checked={options.includeLowercase}
                    onCheckedChange={(checked) => 
                      setOptions({ ...options, includeLowercase: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="numbers" className="text-sm font-normal">
                    Numbers (0-9)
                  </Label>
                  <Switch
                    id="numbers"
                    checked={options.includeNumbers}
                    onCheckedChange={(checked) => 
                      setOptions({ ...options, includeNumbers: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <Label htmlFor="symbols" className="text-sm font-normal">
                    Symbols (!@#$%^&*)
                  </Label>
                  <Switch
                    id="symbols"
                    checked={options.includeSymbols}
                    onCheckedChange={(checked) => 
                      setOptions({ ...options, includeSymbols: checked })
                    }
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* 生成按钮 */}
            <Button 
              onClick={generatePassword}
              disabled={isGenerating || (!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSymbols)}
              className="w-full h-12 text-lg"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Generate Password
                </>
              )}
            </Button>

            {/* 提示信息 */}
            {(!options.includeUppercase && !options.includeLowercase && !options.includeNumbers && !options.includeSymbols) && (
              <p className="text-sm text-red-500 text-center">
                Please select at least one character type to generate a password
              </p>
            )}
          </CardContent>
        </Card>

        {/* 安全提示 */}
        <Card className="mt-6 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  Security Tips
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Use at least 12 characters for better security</li>
                  <li>• Include a mix of uppercase, lowercase, numbers, and symbols</li>
                  <li>• Don't reuse passwords across different accounts</li>
                  <li>• Store passwords securely using a password manager</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 