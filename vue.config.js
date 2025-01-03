module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        hostname: 'localhost',
        port: 8080,
        protocol: 'ws',
      },
    },
    allowedHosts: 'all',
    compress: false, // 圧縮を無効にします
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // `webSocketServer` が存在するか確認
      if (devServer.webSocketServer && devServer.webSocketServer.options) {
        devServer.webSocketServer.options.perMessageDeflate = false;
        console.log('perMessageDeflate を無効に設定しました。');
      } else {
        console.warn('webSocketServer またはその options が定義されていません。');
      }

      return middlewares;
    },
  },
};