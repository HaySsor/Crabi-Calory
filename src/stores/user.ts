import {defineStore} from 'pinia';
import {auth} from '../includes/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {doc, setDoc, getFirestore, updateDoc} from 'firebase/firestore';
import type {
  GetUser,
  Login,
  ProfileMacro,
  RegisterUserData,
} from '../types/interfaces';

import getUser from '@/composables/getUser';

const db = getFirestore();

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false as boolean,
    loggedUser: {} as GetUser,
    userChangeData: 0 as number,
  }),
  actions: {
    async register(values: RegisterUserData) {
      if (!values) {
        return;
      }
      const userCred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const x = doc(db, 'users', userCred.user.uid);
      await setDoc(x, {
        name: values.name,
        email: values.email,
        age: values.age,
        weight: values.weight,
        fat: values.fat,
        carbohydrates: values.carbohydrates,
        protein: values.protein,
        kcal: values.kcal,
        uid: userCred.user.uid,
        meals: [],
      });
      this.userLoggedIn = true;
    },
    async downloadUserData() {
      const {user, getUserData} = getUser();
      await getUserData();
      this.loggedUser = user.value;
    },
    async updateUserData(newData: ProfileMacro) {
      if (!auth.currentUser) {
        return;
      }
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        fat: newData.fat,
        carbohydrates: newData.carbohydrates,
        protein: newData.protein,
        kcal: newData.kcal,
      });
      await this.downloadUserData();
      this.userChangeData += 1;
    },
    async login(values: Login) {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      this.userLoggedIn = true;
    },
    async singOutUser() {
      await signOut(auth);
      this.userLoggedIn = false;
    },
  },
});
