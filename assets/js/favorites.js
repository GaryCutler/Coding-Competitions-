window.addEventListener('DOMContentLoaded', () => {
  const savedSelection = localStorage.getItem('selectedButtons');
  if (savedSelection) {
    const selectedButtons = JSON.parse(savedSelection);
  }
});// button event listeners
window.addEventListener('fav-buttons', () => {
  // grabbing all the buttons
  const buttons = document.querySelectorAll('.btn-this');

  // array for localStorage
  let fav-buttons = [];

  // the event listener for grabbing button inputs to add to history
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const titleText = button.parentNode.querySelector('.title').textContent;

      // check if the title already exists in the selectedButtons array
      const titleExists = fav-buttons.some(entry => entry.title === titleText);
      if (titleExists) {
        return;
      }

      // this adds the button ID and the title text of the selection to the array
      fav-buttons.push({ buttonId: button.id, title: titleText });

      // limiting the number of selected buttons to 9
      if (fav-buttons.length > 9) {
        fav-buttons.shift();
      }

      // setting the localStorage
      localStorage.setItem('fav-buttons', JSON.stringify(fav-buttons));

      // update the history listing
      updateHistoryListing();
    });
  });
