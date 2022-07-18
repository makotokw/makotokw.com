import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import jsonpAdapter from 'axios-jsonp';

export interface GitHubRepo {
  id: number,
  name: string,
  html_url: string,
  description: string,
  fork: boolean,
  forks_count: number,
  stargazers_count: number,
  watchers_count: number,
  pushed_at: string,
  created_at: string,
  updated_at: string,
}

/**
 * GitHub
 */
class GitHub {
  private repos: GitHubRepo[];

  constructor(private userName: string) {
    this.repos = [];
  }

  fetchRepos(): Promise<GitHubRepo[]> {
    return axios({
      // https://developer.github.com/v3/repos/
      url: `https://api.github.com/users/${this.userName}/repos?sort=pushed&per_page=100`,
      adapter: jsonpAdapter,
    }).then(({ data: { data } }) => {
      this.repos = [];
      data.forEach((repo: GitHubRepo) => {
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
