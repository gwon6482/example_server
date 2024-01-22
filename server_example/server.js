const http = require('http');
// 로컬 호스트안에 생성되어있음

http
    .createServer((request, response)=>{
    // 여기에 서버의 동작
    /**
     * 요청을 받음 : request
     * 
     * 응답을 해줌 : response
     */
    if (request.url === '/'){
        console.log("요청이 도착하였습니다.")
        response.write(
            '<h1> Hello World </h1>'
        );
        response.end();
    }
    else {
        response.end('ok');
    }
    })
    .listen(8080, ()=>{
        console.log("8080번 포트에서 서버가 대기 중입니다.")
    })

