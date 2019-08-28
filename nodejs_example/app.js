// filename app.js

const Koa = require('koa');
const app = new Koa();
var i = 0;

var logger = require('tracer').console();

function resovleAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');

        },5000);
    });
}


async function asyncCall() {
    console.log("calling");
    var result = await resovleAfter2Seconds();
    console.log(result); 
    
}


function makeFunc(){
    var name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var Counter = (function(){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }

    return {
        increment: function(){
            changeBy(1);
        },

        decrement: function(){
            changeBy(-1);
        },

        value: function(){
            return privateCounter;
        }
    };
})();

var makeCounter = function(){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }

    return {
        increment: function(){
            changeBy(1);
        },

        decrement: function(){
            changeBy(-1);
        },

        value: function(){
            return privateCounter;
        }
    };
};

function MyObject(name, message){
    this.name = name.toString();
    this.message = message.toString();
}

MyObject.prototype.getName = function(){
    return this.name;
};

MyObject.prototype.getMessage = function(){
    return this.message;
};




app.use(async ctx=>{
    ctx.body = 'Hello World!';
    console.log(i);    
    asyncCall();
    i = i + 1;
    var myFunc = makeFunc();
    myFunc();

    let  tmp =  new MyObject(123, "abc");
    let t = tmp.getName();
    logger.log(t);
});


app.listen(3000);

