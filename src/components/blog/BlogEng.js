import React from "react";
import { Link, useLocation } from "react-router-dom";
import blog_image1 from "../../images/blog/blog-image1.png";
import blog_image2 from "../../images/blog/blog-image2.png";
import blog_image3 from "../../images/blog/blog-image3.png";

function BlogEng() {
  const location = useLocation();
  return (
    <section className="blog" id="blog">
      <h2 className="chapter">VIDEOFOR BLOG</h2>
      <ul className="blog__card-list">
        <li className="blog__card blog__card_eng">
          <Link className="blog__card-link" to="/blog-beach">
            <img
              className="blog__image blog__image_eng"
              src={blog_image1}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data blog__data_eng">8 December 2021</p>
            <p className="blog__subtitle blog__subtitle_eng">
              "Smart beach" or how to ensure the comprehensive safety of people
              on the pond (RU)
            </p>
          </Link>
        </li>
        <li className="blog__card blog__card_eng" id="1">
          <Link className="blog__card-link" to="/blog-recycle">
            <img
              className="blog__image blog__image_eng"
              src={blog_image3}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data blog__data_eng">18 December 2021</p>
            <p className="blog__subtitle blog__subtitle_eng">
              When will separate waste collection become the responsibility, and
              why is video monitoring of sites for waste containers needed? (RU)
            </p>
          </Link>
        </li>
        <li className="blog__card blog__card_eng" id="2">
          <Link className="blog__card-link" to="/blog-traffic">
            <img
              className="blog__image blog__image_eng"
              src={blog_image2}
              alt="Логотип 'VideoFor'"
            />
            <p className="blog__data blog__data_eng">20 December 2021</p>
            <p className="blog__subtitle blog__subtitle_eng">
              How are the latest technologies helping Moscow to solve the
              problem of traffic jams? (RU)
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default BlogEng;
