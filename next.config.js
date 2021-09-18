/** @type {import('next').NextConfig} **/
module.exports = {
   reactStrictMode: true,
   images: {
      domains: ["storage.googleapis.com"],
   },
   env: {
      BACKEND_URL: process.env.BACKEND_URL,
   },
};
