import axios from "axios";

const API_BASE_URL = "https://thenews-lhhv.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllUsers = () => {
  return axios
    .get(`https://thenews-lhhv.onrender.com/api/users`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getAllArticles = () => {
  return axios
    .get(`https://thenews-lhhv.onrender.com/api/articles`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getArticlesById = (articleId) => {
  return axios
    .get(`https://thenews-lhhv.onrender.com/api/articles/${articleId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getArticlesByTopic = (articleTopic) => {
  return axiosInstance
    .get(`articles?topic=${articleTopic}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("topic query error >>>", err);
      throw new Error("Failed to get articles by Topic...");
    });
};

export const getAllComments = () => {
  return axios
    .get(`https://thenews-lhhv.onrender.com/api/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getCommentsByArticleId = (articleId) => {
  return axios
    .get(`https://thenews-lhhv.onrender.com/api/articles/${articleId}/comments`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const updateArticleVotes = (articleId, voteValue) => {
  return axios
    .patch(`https://thenews-lhhv.onrender.com/api/articles/${articleId}`, {
      inc_votes: voteValue,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const postMyComment = (articleId, commentBody) => {
  return axios
    .post(
      `https://thenews-lhhv.onrender.com/api/articles/${articleId}/comments`,
      commentBody
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const deleteCommentsById = (comment_id) => {
  return axios
    .delete(`https://thenews-lhhv.onrender.com/api/comments/${comment_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};
