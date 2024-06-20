let url=" https://icanhazdadjoke.com"
let btn=document.querySelector('#btn');

btn.addEventListener('click',async function(){
    let joke=await getJokes();
    let p=document.querySelector('#joke')
    p.innerHTML=joke;
})

async function getJokes(){
    let config={headers:{Accept:"application/json"}}
    let res=await axios.get(url,config);
    return res.data.joke;
}
