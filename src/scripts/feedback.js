const feedback = $('#feedback')[0];

if (feedback) {
  feedback.addEventListener('submit', e => {
    e.preventDefault();
    console.log('click');
  });
}
