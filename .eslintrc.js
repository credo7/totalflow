module.exports = {
  root: true,
  extends: ["@packages/eslint-config-custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
