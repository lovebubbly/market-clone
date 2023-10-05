
    <form id="login-form" action="/login" method="POST">
      <div>로그인</div>
      <div>
        <label for="id">아이디</label>
        <input
          type="text"
          id="id"
          name="id" 
          placeholder="아이디를 입력하세요."
          required
        />
      </div>
      <div>
        <label for="password">패스워드</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="패스워드를 입력하세요."
          required
        />
        <div>
            <button type="submit">로그인</button>
          </div>

          <div id="info"></div>
      </form>
