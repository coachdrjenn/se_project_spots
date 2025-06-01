const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const closeEdit = editModal.querySelector(".modal__close-button");
const newPost = document.querySelector(".profile__new-post-button");
const postModal = document.querySelector("#new-post-modal");
const closePost = postModal.querySelector(".modal__close-button");

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});
closeEdit.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

newPost.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});
closePost.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});
