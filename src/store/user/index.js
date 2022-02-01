import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            uid: ''
        };
    },
    getters: {
        isauth(state) {
            return state.uid !== '';
        }
    },
    mutations: {},
    actions: {
        async login(ctx, data) {
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
                ctx.state.uid = userCredential.user.uid;
                return 'ok';
            } catch (error) {
                const errorMessage = error.message;
                console.error(errorMessage);
                return 'error';
            }
        },
        async sign(ctx, data) {
            const auth = getAuth();
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
                ctx.state.uid = userCredential.user.uid;
                return 'ok';
            } catch (error) {
                const errorMessage = error.message;
                console.error(errorMessage);
                return 'error';
            }
        },
        logout(ctx) {
            ctx.state.email = '';
            ctx.state.uid = '';
        }
    }
}