var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root'
});

// GET
router.get('/', function(req, res, next) {
  // ToDo: ControllerとModelに処理を移す（一旦動けばいいやでここに書いてしまいました）
  connection.query('SELECT * FROM task.tasks;', function (error, results, fields) {
    if (error) res.send(error);
    res.json(results);
  });
});

router.get('/', function(req, res, next) {
  // ToDo: idはURLに含めて渡す
  connection.query('SELECT * FROM task.tasks WHERE id=(?);', req.body.id, function (error, results, fields) {
    if (error) res.send(error);
    res.json(results);
  });
});

// POST
router.post('/', function(req, res, next) {
  // ToDo: PUTとの違いを調べて実装
});

// PUT
router.put('/', function(req, res, next) {
  // ToDo: upsert形式にする
  connection.query("INSERT INTO task.tasks (name) VALUES (?);", req.body.name, function (error, results, fields) {
    if (error) res.send(error);
    // ToDo: おそらくPUTで以下の取得処理はやらない？更新したレコードだけ返す？調査
    connection.query('SELECT * FROM task.tasks;', function (error, results, fields) {
      if (error) res.send(error);
      res.json(results);
    });
  });

});

// DELETE
router.delete('/', function(req, res, next) {
  connection.query("DELETE task.tasks WHERE id=(?);", req.body.id, function (error, results, fields) {
    if (error) res.send(error);
    res.json({ message: "Task successfully deleted" });
  });
});

module.exports = router;
