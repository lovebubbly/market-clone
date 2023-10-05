<script>
    let hour= new Date().getHours()
    let min= new Date().getMinutes()
    

</script>
    <header>
      <div class="info-bar">
        <div class="info-bar__time">{hour}:{min}</div>
        <div class="info-bar__icons">
          <img src="assets/chart-bar.svg" alt="chart-bar" />
          <img src="assets/wifi.svg" alt="wifi" />
          <img src="assets/battery.svg" alt="battery" />
        </div>
      </div>
      <div class="menu-bar">
        <div class="menu-bar__location">
          <div>개신동</div>
          <div class="menu-bar__location-icon">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="assets/arrow-down.svg">
          </div>
        </div>
        <div class="menu-bar__icons">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="assets/search.svg" />
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="assets/menu.svg" />
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="assets/alert.svg" />
        </div>
      </div>
    </header>
    <main>
      <a class="write-btn" href="write.html">+글쓰기</a>
    </main>
    <footer>
      <div>
        <div class="footer-block">
          <div class="footer-icons">
            <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="assets/home.svg" />
              <div class="footer-icons__desc">홈</div>
            </div>
          </div>
          <div class="footer-icons">
            <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="assets/document.svg" />
              <div class="footer-icons__desc">동네생활</div>
            </div>
          </div>
          <div class="footer-icons">
            <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="assets/location.svg" />
              <div class="footer-icons__desc">내 근처</div>
            </div>
          </div>
          <div class="footer-icons">
            <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="assets/chat.svg" />
              <div class="footer-icons__desc">채팅</div>
            </div>
          </div>
          <div class="footer-icons">
            <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <img src="assets/user.svg" />
              <div class="footer-icons__desc">나의 당근</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="media-info-msg">지원되지 않는 화면 크기</div>


