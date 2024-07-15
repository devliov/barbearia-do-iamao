import {
  ProjectContainer,
  ProjectItem,
  ImageSlider,
  ImageContainer,
} from "./styles";
import { projectItems } from "./data";

export function Projects() {
  return (
    <ProjectContainer id="works">
      <h2>Trabalhos</h2>
      {projectItems.map((item) => (
        <ProjectItem key={item.id}>
          <div>
            <h3>{item.professionalName}</h3>
          </div>
          <ImageSlider>
            {item.images.map((image, index) => (
              <ImageContainer key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </ImageContainer>
            ))}
          </ImageSlider>
        </ProjectItem>
      ))}
    </ProjectContainer>
  );
}
