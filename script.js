//------- QUESTION 1 open question-----------

let q1 = document.getElementById("q1_submit");

if (q1 != undefined){
q1.addEventListener("click", () => {
    let q1_answer = document.getElementById("q1"); 
    localStorage.setItem("q1", q1_answer.elements[0].value)
})
}
//------- QUESTION 2 radio-----------

let q2 = document.getElementById("q2");

if(q2!=undefined){
    q2.addEventListener("change", () => {
        let q2_radios = document.getElementsByName("q2");
        for(let i = 0; i < q2_radios.length; i++){
            if(q2_radios[i].checked){
                localStorage.setItem("q2", q2_radios[i].value);
            }
        }
    })
}


//------- QUESTION 3 radio -----------

let q3 = document.getElementById("q3");

if(q3!=undefined){
    q3.addEventListener("change", () => {
        let q3_radios = document.getElementsByName("q3");
        for(let i = 0; i < q3_radios.length; i++){
            if(q3_radios[i].checked){
                localStorage.setItem("q3", q3_radios[i].value);
            }
        }
    })
}


// Question 4 open text
let q4 = document.getElementById("q4_submit");

if (q4 != undefined){
q4.addEventListener("click", () => {
    let q1_answer = document.getElementById("q1"); 
    localStorage.setItem("q4", q4_answer.elements[0].value)
})
}

// Question 5
let q5 = document.getElementById("q5");

if(q5!=undefined){
    q5.addEventListener("change", () => {
        let q5_radios = document.getElementsByName("q5");
        for(let i = 0; i < q5_radios.length; i++){
            if(q5_radios[i].checked){
                localStorage.setItem("q5", q5_radios[i].value);
            }
        }
    })
}

// Question 6


let q6 = document.getElementById("q6_submit"); 
if(q6 != undefined){
    console.log(document.getElementById("q6").value)
    q6.addEventListener("click", () => {
        let q6_answer = document.getElementById("q6").value; 
        localStorage.setItem("q6",q6_answer)
    })
}

// Question 7

let q7 = document.getElementById("q7_submit");

if (q7 != undefined){
q7.addEventListener("click", () => {
    let q7_answer = document.getElementById("q7"); 
    localStorage.setItem("q7", q1_answer.elements[0].value)
})
}
// Question 8
let q8 = document.getElementById("q2");

if(q8!=undefined){
    q8.addEventListener("change", () => {
        let q8_radios = document.getElementsByName("q8");
        for(let i = 0; i < q8_radios.length; i++){
            if(q8_radios[i].checked){
                localStorage.setItem("q8", q8_radios[i].value);
            }
        }
    })
}
// Question 9
let q9 = document.getElementById("q9_submit");

if (q9 != undefined){
q9.addEventListener("click", () => {
    let q9_answer = document.getElementById("q9"); 
    localStorage.setItem("q9", q9_answer.elements[0].value)
})
}
//------- ANSWER -----------

let results = document.getElementById("results");

if (results != undefined){
    let q1=localStorage.getItem("q1");
    let q2=localStorage.getItem("q2");
    let q3=localStorage.getItem("q3");
    let q4=localStorage.getItem("q4");
    let q5=localStorage.getItem("q5");
    let q6=localStorage.getItem("q6");
    let q7=localStorage.getItem("q7");
    let q8=localStorage.getItem("q8");
    let q9=localStorage.getItem("q9");

    // let q1Item = document.createElement("p");
    // q1Item.textContent = "Your question 1 answer was: " + q1;
    // results.appendChild(q1Item);
}

if (q1 == "bunniay"){
      points += 1000; 
  } else {
      points += 0; 
  }

  if (q2 == "Often"){
      points += 50; 
  } else {
      points += 0; 
  }
  if (q3 == "yes"){
      points += 10;  
  } else {
      points += 100; 
  }
  if (q4 == "idk"){
      points += 1000; 
  } else {
      points += 0; 
  }
    if (q5 == "Yes"){
      points += 100; 
  } else {
      points += 0; 
  }
    if (q6 == "Barely"){
      points += 50; 
  } else {
      points += 0; 
  }
    if (q7 == "mute"){
      points += 0; 
  } else {
      points += 100; 
  }
    if (q8 == "Yes"){
      points += 0; 
  } else {
      points += 100; 
  }
    if (q9 == "Bunniay is awesome"){
      points += 1000; 
  } else {
      points += 0; 
  }
    console.log(points)

    let results = document.getElementById("results");
    results.innerHTML = `Results: ${points}`; 



let reset = document.getElementById("reset");
if (reset != undefined){
reset.addEventListener("click", () => {
    localStorage.clear()
})
}