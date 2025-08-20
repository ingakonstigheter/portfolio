import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid justify-center">
      <h2 className="text-center text-4xl">This page is under construction!</h2>
      <article className="text-center mt-10">
        <h2 className="text-center text-2xl ">About me</h2>
        <p className="max-w-4/6 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          esse labore impedit obcaecati aut eum voluptates reiciendis iste
          possimus veritatis, incidunt quisquam molestiae vero! Perspiciatis
          officiis quod quisquam ex at!
        </p>
      </article>
      <article className="text-center">
        <h2 className="text-center text-2xl ">Latest projects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          esse labore impedit obcaecati aut eum voluptates reiciendis iste
          possimus veritatis, incidunt quisquam molestiae vero! Perspiciatis
          officiis quod quisquam ex at!
        </p>
      </article>
    </div>
  );
}
