import { addDoc, collection } from "firebase/firestore";
import { FirebaseConfig } from "./FirebaseConfig";

const createShipment = async(dataform,items) => {
    const {db} = FirebaseConfig();
    const docRef = await addDoc(collection(db,"Shipment"), {
        ItemIDs: items,
        Email: dataform.email,
        Street_Address: dataform.address,
        Country: dataform.country,
        State: dataform.state,
        Postal_Code: dataform.postal_code
    })
    
    return docRef.id;
}

export default createShipment