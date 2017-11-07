import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };





// database.ref('expenses').on('child_removed', () => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database   .ref('expenses')   .once('value')   .then((snapshot) => { const
// expenses = [];     snapshot.forEach((childSnapshot) => { expenses.push({
// id: childSnapshot.key,         ...childSnapshot.val()       });     });
// console.log(expenses);   }); database.ref('expenses').push({   description:
// 'Rent',
//   note: '',   amount: 109500,   createdAt: 976123498763 });
// database.ref('notes').push({   title: 'Course Topics',   body: 'React Native,
// Angular, Python' }); const firebaseNotes = {   notes: {     apoijasdf: {
// title: 'First note!',       body: 'This is my note'     }, asdfasfdsfsdfsd: {
//       title: 'Another note!',       body: 'This is my note'     }   } };
// const notes = [{   id: '12',   title: 'First note!', body: 'This is my note'
// }, {   id: '761ase',   title: 'Another note!', body: 'This is my note' }];
// database.ref('firebaseNotes').set(firebaseNotes); database.ref().on('value',
// (snapshot) => {   const val = snapshot.val(); console.log(`${val.name} is a
// ${val.job.title} at ${val.job.company}`); }) const onValueChange =
// database.ref().on('value', (snapshot) => { console.log(snapshot.val()); },
// (e) =>{   console.log('Error with data fetching',e); }); setTimeout(() => {
// database.ref('age').set(28); }, 3500); setTimeout(() => {
// database.ref('age').off(onValueChange); }, 7000); setTimeout(() => {
// database.ref('age').set(30); }, 9000); database.ref('location/city')
// .once('value')   .then((snapshot) => { const val = snapshot.val();
// console.log(val);   })   .catch((e) => { console.log('Error fetching data',
// e);   }); database.ref().set({   name: 'Andrew Mead',   age: 26,   job: {
// title: 'Software developer', company: 'Google'   },   location: {     city:
// 'Philadelpia',     country: 'United States'   } }).then(() => {
// console.log('Data is saved'); }).catch((e) => {   console.log('This failed',
// e); }); database.ref().update({   stressLevel: 9,   'job/company': 'Amazon',
// 'location/city': 'Seattle' }); database.ref()   .remove()   .then(() => {
// console.log('Data was removed');   }).catch((e) => {     console.log('Did not
// remove data', e);   });