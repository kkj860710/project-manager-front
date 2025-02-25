const express = require("express");
const next = require("next");

// 데브 상태냐 아니냐?
const dev = process.env.NODE_ENV !== "production";

// 포트가 배포상태일 경우 3000 아닐경우 정해준대로 ㄱ
const port = parseInt(process.env.PORT, 10) || 3000;

// next 앱 데브냐 아니냐로 next가 실행시킬 방향을 정한다.
const nextApp = next({ dev });


// next의 리퀘스트 핸들러
const handle = nextApp.getRequestHandler();


// next js 가 ssr을 진행하기전에 준비과정
nextApp.prepare().then(() => {
    // 서버
    const server = express();
    // SIGNIT 시그널을 받았는지 여부, 앱이 곧 종료 될 것임을 의미함.
    let isNextAppGoingToBeClose = false;
    server.use((req, res, next) => {
        if (isNextAppGoingToBeClose) {
            // 앱이곧 종료될 경우
            // 커넥션을 끊어버린다
            res.set("Connection", "close");
        }
        // 그리고 넘김
        next();
    });
    // test
    // server.get("/a", (req, res) => {
    //   return nextApp.render(req, res, "/a", req.query);
    // });
    // server.get("/b", (req, res) => {
    //   // return res.json({ asd: 123 });
    //   return nextApp.render(req, res, "/b", req.query);
    // });
    // server.get("/posts/:id", (req, res) => {
    //   console.log(req.params);
    //   return nextApp.render(req, res, "/posts", { id: req.params.id });
    // });
    // server.get('/', function(req, res) {
    //   res.send('Hello World!')
    // })
    // 위에 요청을 제외한 요청들은 next requestHandler에서 관리한다.
    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, function() {
        process.send("ready")
        console.log(`application is listening on port ${port}...`)
    })

    process.on(`SIGINT`, function () {
        isNextAppGoingToBeClose = true
        server.close(function () {
            console.log(`server closed`)
            process.exit(0)
        })


        // const listeningServer = server.listen(port, (err) => {
        //   if (err) throw err;
        //   console.log(`서버켜짐 port : ${port} state : ${process.env.NODE_ENV}`);
        //
        //   // 서버가 켜지면 pm2에게 구동이 완료됨을 전달
        //   if (process.send) {
        //     process.send("ready");
        //     console.log(`sent to pm2 with ready message at ${new Date()}`);
        //   }
        // });
        // process.on("SIGINT", () => {
        //   console.log("앱이 곧 종료됩니다. received signit signal");
        //
        //   // 앱이 곧 꺼지개 만들고 서버와의 커넥션도 닫게만든다
        //   isNextAppGoingToBeClose = true;
        //
        //   // pm2에서 _old_N 프로세스에서 종료 신호가 들어오면 서버를 종료한다.
        //   listeningServer.close((err) => {
        //     console.log("server closed");
        //     process.exit(err ? 1 : 0);
        //   });
    });
});
