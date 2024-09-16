import { closePostBig } from "./utils.js";

function getOneComment(commentData) {
  const commentsClone = document.querySelector("#social__comment").cloneNode(true).content;
  const commentImg = commentsClone.querySelector(".social__picture");
  const commentAutorh = commentsClone.querySelector(".social__author");
  const commentText = commentsClone.querySelector(".social__text");
  commentImg.src = commentData.avatar;
  commentImg.alt = commentData.name;
  commentAutorh.textContent = commentData.name;
  commentText.textContent = commentData.message;
  return commentsClone;
}

export function postBig(postData) {
  document.querySelector("body").classList.add("modal-open");
  const bigPhoto = document.querySelector(".big-picture");
  bigPhoto.classList.remove("hidden");

  const bigImgParams = bigPhoto.querySelector(".big-picture__img");
  const bigImg = bigImgParams.querySelector("img");
  bigImg.src = postData.url;
  bigImg.alt = postData.decription;

  const bigPostAuthor = bigPhoto.querySelector(".social__picture");
  bigPostAuthor.src = postData.avatar;
  bigPostAuthor.alt = postData.name;

  const bigPostDescription = bigPhoto.querySelector(".social__caption");
  bigPostDescription.textContent = postData.decription;

  const bigPostLikes = bigPhoto.querySelector(".likes-count");
  bigPostLikes.textContent = postData.likes;

  const bigPostComments = bigPhoto.querySelector(".comments-count");
  bigPostComments.textContent = postData.comments.length;
  //Після відкриття вікна сховайте блоки лічильника коментарів.
  bigPhoto.querySelector(".social__comment-count").classList.add("hidden");

  const appendComments = bigPhoto.querySelector(".social__comments");
  appendComments.innerHTML = "";
  const fragment = document.createDocumentFragment();
  postData.comments.forEach((comment) =>
    fragment.appendChild(getOneComment(comment))
  );
  appendComments.append(fragment);

  const closeModal = document.querySelector(".big-picture__cancel");
  closeModal.addEventListener("click", () => closePostBig());
  document.addEventListener("keydown", (checkkey) => {
    if (checkkey.key === "Escape") {
      closePostBig();
    }
  });
}
