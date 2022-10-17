import axios, {AxiosResponse} from 'axios';

const requestTranslation = async (
	url: string,
	frequency: string,
): Promise<AxiosResponse<any, any>> => {
	let rawBody = 'f.req=' + encodeURIComponent(frequency) + '&';
	let headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'};
	return axios.post(url, rawBody, {headers});
};

export {requestTranslation};
