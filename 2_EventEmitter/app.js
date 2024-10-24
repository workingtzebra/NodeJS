const EventEmitter=require('events')
const eventEmitter=new EventEmitter();
//listener,function are two arguements taken by eventEmitter on
eventEmitter.on('tutorial', ()=>{
console.log('Tutorial event has occured')
});

//we need a tutorial event to occur so that event listen may wrk
eventEmitter.emit('tutorial');



eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1+num2);
    });
    
    //we need a tutorial event to occur so that event listen may wrk
    eventEmitter.emit('tutorial',1,9);



    class Person extends EventEmitter{
        constructor(name){
            super();
            this._name=name;
        }
        get name(){
            return this._name;
        }
    }

    let omar=new Person('Ramo USSR');
    let thinkpad=new Person("The Best Laptop Ever");

    omar.on('name',()=>{
console.log("My name is "+ omar.name);
    });

     
     thinkpad.on('name',()=>{
        console.log("My name is "+ thinkpad.name);
            });

            omar.emit('name');
            thinkpad.emit('name');