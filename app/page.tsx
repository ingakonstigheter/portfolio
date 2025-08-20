import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid justify-center">
      <h2 className="text-center text-4xl">This page is under construction!</h2>
      <section className="">
        <article className="text-center md:text-left mt-10 max-w-4/6 md:max-w-100 mx-auto">
          <h2 className="text-2xl ">Hi, I`m Ali</h2>
          <p className="">
            I’m endlessly curious about how economics and technology shape the
            world around us. Whether I’m analyzing market trends or experimenting
            with code, I enjoy turning complex ideas into something simple,
            useful, and impactful.
          </p>
        </article>
        <article className="text-center md:text-left mt-10 max-w-4/6 md:max-w-100 mx-auto">
          <h2 className="text-2xl">About me</h2>
          <p className="">
            Curious by nature, I thrive at the crossroads of finance, economics,
            and IT. I enjoy translating numbers into stories and code into tools
            that make a difference.
          </p>
        </article>
      </section>
    </div>
  );
}
