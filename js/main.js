import { getPostsArray } from "./db.js";

function getOnePost(postData) {
  const postClone = document.querySelector("#picture").cloneNode(true).content;
  const postImg = postClone.querySelector(".picture__img");
  const postComment = postClone.querySelector(".picture__comments");
  const postLikes = postClone.querySelector(".picture__likes");
  postImg.setAttribute(`data-id`, `${postData.id}`);
  postImg.src = postData.url;
  postImg.alt = postData.decription;
  postComment.textContent = postData.comments.length;
  postLikes.textContent = postData.likes;
  return postClone;
}

function getOneComment(commentData) {
  const commentsClone = document
    .querySelector("#social__comment")
    .cloneNode(true).content;
  const commentImg = commentsClone.querySelector(".social__picture");
  const commentAutorh = commentsClone.querySelector(".social__author");
  const commentText = commentsClone.querySelector(".social__text");
  commentImg.src = commentData.avatar;
  commentImg.alt = commentData.name;
  commentAutorh.textContent = commentData.name;
  commentText.textContent = commentData.message;
  return commentsClone;
}

function bigPhotoRender(postData) {
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

  const appendComments = bigPhoto.querySelector(".social__comment");
  const fragment = document.createDocumentFragment();
  postData.comments.forEach((comment) =>
    fragment.appendChild(getOneComment(comment))
  );
  appendComments.after(fragment);
  appendComments.remove();

  const closeModal = document.querySelector(".big-picture__cancel");
  closeModal.addEventListener("click", () => closeBigPost());
  document.addEventListener("keydown", (checkkey) => {
    if (checkkey.key === "Escape") {
      closeBigPost();
    }
  });
}

function closeBigPost() {
  document.querySelector("body").classList.remove("modal-open");
  document.querySelector(".big-picture").classList.add("hidden");
}

function renderUsersPosts(countPosts) {
  const appendPost = document.querySelector(".pictures__title");
  const fragment = document.createDocumentFragment();
  const postArray = getPostsArray(countPosts);

  postArray.forEach((element) => fragment.appendChild(getOnePost(element)));
  appendPost.before(fragment);

  document.querySelector(".pictures").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.id)
      bigPhotoRender(postArray.find((data) => data.id == e.target.dataset.id));
  });
}
renderUsersPosts(55);
