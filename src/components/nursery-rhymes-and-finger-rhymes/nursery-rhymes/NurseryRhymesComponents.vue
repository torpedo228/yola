<template>
  <div
    class="nursery-rhymes-components-container"
    id="nursery-rhymes"
 
  >
    <div class="disc-wrap">
      <Disc color="yellow" :width="'300px'" :height="'300px'" running />
    </div>

    <div class="container">
      <h3>哈巴狗</h3>
      <span>詞、曲：佚名</span>
      <p>
        一隻哈巴狗，坐在大門口，<br />
        眼睛黑黝黝，想吃肉骨頭，<br />
        一隻哈巴狗，吃完肉骨頭，<br />
        尾巴搖一搖，向我點點頭。
      </p>
      <div class="yt-download">
        <i class="fa-brands fa-youtube"></i>影音資源
      </div>
      <a href="https://torpedo228.github.io/resources/pdf/habadog.pdf" download>
        <div class="pdf-download">
          <i class="fa-solid fa-file-pdf"></i>PDF下載
        </div>
      </a>
      <audio autoplay controls>
        <source
          src= 'https://torpedo228.github.io/resources/media/audio/nursery-rhymes-1.mp3'
          type="audio/mpeg"
        />
      </audio>
    </div>

    <div class="control-btn">
      <div class="next-rhymes-btn">
        下一首<i class="fa-solid fa-forward"></i>
      </div>
      <a href="" class="go-to-all-rhymes-btn">
        <div>直接前往歌曲庫</div>
      </a>
    </div>
  </div>
</template>

<script>
import Disc from "@/components/nursery-rhymes-and-finger-rhymes/nursery-rhymes/Disc.vue";

export default {
  components: { Disc },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.nursery-rhymes-components-container {
  @include vm();
  position: relative;
  margin: 200px 0 0;

  div.disc-wrap {
    position: absolute;
    top: -35%;
    z-index: -1;
  }

  div.container {
    @include hm();
    flex-wrap: wrap;
    width: 400px;
    border: 10px solid $primary-yellow;
    background-color: $primary-white;
    border-radius: 30px;
    padding: 30px 0;

    h3 {
      margin: 0 30px 0 0;
    }

    span {
      display: inline-block;
    }

    p {
      width: 400px;
      text-align: center;
      font-size: $sub-info;
    }

    div.yt-download,
    div.pdf-download {
      margin: 0 10px 30px;
      width: 150px;
      height: 50px;
      text-align: center;
      border: 5px solid $primary-yellow;
      border-radius: 40px;
      font-size: $sub-info;
      line-height: 50px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      i {
        font-size: $sub-info;
        margin-right: 5px;
      }
    }

    div.yt-download {
      i {
        color: $primary-red;
      }
    }

    div.pdf-download {
      i {
        color: $primary-red;
      }
    }
  }

  div.control-btn {
    div.next-rhymes-btn,
    a.go-to-all-rhymes-btn {
      display: block;
      width: 160px;
      height: 50px;
      text-align: center;
      border: 5px solid $primary-yellow;
      border-radius: 40px;
      font-size: $sub-info;
      line-height: 50px;
      margin: 20px 0;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    div.next-rhymes-btn {
      i {
        color: $primary-yellow;
        margin-left: 5px;
      }
    }

    a.go-to-all-rhymes-btn {
      background-color: $primary-yellow;
      color: $primary-white;
    }
  }
}

div.nursery-rhymes-components-container-yellow{
div.disc-wrap{
}
}
</style>
