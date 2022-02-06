import { createStore } from 'vuex'
import user from './user'
import hotels from './hotels'


const store = createStore ({
    modules: {
        user,
        hotels
    }
});

export default store