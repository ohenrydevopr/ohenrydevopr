import {getLangCode} from '@/utils/getLangCode'

const hasSupport = (desiredLang: string): boolean => {
	return Boolean(getLangCode(desiredLang))
}

export {hasSupport}
