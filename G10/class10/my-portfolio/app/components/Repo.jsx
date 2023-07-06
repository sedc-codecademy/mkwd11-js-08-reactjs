async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/ivokostovski/${name}`,
    {
      next: {
        revalidate: 600,
      },
    }
  );

  await new Promise(resolve => setTimeout(resolve, 2000));

  const repoInfo = await response.json();
  return repoInfo;
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
};

export default Repo;
