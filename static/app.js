//function to create a child
function addChild(){
    name = document.getElementById('adduser').value;
    console.log(name)
  
    let url = "./api/chaching/Anusha/" + name;

fetch(url, {
    method: 'PUT',
    body: ""
  })
  .then(res => {
      console.log('Added Child', res)
  })
  .catch((error) =>{
    console.log(error)

  })
}

//function to redeem points
function redeem(){
  tokens = document.getElementById('tokens').value;

  const bodyredeem = {
      "name": "TV",
      "cost": 3
  }

  let url = "./api/chaching/tokens/Anusha/Sarah";

  fetch(url, {
  method: 'POST',
  body: bodyredeem
  })
  .then(res => {
    console.log('Added')
    document.getElementById('tokens').innerHTML = 12;
  })
  .catch((error) =>{
  console.log(error)

})
}

function lock(){
  document.getElementById('tokens').innerHTML = 8;
  document.getElementById('locked').innerHTML = 11;
}

//function to delete a child
function deleteChild(){
    name = document.getElementById('adduser').value;
    console.log(name)
  
    let url = "./api/chaching/Anusha/" + name;

fetch(url, {
    method: 'DELETE',
    body: ""
  })
  .then(res => {
      console.log('Deleted Child Child')
  })
  .catch((error) =>{
    console.log(error)

  })
}

function Toggle2() {
    var x = document.getElementById("task2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Toggle1() {
    var x = document.getElementById("task1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function Toggle() {
    var x = document.getElementById("task");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function assignChore(){
    var url = "./api/chaching/chores/Anusha/Leonard/"
    fetch(url, {
      method: 'POST',
      body: 
        {
          "name": "sweeping",
          "time": "Nov 22 at 6pm",
          "reward": 5,
          "completed": false
        }
      })
      .then(res => {
        console.log('Added')
      })
      .catch((error) =>{
      console.log(error)
    
    })
    
  }