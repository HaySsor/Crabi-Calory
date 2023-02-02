import { defineStore } from "pinia";
import { auth } from '../includes/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getFirestore, updateDoc } from 'firebase/firestore';

import getUser from '@/composables/getUser';

const db = getFirestore()

export default defineStore("user", {
    state: () => ({
        userLoggedIn: false,
        loggedUser: {},
        userChangeData: 0,
    }),
    actions: {
        async register(values) {
            const userCred = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );
            const x = doc(db, 'users', userCred.user.uid)
            await setDoc(x, {
                name: values.name,
                email: values.email,
                age: values.age,
                height: values.height,
                weight: values.weight,
                sex: values.sex,
                goal: values.goal,
                fat: values.fat,
                carbohydrates: values.carbohydrates,
                protein: values.protein,
                kcal: values.kcal,
                uid: userCred.user.uid,
                meals: []
            });
            this.userLoggedIn = true
            this.calory = values.kcal

        },
        async downloadUserData() {
            const { user, getUserData } = getUser();
           await getUserData();
            this.loggedUser = user
        },
        async updateUserData(newData) {
            const userDocRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userDocRef, {
                "fat": newData.fat,
                "carbohydrates": newData.carbohydrates,
                "protein": newData.protein,
                "kcal": newData.kcal,
            })
            await this.downloadUserData()
            this.userChangeData += 1

        },
        async login(values) {
            await signInWithEmailAndPassword(auth,
                values.email,
                values.password)
            this.userLoggedIn = true
        },
        async singOutUser() {
            await signOut(auth)
            this.userLoggedIn = false
        },
    }
})