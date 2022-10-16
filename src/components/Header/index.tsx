import Brand from '@/components/Header/Atoms/Brand'
import {Flex} from '@chakra-ui/react'
import React from 'react'

// import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Flex>
			<Brand>Henrique&nbsp;Martins</Brand>
		</Flex>
	)
}

export default Header
