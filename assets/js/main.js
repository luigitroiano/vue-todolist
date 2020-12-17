// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
let toDoList = new Vue ({
  el : "#root",
  data : {
    logo : "./assets/img/logo.png",
    newTask : " ",
    tasks : ["Studia VueJS","Ripassa CSS","Allenati"],
  },
  methods : {
    addTask(){
      if (this.newTask.length > 3) {
        this.tasks.push(this.newTask);
      this.newTask = "";
      } else {
        alert("Inserire almeno 4 caratteri");
        this.newTask = "";
      }
      
    },
    remove(index){
      this.tasks.splice(index, 1);
    },
    clearAll(){
      this.tasks = "";
    }
  },
  mounted(){
    document.addEventListener('keyup', e =>{
      if(e.key === 'Enter'){
        this.addTask();
      } 
    })
  }
});