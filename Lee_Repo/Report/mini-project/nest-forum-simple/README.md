# 🧱 NestJS + MongoDB 게시판 만들기

인증/로그인 기능 없이 **CRUD 중심의 핵심 흐름**에 따라  
**서버 렌더링(View Template)** 방식으로 웹 게시판을 구현합니다.

---

## 📸 예시 화면

<img width="1230" height="502" alt="posts" src="https://github.com/user-attachments/assets/4c84ae07-6f6a-4b5c-8568-9266c7210faf" />
<img width="973" height="636" alt="2" src="https://github.com/user-attachments/assets/7c06d7a1-93c8-4563-8c7d-ac7b2b5dd215" />
<img width="1020" height="641" alt="3" src="https://github.com/user-attachments/assets/08c74d71-f79e-4aed-90c8-be3449e1cab7" />

---

## 🏗️ 구현 요구사항

### 1️⃣ 게시글 기능

#### 📋 목록 페이지 (List)
- 모든 게시글을 **최신순**으로 표시  
- **제목 클릭 시 상세 페이지로 이동**  
- **제목 검색 기능** 지원 (`?search=` 파라미터)  
- **페이지네이션 기능** 지원 (`?page=`, `?limit=`)

#### 📝 작성 (Create)
- 목록 하단에 새 글 작성 폼 제공 (제목, 내용 입력 후 등록)

#### 🔍 상세 보기 (Detail)
- 제목, 내용, 작성일 표시

#### ✏️ 수정 (Update)
- 상세 페이지 하단에서 제목/내용 수정 가능

#### ❌ 삭제 (Delete)
- 게시글 삭제 버튼 제공 (삭제 후 목록으로 이동)

---

### 2️⃣ 댓글 기능 (추가 구현)

#### 💬 댓글 작성
- 상세 페이지 하단에서 댓글 입력 가능 (임의 닉네임 입력)

#### 📄 댓글 목록
- 등록된 댓글 목록을 시간순으로 표시

#### 🗑️ 댓글 삭제
- 각 댓글 옆에 삭제 버튼 표시

---

## 📁 폴더 구조 예시

src/
├─ main.ts
├─ app.module.ts
└─ posts/
├─ posts.module.ts
├─ posts.controller.ts
├─ posts.service.ts
├─ schemas/
│ └─ post.schema.ts
└─ dto/
├─ create-post.dto.ts
├─ update-post.dto.ts
└─ create-comment.dto.ts

views/
├─ layouts/
│ └─ main.hbs
└─ posts/
├─ list.hbs
└─ detail.hbs

package.json

---

## ⚙️ 개발 환경 설정

### 1️⃣ 프로젝트 생성

```bash
npm i -g @nestjs/cli
nest new nest-forum-simple
cd nest-forum-simple
```

### 2️⃣ 의존성 설치
```bash
npm i @nestjs/mongoose mongoose
npm i hbs
npm i dotenv
```

### 환경변수 설정 (.env)
```bash
MONGODB_URI=mongodb://localhost:27017/nest-forum-simple
PORT=3000
```

### 서버 실행
```bash
npm run start:dev
http://localhost:3000/posts
```

---

### 🧠 구현 순서 제안

1. Nest 프로젝트 생성 및 Mongo 연결 (app.module.ts 구성) 
2. Post 스키마 및 CRUD API 작성 (Service / Controller 구조)
3. Handlebars 템플릿 구성 — 목록·상세 페이지 구현 (views/) 
4. 페이지네이션 & 검색 기능 추가 (skip, limit, regex 활용) 
5. 상세 페이지에서 수정/삭제 기능 구현 (Form 방식으로 처리)
6. (선택) 댓글 기능 추가 (서브도큐먼트 구조)
