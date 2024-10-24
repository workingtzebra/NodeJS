const readline=require('readline');
//process is a global object

const rl=readline.createInterface({input: process.stdin, output: process.stdout});
let num1=Math.floor(Math.random()*10+1);
let num2=Math.floor(Math.random()*10+1);
//readline is instence of event emitter class so we can emit something 
let answer=num1+num2;
//fiurst is question and second is function
rl.question(`What is ${ num1 } + ${ num2 }?\n`,(userInput)=>{

    if (userInput.trim()==answer){
        rl.close();//here close event is emitting and we are listenin on it later in code
    }

    else{
        rl.setPrompt('Incorrect Response, Please try again\n');
        rl.prompt();
        //line event will be triggered when the user enters something else so we'll match again
        rl.on('line',(userInput)=>{
            if (userInput.trim()==answer){
                rl.close();//here close event is emitting and we are listenin on it later in code
            }
            else{
                rl.setPrompt(`Your answer ${userInput} is incorrect! Try again!\nWhat is ${ num1 } + ${ num2 }?\n`);
                rl.prompt();
            }
        })
        //here line is a loop, because it listens to line and checks everytime
    }
    
})


rl.on('close',()=>{
    console.log("Correct Answer!");
})