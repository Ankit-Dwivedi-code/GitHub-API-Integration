const githubService = require("../services/githubService");

const getGitHubProfile = async (req, res) => {
  try {
    const { data } = await githubService.fetchProfile();
    res.json({
      username: data.login,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      repos_url: data.repos_url,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GitHub profile" });
  }
};

const getRepoDetails = async (req, res) => {
  try {
    const { repoName } = req.params;
    const { data } = await githubService.fetchRepoDetails(repoName);
    res.json({
      name: data.name,
      description: data.description,
      stars: data.stargazers_count,
      forks: data.forks_count,
      open_issues: data.open_issues_count,
      repo_url: data.html_url,
    });
  } catch (error) {
    res.status(500).json({ error: "Repository not found" });
  }
};

const postIssue = async (req, res) => {
  try {
    const { repoName } = req.params;
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required" });
    }

    const { data } = await githubService.createIssue(repoName, title, body);
    res.json({ issue_url: data.html_url });
  } catch (error) {
    res.status(500).json({ error: "Failed to create issue" });
  }
};

module.exports = { getGitHubProfile, getRepoDetails, postIssue };
