import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

/**
 * @typedef {Object} GitHubRepo
 * @property {number} id
 * @property {string} name
 * @property {string} html_url
 * @property {string} description
 * @property {boolean} fork
 * @property {number} forks_count
 * @property {number} stargazers_count
 * @property {number} watchers_count
 * @property {string} pushed_at
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * GitHub
 */
class GitHub {
  constructor({ userName }) {
    this.userName = userName;
    this.sumStarts = 0;
    /**
     * @type {GitHubRepo[]}
     */
    this.repos = [];
  }

  /**
   * @returns {Promise<GitHubRepo[]>}
   */
  fetchRepos() {
    return axios({
      // https://developer.github.com/v3/repos/
      url: `https://api.github.com/users/${this.userName}/repos?sort=pushed&per_page=100`,
      adapter: jsonpAdapter,
    }).then(({ data }) => {
      this.repos = [];
      data.data.forEach((/** GitHubRepo */repo) => {
        if (repo.fork) {
          return;
        }
        this.repos.push(repo);
      });
      return this.repos;
    });
  }
}

export default GitHub;
