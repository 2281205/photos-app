import { getPostsArray } from "./db.js";

function showPost(post) {
  const postItem = document.querySelector("#picture").cloneNode(true).content;
  const postImg = postItem.querySelector(".picture__img");
  const postComment = postItem.querySelector(".picture__comments");
  const postLikes = postItem.querySelector(".picture__likes");
  postImg.src = post.url;
  postImg.alt = post.decription;
  postComment.textContent = post.comments.length;
  postLikes.textContent = post.likes;

  const appendPost = document.querySelector(".pictures__title");
  const fragment = document.createDocumentFragment();
  fragment.appendChild(postItem);
  appendPost.before(fragment);
}

getPostsArray(4).forEach((element) => showPost(element));
