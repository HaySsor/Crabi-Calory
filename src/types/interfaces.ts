interface Validate {
  required: string;
  min: string;
  mix: string;
  alphaSpaces: string;
  email: string;
  maxVal: string;
  minVal: string;
  confirmed: string;
  excluded: string;
  passwordMismatch: string;
  tos: string;
}

interface Login {
  email: string;
  password: string;
}

interface ProfileMacro {
  fat: number;
  carbohydrates: number;
  protein: number;
  kcal: number;
}

interface UserData extends ProfileMacro {
  name: string;
  email: string;
  password?: any;
  age: number;
  weight: number;
  uid?: string;
  meals?: Meal[];
}

interface RegisterUserData extends UserData {
  goal: string;
  height: number;
  sex: string;
}

interface Meal extends ProfileMacro {
  name: string;
  id?: number;
}
interface MealValidate {
  name: boolean;
  kcal: boolean;
  protein: boolean;
  fat: boolean;
  carbohydrates: boolean;
}

interface GetUser {
  age: number;
  carbohydrates: number;
  email: string;
  fat: number;
  kcal: number;
  meals: MealObj[];
  name: string;
  protein: number;
  uid: string;
  weight: number;
}
interface navbarLinkList {
  id: number;
  name: string;
  link: string;
  imgSrc: string;
}

interface MealObj {
  idD?: number;
  meal: Meal;
}
export type {
  Validate,
  UserData,
  Login,
  ProfileMacro,
  RegisterUserData,
  Meal,
  MealValidate,
  GetUser,
  navbarLinkList,
  MealObj,
};
