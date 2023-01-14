module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"], // TODO https://github.com/credo7/totalflow/issues/4
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
