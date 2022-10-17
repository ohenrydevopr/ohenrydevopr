import {RequestVariation} from '@/types/api/Translate';
import axios from 'axios';
import qs from 'qs';
import {extract} from './extract';

const getTokenData = async (url: string, variation: RequestVariation) => {
	return axios.get(url).then((res) =>
		qs.stringify({
			rpcids: variation,
			'source-path': '/',
			'f.sid': extract('FdrFJe', res.data),
			bl: extract('cfb2h', res.data),
			hl: 'en-US',
			'soc-app': 1,
			'soc-platform': 1,
			'soc-device': 1,
			_reqid: Math.floor(1000 + Math.random() * 9000),
			rt: 'c',
		}),
	);
};

export {getTokenData};
