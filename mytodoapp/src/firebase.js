import firebase from 'firebase';

const config = {
	//add your Firebase credentials here
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
