import { getPostsArray } from "./db.js";
import { postBig } from "./postBig.js";

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
export function postsGrid(countPosts) {
  const appendPost = document.querySelector(".pictures__title");
  const fragment = document.createDocumentFragment();
  const postArray = getPostsArray(countPosts);

  postArray.forEach((element) => fragment.appendChild(getOnePost(element)));
  appendPost.before(fragment);

  document.querySelector(".pictures").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.id)
      postBig(postArray.find((data) => data.id == e.target.dataset.id));
  });
}
