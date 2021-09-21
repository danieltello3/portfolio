/** @type {import('next').NextConfig} **/
module.exports = {
   reactStrictMode: true,
   images: {
      domains: ["storage.googleapis.com"],
   },
   env: {
      BACKEND_URL: process.env.BACKEND_URL,
   },
   webpack: (config, { isServer }) => {
      if (!isServer) {
         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
         config.resolve.fallback = {
            fs: false,
         };
      }

      return config;
   },
};
