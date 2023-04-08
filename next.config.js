/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/SANTHOSH-MAMIDISETTI",
        permanent: true,
      },
      {
        source: "/LinkedIn",
        destination: "https://www.linkedin.com/in/santhosh-mamidisetti/",
        permanent: true,
      },
      {
        source: "/Twitter",
        destination: "https://twitter.com/_m_santhosh_",
        permanent: true,
      },
      {
        source: "/YouTube",
        destination: "https://www.youtube.com/@santhoshmamidisetti/",
        permanent: true,
      },
      {
        source: "/Gmail",
        destination: "mailto:mamidisettisanthosh2004@gmail.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
