const openPopupButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
nameInput.value = profileName.textContent;
jobInput.value = profileInfo.textContent;

function togglePopup() {
  popup.classList.toggle('popup_is-open');
}

openPopupButton.addEventListener("click", togglePopup);

closePopupButton.addEventListener("click", togglePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

