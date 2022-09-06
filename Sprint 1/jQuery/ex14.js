 // #14 - Set background color of an element when the element (or any elements inside it) gets focus or loses focus 15. Display the tag's name on click

 function modifyElementStylesOnFocus() {
  $('input').focusin(function() {
    console.log($(this).prop('tagName'));
    $(this).css('background-color', '#ccc');
  });
  
  $('input').focusout(function() {
    $(this).css('background-color', 'initial');
  })
}