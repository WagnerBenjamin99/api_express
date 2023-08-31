const data = [
    {
        "nombre" : "benjamin",
        "apellido" : "wagner",
        "edad" : 23
    },
    {
        "nombre" : "roman",
        "apellido" : "riquelme",
        "edad" : 45
    },
    {
        "nombre" : "lionel",
        "apellido" : "messi",
        "edad" : 36
    }
]

function getData(){
    return new Promise((resolve, reject) => {
        if(data.length === 0) new Error("Los datos estan vacios")
        setTimeout(() => {
            resolve(data)
        }, 5000)
    })
}

async function fetchingData(){
    const personas = await getData()
    console.log(personas)
}

fetchingData()
 
async function getDataApi(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemon = await response.json()
    console.log(pokemon)
}

getDataApi()

/* CALLBACK
function inf(param){
  console.log(param)
}
function sup(callback){
  const user = {name: 'tata', apellido:'bsisbuis'}
  callback(user)
}

sup(inf)
*/