const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/"; // 200이면 메인페이지로 이동
  } catch (e) {
    console.error("글쓰기 실패");
  }

  console.log();
};

form.addEventListener("submit", handleSubmitForm);
