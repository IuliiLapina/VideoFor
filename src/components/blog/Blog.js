import React from "react";
import { Link, useLocation } from "react-router-dom";
import blog_image1 from "../../images/blog/blog-image1.png";
import blog_image2 from "../../images/blog/blog-image2.png";
import blog_image3 from "../../images/blog/blog-image3.png";

function Blog() {
  const location = useLocation();
  let isBlogPage = location.pathname.search(/blog/g);

  return (
    <section className="blog" id="blog">
      {location.pathname === "/" ? (
        <h2 className="chapter">VIDEOFOR БЛОГ</h2>
      ) : (
        ""
      )}

      <ul className={`blog__card-list ${isBlogPage ? 'blog__card-list_column' : ''}`}>
        <li className="blog__card">
          <Link className="blog__card-link" to="/blog-beach#blog-beach-article">
            <img
              className="blog__image"
              src={blog_image1}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data">8 декабря 2021</p>
            <p className="blog__subtitle">
              «Умный пляж» или как обеспечить комплексную безопасность людей на
              водоеме
            </p>
          </Link>
        </li>
        <li className={`blog__card ${isBlogPage ? 'blog__card_column' : ''}`} id="1">
          <Link className="blog__card-link" to="/blog-recycle#blog-recycle">
            <img
              className="blog__image"
              src={blog_image3}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data">18 декабря 2021</p>
            <p className="blog__subtitle">
              Когда начнет работать раздельный сбор мусора, и зачем нужен
              видеомониторинг площадок для мусорных контейнеров
            </p>
          </Link>
        </li>
        <li className={`blog__card ${isBlogPage ? 'blog__card_column' : ''}`} id="2">
          <Link className="blog__card-link" to="/blog-traffic#blog-traffic">
            <img
              className="blog__image"
              src={blog_image2}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data">20 декабря 2021</p>
            <p className="blog__subtitle">
              Как новейшие технологии помогают Москве решить проблему пробок на
              дорогах?
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Blog;
