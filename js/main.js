import { getPostsArray } from "./db.js";

function getOnePost(postData) {
  const postClone = document.querySelector("#picture").cloneNode(true).content;
  const postImg = postClone.querySelector(".picture__img");
  const postComment = postClone.querySelector(".picture__comments");
  const postLikes = postClone.querySelector(".picture__likes");
  postImg.src = postData.url;
  postImg.alt = postData.decription;
  postComment.textContent = postData.comments.length;
  postLikes.textContent = postData.likes;
  return postClone;
}

function renderUsersPosts(countPosts) {
  const appendPost = document.querySelector(".pictures__title");
  const fragment = document.createDocumentFragment();
  getPostsArray(countPosts).forEach((element) =>
    fragment.appendChild(getOnePost(element))
  );
  appendPost.before(fragment);
  document.querySelector(".pictures").addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      e.srcElement.innerText && e.srcElement.innerText++;
    },
    true
  );
}
renderUsersPosts(5);
