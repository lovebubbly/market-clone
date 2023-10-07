<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token",token)
    } catch (error) {
      console.error(error);
    }
  };
</script>


<div>
  <div>로그인</div>
  <button class="login-btn" on:click={loginWithGoogle}>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img class="google-img" src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo-thumbnail.png">
    <div>Google로 시작하기</div>
  </button>
</div>

<style>
  .login-btn {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border: 1px solid gray;
    cursor: pointer;
    border-radius: 3px;
  }
  .google-img {
    width: 20px;
    height: 20px;
  }
</style>
