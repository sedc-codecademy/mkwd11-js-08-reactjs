import Link from "next/link";

export const metadata = {
  title: "About Ivo Kostovski",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <h1>About Layout</h1>
      <Link href="/">Home</Link>
      {children}
    </div>
  );
};

export default AboutLayout;
