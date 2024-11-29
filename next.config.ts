const nextConfig = {
  images: {
    domains: ["media.licdn.com"],    
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ]
  },
  output: "export",
  reactStrictMode: true,
}

module.exports = nextConfig
