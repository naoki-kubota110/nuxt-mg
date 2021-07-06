// apiKey: "AIzaSyDGGy_Xu-pWMtjmJZrtGuEHBi8ZOMX5hS4",
//     authDomain: "nuxt-mg.firebaseapp.com",
//     projectId: "nuxt-mg",
//     storageBucket: "nuxt-mg.appspot.com",
//     messagingSenderId: "970578849926",
//     appId: "1:970578849926:web:3e2af88c43275d3ae72107",
//     measurementId: "G-834P9MBSTV"

import firebase from 'firebase'

const config = {
apiKey:"AIzaSyDGGy_Xu-pWMtjmJZrtGuEHBi8ZOMX5hS4",
    authDomain: "nuxt-mg.firebaseapp.com",
    projectId: "nuxt-mg",
    storageBucket: "nuxt-mg.appspot.com",
    messagingSenderId: "970578849926",
    appId: "1:970578849926:web:3e2af88c43275d3ae72107",
    measurementId: "G-834P9MBSTV"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    firebase.analytics()
}

export const auth = firebase.auth
export default firebase