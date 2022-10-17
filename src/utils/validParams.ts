import {hasSupport} from './hasSupport';

const validParams = (languages: string[]): string | boolean => {
	let message: any = false;
	languages.forEach((lang) => {
		if (lang && !hasSupport(lang)) {
			message = `The language ${lang} is not supported`;
		}
	});
	return message;
};

export {validParams};
