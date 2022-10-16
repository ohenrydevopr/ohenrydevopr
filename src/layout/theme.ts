import {extendTheme} from '@chakra-ui/react'

const colors = {
	light: {
		primary: '#308CE8',
		secondary: '#4387CB',
		alternative: '#B6D9FC',
		background: '#F4F9FD',
		title: '#232629',
		text: '#6A737C',
		textSecondary: '#9FA6AD',
	},
}

const theme = extendTheme({colors})

export {theme}
