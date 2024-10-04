import React from "react";
import "./Blog.css";
import topicImg from "../../assets/Thumbnail1.png";
import daw from "../../assets/Thumbnail2.png";
import vocal from "../../assets/Thumbnail3.png";

export default function Blog() {
  return (
    <section className="blog-section">
      <div className="wrapper">
        <h2 className="blog-heading">Latest Posts</h2>
        <div className="all-blogs">
          <div className="blog-card">
            <img src={topicImg} />
            <p className="tag">DAW</p>
            <p className="card-details">
              How To Use Drum Machine in Logic Pro X
            </p>
          </div>
          <div className="blog-card">
            <img src={daw} />
            <p className="tag">Mixing</p>
            <p className="card-details">How To Mix Guitars Effectively</p>
          </div>
          <div className="blog-card">
            <img src={vocal} />
            <p className="tag">VOX</p>
            <p className="card-details">
              The Real Power of Harmonies in Music Production
            </p>
          </div>
        </div>
        <div className="all-posts">
          <p>All Posts</p>
        </div>
      </div>
    </section>
  );
}
