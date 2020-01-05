import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCSQbRH-2FsHE7mHMTZYXptMZKcf_t5wGs',
	authDomain: 'mytodoapp-9b5fa.firebaseapp.com',
	databaseURL: 'https://mytodoapp-9b5fa.firebaseio.com',
	projectId: 'mytodoapp-9b5fa',
	storageBucket: 'mytodoapp-9b5fa.appspot.com',
	messagingSenderId: '509159035749',
	appId: '1:509159035749:web:dbaac8820b3bb1dbe9078c',
	measurementId: 'G-STHFCELLPN'
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
