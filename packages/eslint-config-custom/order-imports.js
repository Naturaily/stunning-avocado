const appPrefix = '@natu';

const commonOrderImports = [
  `/^${appPrefix}/jest-config/`,
  `/^${appPrefix}/googletagmanager/`,
  `/^${appPrefix}/utils/`,
  `/^${appPrefix}/env/`,
];

const nextOrderImports = [
  `/^${appPrefix}/ui/`,
  `/^${appPrefix}/next-link/`,
  `/^${appPrefix}/responsive-image/`,
  `/^${appPrefix}/hooks/`,
  `/^${appPrefix}/seo/`,
  `/^${appPrefix}/react-query-gql/`,
];

const storyblokOrderImports = [
  `/^${appPrefix}/storyblok-ui/`,
  `/^${appPrefix}/storyblok-api/`,
  `/^${appPrefix}/storyblok-utils/`,
];

module.exports = [...commonOrderImports, ...nextOrderImports, ...storyblokOrderImports];
