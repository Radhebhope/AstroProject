const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://rohitbhope.netlify.app";

  return base_url;
};

export default checkEnvironment;
