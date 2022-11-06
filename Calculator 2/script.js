var Global = '';
console.log(Global)
document.getElementById('output').innerHTML = Global

function calculate1(info1){
    Global += info1
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}

function calculate2(info2){
    Global += info2
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate3(info3){
    Global += info3
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate4(info4){
    Global += info4
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate5(info5){
    Global += info5
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate6(info6){
    Global += info6
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate7(info7){
    Global += info7
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate8(info8){
    Global += info8
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate9(info9){
    Global += info9
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate10(info10){
    op4 = Global.slice(-1)
    if(op4 != '.'){
        Global += info10
        console.log(Global)
        document.getElementById('output').innerHTML = Global
    }
    if(Global.includes(".")){
        console.log(Global.indexOf("."))
    }
}
function calculate11(info11){
    Global += info11
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate12(info12){
    Global = ''
    console.log(Global)
    document.getElementById('output').innerHTML = Global
}
function calculate13(info13){
    Global = Global.replace(Global.slice(-1), '')
    document.getElementById('output').innerHTML = Global
    console.log(Global)
}
function calculate14(info14){
    var op = Global.slice(-1)
    if(Global == ''){
        console.log('empty')
    }
    else if(!Global.includes("*") || op.match(/[1-9]/i)){
        if(  op != '/' & op != '-' & op != '+' ){
            console.log("reached here")
            Global += info14
            document.getElementById('output').innerHTML = Global
    }
}
}
function calculate15(info15){
    var op1 = Global.slice(-1)
    if(Global == ''){
        console.log('empty')
    }
    else if(!Global.includes("/") || op1.match(/[1-9]/i)){
        if(  op1 != '*' & op1 != '-' & op1 != '+' ){
            console.log("reached here")
            Global += info15
            document.getElementById('output').innerHTML = Global
    }}
}
function calculate16(info16){
    var op2 = Global.slice(-1)
    if(Global == ''){
        console.log("nothing")
    }
    else if(!Global.includes('+') || op2.match(/[1-9]/i)){
        if( op2 != '*' & op2 != '-' & op2 != '/' ){
        Global += info16
        document.getElementById('output').innerHTML = Global
    }}
}
function calculate17(info17){
    var op3 = Global.slice(-1)
    if(Global == ''){
        console.log("nothing")
    }
    else if(!Global.includes("-") || op3.match(/[1-9]/i)){
        if( op3 != '*' & op3 != '+' & op3 != '/' ){
        Global += info17
        document.getElementById('output').innerHTML = Global
    }}
}
function calculate18(info18){
    var sisi = eval(Global)
    console.log(Global)
    console.log(sisi)
    document.getElementById('output').innerHTML = sisi
    Global = ''
}