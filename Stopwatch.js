// JS to emulate a working stopwatch

function Stopwatch(){
    
    // let status = null;

    //Private members
    let running;
    let duration = 0, startTime, stopTime;
    
    //Public function
    this.start = function(){
        //if(status!= "start"){
            if(!running){
            startTime = new Date().getTime();
            //status = "start";
            running = true;
        }
        else
            throw new Error("Stopwatch has already started.");
    }

    this.stop = function(){

        //if(status!= "stop"){
        if(running){
            stopTime = new Date().getTime();
            //status = "stop";
            running = false;
            const seconds = (stopTime - startTime)/1000;
            duration +=seconds;
        }
        else
            throw new Error("Stopwatch is not started.");
    }

    this.reset = function(){
        stopTime = null;
        startTime = null;
        //status = null;
        running = false;
        duration = 0;
    }

    // Member getter
    Object.defineProperty(this, 'duration', {
        get:function(){
            return duration;
        }
    });
}
//const sw =  new Stopwatch();
