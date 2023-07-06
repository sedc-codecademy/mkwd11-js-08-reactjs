import Link from "next/link";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/ivokostovski/repos"
  );

  await new Promise(resolve => setTimeout(resolve, 1000));

  const repos = await response.json();
  return repos;
}

const ProjectsPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link href={`/projects/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div>
                <span>Stars: {repo.stargazers_count} </span>
                <span>Forks: {repo.forks_count} </span>
                <span>Watchers: {repo.watchers_count}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
