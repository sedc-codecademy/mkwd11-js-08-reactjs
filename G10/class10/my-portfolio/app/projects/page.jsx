async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/ivokostovski/repos"
  );

  const repos = await response.json();
  return repos;
}

const ProjectsPage = async () => {
  const repos = await fetchRepos();
  console.log(repos);

  return (
    <div>
      <h2>Repositories</h2>
    </div>
  );
};

export default ProjectsPage;
