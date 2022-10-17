import {ITranslateRequest, ITranslateResponseProps, RequestVariation} from '@/types/api/Translate';
import {getLangCode} from '@/utils/getLangCode';
import {NextApiResponse} from 'next';
import {validParams} from '@/utils/validParams';
import {getTokenData} from '@/utils/getTokenData';
import {makeConfigs} from '@/utils/makeConfigs';
import {requestTranslation} from '@/utils/requestTranslation';

const Translate = async (req: ITranslateRequest, res: NextApiResponse<ITranslateResponseProps>) => {
	// Initial validations
	if (req.method !== 'POST') return res.status(405);
	if (req.body === null) return res.status(400);

	// Extract and trait params
	let text = req.body.query ?? '';
	let options = req.body.options ?? {};
	options.from = options.from ?? 'auto';
	options.to = options.to ?? 'en';

	// Just valid if to and from are valid
	let testParams = validParams([options.from, options.to]);
	if (testParams) {
		res.statusMessage = testParams as string;
		return res.status(400);
	}

	// Get real code of langs
	options.from = getLangCode(options.from) as string;
	options.to = getLangCode(options.to) as string;

	// URL to get token
	let url = 'https://translate.google.com';
	var rpcids: RequestVariation = 'MkEWBc';

	const tokenData = await getTokenData(url, rpcids);

	const [endpoint, frequency] = makeConfigs(rpcids, tokenData, text, options);

	const rawTranslation = await requestTranslation(endpoint, frequency);

	let json = rawTranslation.data.slice(6);
	let length = '';
	let result = {
		text: '',
		pronunciation: '',
		from: {
			iso: '',
			text: '',
		},
	};
	try {
		length = /^\d+/.exec(json)?.[0] as string;
		json = JSON.parse(json.slice(length.length, parseInt(length, 10) + length.length));
		json = JSON.parse(json[0][2]);
	} catch (e) {
		return result;
	}

	if (json[1][0][0][5] === undefined || json[1][0][0][5] === null) {
		// translation not found, could be a hyperlink or gender-specific translation?
		result.text = json[1][0][0][0];
	} else {
		result.text = json[1][0][0][5]
			.map((obj: any) => {
				return obj[0];
			})
			.filter(Boolean)
			// Google api seems to split text per sentences by <dot><space>
			// So we join text back with spaces.
			.join(' ');
	}
	result.pronunciation = json[1][0][0][1];
	// From language
	if (json[0] && json[0][1] && json[0][1][1]) {
		result.from.iso = json[0][1][1][0];
		result.from.text = text;
	} else if (json[1][3] === 'auto') {
		result.from.iso = json[2];
		result.from.text = text;
	} else {
		result.from.iso = json[1][3];
		result.from.text = text;
	}

	return res.send(result);
};

export default Translate;
