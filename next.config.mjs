/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        // Add rule for PDF worker
        config.module.rules.push({
            test: /pdf\.worker\.(min\.)?js/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[name].[hash][ext]',
            },
        });

        return config;
    },
};

export default nextConfig;
