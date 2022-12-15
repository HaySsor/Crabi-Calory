import { auth, db } from '@/includes/firebase';
import { ref } from 'vue';
import {
    collection,
    where,
    query,
    getDocs,
} from 'firebase/firestore';

const getUser = () => {
    const user = ref('');
    async function getUserData() {
        const userCollection = collection(db, 'users');
        const q = query(userCollection, where('uid', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
            user.value = document.data();
        });
    }

    return { user, getUserData }
}
export default getUser