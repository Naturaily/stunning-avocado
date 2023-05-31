module.exports = {
  ...require('@natu/jest-config/jest-next'),
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
};
