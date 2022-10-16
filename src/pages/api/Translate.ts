import {TranslateRequest} from '@/types/api/Translate'
import {NextApiHandler} from 'next'

const Translate: NextApiHandler = (req: TranslateRequest, res) => {
	if (req.method !== 'POST') {
		res.status(405)
    return res.json({})
	}
	if (!req.body || !req.body.text) {
		res.status(400)
    return res.json({})
	}
	return res.json({text: ''})
}

export default Translate
