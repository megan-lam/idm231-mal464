const modal = document.getElementById('modal');
const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {
  button.addEventListener(
    'click',
    () => {
      modal.hidden = !modal.hidden;
    },
    false
  );
});