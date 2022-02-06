import { getAuth, 
        signOut, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        signInWithPopup, 
        GoogleAuthProvider } from "firebase/auth";

function isValidToken(token) {
    return token !== '';
}

export default {
    namespaced: true,
    state() {
        return {
            email: '',
            user: ''
        };
    },
    getters: {
        isAuth(state) {
            return isValidToken(state.user);
        },
        email(state) {
            return state.email;
        },
    },
    mutations: {
        setUser(state, data) {
            state.email = data.email;
            state.user = data.uid;
        }
    },
    actions: {
        async login(ctx, data) {
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
                ctx.state.user = userCredential.user;
                return 'ok';
            } catch (error) {
                const errorMessage = error.message;
                console.error(errorMessage);
                return 'error';
            }
        },
        sign(ctx, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.email, data.password)
            .then ((userCredential) => {
                ctx.state.email = userCredential.user.email;
                ctx.state.user = userCredential.user;
                return 'ok';
            })
            .catch ((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            return 'error';
            })
        },
        gAuth: function() {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                let user = result.user;
                console.log(user)
            }).catch(err => {
                console.log(err);
            });
        },
        logout(ctx) {
            const auth = getAuth();
            signOut(auth).then(() => {
                ctx.state.user = '';
            })
        }
    }
}