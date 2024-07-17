import {
  ProjectContainer,
  ProjectItem,
  ImageSlider,
  ImageContainer,
} from "./styles";
import { projectItems } from "./data";
import { Dialog, DialogContent } from "@mui/material";
import { useState } from "react";

export function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClickOpen = (image: string) => {
    // console.log("Image clicked:", image);
    setSelectedImage(image);
    setOpen(true);
    // console.log("Dialog open:", open);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <ProjectContainer id="trabalhos">
      <h2>Trabalhos</h2>
      {projectItems.map((item) => (
        <ProjectItem key={item.id}>
          <div>
            <h3>{item.professionalName}</h3>
          </div>
          <ImageSlider>
            {item.images.map((image, index) => (
              <ImageContainer
                key={index}
                onClick={() => handleClickOpen(image)}
              >
                <img src={image} alt={`Slide ${index}`} />
              </ImageContainer>
            ))}
          </ImageSlider>
        </ProjectItem>
      ))}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent style={{ backgroundColor: "#29292E" }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "250px", height: "400px" }}
          />
        </DialogContent>
      </Dialog>
    </ProjectContainer>
  );
}
