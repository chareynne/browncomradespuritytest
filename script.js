function clearBoxes(){
  //when reset button is clicked all boxes are unchecked
   $('#reset').click(function() {
   $('input:checkbox').removeAttr('checked');
   }); 
}
