import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import ArticleCard from "../routes/ArticleCard";
import PostComment from "../routes/PostComment";
import Users from "../routes/Users";

function Body() {
  const [showArticles, setShowArticles] = useState(false);
  const [isHomeImagesVisible, setIsHomeImagesVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(false);

  const handleArticlesClick = () => {
    setShowArticles(true);
    setIsHomeImagesVisible(false);
    setSelectedArticle(false);
  };

  const handleHomeClick = () => {
    setShowArticles(false);
    setIsHomeImagesVisible(true);
    setSelectedArticle(false);
  };

  const handleArticleIdClick = () => {
    setIsHomeImagesVisible(false);
    setShowArticles(false);
    setSelectedArticle(true);
  };
  return (
    <>
      <Header />
      <NavBar
        handleHomeClick={handleHomeClick}
        handleArticlesClick={handleArticlesClick}
        showArticles={showArticles}
        isHomeImagesVisible={isHomeImagesVisible}
      />
      {selectedArticle && (
        <ArticleCard
          handleArticleIdClick={handleArticleIdClick}
          selectedArticle={selectedArticle}
        />
      )}

      {/* <PostComment></PostComment> */}
      {/* <Users></Users> */}
    </>
  );
}

export default Body;
