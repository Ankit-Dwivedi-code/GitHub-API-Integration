const { GITHUB_TOKEN } = require("../config/githubConfig");

const authHeaders = {
  Authorization: `token ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github.v3+json",
};

module.exports = authHeaders;
