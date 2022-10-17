const extract = (key: string, resp: any) => {
	let re = new RegExp(`"${key}":".*?"`);
	let result = re.exec(resp);
	if (result !== null) {
		return result[0].replace(`"${key}":"`, '').slice(0, -1);
	}
	return '';
};

export {extract};
