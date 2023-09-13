import React from "react";
import { Helmet } from "react-helmet";
import image from "../assets/meta.jpg";

export default ({ metaTitle, metaDescription }) => {
  // METADATA

  const title = metaTitle || "Nova, Tech for Good";
  const description =
    metaDescription ||
    "We are a team of students at UCLA who aim to create high-impact technology that empowers nonprofits to better serve their communities.";

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:image`,
          content: "https://i.imgur.com/ivlhp1U.jpg",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};
