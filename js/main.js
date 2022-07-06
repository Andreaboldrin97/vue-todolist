// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const app = new Vue(
    {
        el : '#root',

        data : {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ] ,
            newToDoElement : '',
            toggleCheck : '',
            
        },
        methods : {
            isCheck : function (done){
                if(done === true){
                    return true;
                }
            },

            removeTodo : function(indexElement){
                console.log(`hai clicato ${indexElement}`)
                this.todos.splice(indexElement , 1);
            },

            addNewToDoElement : function (text){
                if(!text == ''){
                    this.todos.push({text : text , done : false});
                }
                console.log(this.todos)
             this.newToDoElement = '';
            },

            invertedCheck : function(indexElement){
                console.log(this.todos[indexElement].done)

                // this.todos.forEach((element , i) => {
                //     if(element.done == true){
                //         element.done = false
                //     }else{
                //         element.done = true
                //     }
                // });
                
                // this.todos.forEach((element , i) => {
                //     if(element[indexElement].done == true){
                //         element[indexElement].done = false
                //     }else{
                //         element[indexElement].done = true
                //     }
                // });
                
                // this.todos.forEach((element , i) => {
                //     if(element[i].done == true){
                //         element[i].done = false
                //     }else{
                //         element[it].done = true
                //     }
                // });
            },
        }
    }
)