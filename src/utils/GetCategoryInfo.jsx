export async function GetCategoryById (idNumber){
    try {
        const response = await fetch('/categories.json');
        const json = await response.json();
        const filterData = await json.filter((category) => category.id == idNumber);
        return(filterData);
    } catch (error) {
        console.error(error);
    }
}

export async function GetAllCategories (){
    try {
        const response = await fetch('/categories.json');
        const json = await response.json();
        return(json);
    } catch (error) {
        console.error(error);
    }
}