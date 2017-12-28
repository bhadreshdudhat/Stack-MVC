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