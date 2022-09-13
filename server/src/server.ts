const express = require("express");

const app = express();

interface Res {
  id: number;
  name: string;
}

app.get(
  "/ads",
  (
    requeste: any,
    response: { json: (arg0: { id: number; name: string }[]) => any }
  ) => {
    return response.json([
      { id: 1, name: "Anuncio 1" },
      { id: 2, name: "Anuncio 2" },
      { id: 3, name: "Anuncio 3" },
    ]);
  }
);

app.listen(3333);
