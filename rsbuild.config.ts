import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { webpackProvider } from '@rsbuild/webpack';

export default defineConfig({
  provider: webpackProvider,
  plugins: [pluginReact(), pluginImageCompress(['png'])],
  tools: {
    bundlerChain(config, { isServer }) {
      config.module.rule('image').oneOf('image-asset').generator({
        filename: 'static/image/[name].[contenthash:8][ext]',
        emit: !isServer,
      });
    },
    rspack: {
      // plugins: [new RsdoctorRspackPlugin()],
      optimization: {
        chunkIds: 'named',
        moduleIds: 'named',
        // minimize: false,
      },
      output: {
        environment: {
          const: false,
        },
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
