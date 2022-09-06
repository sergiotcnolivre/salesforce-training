  // #13 - Alert currently focused element

  function getCurrentlyFocusedElement() {
  const focusedElement = $(':focus')
   
  if(!focusedElement) return;
  
  console.log(`Elemento focado: ${focusedElement.prop('tagName')}`)
}