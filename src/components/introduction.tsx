import React from "react";

const IntroductionComponent = ({ children }: any) => {
  return (
    <div className="sm:px-24 ml-4 mr-4 grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row justify-center place-items-center gap-y-16">
      <div className="col-span-1 inline-flex row-start-1 col-start-2 justify-center">
        <h1 className="font-bold text-xl">MASIPHUMELELE</h1>
        <h1 className="text-xl"> - through the struggle we rise</h1>
      </div>
      <div className="col-span-1 inline-flex row-start-2 col-start-2 justify-center">
        <p className="text-lg">
          MASIPHUMELELE—through the struggles we rise is our youth-led and
          community driven storytelling project. Our project seeks to retell and
          reframe the story of Masiphumelele, which for so long has been written
          by outsiders. We have done so by challenging the “single-story”
          stereotypes that dominate the narrative around township living (the
          sensationalized depiction of poverty, violence and suffering). Our
          project is a radical shift from the status quo to a more nuanced,
          critical, dignified, celebratory, and honest depiction of life in
          Masiphumelele through vibrant photography and storytelling. We
          understand that underrepresentation often leads to misrepresentations
          and to narrate one’s story is to hold agency and power. By telling our
          own stories we also aim to contribute to Masiphumelele’s historical
          archive for the youth and future generations.
        </p>
      </div>
    </div>
  );
};

export default IntroductionComponent;
