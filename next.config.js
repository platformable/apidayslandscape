module.exports = {
    images: {
      // domains: [
      //   'http://*',
      //   'https://www.dummyimage.com',
      //   // 'https://www.netlify.com/',
      //   'https://apidays.global',
      //   // 'https://vercel.com',
      //   'https://cloudflare.com',
      //   // 'https://strapi.io',
      //   'https://cloudinary.com/platformable',
      //   'https://drive.google.com/thumbnail',
      //   'https://logo.clearbit.com',
  
      // ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.*',
        },
      ],
    },
  }