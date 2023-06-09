const {createApp} = Vue;

createApp({
    data() {
      return {
        newTask : {
            text:"",
            done: false,
        },
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

        },
        addTask(){
            console.log(this.newTask);

            let newTask={...this.newTask};
            this.taskList.unshift(newTask);
            this.newTask.text="";
        },
        changeTask(i){
            this.taskList[i].done = !this.taskList[i].done
        }
    },
  }).mount('#app')