// #11 - Create 3 jQuery dialogs on 3 different buttons click but only 1 should be displayed at once

function activeDialogs() {
  const modalEffect = {
    effect: "fade",
    duration: 300
  };
  const modalConfigs = {
    autoOpen: false,
    show: modalEffect,
    hide: modalEffect
  };
  
  $.each([
    { modalId: 'dialog-1', btnModalId: 'button-dialog-1'}, 
    { modalId: 'dialog-2', btnModalId: 'button-dialog-2'},
    { modalId: 'dialog-3', btnModalId: 'button-dialog-3'}
  ], (index, modalInfos) => {
    $(`#${modalInfos.modalId}`).dialog(modalConfigs);
 
    $(`#${modalInfos.btnModalId}`).on('click', function() {
      $(`.dialog`).dialog('close');
      $(`#${modalInfos.modalId}`).dialog('open');
    });
  })
}