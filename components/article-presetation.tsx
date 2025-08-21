import React from "react";

interface ArticleProps {
    headline: string
    para: string
}

function Article({headline, para}: ArticleProps) {
  return (
    <article className="grid gap-4 text-center md:text-left mt-10 max-w-4/6 md:max-w-100">
      <h2 className="text-2xl ">{headline}</h2>
      <p className="">
        {para}
      </p>
    </article>
  );
}

export default Article;
