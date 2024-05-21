/** @format */

import React from 'react'
import { HotelProps } from '../type'
import Highlight from './Highlight'

const withHighlight = (WrappedComponent: React.FC<{ hotel: HotelProps }>): React.FC<{ hotel: HotelProps }> => {
	const awardedComponent: React.FC<{ hotel: HotelProps }> = ({ hotel }) => {
		if (hotel.awarded) {
			return (
				<Highlight>
					<WrappedComponent hotel={hotel} />
				</Highlight>
			)
		} else {
			return <WrappedComponent hotel={hotel} />
		}
	}

	return awardedComponent
}

export default withHighlight
