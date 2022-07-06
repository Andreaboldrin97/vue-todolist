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
            ]
            
        },
        methods : {
            isCheck : function (done){
                if(done === true){
                    return true;
                }
            }
        }
    }
)