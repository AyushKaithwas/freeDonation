const express = require("express");
const cors = require("cors");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
const app = express();

const jwtCheck = auth({
  audience: "https://sampleAPI.com",
  issuerBaseURL: "https://dev-wewk8tvtqd22qm4z.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

app.use(cors(), jwtCheck);

app.get("/protected", jwtCheck, (req, res) => {
  res.send("hellsadaso");
});

app.listen(4000, () => console.log("server on port 4000"));
