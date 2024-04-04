import {contacts} from './data.js';

const dateTime = luxon.DateTime;

const { createApp } = Vue;

    const app = createApp({
      data(){
        return {
            contacts,
            activeContactId: 1,
            messageText: ''
        }
      },
      methods: {
        setActiveContactId(id){
          this.activeContactId = id
        }, 
        CreateMessage(msg, status){
          const newMessage = {
            date: dateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
            message: msg,
            status: status
          }
          return newMessage;
        }, 
        sendMessage(){
          const newMessage = this.CreateMessage(this.messageText, 'sent');
          this.activeContact.messages.push(newMessage);
          this.messageText = '';
          setTimeout(() => {
            const newMessage = this.CreateMessage('ok', 'received');
            this.activeContact.messages.push(newMessage)
          }, 1000);
        }
      }, 
      computed: {
        activeContact(){
          return this.contacts.find((el)=> el.id === this.activeContactId);
        }
      }, 
      mounted(){
        console.log(this.contacts);
      }
    }).mount('#app');