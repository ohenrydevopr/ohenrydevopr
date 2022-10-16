import {NextApiRequest} from 'next'

export interface SupportedLanguages {}

export interface TranslateRequestProps {
	text: string
	from?: keyof SupportedLanguages
	to?: keyof SupportedLanguages
}

export interface TranslateRequest extends NextApiRequest {
	body: TranslateRequestProps
}
