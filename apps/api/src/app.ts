import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// Lấy danh sách bài hát
app.get("/v1/tracks", async (req, res) => {
  const tracks = await prisma.track.findMany({
    include: { artist: true, album: true },
  });
  res.json(tracks);
});

// Lấy danh sách nghệ sĩ
app.get("/v1/artists", async (req, res) => {
  const artists = await prisma.artist.findMany();
  res.json(artists);
});

export default app;
