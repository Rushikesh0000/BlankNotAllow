$(document).ready(function () 
	   {
     $('#submitButton').on('click', function () 
     	{
         const inputField = $('#textInput');
         const errorMessage = $('#errorMessage');

         
         if ($.trim(inputField.val()) ==='') 
         {
             errorMessage.text('Blank not allowed'); 
             inputField.css('background-color', 'yellow'); 
             inputField.focus(); 
         } 
         else 
         {
             errorMessage.text(''); 
             inputField.css('background-color', 'black');
             inputField.css('color', 'white');
             alert('You entered: ' + inputField.val()); 
         }
     });
 });
