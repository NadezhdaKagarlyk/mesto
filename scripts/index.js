const openPopupButton = document.querySelector('.profile__button_edit');
const closePopupButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');


function togglePopup() {
  popup.classList.toggle('popup_is-open');
}

openPopupButton.addEventListener('click', togglePopup);


closePopupButton.addEventListener('click',togglePopup);
