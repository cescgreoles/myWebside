import { CV } from "../utils/cv";
import { MdOutlineWork } from "react-icons/md";

const Work = () => {
  return (
    <div className="experience-block">
      <p>
        <MdOutlineWork className="icon-2" />
      </p>
      {CV.experience.map((info, index) => {
        return (
          <div className="experience" key={index}>
            <h2 className="experience-square">{info.name}</h2>
            <p className="experience-square">{info.date}</p>
            <p className="experience-square">{info.where}</p>
            <p className="experience-square">{info.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
