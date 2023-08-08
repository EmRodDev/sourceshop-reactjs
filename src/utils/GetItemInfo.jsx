
export async function  GetItemInfoByID (idNumber) {
    try {
        const response = await fetch('/items.json');
        const json = await response.json();
        const filterData = await json.filter((products) => products.id == idNumber);
        return(filterData[0]);
    } catch (error) {
        console.error(error);
    }

};

export async function GetItemInfoByCategory (categoryId){
    try {
        const response = await fetch('/items.json');
        const json = await response.json();
        const filterData = await json.filter((products) => products.category == categoryId);
        return(filterData);
    } catch (error) {
        console.error(error);
    }

};

export async function GetItemInfoBySold (){
    try {
        const response = await fetch('/items.json');
        const json = await response.json();
        const sortJson = await json.sort((a,b) => b.sold - a.sold);      
        const onlyThree = await sortJson.slice(0,3);
        return(onlyThree);
    } catch (error) {
        console.error(error);
    }

};

export async function GetAllItems (){
    try {
        const response = await fetch('/items.json');
        const json = await response.json();
        return(json);
    } catch (error) {
        console.error(error);
    }

};
