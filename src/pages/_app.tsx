import {theme} from '@/layout/theme'
import {ChakraProvider, Fade} from '@chakra-ui/react'
import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'

function OHenryDevOpr({Component, pageProps}: AppProps) {
	const router = useRouter()

	return (
		<ChakraProvider resetCSS theme={theme}>
			<Fade key={router.route} in={true}>
				<Component {...pageProps} />
			</Fade>
		</ChakraProvider>
	)
}

export default OHenryDevOpr
