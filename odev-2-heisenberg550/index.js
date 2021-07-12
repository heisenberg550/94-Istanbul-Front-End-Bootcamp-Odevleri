let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
    .then(response => {
        return response.json();
    })
    .then(responseData => {
        //json'dan okunan verinin data array'ine atanması
        data = responseData;

        //veri geldikten sonra filtreleme butonu görünür olsun
        let invisible = document.querySelectorAll('.invisible');
        
        invisible[0].setAttribute("style", "");
        invisible[1].setAttribute("style", "");
        invisible[2].setAttribute("style", "");   
        invisible[3].setAttribute("style", "");
        invisible[4].setAttribute("style", "");
        invisible[5].setAttribute("style", "");     
        // invisible[5].setAttribute("style", "");     

        //verinin html içerisinde listelendiği fonksiyon
        listData(responseData);
    })
    .catch(err => {
        //hata yönetimi
        console.log(err)
    })
}

//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>yaş:</span> ${element.age}
            <span class='bold'>Durum:</span> ${element.isActive}
            <span class='bold'>Name:</span> ${element.name[0]}
        </li>
        `;
    })
}

//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = (filter) => {
    let checkBoxUp18 = document.getElementById("up18");
    let checkBoxIsAktive = document.getElementById("checkBoxIsAktive");
    let search = document.getElementById("search").value;


    if (checkBoxUp18.checked || checkBoxIsAktive.checked || filter == 'name'){

        let filteredName = data.filter(element => element.name[0] == search);
        listData(filteredName);

        if (filter == "age") {
            let filteredAge = data.filter(element => element.age > 18);
            listData(filteredAge);
        }

        if  (filter == "isActive"){
            let filteredAktive = data.filter(element => element.isActive === true);
            listData(filteredAktive);
        }

        if (checkBoxUp18.checked && checkBoxIsAktive.checked && filter == 'name'){
            let filteredNames = filteredName.filter(element => element.age > 18);
            filteredNamess = filteredNames.filter(element => element.isActive == true);
            listData(filteredNamess);
        }
 
    }
    else{
        fetchData();
    }      
};
    
