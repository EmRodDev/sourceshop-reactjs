import { FirebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getDoc } from "firebase/firestore"; 


export async function GetCategoryById (idNumber){
    const allItemsInfo = await GetAllCategories();
    const filterData = await allItemsInfo.filter((category) => category.ID == idNumber);
    return(filterData);
}

export async function GetAllCategories (){
    const {db} = FirebaseConfig();
    const products = collection(db,"Category");
    const productIDs = [];
    let productsInformation = [];



    //Obtain all the IDs of the products from Firebase's "Product" collection
    await getDocs(products).then((snapshot) => {
        const docs = snapshot.docs;
        docs.forEach(element => {
            productIDs.push(element.id);
        });
    });

   //Then get the information of all products and store it
    for (const id of productIDs){
        const product = doc(db,"Category",id);
        await getDoc(product).then((snapshot) =>{
        productsInformation.push(snapshot.data());
        });
    }
    //Finally return said products
    return productsInformation;
}