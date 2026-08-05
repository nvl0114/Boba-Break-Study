const words = [

{
hanzi:"你好",
pinyin:"nǐ hǎo",
meaning:"Hello"
},

{
hanzi:"謝謝",
pinyin:"xièxie",
meaning:"Thank you"
},

{
hanzi:"喜歡",
pinyin:"xǐhuan",
meaning:"To like"
},

{
hanzi:"明天",
pinyin:"míngtiān",
meaning:"Tomorrow"
},

{
hanzi:"經驗",
pinyin:"jīngyàn",
meaning:"Experience"
},

{
hanzi:"照顧",
pinyin:"zhàogù",
meaning:"To take care of / to look after"
},

{
hanzi:"建議",
pinyin:"jiànyì",
meaning:"Suggestion / recommendation"
},

{
hanzi:"發展",
pinyin:"fāzhǎn",
meaning:"Development / to develop"
},

{
hanzi:"探討",
pinyin:"tàntǎo",
meaning:"To investigate / to explore / to discuss"
},

{
hanzi:"牽涉",
pinyin:"qiān shè",
meaning:"to involve / to concern / to be related to"
}

];


let index = 0;

const card = document.getElementById("card");


function showCard(){

document.getElementById("hanzi").innerHTML =
words[index].hanzi;

document.getElementById("pinyin").innerHTML =
words[index].pinyin;

document.getElementById("meaning").innerHTML =
words[index].meaning;

card.classList.remove("flip");

}



card.onclick=function(){

card.classList.toggle("flip");

}



let startX=0;


card.addEventListener("touchstart", e=>{

startX=e.touches[0].clientX;

});


card.addEventListener("touchend", e=>{


let endX=e.changedTouches[0].clientX;


if(startX-endX > 50){

index++;

if(index>=words.length){
index=0;
}

showCard();

}



if(endX-startX > 50){

index--;

if(index<0){
index=words.length-1;
}

showCard();

}


});


showCard();
