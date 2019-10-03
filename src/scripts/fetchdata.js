const fetchData =()=>{
  return fetch('https://makeitreal.s3.amazonaws.com/chats/users.json')
        .then( element=> element.json())
}

const fetchChat=(url)=>{
  return fetch(url)
        .then( element=> element.json())
}
 
module.exports={
  fetchData,
  fetchChat
}