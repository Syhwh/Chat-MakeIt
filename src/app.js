import styles from './styles.scss';
import $ from 'jquery';
import { date } from './scripts/timeAndDate';

const aside =require('./templates/partials/aside.partial.hbs');
const chatMessages =require('./templates/partials/chatMessages.partial.hbs')
const chatGeneral= require('./templates/partials/chatGeneral.hbs')

const ws = new WebSocket("wss://mir-chat.herokuapp.com");

ws.onopen = function () {
   console.log("Conectados!");
}

ws.onmessage = function (msg) {
   var obj = JSON.parse(msg.data);
   displayChat(obj)
   
}

ws.onclose = function () {
   console.log("Desconectados!");
}

$('#chat').on('keypress','input', ((e) => {
   const message = $("#send").val()
   if (e.which == 13) {
      console.log(message)
     ws.send(JSON.stringify({ sender: "SWG", message }))
      $("input:text").val('')
      scrollUpdate()
   }

})
)

const displayChat = (data) => {
   console.log({ data })
   $('#chat-history').append(chatMessages(data))
 
}
const scrollUpdate =()=>{
   $('#chat-history').scrollTop($('#chat-history')[0].scrollHeight);
}

//layout
$('aside').html(aside)
$('.chat').html(chatGeneral)