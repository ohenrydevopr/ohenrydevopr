import { ITranslateResponseProps } from "@/types/api/Translate";

const parseTranslation = (rawTranslation: any, text: string): ITranslateResponseProps => {
  let json = rawTranslation.slice(6);
	let length = '';
	let result = {
		text: '',
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

  return result

}

export { parseTranslation };
