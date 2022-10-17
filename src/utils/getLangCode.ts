import {SupportedLanguages} from '@/types/api/Translate'
import {languages} from './languages'

const getLangCode = (desiredLang: string): boolean | string => {
	if (!desiredLang) return false

	if (languages[desiredLang as keyof SupportedLanguages]) return desiredLang

	let keys = Object.keys(languages).filter((key) => {
		if (typeof languages[key as keyof SupportedLanguages] !== 'string') return false

		return languages[key as keyof SupportedLanguages].toLowerCase() === desiredLang.toLowerCase()
	})

	return keys[0] || false
}

export {getLangCode}
