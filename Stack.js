var s1={};
s1.stk=new Array(10);
s1.sp=10;

s1.getDataString=function () {
    var s="";
    for(var i=this.sp;i<10;i++){
        s=s+"\t"+this.stk[i];
    }
    return s;
}

view=function () {
    var stackpara=document.getElementById('stack');
    stackpara.innerHTML=s1.getDataString();
}

//Push functionality
s1.push=function(v){
    if(v!=""){
        if(this.sp==0){
            document.getElementById("stackMessage").innerHTML="Stack is full! No more push Possible";
        }else{
            this.sp=this.sp-1;
            this.stk[this.sp]=v;
            document.getElementById("stackMessage").innerHTML="You Pushed "+v;
        }
    }
};
function pushHandler() {
    var in1=document.getElementById("stackinput");
    s1.push(in1.value);
    view();
    document.getElementById("stackinput").value="";
    // document.getElementById("stackMessage").innerHTML="You Pushed "+in1.value;
}