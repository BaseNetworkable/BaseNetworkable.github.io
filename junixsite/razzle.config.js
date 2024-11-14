module.exports = {
  modifyPaths({
    paths,
  }) {
    return {
      ...paths,
      appServerIndexJs: './src/index',
      appClientIndexJs: './src/client/main',
    };
  },
    plugins: [
      'svg-react-component'
    ],
};