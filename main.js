/**
 * Created by cyz on 2017/8/27.
 */
"use strict";
function transArr(collection){
    let result =[];
    collection.forEach((item)=>{
        let tempResult='';
        item.forEach((ele)=>{
            tempResult+=ele
        })
        result.push(parseInt(tempResult,10))
    })
    return result
}

function getMethod(collection){
    let result = 0

    collection.forEach((item)=>{
        if((10<item)&&(item<=26)){
            result+=2;
        }else{
            result+=1;
        }
    })

    return result
}


function calculateMethod(num){
    let tempArr=[]
    let transNum=num.toString().split('');
    for(let i =0;i<=transNum.length-2;i=i+2){
        tempArr.push(transNum.slice(i,i+2))
    }
    let transedArr=transArr(tempArr)
    let result = getMethod(transedArr)
    if(transNum.length%2===1){
        result+=1
    }
    return result
}

function main(num){

    let result;
    if(num===0){
        result=0;
    }else if((0<num)&&(num<=10)){
        result =1;
    }else {
        result =calculateMethod(num)
    }
    console.log('有'+result+'种编码方式')


}
let toAns=26
console.log(toAns)
main(toAns)