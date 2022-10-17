import {ITranslateOptions} from '@/types/api/Translate';

const makeConfigs = (
	token: string,
	data: string,
	text: string,
	options: ITranslateOptions,
): [string, string] => {
	let url = 'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute?' + data;
	let paylod = JSON.stringify([[text, options.from, options.to], [null]]);
	let freq = JSON.stringify([[[token, paylod, null, 'generic']]]);
	return [url, freq];
};

export {makeConfigs};
