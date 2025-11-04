# RESTful API의 정의와 사용 방법
### 1. REST ?
REST(Representational State Transfer)는 2000년 로이 필딩(Roy Fielding)의 박사 논문에서 처음 제시된 아키텍처 스타일이다.  
REST는 웹의 기본 원리를 따르며, 자원을 URI로 구분하고, 자원에 대한 행위를 HTTP 메서드(GET, POST, PUT, DELETE 등)로 표현한다.

즉, REST는 "자원 중심(Resource-Oriented)" 접근 방식이며, 이를 기반으로 설계된 API를 **RESTful API**라고 한다.

### 2. RESTful API의 주요 특징
- **무상태성(Stateless)**: 서버는 클라이언트의 상태를 저장하지 않는다.  
- **일관된 인터페이스(Uniform Interface)**: HTTP 표준을 따르며 일관된 요청/응답 구조를 갖는다.  
- **캐시 처리(Cacheable)**: 응답 결과를 캐시하여 성능을 향상시킬 수 있다.  
- **클라이언트-서버 구조(Client-Server)**: 클라이언트와 서버의 역할이 명확히 분리되어 있다.  
- **계층적 시스템(Layered System)**: 중간 서버(프록시, 게이트웨이 등)를 통해 구조 확장이 가능하다.

---

## 3. RESTful API의 구성 요소
RESTful API는 다음 세 가지 요소로 구성된다.

1. **자원(Resource)**: URI를 통해 표현되는 데이터나 객체  
   예: `/users`, `/products/1`, `/posts/10/comments`

2. **행위(Verb)**: HTTP 메서드로 자원에 대한 작업을 정의  
   | 메서드 | 설명 |
   |--------|------|
   | GET | 자원 조회 |
   | POST | 자원 생성 |
   | PUT | 자원 전체 수정 |
   | PATCH | 자원 일부 수정 |
   | DELETE | 자원 삭제 |

3. **표현(Representation)**: 자원의 실제 데이터 형태(JSON, XML 등)  
   일반적으로는 JSON이 가장 많이 사용된다.

---

## 4. RESTful API의 사용 방법
### 4.1 요청 예시
```bash
# 사용자 목록 조회 (GET)
GET /users

# 특정 사용자 조회 (GET)
GET /users/5

# 사용자 생성 (POST)
POST /users
Content-Type: application/json

{
  "name": "홍길동",
  "email": "hong@example.com"
}

# 사용자 정보 수정 (PUT)
PUT /users/5
Content-Type: application/json

{
  "name": "홍길동",
  "email": "hong@newmail.com"
}

# 사용자 삭제 (DELETE)
DELETE /users/5
```

### 4.2 응답 예시
```bash
{
  "status": "success",
  "data": {
    "id": 5,
    "name": "홍길동",
    "email": "hong@newmail.com"
  }
}
```

### 4.3 RESTful API 테스트 도구
- Postman: GUI 기반의 대표적인 API 테스트 도구
- cURL: 명령줄에서 간단히 요청을 보낼 수 있는 도구
- Insomnia: 직관적인 UI와 환경 변수 관리 기능이 강점인 도구

## 5. RESTful API 설계 시 주의사항
- 명확한 URI 구조: URI는 자원을 표현해야 하며, 동사를 포함하지 않는 것이 원칙이다.
예) /getUser ❌ → /users ✅
- HTTP 메서드의 일관성 유지: 의미에 맞는 메서드를 사용해야 한다.
- 적절한 응답 코드 사용:
   | 상태코드 | 의미 |
   |--------|------|
   | 200 | 요청 성공 |
   | 201 | 생성 성공 |
   | 400 | 잘못된 요청 |
   | 401 | 인증 실패 |
   | 404 | 자원 없음 |
   | 500 | 서버 오류 |
