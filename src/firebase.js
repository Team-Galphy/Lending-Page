//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDezIgD7e2J0kSL89jTsFKCucsa2JLlNT4",
    authDomain: "lending-page-32586.firebaseapp.com",
    projectId: "lending-page-32586",
    storageBucket: "lending-page-32586.appspot.com",
    messagingSenderId: "972244017401",
    appId: "1:972244017401:web:63e669661495dc4a620228",
    measurementId: "G-9P93BE8HT4"
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);
// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { db };

