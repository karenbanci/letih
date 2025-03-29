const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/api/contentful", async (req, res) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://graphql.contentful.com/content/v1/spaces/06t7p7prz17d/environments/master",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: {
        query: `yourGraphQLQueryHere`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
