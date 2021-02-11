import { verifyToken } from "../../helpers/jwt";

export default async function verify(req, res) {
  try {
    if (req.method === "POST") {
      const { token } = req.body;
        const verified = await verifyToken(token);
      return res.status(200).json({
        code: 200,
        verified,
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      verified: false,
    });
  }
}
