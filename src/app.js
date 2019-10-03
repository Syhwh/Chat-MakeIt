import styles from './styles.scss';
import $ from 'jquery';
import {fetchData} from './scripts/fetchdata';
import {fetchChat} from './scripts/fetchdata';

const usersList =require('./templates/usersList.hbs')
const chatDisplat=require('./templates/chatDisplay.hbs')


const data =()=>{
    fetchData()
    .then(element=>displayUsers(element) )
}

const displayUsers=(data)=>{    
   $('#userList').html(usersList({data}))   
}

$('#userList').on('click','li', (e)=> {
   // alert('it works')
    const id=$(e.currentTarget).attr('id')
    
    fetchData()
    .then(element=> element )
    .then( data=>{ 
       const object =  data.find( (obj) =>{ return obj.name == id})      
        fetchChat(object.url)
        .then(chats=> printChats(chats))
        })
})

const printChats=(data)=>{
$('#chat-messages').html(chatDisplat({data}))
}



data()