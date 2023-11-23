import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const hobbies = [
  {
    title: "Gaming Enthusiast",
    description:
      "As a passionate gaming enthusiast, I find solace in immersing myself in captivating virtual worlds. From conquering challenging quests to connecting with online communities, gaming offers me the perfect escape into exciting realms of adventure and skill. Whether it's strategic decision-making or navigating immersive RPG landscapes, every gaming session is a journey filled with excitement and camaraderie.",
    imageSource:
      "https://images.unsplash.com/photo-1632749042303-7f7a18ed6ff0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Movie Buff",
    description:
      "Being a dedicated movie buff, I embark on cinematic journeys spanning various genres. From classic films to indie gems and the latest blockbusters, I cherish the art of storytelling through the lens of my favorite filmmakers. Enjoying these cinematic masterpieces from the comfort of my own space allows me to immerse myself in different worlds, characters, and narratives, creating a unique and enriching experience each time.",
    imageSource: "https://source.unsplash.com/featured/?movie",
  },
  {
    title: "Coding Connoisseur",
    description:
      "As a coding connoisseur, I unleash my creativity and problem-solving skills through the art of coding. Whether I'm developing software, building websites, or exploring new programming languages, coding provides me with a fulfilling outlet for my technical prowess and innovative ideas. It's not just a skill; it's a journey of continuous learning and self-expression in the ever-evolving world of technology.",
    imageSource:
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tech Explorer",
    description:
      "Being a tech explorer, I stay on the cutting edge of technology by delving into the latest gadgets, software, and innovations. From exploring virtual reality experiences to experimenting with new programming tools, I indulge my curiosity in the ever-evolving tech landscape. This journey of exploration allows me to embrace the future and stay informed about the transformative power of technology in our daily lives.",
    imageSource:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Game Development",
    description:
      "In the realm of game development, I combine my love for gaming and coding. Creating my own digital worlds, designing characters, and developing gameplay mechanics are not just tasks; they're a rewarding way to merge creativity and technical skills. Each line of code is a brushstroke, and every interactive element is a piece of the immersive experience I bring to life through the fascinating world of game development.",
    imageSource:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anime Enthusiast",
    description:
      "As an anime and manga enthusiast, I dive into the rich storytelling and unique art styles of Japanese animation and comics. Exploring diverse genres, following captivating narratives, and connecting with a vibrant community of enthusiasts who share my passion is an immersive experience. Each anime and manga adventure becomes a personal journey, filled with creativity, emotion, and the boundless imagination of this captivating art form.",
    imageSource:
      "https://images.unsplash.com/photo-1531501410720-c8d437636169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Video Editing",
    description:
      "Embark on a visual journey with my expertise in video editing. Transform raw footage into cinematic masterpieces through meticulous editing, seamless transitions, and captivating effects. Whether it's a compelling narrative, a dynamic promotional video, or a memorable event, I bring your vision to life. With a keen eye for detail and a passion for storytelling, I enhance the visual appeal of your videos, ensuring they leave a lasting impact. Let's collaborate to create videos that not only meet but exceed your expectations. Your story deserves to be told with creativity and precision.",
    imageSource:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Photo Editing",
    description:
      "Step into a world where each photograph is a canvas waiting to be perfected. With my skills in photo editing, I breathe life into your images, enhancing colors, refining details, and creating a visual narrative that resonates. From professional portraits to breathtaking landscapes, every photo receives meticulous attention to ensure it tells a story worth remembering. Whether you seek polished images for personal memories or professional portfolios, I bring out the best in your photographs. Let's collaborate to turn your moments into timeless visual treasures.",
    imageSource:
      "https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Hobby = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const handleOpen = (title, description) => {
    setModalContent({ title, description });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {" "}
        My Hobbies{" "}
      </Typography>
      <Grid container spacing={3}>
        {hobbies.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <img
                src={project.imageSource}
                alt={project.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">
                  {project.description.length > 20
                    ? `${project.description.substring(0, 50)}...`
                    : project.description}
                </Typography>
                <Button
                  onClick={() => handleOpen(project.title, project.description)}
                  color="secondary"
                  size="medium"
                  variant="outlined"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalContent.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent.description}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Hobby;
