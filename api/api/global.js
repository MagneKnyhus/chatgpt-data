import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "GLOBAL.txt"); // filen vi laster opp i neste steg
    const content = fs.readFileSync(filePath, "utf8");
    res.status(200).send(content);
  } catch (e) {
    res.status(500).json({ error: "GLOBAL.txt ikke funnet i repoet." });
  }
}
