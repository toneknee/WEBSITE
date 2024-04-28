import { IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiTailwindcss, SiCsharp } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPhp, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { Card, CardDescription, CardFooter, CardTitle } from "./ui/card";

const Skills = () => {
  const languages = [
    {
      label: <IoLogoJavascript />,
      text: "Javascript",
      id: "0",
    },
    {
      label: <SiCplusplus />,
      text: "C++",
      id: "1",
    },
    {
      label: <BsFiletypeSql />,
      text: "SQL",
      id: "2",
    },
    {
      label: <SiCsharp />,
      text: "C#",
      id: "3",
    },
    {
      label: <FaPhp />,
      text: "PHP",
      id: "4",
    },
    {
      label: <FaHtml5 />,
      text: "HTML",
      id: "5",
    },
    {
      label: <FaPython />,
      text: "Python",
      id: "6",
    },
    {
      label: <FaReact />,
      text: "React",
      id: "7",
    },
    {
      label: <SiTailwindcss />,
      text: "Tailwind CSS",
      id: "8",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center my-11 relative">
        <h1 className="font-bold text-6xl my-5 ">Skills</h1>
        <div className="grid grid-cols-3 gap-8 my-5 sm: ml-4 mr-4">
          {languages.map((language) => (
            <Card
              key={language.id}
              className="flex flex-col justify-center items-center py-7 px-8"
            >
              <CardTitle className="text-center scale-150">
                {language.label}
              </CardTitle>
              <CardDescription className="text-center my-5 font-bold">
                {language.text}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
