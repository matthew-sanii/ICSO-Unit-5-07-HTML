// JavaScript File
let response=document.getElementById("response");
let answer;
let multi;
document.getElementById("button").onclick=function(){Click()};
function Click(){
  answer=document.getElementById("answer");
  multi=document.getElementById("multi");
  let answerValue;
  let answerinfo;
  answerinfo=0;
  let multiValue;
  multiValue=Number(multi.value);
  answerValue=Number(answer.value);
  if (multiValue > 0){
    while (multiValue > 0){
    answerinfo=Number(answerinfo + answerValue);
    multiValue=Number(multiValue-1);
  }}
  if (multiValue == 0){
    response.innerHTML=answerinfo;
  }
}  