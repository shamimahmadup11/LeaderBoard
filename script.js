const form = document.querySelector('.FormOfInput');
const fistName = document.getElementById("fistName")
const lastName = document.getElementById("LastName")
const country = document.getElementById("country")
const playerScore = document.getElementById("playerScore")
const button = form.querySelector('button');
const AddDataHere = document.querySelector('.addHereData');




let Data = [
    {
        FirstName: "Rohit",
        LastName: "Sharma",
        country: "INDIA",
        PlayerScore: 300,
    },
    {
        FirstName: "Virat",
        LastName: "Kohli",
        country: "INDIA",
        PlayerScore: 50,
    },
    {
        FirstName: "Shamim",
        LastName: "Ahmad",
        country: "INDIA",
        PlayerScore: 20,
    }
];


window.addEventListener("load", showPrevData);
function showPrevData() {
    const NewData = Data;

    showData(NewData);

}

function showData(dataArray) {
    dataArray.sort((a, b) => {
        return b.PlayerScore - a.PlayerScore;
    })
    dataArray.forEach((data) => {

        const div = document.createElement("div");
        AddDataHere.append(div)
        div.style.background = "white"
        div.style.height = "10px";
        const myDiv = document.createElement("div");
        myDiv.classList.add('my-class');
        const para1 = document.createElement("p");
        para1.innerHTML = data.FirstName + " " + data.LastName;
        const para2 = document.createElement("p");
        para2.innerHTML = data.country;
        const para3 = document.createElement("p");
        para3.innerHTML = data.PlayerScore;
        const para4 = document.createElement("p");
        para4.innerHTML = "🗑";
        para4.classList.add('deleter');
        const para5 = document.createElement("p");
        para5.innerHTML = "+5";
        para5.classList.add('increment');
        const para6 = document.createElement("p");
        para6.innerHTML = "-5";
        para6.classList.add('decrement');
        myDiv.append(para1, para2, para3, para4, para5, para6);
        AddDataHere.append(myDiv);
    })

}

button.addEventListener("click", showTypedDataWithOldData)
function showTypedDataWithOldData(e) {
    e.preventDefault();
    const Name = fistName.value
    const last = lastName.value
    const conrty = country.value
    const score = playerScore.value
    //  console.log(Name, last , score, conrty);
    const typedData =
    {
        FirstName: Name,
        LastName: last,
        country: conrty,
        PlayerScore: score,
    }

   Data = [...Data, typedData];
   
    AddDataHere.innerHTML = "";
    showData(Data);

}


AddDataHere.addEventListener("click", function(e){
    if(e.target.classList.contains("deleter")){
        const divToDelete = e.target.closest('.my-class');
        if(divToDelete){
            const index = Array.from(AddDataHere.children).indexOf(divToDelete);
            Data.splice(index, 1); 
            AddDataHere.removeChild(divToDelete); 
        }
    } else if (e.target.classList.contains("increment")) {
        const divToIncrement = e.target.closest('.my-class');
        if(divToIncrement){
            const index = Array.from(AddDataHere.children).indexOf(divToIncrement);
            const currentScore = parseInt(divToIncrement.querySelector('p:nth-child(3)').innerHTML);
            Data[index].PlayerScore = currentScore + 5; 
            divToIncrement.querySelector('p:nth-child(3)').innerHTML = currentScore + 5; 
        }
    } else if (e.target.classList.contains("decrement")) {
        const divToDecrement = e.target.closest('.my-class');
        if(divToDecrement){
            const index = Array.from(AddDataHere.children).indexOf(divToDecrement);
            const currentScore = parseInt(divToDecrement.querySelector('p:nth-child(3)').innerHTML);
            Data[index].PlayerScore = currentScore - 5; 
            divToDecrement.querySelector('p:nth-child(3)').innerHTML = currentScore - 5; // Update DOM
        }
    }
});