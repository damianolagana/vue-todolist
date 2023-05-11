const {createApp} = Vue;

createApp({
    data() {
      return {
        taskList : [
            {text:"Portare fuori il cane", done: true},
            {text:"Fare la lavatrice", done: false},
            {text:"Preparare la cena", done: false},
            {text:"Portare fuori la spazzatura", done: false},
        ]
      }
    },
    methods : {
        toDoClass(i){
            let doneClass="";
            if(this.taskList[i].done == true){
                doneClass = "done";
            }

            return doneClass;

        },
        removeToDo(i){
            this.taskList.splice(i,1);

        }
    },
  }).mount('#app')