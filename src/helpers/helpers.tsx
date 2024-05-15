import { HotelData } from '../type/type'

export const sortHotels = (hotels: HotelData[], sortBy: string, searchQuery: string) => {
	const sortedHotels = hotels
		.filter(hotel => {
			const nameMatch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
			const descriptionMatch = hotel.description.toLowerCase().includes(searchQuery.toLowerCase())
			const cityMatch = hotel.city.toLowerCase().includes(searchQuery.toLowerCase())
			const locationMatch = hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
			const countryMatch = hotel.country.toLowerCase().includes(searchQuery.toLowerCase())

			return nameMatch || descriptionMatch || cityMatch || locationMatch || countryMatch
		})
		.sort((a, b) => {
			if (sortBy === 'lowest_price') {
				return a.pricePerNight - b.pricePerNight
			}
			if (sortBy === 'highest_price') {
				return b.pricePerNight - a.pricePerNight
			}
			if (sortBy === 'most_recommended') {
				if (a.awarded && !b.awarded) return -1
				if (!a.awarded && b.awarded) return 1
				return 0
			}
			return 0
		})

	return sortedHotels
}
