import { Helmet } from "@dr.pogodin/react-helmet";
import PropTypes from "prop-types";

function SEO({ title, description, keywords, author }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Mbedobe Kunji",
    url: "https://yourdomain.com", // replace with your actual domain
    image: "https://yourdomain.com/your-profile-image.jpg", // optional but ideal
    jobTitle: "Web Developer & Data Entry Specialist",
    sameAs: [
      "https://github.com/Mbedobe", // replace with real handles
      "https://www.linkedin.com/in/danielmbedobe",
      "https://x.com/@kd_mbedobe",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          "Daniel Mbedobe Kunji - Web Developer & Data Entry Specialist"
        }
      />
      <meta
        name="keywords"
        content={
          keywords ||
          "web developer, MERN, React, Tailwind, WordPress, frontend, data entry"
        }
      />
      <meta name="author" content={author || "Daniel Mbedobe"} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
};

export default SEO;
