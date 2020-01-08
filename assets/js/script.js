
//script for the other option in category menu
function checkValue(val){
    var element=document.getElementById('other_option');
 if(val=='pick a color'||val=='Other')
   element.style.display='block';
 else  
   element.style.display='none';
}
