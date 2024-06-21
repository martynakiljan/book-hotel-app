import { error } from 'console'
import { HotelData, sortOptions } from '../type'

export const sortHotels = (hotels: HotelData[], sortBy: string, searchQuery: string, selectedOptions: sortOptions) => {
	const filteredHotels = hotels.filter(hotel => {
		const optionsMatch = Object.entries(selectedOptions).every(
      ([option, selected]) =>
        !selected || selected === hotel[option as keyof HotelData]
    );
		return optionsMatch
	})

	const sortedHotels = filteredHotels.sort((a, b) => {
		if (a.awarded && !b.awarded) {
			return -1
		} else if (!a.awarded && b.awarded) {
			return 1
		}

		if (sortBy === 'lowest_price') {
			return a.pricePerNight - b.pricePerNight
		}
		if (sortBy === 'highest_price') {
			return b.pricePerNight - a.pricePerNight
		}
		if (sortBy === 'most_recommended') {
			return b.awarded === a.awarded ? 0 : b.awarded ? -1 : 1
		}
		return 0
	})

	return sortedHotels
}
