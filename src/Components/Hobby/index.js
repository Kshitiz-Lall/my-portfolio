import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

const hobbies = [
  {
    title: "Gaming Enthusiast",
    description:
      "As a passionate gaming enthusiast, I find solace in immersing myself in captivating virtual worlds. From conquering challenging quests to connecting with online communities, gaming offers me the perfect escape into exciting realms of adventure and skill. Whether it's strategic decision-making or navigating immersive RPG landscapes, every gaming session is a journey filled with excitement and camaraderie.",
    imageSource: "https://source.unsplash.com/featured/?gaming",
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
    imageSource: "https://source.unsplash.com/featured/?coding",
  },
  {
    title: "Tech Explorer",
    description:
      "Being a tech explorer, I stay on the cutting edge of technology by delving into the latest gadgets, software, and innovations. From exploring virtual reality experiences to experimenting with new programming tools, I indulge my curiosity in the ever-evolving tech landscape. This journey of exploration allows me to embrace the future and stay informed about the transformative power of technology in our daily lives.",
    imageSource: "https://source.unsplash.com/featured/?technology",
  },
  {
    title: "Game Development",
    description:
      "In the realm of game development, I combine my love for gaming and coding. Creating my own digital worlds, designing characters, and developing gameplay mechanics are not just tasks; they're a rewarding way to merge creativity and technical skills. Each line of code is a brushstroke, and every interactive element is a piece of the immersive experience I bring to life through the fascinating world of game development.",
    imageSource:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anime and Manga Enthusiast",
    description:
      "As an anime and manga enthusiast, I dive into the rich storytelling and unique art styles of Japanese animation and comics. Exploring diverse genres, following captivating narratives, and connecting with a vibrant community of enthusiasts who share my passion is an immersive experience. Each anime and manga adventure becomes a personal journey, filled with creativity, emotion, and the boundless imagination of this captivating art form.",
    imageSource: "https://source.unsplash.com/featured/?anime",
  },
];

const Hobby = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Hobbies
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
                    ? `${project.description.substring(0, 500)}...`
                    : project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hobby;
