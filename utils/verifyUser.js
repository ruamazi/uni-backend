import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const { access_token } = req.cookies;
  console.log(access_token);
  if (!access_token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(access_token, process.env.SEC, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = user;
    next();
  });
};
