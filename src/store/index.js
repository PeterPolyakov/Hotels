import { createStore } from 'vuex'
import addHotel from './modules/addHotel'
import user from './user'


const store = createStore ({
    modules: {
        addHotel,
        user,
    }
});

export default store