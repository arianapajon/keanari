import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="content-page not-found">
      <p className="eyebrow">oops ✿</p>
      <h1>this page got lost ♡</h1>
      <Link className="text-link" to="/">take me home →</Link>
    </section>
  );
}