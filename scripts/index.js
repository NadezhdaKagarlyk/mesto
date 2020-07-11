const openPopupButton = document.querySelector('.profile__button-edit');
const closePopupButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');


openPopupButton.addEventListener("click", () => {
  popup.classList.add('popup_is-open');
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
})


function closePopup() {
  popup.classList.remove('popup_is-open');
}

closePopupButton.addEventListener("click", closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);


console.log(nameInput.value);

