// export default {
//     actions: {
//         async fetchHotels(ctx) {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//         const hotels = await res.json();
//         ctx.commit('updateHotels', hotels)
//         }
//     },
//     mutations: {
//         updateHotels(state, hotels) {
//             state.hotels = hotels
//         },
//         addHotel(state, newHotel) {
//             state.hotels.unshift(newHotel)
//         }
//     },
//     state: {
//         hotels: []
//     },
//     getters: {
//         allHotels(state) {
//             return state.hotels
//         },
//         hotelsCount(state) {
//             return state.hotels.length
//         }
//     }
// }