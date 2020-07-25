const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupImage = document.querySelector('.popup_type_image');

const editForm = popupEditProfile.querySelector('.popup__form');
const addCardForm = popupAddCard.querySelector('.popup__form');

const openPopupButton = document.querySelector('.profile__button-edit');
const editProfileClosePopupButton = popupEditProfile.querySelector('.popup__button-close');
const addCardClosePopupButton = popupAddCard.querySelector('.popup__button-close');
const ImageClosePopupButton = popupImage.querySelector('.popup__button-close');


const nameInput = editForm.querySelector('.popup__input_type_name');
const jobInput = editForm.querySelector('.popup__input_type_job');

const placeInput = addCardForm.querySelector('.popup__input_type_place');
const urlInput = addCardForm.querySelector('.popup__input_type_url');

const profileName = document.querySelector('.profile__title');
const profileInfo = document.querySelector('.profile__subtitle');

const openAddCardButton = document.querySelector('.profile__button-add');



const list = document.querySelector('.card__list');


openPopupButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileInfo.textContent;
  popupEditProfile.classList.add('popup_is-open');
})


function closePopupEdit() {
  popupEditProfile.classList.remove('popup_is-open');
}


editProfileClosePopupButton.addEventListener("click", closePopupEdit);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopupEdit(popupEditProfile);
}

function addCardSubmitHandler(evt) {
  evt.preventDefault();
  renderCard({name: placeInput.value, link: urlInput.value});
  closePopupEdit(popupAddCard);
}
editForm.addEventListener('submit', formSubmitHandler);
addCardForm.addEventListener('submit', addCardSubmitHandler);

//2 popup


openAddCardButton.addEventListener("click", () => {
  popupAddCard.classList.add('popup_is-open');
})


function closePopupAdd() {
  popupAddCard.classList.remove('popup_is-open');
}

addCardClosePopupButton.addEventListener("click", closePopupAdd);

//массив фото

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card__item');

initialCards.forEach ((data) => {
  renderCard(data);
})


function handlerDeleteClick(button) {
  button.closest('.card__item').remove();
}




function closeImageWindow() {
  popupImage.classList.remove('popup_is-open');
}

ImageClosePopupButton.addEventListener("click", closeImageWindow);

const imagePopupImage = popupImage.querySelector('.popup__img');
const titlePopupImage = popupImage.querySelector('.popup__caption');

function handlerImageClick(src, textcontent) {
  popupImage.classList.add('popup_is-open');
  titlePopupImage.textContent = textcontent;
  imagePopupImage.src = src;
}

  function createCard(data){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__img');
    const cardTitle = cardElement.querySelector('.card__subtitle');
    const cardLike = cardElement.querySelector('.card__like');
    const cardDelete = cardElement.querySelector('.card__delete');

    cardTitle.textContent = data.name;

    cardImage.style.backgroundImage = `url(${data.link})`;

    cardLike.addEventListener('click', () => {
      // handlerLikeClick(cardLike);
    })

    cardDelete.addEventListener('click', () => {
      handlerDeleteClick(cardDelete);
    })
    cardImage.addEventListener("click", () => {
      console.log('222');
      handlerImageClick(imagePopupImage.src, cardTitle.textContent);

    });



    return cardElement;
  }

function renderCard(data) {
  list.prepend(createCard(data));
}



