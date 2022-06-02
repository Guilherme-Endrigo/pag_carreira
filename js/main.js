window.addEventListener('load', init());

function init() {
  var principios = document.querySelectorAll('.principios');
  var modalOverlay = document.querySelector('.modal-overlay');
  var modalContent = modalOverlay.querySelector('.modal-content');
  var modalClose = modalOverlay.querySelector('.modal-close');
  var elementYear = document.querySelectorAll('.year');

  var date = new Date();

  elementYear.forEach((item) => {
    item.innerHTML = date.getFullYear();
  })


  principios.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      modalOverlay.classList.add('modal-overlay--show');
      modalContent.classList.add('modal-content--show');
    });
  });

  modalClose.addEventListener('click', function (e) {
    modalOverlay.classList.remove('modal-overlay--show');
    modalContent.classList.remove('modal-content--show');
  });
};

window.addEventListener('load', init());


// modal_Empresas

// var quem_somos = document.querySelectorAll('quem_somos')
// var modalOverlay_empresas = document.querySelector('.modal-empresas-overlay');
// var modalContent_empresas = modalOverlay.querySelector('.modal-empresas-content');
// var modalClose_empresas = modalOverlay.querySelector('.modal-empresas-close');

// quem_somos.forEach(function (item, i) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     modalOverlay_empresas.classList.add('modal-overlay--show');
//     modalContent_empresas.classList.add('modal-content--show');
//   });
// });

// modalClose.addEventListener('click', function (e) {
//   modalOverlay_empresas.classList.remove('modal-overlay--show');
//   modalContent_empresas.classList.remove('modal-content--show');
// });