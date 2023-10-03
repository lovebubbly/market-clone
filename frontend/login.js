const form = document.querySelector("#login-form");

let accessToken = null;

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인에 성공하였습니다.");

  window.location.pathname = "/";
};

form.addEventListener("submit", handleSubmit);
