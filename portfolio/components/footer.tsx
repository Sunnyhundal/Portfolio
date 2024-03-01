export default function Footer() {
  return (
    <footer className="z-[999] relative">
      <div className="flex flex-col justify-between  bg-black w-full p-[5rem] ">
        <div className="flex flex-row item-start justify-center">
          <p className="text-white">Sunny Hundal</p>
          <p className="text-white"></p>
        </div>
        <div className="flex flex-row item-start justify-center">
          <p className="text-white"> </p>

          <p className="text-white">
            Please feel free to connect with me on my other socials
          </p>

          <div className="flex flex-row item-start justify-center">
            <a
              href="https://www.linkedin.com/in/sunny-hundal-1b4a2b1b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://unpkg.com/simple-icons@v10/icons/linkedin.svg"
                alt="linkedin"
                className="w-8 h-8 bg-white rounded-full border-3 border-black"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="https://unpkg.com/simple-icons@v10/icons/github.svg"
                alt="github"
                className="w-8 h-8 bg-white rounded-full border-3 border-black"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="https://unpkg.com/simple-icons@v10/icons/twitter.svg"
                alt="twitter"
                className="w-8 h-8 bg-white rounded-full border-3 border-black"
              />
            </a>

          <p className="text-white">Please feel free to connect with me on my other socials</p>
          

          </div>
        </div>
      </div>
    </footer>
  );
}
