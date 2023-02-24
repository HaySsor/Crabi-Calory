import {auth, db} from '@/includes/firebase';
import {reactive, ref} from 'vue';
import {collection, where, query, getDocs} from 'firebase/firestore';
import type {GetUser} from '../types/interfaces';

const getUser = () => {
  const user = ref<GetUser>({
    age: 0,
    carbohydrates: 0,
    email: '',
    fat: 0,
    kcal: 0,
    meals: [],
    name: '',
    protein: 0,
    uid: '',
    weight: 0,
  });

  async function getUserData() {
    const userCollection = collection(db, 'users');
    if (!auth.currentUser) {
      return;
    }
    const q = query(userCollection, where('uid', '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      user.value = document.data() as GetUser;
    });
  }
  return {user, getUserData};
};

export default getUser;
