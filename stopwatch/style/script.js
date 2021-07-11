//to store the cur sec,min,hrs
let cur_ms = 0
let cur_s = 0
let cur_m = 0
let cur_h = 0

//just to make global for clear interval access
let ms_stop
let s_stop 
let m_stop
let h_stop


//ms is for triggering
millisec=0
let ms = function trigger_ms(){
    //handle setinterval queue
    if (ms_stop) {clearInterval(ms_stop)}
    //
   ms_stop =  setInterval(ms_change,1)}


//function for secs
function ms_change(){
    millisec++
    if (millisec <= 9){
    document.getElementById("ms").innerText = '0' + millisec}
    else{
        document.getElementById("ms").innerText = millisec
    }
    //reset after 60
    if (millisec == 100){
        millisec = 0
    }
     cur_ms = millisec
}


//s is for triggering
sec=0
let s = function trigger_s(){
    if (s_stop) {clearInterval(s_stop)}
   s_stop =  setInterval(sec_change,1000)}


//function for secs
function sec_change(){
    sec++
    if (sec <= 9){
    document.getElementById("sec").innerText = '0' + sec}
    else{
        document.getElementById("sec").innerText = sec
    }
    //reset after 60
    if (sec == 59){
        sec = 0
        setTimeout(mins_change,1000)
    }
     cur_s = sec
}

//m is for triggering
let min = 0
//function for mins

function mins_change(){
    min++
    if (min <= 9){
        document.getElementById("min").innerText = '0' + min}
    else{
        document.getElementById("min").innerText = min}
    
    //reset after 60
    if (min == 59){
        min = 0
        setTimeout(hrs_change,1000)
    }
    cur_m = min
}


//h is for triggering
let hrs = 0
//function for hrs

function hrs_change(){
    hrs++
    if (hrs <= 9){
        document.getElementById("hrs").innerText = '0' + hrs}
    else{
        document.getElementById("hrs").innerText = hrs}
    
    //reset after 60
    if (hrs == 59){
        hrs = 0
    }
    cur_h = hrs
}

//trigger with the updated value

document.getElementById("trigger_all").addEventListener('click',s)
document.getElementById("trigger_all").addEventListener('click',ms)



document.getElementById("stop_all").onclick = stop_all
//stop function
function stop_all(){
    console.log("stop")
    millisec = cur_ms
    sec = cur_s
    min = cur_m
    hrs = cur_h
    clearInterval(ms_stop)
    clearInterval(s_stop)
    clearInterval(m_stop)
    clearInterval(h_stop)
}


document.getElementById("reset_all").onclick = reset_all

function reset_all(){
    millisec = 0 
    sec = 0
    min = 0
    hrs = 0
    clearInterval(ms_stop)
    clearInterval(s_stop)
    clearInterval(m_stop)
    clearInterval(h_stop)
    document.getElementById("ms").innerText = '0' + '0'
    document.getElementById("sec").innerText = '0' + '0'
    document.getElementById("min").innerText = '0' + '0'
    document.getElementById("hrs").innerText = '0' + '0'
}
