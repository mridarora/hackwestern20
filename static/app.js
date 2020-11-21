//function to create a schedule
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

//function to create a schedule
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