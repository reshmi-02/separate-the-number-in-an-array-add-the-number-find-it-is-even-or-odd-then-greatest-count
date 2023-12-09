let a=[789,234,55,63,12]
let evencount=0;
let oddcount=0;
let even=[];
let odd=[];
for(let i=0;i<a.length;i++){


var ans=0;
var temp=a[i];

console.log(temp);


    
    while(temp>0){
    b=temp%10;
    ans=ans+b
    temp=parseInt(temp/10)
    }




if(ans%2==0){
    even.push(ans)
    evencount=evencount+1
}
else{
    odd.push(ans)
    oddcount=oddcount+1
}

}

document.write(`even array = ${even} <br>` )
document.write(`odd array = ${odd} <br>` )

if(evencount>oddcount){
    document.write("It has large number of even number")
}
else if(evencount===oddcount){
    document.write("It has equal number of odd and even")
}
else{
    document.write("It has large number of odd number")
}


