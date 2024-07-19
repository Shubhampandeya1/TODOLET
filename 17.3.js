let todo= [];

let req =prompt("please enter your request");

while(true){

    if(req=="quit"){
        console.log("stopped")
        break;
    }

    if(req=="add"){
       

        let task = prompt("what do ypu want to add");
        todo.push(task);
        console.log("task added")
        
        console.log("-------------------")   

    }
    else if(req=="list"){
        for(item of todo){
            console.log(item)

        }
        console.log("-------------------")  

    }
    else if(req=="delete"){
        let del =  prompt("enter the index of element to remove");
        todo.splice(del, 1)
        console.log("item removed")

    }
    else{
        console.log("Wrong input")
    }
    req =prompt("please enter your request");


}