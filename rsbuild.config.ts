import { defineConfig } from '@rsbuild/core';
// import { webpackProvider } from '@rsbuild/webpack';

export default defineConfig({
  // provider: webpackProvider,
  plugins: [],
  tools: {
    bundlerChain(config, { isServer }) {
      config.module.rule('image').oneOf('image-asset').generator({
        filename: 'static/image/[name].[contenthash:8][ext]',
        emit: !isServer,
      });
    },
    rspack: {
      optimization: {
        chunkIds: 'named',
        moduleIds: 'named',
        minimize: false,
      },
    },
  },
  environments: {
    node: {
      output: {
        distPath: {
          root: 'dist/ssr',
        },
        target: 'node',
      },
    },
    web: {
      output: {
        distPath: {
          root: 'dist/client',
        },
        target: 'web',
      },
    },
  },
  output: {
    distPath: {
      root: 'dist',
    },
  },
});
