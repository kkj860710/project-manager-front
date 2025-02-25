module.exports = {
    apps : [{
        name: 'project_manager',
        script: "server.js",
        autorestart: true,
        //watch: true, // 프로젝트가 리스타트되거나 파일이 체인지 될경우를 와칭시켜줌
        instances: 1, // 인스턴스를 일단 4개정도 띄운다.
        exec_mode: "cluster", // 실행모드 cluster로 명시하지 않으면 기본 fork모드로 실행됨
        wait_ready: true, // Node앱으로 부터 앱이 실행되었다는 신호를 받기위해 기다리겠다는 것 "ready"
        listen_timeout: 50000, // 앱 실행신호까지 기다릴 최대시간 ms단위 50초
        kill_timeout: 5000, //새로운 프로세스 실행이 완료된 후 예전 프로세스를 교체하기까지 기다릴 시간  5초
        max_memory_restart: "1G", // 프로그램의 메모리 크기가 일정 크기 이상이 되면 재시작시킴
        env_development: {
            PORT: 3000,
            NODE_ENV: 'development'
        },
        env_stage: {
            PORT: 3000,
            NODE_ENV: 'stage'
        },
        env_production: {
            PORT: 3000,
            NODE_ENV: 'production'
        },
        output: './logs/pm2/freetelus_crm.log',
        error: './logs/pm2/freetelus_crm_error.log'
    }]
};
