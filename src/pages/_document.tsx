import Document, {Head, Html, Main, NextScript} from 'next/document'

export default class AppDocument extends Document {
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					{/* <!-- Icons --> */}
					{/* <!-- Favicon --> */}
					<link rel='shortcut icon' href='/favicons/favicon.ico' type='image/x-icon' />
					{/* <!-- Icon variações --> */}
					<link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
					{/* Fonts */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
					<link
						rel='preload'
						as='style'
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
						media='print'
						onLoad={(e) => (e.currentTarget.media = 'all')}
					/>
					<noscript>
						<link
							rel='stylesheet'
							href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
						/>
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
