const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const closeEdit = editModal.querySelector(".modal__close-button");
const editProfileForm = editModal.querySelector(".modal__form");
const editProfileNameInput = editModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const newPost = document.querySelector(".profile__new-post-button");
const postModal = document.querySelector("#new-post-modal");
const closePost = postModal.querySelector(".modal__close-button");
const newPostForm = postModal.querySelector(".modal__form");
const postNameInput = postModal.querySelector("#new-post-image-caption");
const postLink = postModal.querySelector("#new-post-image-link");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

editButton.addEventListener("click", function () {
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});
closeEdit.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

newPost.addEventListener("click", function () {
  openModal(postModal);
});
closePost.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(postNameInput);
  console.log(postLink);
  postModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleAddCardSubmit);
