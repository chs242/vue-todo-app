
new Vue ({
    el: '#app',
    data: {
        tasks: ['learn vue.js', 'build a todo app', 'get it to work'],
        inputValue: '',
        placeholder: 'what is your next task?'
    },
    methods: {
        addToTasks (){
            this.tasks.push(this.inputValue)
            return this.inputValue = '';
        
        },
        toggle (){

        }
    
    }
})



/*You will need to have a [todos] or [tasks] array in your data
You will need a method that add your new tasks into the array
You may need a [toggle] method to toggle your tasks status
You may need to define another component for your different [tasks] 
(this is not required, but I encourage you to do it this way to practice 
props and events)*/