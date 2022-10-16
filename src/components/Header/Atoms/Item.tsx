import {HeaderItemProps} from '@/types/Components/Header'
import {Link} from '@chakra-ui/react'
import React from 'react'

const Item: React.FC<HeaderItemProps> = ({children, url}) => {
	return (
		<Link
			href={url}
			textDecor={'none'}
			fontFamily={'Poppins, sans-serif'}
			fontWeight={'500'}
			fontSize={'.813rem'}
			color={'light.title'}
			_hover={{color: 'light.primary'}}
		>
			{children}
		</Link>
	)
}

export default Item
