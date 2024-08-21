const express = require('express');
const app = express();

// 将 public 文件夹下的内容作为静态资源进行托管
app.use(express.static('public'));

const port = 80;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
