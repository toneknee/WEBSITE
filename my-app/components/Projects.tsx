import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const work = [
    {
      id: "0",
      imageUrl: "public/../Portfolioproject.PNG",
      description:
        "My portfolio website I developed with React, Next.js and TailWind.css using Shadcn components! I am still working on additional features for this project.",
    },
    {
      id: "1",
      imageUrl: "public/../OpenAI.jpg",
      description:
        "Currently in development, using python and OpenAI's API to create an artificial intelligence application.",
    },
    {
      id: "2",
      imageUrl: "public/../unity.png",
      description:
        "VR Tic-Tac-Toe developed in Unity using C# to manipulating game logic by updating the objects text box when it came into contact with the raycast.",
    },
  ];

  return (
    <div className="flex relative flex-col items-center justify-center my-11">
      <h1 className="font-bold text-6xl my-5">Projects</h1>
      <Carousel className="w-full max-w-xs my-5">
        <CarouselContent>
          {work.map((project) => (
            <CarouselItem key={project.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={project.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
                <p className="mt-4">{project.description}</p>{" "}
                {/* Display project description */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Projects;
