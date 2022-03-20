import fs from "fs";
import type { NextApiHandler } from "next";
import path from "path";

const handler: NextApiHandler = async (req, res) => {
    const filename = `${req.query.id}.md`;
    const filepath = path.join(process.cwd(), "posts", filename);

    try {
        const file = fs.readFileSync(filepath, "utf-8");
        res.status(200).end(file);
    } catch {
        res.status(404).end();
    }
};

export default handler;
