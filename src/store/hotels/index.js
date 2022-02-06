import { getDatabase, ref, set, update } from "firebase/database";

export default {
  namespaced: true,
  state() {
    return {
      hotels: [],
      initLoad: false,
    };
  },
  mutations: {
    addHotel(state, data) {
      state.hotels.push(data);
  },
    clear(state) {
      state.hotels = [];
  }
  },
  actions: {
    createHotel(context, data) {
      data.id = new Date();
      const db = getDatabase();
      set(ref(db, 'hotels/'+data.id), data);
    },
    updateHotel(context, data) {
        const updates = {};
        updates['/hotels/' + data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },
    deleteHotel(context, id) {
        const updates = {};
        updates['/hotels/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    }
  },
  getters: {
    count (state) {
      return state.hotels.length;
  },
  all (state) {
      return state.hotels;
  },
  newsPosts(state) {
      return state.hotels.filter(hotel => hotel.type === 'news');
  },  
  postById (state) {
      return (id) => state.hotels.find(item => item.id === id);
  }
  }
}