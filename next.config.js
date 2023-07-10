/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects () {
        return [
            {
                destination: "/",
                source: "/1",
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
