
import firebase from 'firebase';

export default class FirebaseService {

    private static PREFIX = "meeting-timer-react";

    private static config = {
        apiKey: 'AIzaSyCJelLxh1b2f-EV8lsu-uwvqdYMcoIW5uE',
        authDomain: FirebaseService.PREFIX+'.firebaseapp.com',
        databaseURL: 'https://'+FirebaseService.PREFIX+'.firebaseio.com',
        projectId: FirebaseService.PREFIX,
        storageBucket: FirebaseService.PREFIX+'.appspot.com',
        messagingSenderId: '82403032916',
    };

    public static init(): void {        
        firebase.initializeApp(FirebaseService.config);       

    }
   
}
