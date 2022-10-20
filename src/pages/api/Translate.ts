import { ITranslateRequest, ITranslateResponseProps, RequestVariation } from '@/types/api/Translate';
import { getLangCode } from '@/utils/getLangCode';
import { getTokenData } from '@/utils/getTokenData';
import { makeConfigs } from '@/utils/makeConfigs';
import { parseTranslation } from '@/utils/parseTranslation';
import { requestTranslation } from '@/utils/requestTranslation';
import { validParams } from '@/utils/validParams';
import { NextApiResponse } from 'next';

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

	let result = parseTranslation(rawTranslation.data, text)

	return res.send(result);
};

export default Translate;
