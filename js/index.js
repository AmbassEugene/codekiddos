
(function () {
  emailjs.init('xDdDD_ovN48uiZWhP');
})();

window.onload = function () {
  myForm = document.querySelector('.form');
  myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_jd1ytpb', 'contact_form', this)
      .then(function () {
        myForm.reset();
      }, function (error) {
      });
  });
}
