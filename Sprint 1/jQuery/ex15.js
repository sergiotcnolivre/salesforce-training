  // #15 - Double click on paragraph to toggle background color

  function changeBackgroundColorOnDoubleClick() {
$('.paragraph-change-color').dblclick(() => {
    $('.paragraph-change-color').css('background-color', getRandomColor());
})
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

}