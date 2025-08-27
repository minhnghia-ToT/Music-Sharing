import { Router } from "express";
import { prisma } from "../lib/prisma";

const r = Router();

// GET /v1/tracks
r.get("/", async (_req, res) => {
  const tracks = await prisma.track.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
    include: { artist: true }
  });
  res.json(tracks);
});

// POST /v1/tracks
r.post("/", async (req, res) => {
  const { artistId, title } = req.body ?? {};
  if (!artistId || !title) {
    return res.status(400).json({ message: "artistId & title required" });
  }
  const track = await prisma.track.create({
    data: { artistId, title, status: "DRAFT" }
  });
  res.status(201).json(track);
});

export default r;
