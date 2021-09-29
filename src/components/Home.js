import bg from '../assets/images/bg.jpg';
function Home() {
  return (
    <div className="relative">
      <img
        className="mx-auto bg-contain bg-no-repeat bg-center h-screen"
        src={bg}
        alt="Background"
      />
      <div className="absolute top-1/4 w-full text-center bg-">
        <div className="mx-auto border-2 w-9/12 md:w-6/12 bg-black opacity-70 text-white">
          <h1 className="font-bold md:font-semibold text-lg md:text-3xl lg:text-5xl px-4 pt-4">
            Muhammad Sohail Shams
          </h1>
          <p className="p-4 md:text-xl md:font-semibold">
            I am a passionate Software Developer with expertise in developing
            mobile responsive web applications. I have a keen interest in
            continually learn and improve my skills in creating high-quality web
            applications and writing clean code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
