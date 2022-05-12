const http = require("https");
http.get(
  "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/README.md",
  (res) => {
    console.log(res.statusCode);
  }
);

// const axios = require("axios");
// axios
//   .get(
//     "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/README.md"
//   )
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res.data);
//     let data = res.data;
//     // res.data.pipe(file);
//   })
//   .catch((err) => {
//     this.log(`${error(`[Error] - ${err}`)}`);
//   });
