import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyAwhqlLRRYRaSUn91BQRB4wvVoJ3jF-ZwI",
        authDomain: "corrida-de-carros--multi-692a8.firebaseapp.com",
        databaseURL: "https://corrida-de-carros--multi-692a8-default-rtdb.firebaseio.com",
        projectId: "corrida-de-carros--multi-692a8",
        storageBucket: "corrida-de-carros--multi-692a8.appspot.com",
        messagingSenderId: "825564781105",
        appId: "1:825564781105:web:40ff7ccb0f8f79c5f65310"
      
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();