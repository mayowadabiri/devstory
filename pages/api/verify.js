import { verifyToken } from "../../helpers/jwt";

 export default async function verify(req, res) {
    try {
        const token = req.body;
        const verified = await verifyToken(token);
        return res.status(200).json({
            code: 200,
            verified
        })
        
    } catch (error) {
        res.statu(500).json({
            code: 500,
            message: "Pls, login again to continue"
        })
    }

}