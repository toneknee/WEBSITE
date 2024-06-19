import { Button } from "./ui/button";

const About = () => {
  return (
    <>
      <div className="min-h-[45vh] flex items-center justify-between mx-5">
        <div>
          <h1 className="font-bold text-6xl my-5">Hi,</h1>
          <p className="text-2xl">
            I&apos;m Tony Trinh, a recent Computer Science graduate from the
            University of Regina. With a background in technical support,
            I&apos;ve developed a passion for tackling tough problems, which
            I&apos;m eager to apply to a software career. My portfolio showcases
            my skills and projects, demonstrating my ability to find creative
            solutions. If you&apos;re seeking a resourceful full-stack developer
            who thrives on challenges, let&apos;s connect!
          </p>
          <Button className="mt-10">
            <a
              href="public/../Tony_Trinh_2024.pdf"
              download="Tony_Trinh_2024.pdf"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default About;
