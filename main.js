var y=3;

function change(){


if(y==3){
    document.getElementById('first').style.transform="translate(900px,0)";
    document.getElementById('first').style.transition="0.8s";
    document.getElementById('first').style.transitionTimingFunction="ease-in";

}else if(y==2){
    document.getElementById('second').style.transform="translate(900px,0)";
    document.getElementById('second').style.transition="0.8s";
    document.getElementById('second').style.transitionTimingFunction="ease-in";


}else if(y==1){
    document.getElementById('third').style.transform="translate(900px,0)";
    document.getElementById('third').style.transition="0.8s";
    document.getElementById('third').style.transitionTimingFunction="ease-in";


}
    y=y-1;
    if(y==0){

        document.getElementById('first').style.transform="translate(-10px,0)";
        document.getElementById('first').style.transition="0.8s";
        document.getElementById('first').style.transitionTimingFunction="ease-in";

        document.getElementById('second').style.transform="translate(-10px,0)";
        document.getElementById('second').style.transition="0.8s";
        document.getElementById('second').style.transitionTimingFunction="ease-in";

        document.getElementById('third').style.transform="translate(-10px,0)";
        document.getElementById('third').style.transition="0.8s";
        document.getElementById('third').style.transitionTimingFunction="ease-in";
        y=3;

        
    }

// 
// document.getElementById('first').style.zIndex="3";
// document.getElementById('first').style.transitionTimingFunction="ease-in";
}
//transition: ;

//transition-timing-function: ;



const spans = document.querySelectorAll('.container-third .TOT-raiting');

spans.forEach(span => {
  const number = parseInt(span.textContent);

  if (number >= 90) {
    span.style.color = '#00DFEE';
  } else if (number >= 80 && number < 90) {
    span.style.color = '#22FF00';
  }else if(number >= 70 && number < 80){
    span.style.color = '#FFE600';


  }else{
    span.style.color = '#FD0000';

  }
  
});