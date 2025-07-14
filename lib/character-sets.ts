// 各种语言的字符集定义
export interface LanguageCharacterSet {
  uppercase: string
  lowercase: string
  numbers: string
  symbols: string
  // 语言特有字符（可选）
  native?: string
}



// 各种语言的字符集映射
export const LANGUAGE_CHARACTER_SETS: Record<string, LanguageCharacterSet> = {
  // 英语 - 标准拉丁字母
  'en': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 简体中文 - 常用汉字 + 拼音
  'zh-CN': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "！@#￥%…&*（）—+=【】｛｝|；：，。《》？",
    native: "安全密码生成器中文字符集包含常用汉字便于记忆使用",
  },

  // 繁体中文 - 繁体汉字 + 拼音
  'zh-TW': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "！@#￥%…&*（）—+=【】｛｝|；：，。《》？",
    native: "安全密碼生成器繁體中文字符集包含常用漢字便於記憶使用",
  },

  // 西班牙语 - 带重音符的拉丁字母
  'es': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑÜ",
    lowercase: "abcdefghijklmnopqrstuvwxyzáéíóúñü",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?¡¿",
  },

  // 法语 - 带重音符的拉丁字母
  'fr': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇ",
    lowercase: "abcdefghijklmnopqrstuvwxyzàâäéèêëïîôöùûüÿç",
    numbers: "0123456789", 
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?«»",
  },

  // 德语 - 带变音符的拉丁字母
  'de': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜSS",
    lowercase: "abcdefghijklmnopqrstuvwxyzäöüß",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?„\"",
  },

  // 日语 - 平假名 + 片假名 + 部分汉字
  'ja': {
    uppercase: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン",
    lowercase: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん",
    numbers: "0123456789０１２３４５６７８９",
    symbols: "！@#￥%…&*（）—+=【】｛｝|；：，。《》？",
    native: "安全暗号生成器日本語文字集合常用漢字含記憶使用便利",
  },

  // 韩语 - 한글 (朝鲜文字)
  'ko': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ가나다라마바사아자차카타파하",
    lowercase: "abcdefghijklmnopqrstuvwxyzㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    native: "보안암호생성기한국어문자집합상용한글포함기억사용편리",
  },

  // 俄语 - 西里尔字母
  'ru': {
    uppercase: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ", 
    lowercase: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?«»№",
  },

  // 阿拉伯语 - 阿拉伯字母 (从右到左)
  'ar': {
    uppercase: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",
    lowercase: "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",
    numbers: "٠١٢٣٤٥٦٧٨٩0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 葡萄牙语 - 带重音符的拉丁字母
  'pt': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÂÃÁÇÉÊÍÓÔÕÚ",
    lowercase: "abcdefghijklmnopqrstuvwxyzàâãáçéêíóôõú",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 意大利语 - 带重音符的拉丁字母
  'it': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÈÉÌÍÎÒÓÙ",
    lowercase: "abcdefghijklmnopqrstuvwxyzàèéìíîòóù",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?«»",
  },

  // 荷兰语 - 带特殊字符的拉丁字母
  'nl': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÉËÍÏÓÖÚÜ",
    lowercase: "abcdefghijklmnopqrstuvwxyzàáéëíïóöúü",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 印地语 - 天城文字母
  'hi': {
    uppercase: "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह",
    lowercase: "अआइईउऊएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह",
    numbers: "०१२३४५६७८९0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 印尼语 - 拉丁字母
  'id': {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },

  // 泰语 - 泰文字母
  'th': {
    uppercase: "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ",
    lowercase: "ะัาำิีึืุูเแโใไๅๆ็่้๊๋์ํ๎",
    numbers: "๐๑๒๓๔๕๖๗๘๙0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  },
}

// 获取指定语言的字符集，如果不存在则返回英语字符集
export function getCharacterSetForLanguage(languageCode: string): LanguageCharacterSet {
  return LANGUAGE_CHARACTER_SETS[languageCode] || LANGUAGE_CHARACTER_SETS['en']
}

// 检查是否有本地化字符集
export function hasNativeCharacters(languageCode: string): boolean {
  const charset = LANGUAGE_CHARACTER_SETS[languageCode]
  return charset && charset.native !== undefined
}

// 获取本地化字符（如果有的话）
export function getNativeCharacters(languageCode: string): string {
  const charset = LANGUAGE_CHARACTER_SETS[languageCode]
  return charset?.native || ''
} 