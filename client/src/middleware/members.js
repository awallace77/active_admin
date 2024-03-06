const url = 'http://localhost:5000';

async function getMembers(){
  let data = [];
  try {
    const res = await fetch(`${url}/members`);
    data = await res.json();
    console.log('Data found')
    return data;
  }catch(error) {
    console.log(error.message); 
  }
}

async function getMember(id){
  let data = [];
  try {
    const res = await fetch(`${url}/${id}`);
    data = await res.json();
  }catch(error) {
    console.log(error.message); 
  }
  return data;
}

module.exports = { getMembers, getMember }