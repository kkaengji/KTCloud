document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  initializeDummyPosts(); // 더미 데이터 생성 함수 호출

  if (currentPath === "index.html") {
    loadPosts();
    const postsPerPageSelect = document.getElementById("posts-per-page");
    if (postsPerPageSelect) {
      postsPerPageSelect.addEventListener("change", (e) => {
        localStorage.setItem("postsPerPage", e.target.value);
        // 페이지네이션 설정을 변경하면 1페이지로 이동
        window.location.href = "index.html";
      });
    }
  } else if (currentPath === "write.html") {
    const writeForm = document.querySelector(".write-form");
    if (writeForm) {
      writeForm.addEventListener("submit", handleWriteSubmit);
    }
  } else if (currentPath === "view.html") {
    loadPostView();
  }
});

// 게시글이 없을 경우 더미 데이터 생성
function initializeDummyPosts() {
  const posts = getPosts();
  if (posts.length === 0) {
    const dummyPosts = [];
    const authors = [
      "핑크공주",
      "코딩요정",
      "햇살가득",
      "새내기",
      "개발자",
      "디자이너",
    ];

    for (let i = 1; i <= 25; i++) {
      const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
      const randomViews = Math.floor(Math.random() * 500);
      const randomDate = new Date();
      randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30));
      const formattedDate = randomDate
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\. /g, ".")
        .slice(0, -1);

      dummyPosts.push({
        id: i,
        title: `더미 게시글입니다. (${i})`,
        author: randomAuthor,
        content: `이것은 ${i}번째 더미 게시글의 내용입니다. \n\n다양한 내용이 여기에 들어갈 수 있습니다.`,
        date: formattedDate,
        views: randomViews,
      });
    }
    savePosts(dummyPosts);
  }
}

// 게시글 데이터 관리 (localStorage)
function getPosts() {
  const posts = localStorage.getItem("posts");
  return posts ? JSON.parse(posts) : [];
}

function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// index.html: 게시글 목록 불러오기
function loadPosts() {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page") || "1", 10);
  // localStorage에서 설정을 가져오거나 기본값 5를 사용
  const postsPerPage = parseInt(
    localStorage.getItem("postsPerPage") || "5",
    10
  );

  // 드롭다운 메뉴의 값을 현재 설정에 맞게 업데이트
  document.getElementById("posts-per-page").value = postsPerPage;
  const allPosts = getPosts().sort((a, b) => b.id - a.id); // 최신글이 위로 오도록 정렬
  const postList = document.getElementById("post-list");

  postList.innerHTML = "";

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = allPosts.slice(startIndex, endIndex);

  if (postsToShow.length === 0 && page === 1) {
    const noPostItem = `<div class="post-item" style="justify-content: center;">등록된 게시글이 없습니다.</div>`;
    postList.innerHTML = noPostItem;
  } else {
    postsToShow.forEach((post) => {
      const postItem = `
        <div class="post-item">
            <div class="item-num">${post.id}</div>
            <div class="item-title">
                <a href="view.html?id=${post.id}">${post.title}</a>
            </div>
            <div class="item-author">${post.author}</div>
            <div class="item-date">${post.date}</div>
            <div class="item-views">${post.views}</div>
        </div>
      `;
      postList.insertAdjacentHTML("beforeend", postItem);
    });
  }

  renderPagination(allPosts.length, page, postsPerPage);
}

// index.html: 페이지네이션 렌더링
function renderPagination(totalPosts, currentPage, postsPerPage) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = `?page=${i}`;
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    paginationContainer.appendChild(pageLink);
  }
}

// write.html: 글쓰기 폼 제출 처리
function handleWriteSubmit(event) {
  event.preventDefault(); // 폼의 기본 제출 동작 방지

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;

  if (!title || !author || !content) {
    alert("모든 필드를 입력해주세요.");
    return;
  }

  const posts = getPosts();
  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
  const currentDate = new Date()
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .slice(0, -1);

  const newPost = {
    id: newId,
    title,
    author,
    content,
    date: currentDate,
    views: 0,
  };

  posts.push(newPost);
  savePosts(posts);

  alert("게시글이 성공적으로 등록되었습니다.");
  window.location.href = "index.html"; // 목록 페이지로 이동
}

// view.html: 특정 게시글 불러오기 및 조회수 증가
function loadPostView() {
  const params = new URLSearchParams(window.location.search);
  const postId = parseInt(params.get("id"), 10);
  const posts = getPosts();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    alert("게시글을 찾을 수 없습니다.");
    window.location.href = "index.html";
    return;
  }

  // 조회수 증가 (새로고침 시마다 증가하는 것을 방지하려면 세션 스토리지 등을 활용)
  post.views++;
  savePosts(posts);

  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-author").textContent = post.author;
  document.getElementById("post-date").textContent = post.date;
  document.getElementById("post-views").textContent = post.views;
  document.getElementById("post-content").textContent = post.content;
}
