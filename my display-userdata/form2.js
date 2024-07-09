let omolola = []
 function accessArray(){
    const displaydates = document.getElementById('displaydata')
    // console.log('assessing array', omolola)
    displaydates.innerHTML = "";
    if (omolola.length === 0){
        const empty = document.createElement("tr")
        empty.innerHTML = `<td>No data</td>`
        displaydates.appendChild(empty)
    }else{
        omolola.forEach((data, index) =>{
            const row = document.createElement("tr")
            row.innerHTML = `
            <td>${data.names}</td>
            <td>${data.surnames}</td>
            <td>${data.emails}</td>
            <td>${data.passwords}</td>
            <td>${data.dates}</td>
            <td><button class="edit-button"style="background: black; padding: 10px; color: white; border-radius:9px;" data-index=${index} >Edit</button></td>
            <td><button class="delete-button" style="background: black; padding: 10px; color: white; border-radius:9px;" data-index=${index}>Delete</button></td>
            `
            displaydates.appendChild(row,)
           
        });
       document.querySelectorAll(".edit-button").forEach((editbutton)=>{
        editbutton.addEventListener("click", function (){
            const index = this.getAttribute("data-index")
            console.log("logged", index)
            editdata(index)
           
        })
       });
       document.querySelectorAll(".delete-button").forEach((deletebutton)=>{
        deletebutton.addEventListener("click", function (){
            const index = this.getAttribute("data-index")
            console.log("logged", index)
            deleteExpense(index)
        })
       });
      
    }
    function editdata(index){
        const data = omolola[index]
        console.log(data)
        const row = document.createElement("tr")
        row.innerHTML = `
            <td><input type="text" id="editname" value="${data.names}"</td>
            <td><input type="text" id="editsurname" value="${data.surnames}"</td>
            <td><input type="email" id="editEmails" value="${data.emails}"</td>
            <td><input type="password" id="editpassword" value="${data.passwords}"</td>
            <td><input type="date" id="editdate" value="${data.dates}"</td>
            <td><button class="save-button" data-index="${index}" style="background: black; padding: 10px; color: white; border-radius:9px;">Save </button></td>
            <td><button class="cancel-button" data-index="${index}" style="background: black; padding: 10px; color: white; border-radius:9px;">cancel </button></td>
        `;
        // replace the existing row with data
        const displaydata = document.getElementById("displaydata")
        displaydata.replaceChild(row,displaydates.childNodes[index] )
        //add event listener to save and cancel button
      
        document
           .querySelector(`.save-button[data-index="${index}"]`)
           .addEventListener("click", function (){
            saveExpense(index)
        })
        document
           .querySelector(`.cancel-button[data-index="${index}"]`)
           .addEventListener("click", function (){
            accessArray()
        })
    }
    function saveExpense(index){
        //update with edited value
        omolola[index].names = document.getElementById("editname").value
       omolola[index].surnames = document.getElementById("editsurname").value
       omolola[index].emails = document.getElementById("editEmails").value
       omolola[index].passwords = document.getElementById("editpassword").value
       omolola[index].dates = document.getElementById("editdate").value
       console.log(omolola[index])
       accessArray()
    }
    function deleteExpense(index){
        omolola.splice(index,1)
        accessArray()
    }
    

    
 }
 
 
    let forms = document.getElementById('form')
    const button = document.getElementById('submit')
    button.addEventListener('click', function (element){
    element.preventDefault()
    const successAlert = document.getElementById('loginSuccessAlert');
    // const successMessage = document.getElementById("successAlert")
    const names = document.getElementById('name').value
    const surnames = document.getElementById('surname').value
    const emails = document.getElementById('email').value
    const passwords = document.getElementById('password').value
    const dates = document.getElementById('date').value
    console.log(names,surnames,emails,passwords,dates)
     // validate form input
     if(!name,!surnames,!emails,!passwords,!dates){
        alert('please fill in all fields with a valid data.')
        return;
    }
    const user = [ names, surnames, emails, passwords, dates]
   
      // want to put it inside an array o
      
      omolola.push({names,surnames,emails,passwords,dates})
      accessArray()
      showsuccessAlert("Congratulation Omolola your registration is successful")
      console.log(omolola)
      forms.reset()
       function showsuccessAlert(message){
        hideAlert() 
        successAlert.textContent = message
        successAlert.style.display = "block"
        console.log(successAlert)
        setTimeout(function (){
            successAlert.style.display = "none"
        },5000)
        function hideAlert(){
            successAlert.style.display = "none";
        }
    }
    accessArray() 
    savetolocalStorage(user)
   
});
function savetolocalStorage(user){
    const users = JSON.parse(localStorage.getItem("users")) ||[]
    if(!Array.isArray()){
        users = []
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
}

 