const express = require("express");
const app = express();
const mysql = require("mysql");

// bodyParsers는 express에 기본 포함이 됩니다.더이상 사용하지 않습니다
// const bodyParsers = require("body-parser");

//파일 업로드
const fileupload = require("express-fileupload");

// 서버포트
const port = 3100;
const db = require("../server/config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//서버 작동 test(완료후 주석처리)
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "hello express" });
// });

app.get("/api/customers", (req, res) => {
  res.send([]);
});

//port 주소 설정
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
