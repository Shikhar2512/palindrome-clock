let session_id = 1;
let btns = true;
let session_break = true;
let timer = true;
let start_pause = true;
let clock_min = document.getElementById("min");
let clock_sec = document.getElementById("sec");
let Smin = 0;
let Bmin = 0;
let Ssec = 0;
let Bsec = 0;
let st = 0;
let bt = 0;
var id = 0;
function session_inc(){
    if(btns == true){
        let session_time = document.getElementById("session_time");
        st++;
        session_time.innerHTML = st;
    }
}
function session_dec(){
    if(btns == true){
        let session_time = document.getElementById("session_time");
        if(session_time.innerHTML == 0){
            alert("error");
            return;
        }
        st--;
        session_time.innerHTML = st;
    }
}
function break_inc(){
    if(btns == true){
        let break_time = document.getElementById("break_time");
        bt++;
        break_time.innerHTML = bt;
    }

}
function break_dec(){
    if(btns==true){
        let break_time = document.getElementById("break_time");
        if(break_time.innerHTML == 0){
            alert("error");
            return;
        }
        bt--;
        break_time.innerHTML = bt;
    }
}
Smin = st;
function change(){
    if(start_pause == true){
        btns = false;
        timer = true;
        let ele = document.getElementById("start_pause").innerHTML = "pause";
        start_pause = false;
        clock_min.innerHTML = Smin;
        clock_sec.innerHTML = Ssec;
        id = setInterval("clock()",100);
    }
    else{
        btns = true;
        start_pause = true;
        clock_min.innerHTML = Smin;
        clock_sec.innerHTML = Ssec;
        let ele = document.getElementById("start_pause").innerHTML = "start";
        timer = false;
        clearInterval(id);
    }
}
function reset(){
    btns = true;
    Smin = 0;
    Ssec = 0;
    clock_min.innerHTML = 0;
    clock_sec.innerHTML = 0;
    document.getElementById("start_pause").innerHTML = "start";
    start_pause = true;
    session_break = true;
    timer = false;
    document.getElementById("session_break").innerHTML = "session"
    session_id =1;
    document.getElementById("session_time").innerHTML = 0;
    document.getElementById("break_time").innerHTML = 0;
    st =0;
    bt =0;
    Ssec =0;
    Smin =0;
}
function clock(){
    if(timer == false){
        clearInterval(id);
        btns = true;
        clock_min.innerHTML = Smin;
        clock_sec.innerHTML = Ssec;
        return;
    }
    if(st!=0 && bt!=0){
        if(clock_sec.innerHTML == 0 && clock_min.innerHTML!=0){
            Ssec = clock_sec.innerHTML = 59;
            Smin = --clock_min.innerHTML;
        }
        else if(clock_sec.innerHTML!=0 && clock_min.innerHTML == 0){
           Ssec =  --clock_sec.innerHTML;
        }
        else if(clock_sec.innerHTML!=0 && clock_min.innerHTML !=0){
           Ssec =  --clock_sec.innerHTML;
        }
        else{
            if(session_break == true){
                document.getElementById("session_break").innerHTML = "session "+session_id;
                session_id++;
                clock_min.innerHTML = st;
                clock_sec.innerHTML = 0;
                session_break = false;
            }
            else{
                clock_min.innerHTML = bt;
                clock_sec.innerHTML = 0;
                session_break = true;
                document.getElementById("session_break").innerHTML = "break";
            }
        }
    }
    else{
        
        if(st == 0 && bt ==0){
            alert("enter session time and break time");

        }
        else if(st==0){
            alert("enter session time and break time");
            
        }
        else{
            alert("enter session time and break time");
            
        }
        reset()
        
    }
}