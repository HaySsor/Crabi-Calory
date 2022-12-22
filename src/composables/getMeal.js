import { collection, getDocs, } from 'firebase/firestore';
import { db } from '@/includes/firebase';
import { ref } from 'vue'



async function ListMealFormFirebase() {
    const mealsList = ref([])
    const querySnapshot = await getDocs(collection(db, "meals"));
    querySnapshot.forEach((doc) => {
        mealsList.value.push(doc.data());
    });
    return { mealsList }
}

export { ListMealFormFirebase }