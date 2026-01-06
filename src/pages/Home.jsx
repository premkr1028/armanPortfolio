import Nav from "../components/Nav.jsx";
import Works from "../slides/Works.jsx";
import Contact from "../slides/Contact.jsx";

const Home = () => {
  return (
    <>
      <div className="main w-screen min-h-screen overflow-hidden" id="home">
        <Nav />

        {/* HERO SECTION */}
        <div className="w-screen min-h-[600px] flex flex-col lg:flex-row items-center">

          {/* LEFT CONTENT */}
          <div className="taggg w-full lg:w-1/3 h-full flex flex-col justify-center items-center px-6 lg:pl-20 text-center lg:text-left">
            <div className="flex flex-col">
              <div className="availWork px-[10px] py-[4px] mb-2">
                • Available for work
              </div>

              <h1 className="text-[42px] lg:text-[80px] leading-[1] mt-4">
                "I'm <span className="text-red-600">Arman</span>,
              </h1>

              <h1 className="text-[22px] lg:text-[40px]">an Editor"</h1>

              <p className="text-[14px] lg:text-[15px] mt-6">
                2 years of experience transforming raw footage
              </p>
              <p className="text-[14px] lg:text-[15px]">
                into compelling, high-engagement stories.
              </p>

              {/* TOOLS + CONTACT */}
              <div className="w-full max-w-[320px] lg:max-w-none flex justify-between items-center bg-red-600 rounded-full mt-4 p-2">
                <div className="editingTools flex items-center">
                  <img
                    className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]"
                    src="\images\pr.jpg"
                    alt="Premiere Pro"
                  />
                  <img
                    className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]"
                    src="\images\ae.jpg"
                    alt="After Effects"
                  />
                </div>
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arman3ditz@gmail.com"
                  className="inline-block border border-white rounded-full px-3 py-1 text-sm no-underline z-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT WORKS */}
          <div className="hWork relative w-full lg:w-2/3 flex flex-col items-center lg:items-end gap-4 p-4 lg:px-20 lg:py-10">
            <h1 className="text-xl lg:text-2xl font-bold mb-4 workText">
              Works
            </h1>

            {/* Decorative elements – desktop only */}
            <div className="drawnCircle hidden lg:block absolute w-[100px] top-7 right-20">
              <img src="/images/whiteCircle.png" alt="" />
            </div>

            <div className="absolute top-6 hidden lg:block">
              <div className="line absolute h-[32px] right-[50px] top-[49px] w-[2px]" />
              <div className="line absolute h-[2px] right-[50px] top-[67px] w-[420px]" />
              <div className="line absolute h-[13px] right-[285px] top-[67px] w-[2px]" />
              <div className="line absolute h-[12.5px] right-[470px] top-[67.4px] w-[2px]" />
            </div>

            {/* SHORT VIDEOS */}
            <div className="vids w-full flex gap-4 overflow-x-auto lg:overflow-visible justify-start lg:justify-end">
              {[
                "/videos/0105.mp4",
                "/videos/0105(1).mp4",
                "/videos/0105(2).mp4",
              ].map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden h-[240px] lg:h-[300px] w-[135px] lg:w-[168.75px] bg-black rounded-xl"
                >
                  <video controls src={src} />
                </div>
              ))}
            </div>

            {/* LONG VIDEO */}
            <div className="longVideo">
              <div className="h-[140px] lg:h-[168.75px] w-[260px] lg:w-[300px] bg-black rounded-xl overflow-hidden">
                <video
                  controls
                  src="/videos/0105(3).mp4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DOWN ARROW */}
        <div className="downArrow flex w-full justify-center my-8">
          <div className="circle w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] border-[3px] lg:border-[4px] border-white rounded-full p-3">
            <img src="\images\downArr.png" alt="Scroll Down" />
          </div>
        </div>
      </div>

      <Works />
      <Contact />
    </>
  );
};

export default Home;
