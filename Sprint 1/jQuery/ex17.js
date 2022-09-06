  // #17 - Show texts when mouseup and mousedown event triggering

function showAndHideTextOnClickEvent() {
$('.container-click-trigger').mousedown(function() {
    $('.container-click-trigger > span').show();
});

$('.container-click-trigger').mouseup(function() {
    $('.container-click-trigger > span').hide();
})
}