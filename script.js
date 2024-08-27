// const input = document.querySelector('.input');
// const button = document.querySelector('.search-btn');
// const results = document.querySelector('.result');
// let apiKey = 'k1ukVaE5A0shVKg1sIPA6Q==xYZt0mx3YjPRUMr0';

// console.log(input, button, results);

// button.addEventListener("click", async() =>{
//   const val = input.value;

//   if(val === ""){
//     alert("Please Enter a Word!");
//   }else{
    
//     const response = await fetch(`https://api.api-ninjas.com/v1/dictionary?word=${val}`, {
//       headers: {
//         'X-Api-Key': apiKey
//       }
//     });
//     let data = await response.json();
    
//     console.log(data);
    
//     if (data.word) {
//       console.log(`Word: ${data.word}`);
//       console.log(`Definition: ${data.definition}`);
//     } else {
//       console.log("No definition found or incorrect word.");
//     }
//   }
// });

const input = document.querySelector('#word-input');
const button = document.querySelector('.search-btn');
const results = document.querySelector('.result');
let apiKey = 'k1ukVaE5A0shVKg1sIPA6Q==xYZt0mx3YjPRUMr0';

button.addEventListener("click", async () => {
  const val = input.value; 

  if (val === "") {
    alert("Please Enter a Word!");
  } else {
    
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
    
    
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(data[0]["meanings"][0]["definitions"][0]["definition"]);
      
      results.innerText = data[0]["meanings"][0]["definitions"][0]["definition"];

  }
});



