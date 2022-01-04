module.exports = function (props = {}) {
  return {
    ...props,
    cdnAppId: 'realign-homepage',
    resourceFolderPath: './dist',
  };
};