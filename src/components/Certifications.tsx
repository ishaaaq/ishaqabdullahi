import Heading from "./Heading";
import MouseScroll from "./MouseScroll";

const certs = [
  {
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/f26ff8aa5ae1",
  },
  {
    title: "React Frontend Developer",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/fdf94765b461",
  },
    {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    link: "ttps://www.hackerrank.com/certificates/d843639688d3",
  },
];

export default function Certifications() {
  return (   
    <section className="p-10 bg-[url('/images/about-me.png')] w-full bg-cover bg-center pt-[3rem]">
        <MouseScroll/>
      <Heading title="Certifications" subtitle="I am certified on the following"/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certs.map((c) => (
          <div
            key={c.title}
            className="bg-brand2 rounded-xl shadow-md p-6 flex flex-col justify-between 
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-gray-600 text-sm">{c.issuer}</p>
            </div>
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:underline font-medium"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
