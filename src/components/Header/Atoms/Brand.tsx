import {HeaderBrandProps} from '@/types/Components/Header'
import {Link} from '@chakra-ui/react'
import React from 'react'

const Brand: React.FC<HeaderBrandProps> = ({children}) => {
	return (
		<Link
			href='/'
			fontFamily={'Poppins, sans-serif'}
			fontSize={'1.6rem'}
			fontWeight={'500'}
			textDecor={'none'}
			color={'light.title'}
			_hover={{color: 'light.primary'}}
		>
			{children}
		</Link>
	)
}

export default Brand
