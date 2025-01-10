/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    images: {
        formats : ["image/avif", "image/webp"],
        remotePatterns : [
            {
                protocol : "https",
                hostname : "images.ctfassets.net",
                port : "",
                pathname : "/**"
            }
        ]
    }
}

module.exports = nextConfig
