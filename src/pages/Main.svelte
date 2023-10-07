<script lang=ts>
;
  import Footer from "../components/Footer.svelte";
  import { onDestroy, onMount } from 'svelte';

  import { getDatabase, ref, onValue } from "firebase/database";
let intervalId;
;
let hour=new Date().getHours();
  let min: number | string = new Date().getMinutes();  // 밖에서 선언

  $: {
    intervalId = setInterval(() => {
      hour = new Date().getHours();
      min = new Date().getMinutes();  // 이걸로 업데이트
      if (min < 10) {
        min = "0" + min;
      }
    }, 60000);
  }

onDestroy(() => {
  clearInterval(intervalId);
});

    $: items  = [];
    
const db = getDatabase();
const itemsRef = ref(db, "items/");

onMount(() => {
  onValue(itemsRef, (snapshot) => {
  const data = snapshot.val();
  const processedItems = [];

  Object.keys(data).forEach(outerKey => {
    Object.keys(data[outerKey]).forEach(innerKey => {
      processedItems.push(data[outerKey][innerKey]);
    });
  });

  items = processedItems.reverse();
  
});


});
const calctime = (timestamp) => {
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const mintue = time.getMinutes();
  const second = time.getSeconds();
  if (hour > 0) {
    return `${hour}시간 전`;
  } else if (mintue > 0) {
    return `${mintue}분 전`;
  } else if (second > 0) {
    return `${second}초 전`;
  } else return "방금 전";
};
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
      {#each items as item}
      <div class="item-list">
        <div class="item-list__img">
          <img src={item.imgUrl} alt="item" />
        </div>
        <div class="item-list__info">
        <div class="item-list__info-title">{item.title} </div>
        <div class="item-list__info-meta">{item.place} {calctime()}</div>
        <div class="item-list__info-price">{item.price}</div>
        <div>{item.description}</div>
      </div>
  
    </div>
   
      {/each}
      <a class="write-btn" href="/#/write">+글쓰기</a>
    </main>
    <Footer location="home"/>
    <div class="media-info-msg">지원되지 않는 화면 크기</div>


