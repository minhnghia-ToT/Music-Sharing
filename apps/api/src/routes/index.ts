import { Router } from "express";
import tracks from "./tracks.router";
import artists from "./artists.router";

const r = Router();

r.use("/tracks", tracks);
r.use("/artists", artists);

export default r;
