/** @format */
import hotel1 from '../assets/hotels-images/hotel-1.jpg'
import hotel2 from '../assets/hotels-images/hotel-2.jpg'
import hotel3 from '../assets/hotels-images/hotel-3.jpg'
import hotel4 from '../assets/hotels-images/hotel-4.jpg'
import hotel5 from '../assets/hotels-images/hotel-5.jpg'
import hotel6 from '../assets/hotels-images/hotel-6.jpg'
import hotel7 from '../assets/hotels-images/hotel-7.jpg'
import hotel8 from '../assets/hotels-images/hotel-8.jpg'
import hotel9 from '../assets/hotels-images/hotel-9.jpg'
import hotel10 from '../assets/hotels-images/hotel-10.jpg'

export const hotels = [
	{
		id: crypto.randomUUID(),
		name: 'Sunset Cove Resort',
		country: 'Thailand',
		city: 'Phuket',
		location: 'Beachfront',
		pricePerNight: 150,
		maxCapacity: 4,
		petFriendly: false,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel1,
		awarded: false,
		description:
			"Sunset Cove Resort is a luxurious beachfront retreat located in the vibrant city of Phuket, Thailand. Built in 2010, our resort offers modern amenities and stunning views of the Andaman Sea. Our spacious rooms are equipped with state-of-the-art facilities, ensuring a comfortable stay for our guests. Whether you're lounging by the pool or exploring the bustling streets of Phuket, our friendly staff are dedicated to providing exceptional service. Experience the beauty of Thailand at Sunset Cove Resort.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Mountain Retreat Lodge',
		country: 'Canada',
		city: 'Banff',
		location: 'Mountains',
		pricePerNight: 250,
		maxCapacity: 6,
		petFriendly: false,
		pool: false,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel2,
		awarded: true,
		description:
			"Escape to the serene mountains of Banff, Canada, and indulge in a tranquil retreat at Mountain Retreat Lodge. Nestled amidst the breathtaking scenery of the Canadian Rockies, our lodge offers a peaceful oasis away from the hustle and bustle of city life. Built in 1995, our rustic yet charming lodge boasts cozy accommodations and warm hospitality. Whether you're hiking through the picturesque trails or unwinding by the fireplace, our attentive staff are here to cater to your every need. Experience the magic of the mountains at Mountain Retreat Lodge.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Lakeview Haven Hotel',
		country: 'United States',
		city: 'Lake Tahoe',
		location: 'Lakeside',
		pricePerNight: 200,
		maxCapacity: 2,
		petFriendly: true,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel3,
		awarded: false,
		description:
			"Experience the beauty of Lake Tahoe at Lakeview Haven Hotel. Situated along the picturesque shores of Lake Tahoe in the United States, our hotel offers unparalleled views of the crystal-clear waters and surrounding mountains. Built in 2005, our modern yet cozy accommodations provide the perfect blend of comfort and style. Whether you're kayaking on the lake or relaxing by the pool, our friendly staff are dedicated to ensuring a memorable stay. Discover the wonders of Lake Tahoe at Lakeview Haven Hotel.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Forest Hideaway Inn',
		country: 'Germany',
		city: 'Black Forest',
		location: 'Forest',
		pricePerNight: 180,
		maxCapacity: 3,
		petFriendly: true,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel4,
		awarded: false,
		description:
			"Escape to the tranquility of Germany's enchanting Black Forest at Forest Hideaway Inn. Nestled amidst towering trees and pristine nature, our inn offers a serene retreat for nature lovers. Built in 1990, our cozy accommodations provide the perfect sanctuary after a day of exploring the forest trails. Whether you're birdwatching from your balcony or enjoying a leisurely stroll, our attentive staff are here to make your stay unforgettable. Experience the magic of the Black Forest at Forest Hideaway Inn.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Seaside Oasis Retreat',
		country: 'Australia',
		city: 'Gold Coast',
		location: 'Beachfront',
		pricePerNight: 300,
		maxCapacity: 5,
		petFriendly: false,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: true,
		src: hotel5,
		awarded: false,
		description:
			"Indulge in a luxurious beachfront getaway at Seaside Oasis Retreat. Located on the stunning Gold Coast of Australia, our resort offers breathtaking ocean views and unparalleled luxury. Built in 2008, our modern accommodations are designed to provide the ultimate comfort and relaxation. Whether you're lounging by the pool or exploring the vibrant city, our dedicated staff are committed to ensuring a memorable stay. Experience the beauty of the Gold Coast at Seaside Oasis Retreat.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Grand Palace Hotel',
		country: 'France',
		city: 'Paris',
		location: 'City Center',
		pricePerNight: 400,
		maxCapacity: 2,
		petFriendly: true,
		pool: false,
		airConditioning: false,
		balcony: false,
		parking: false,
		breakfastIncluded: false,
		smokingAllowed: false,
		src: hotel6,
		awarded: false,
		description:
			"Experience the epitome of luxury at Grand Palace Hotel. Located in the heart of Paris, France, our hotel offers unparalleled elegance and sophistication. Built in 1920, our historic building exudes charm and character, with lavish accommodations and impeccable service. Whether you're exploring the iconic landmarks or indulging in gourmet cuisine, our dedicated staff are here to ensure a truly unforgettable experience. Discover the magic of Paris at Grand Palace Hotel.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Desert Mirage Resort',
		country: 'United Arab Emirates',
		city: 'Dubai',
		location: 'Desert',
		pricePerNight: 500,
		maxCapacity: 4,
		petFriendly: true,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel7,
		awarded: true,
		description:
			"Escape to a luxurious oasis in the heart of the desert at Desert Mirage Resort. Located in Dubai, United Arab Emirates, our resort offers unparalleled luxury and comfort. Built in 2015, our modern accommodations are designed to provide the ultimate relaxation and rejuvenation. Whether you're lounging by the pool or exploring the vibrant city, our dedicated staff are here to ensure a memorable stay. Experience the beauty of the desert at Desert Mirage Resort.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Island Paradise Hotel',
		country: 'Maldives',
		city: 'Male',
		location: 'Island',
		pricePerNight: 600,
		maxCapacity: 2,
		petFriendly: false,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: false,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel8,
		awarded: false,
		description:
			"Experience paradise on earth at Island Paradise Hotel. Nestled on a pristine island in the Maldives, our resort offers breathtaking ocean views and unparalleled luxury. Built in 2012, our modern accommodations are designed to provide the ultimate comfort and relaxation. Whether you're snorkeling in the crystal-clear waters or enjoying a romantic sunset dinner, our dedicated staff are here to ensure a truly unforgettable experience. Discover the magic of the Maldives at Island Paradise Hotel.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Alpine Lodge',
		country: 'Switzerland',
		city: 'Zermatt',
		location: 'Mountains',
		pricePerNight: 350,
		maxCapacity: 3,
		petFriendly: true,
		pool: false,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: false,
		src: hotel9,
		awarded: false,
		description:
			"Experience alpine luxury at its finest at Alpine Lodge. Located in Zermatt, Switzerland, our lodge offers stunning views of the Swiss Alps and unparalleled comfort. Built in 2000, our cozy accommodations are designed to provide the ultimate relaxation and rejuvenation. Whether you're skiing on the pristine slopes or unwinding in the spa, our dedicated staff are here to ensure a memorable stay. Discover the magic of the mountains at Alpine Lodge.",
	},
	{
		id: crypto.randomUUID(),
		name: 'Tropical Retreat Resort',
		country: 'Costa Rica',
		city: 'Manuel Antonio',
		location: 'Rainforest',
		pricePerNight: 280,
		maxCapacity: 6,
		petFriendly: true,
		pool: true,
		airConditioning: true,
		balcony: true,
		parking: true,
		breakfastIncluded: true,
		smokingAllowed: true,
		src: hotel10,
		awarded: false,
		description:
			"Immerse yourself in the beauty of Costa Rica's rainforests at Tropical Retreat Resort. Located in Manuel Antonio, our resort offers a peaceful retreat amidst lush tropical vegetation and abundant wildlife. Built in 2003, our eco-friendly accommodations are designed to blend seamlessly with the natural surroundings. Whether you're hiking through the jungle or relaxing by the pool, our attentive staff are here to ensure a memorable stay. Experience the magic of the rainforest at Tropical Retreat Resort.",
	},
]
