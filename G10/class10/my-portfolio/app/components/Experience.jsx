async function fetchExperience() {
  const response = await fetch("http://localhost:3000/api/experience");
  const experience = await response.json();
  return experience;
}

const Experience = async () => {
  const experience = await fetchExperience();
  console.log(experience);

  return (
    <div>
      <h2>Experience</h2>
      {experience.map(exp => (
        <div key={exp.id}>
          <h3>{exp.position}</h3>
          <h4>{exp.company}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Experience;
