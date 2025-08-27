import app from "./app";
import { env } from "./lib/env";

const PORT = Number(env.PORT);

app.listen(PORT, () => {
  console.log(`🚀 API server listening on http://localhost:${PORT}`);
});
