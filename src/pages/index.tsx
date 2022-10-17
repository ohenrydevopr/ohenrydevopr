import Header from '@/components/Header';
import {ITranslateRequestProps} from '@/types/api/Translate';
import axios from 'axios';
import type {NextPage} from 'next';
import {useEffect} from 'react';

const Home: NextPage = () => {
	async function test() {
		await axios
			.post('/api/Translate', {
				query: 'Yo soy un hombre rubio!',
				options: {
					from: 'auto',
					to: 'en',
				},
			})
			.then((resp) => {
				console.log(resp.data);
			});
	}

	useEffect(() => {
		test();
	}, []);

	return <Header />;
};

export default Home;
