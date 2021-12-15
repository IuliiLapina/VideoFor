import React from "react";
import blog_image1 from "../../images/blog/blog-image1.png";
import blog_image2 from "../../images/blog/blog-image2.png";
import blog_image3 from "../../images/blog/blog-image3.png";

function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="chapter">VIDEOFOR БЛОГ</h2>
      <ul className="blog__card-list">
        <li className="blog__card">
          <img
            className="blog__image"
            src={blog_image1}
            alt="Логотип 'VideoFor'"
          />
          <p className="blog__data">19.11.2021</p>
          <p className="blog__subtitle">
            Tenzerflou и еще какие-то умные слова заголовок
          </p>
        </li>
        <li className="blog__card" id="1">
          <img
            className="blog__image"
            src={blog_image2}
            alt="Логотип 'VideoFor'"
          />
          <p className="blog__data">19.11.2021</p>
          <p className="blog__subtitle">
            Tenzerflou и еще какие-то умные слова заголовок
          </p>
        </li>
        <li className="blog__card" id="2">
          <img
            className="blog__image"
            src={blog_image3}
            alt="Логотип 'VideoFor'"
          />
          <p className="blog__data">19.11.2021</p>
          <p className="blog__subtitle">
            Tenzerflou и еще какие-то умные слова заголовок
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Blog;
