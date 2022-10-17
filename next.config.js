/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
};

module.exports = nextConfig;

module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/ohenrydevopr',
				permanent: false,
			},
		];
	},
};
