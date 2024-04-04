import {contacts} from './data.js';

const { createApp } = Vue;

    const app = createApp({
      data(){
        return {
            contacts,
            activeContactId: 1
        }
      },
      methods: {
        setActiveContactId(id){
          this.setActiveContactId = id
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