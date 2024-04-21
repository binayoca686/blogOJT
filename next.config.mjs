/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle webmanifest files
        config.module.rules.push({
          test: /\.webmanifest$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next', // Specify the public path for the manifest file
              outputPath: 'static', // Specify the output path for the manifest file
              name: '[name].[ext]', // Specify the filename pattern for the manifest file
            },
          },
        });
    
        return config;
      }, 
};

export default nextConfig;
