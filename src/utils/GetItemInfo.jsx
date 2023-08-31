import { FirebaseConfig } from "./FirebaseConfig";
import { collection, doc, getDocs, getDoc } from "firebase/firestore"; 


export async function  GetItemInfoByID (idNumber) {
    const allItemsInfo = await GetAllItems();
    const filterData = await allItemsInfo.filter((products) => products.ID == idNumber);
    return(filterData[0]);
};

export async function GetItemInfoByCategory (categoryId){
    const allItemsInfo = await GetAllItems();
    const filterData = await allItemsInfo.filter((products) => products.Category_ID == categoryId);
    return(filterData);
};

export async function GetItemInfoBySold (){
    const allItemsInfo = await GetAllItems();
    let sortJson = allItemsInfo.sort((a,b) => (a.Sells < b.Sells) ? 1 : (a.Sells > b.Sells) ? -1 : 0);     
    const onlyThree = await sortJson.slice(0,3);
    return onlyThree;
};

export async function GetAllItems (){

    const {db} = FirebaseConfig();
    const products = collection(db,"Product");
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
        const product = doc(db,"Product",id);
        await getDoc(product).then((snapshot) =>{
        productsInformation.push(snapshot.data());
        });
    }
    //Finally return said products
    return productsInformation;
}