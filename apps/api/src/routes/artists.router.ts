import { Router } from "express";
import { prisma } from "../lib/prisma";

const r = Router();

// GET /v1/artists
r.get("/", async (_req, res) => {
  const artists = await prisma.artist.findMany({
    orderBy: { stageName: "asc" }
  });
  res.json(artists);
});

// POST /v1/artists
r.post("/", async (req, res) => {
  const { userId, stageName } = req.body ?? {};
  if (!userId || !stageName) {
    return res.status(400).json({ message: "userId & stageName required" });
  }
  const artist = await prisma.artist.create({
    data: { userId, stageName }
  });
  res.status(201).json(artist);
});

export default r;
