<template>
  <div class="finger-rhymes-components-container">
    <div class="content-wrap">
      <div class="panel-btn">
        <div class="yt-download">
          <i class="fa-brands fa-youtube"></i>影音資源
        </div>
        <a
          href="https://torpedo228.github.io/resources/pdf/habadog.pdf"
          download
        >
          <div class="pdf-download">
            <i class="fa-solid fa-file-pdf"></i>PDF下載
          </div>
        </a>
        <audio autoplay controls>
          <source src="" type="audio/mpeg" />
        </audio>
      </div>
      <div class="container">
        <h3>小小地、種小花</h3>
        <span>詞、曲：佚名</span>
        <p>
          小小地 種小花<br />
          灑灑水 開小花<br />
          長大了 長大了 波！<br />
          中中地 種中花<br />
          灑灑水 開中花<br />
          長大了 長大了 波！<br />
          大大地 種大花<br />
          灑灑水 開大花<br />
          長大了 長大了 波！<br />
          尾巴搖一搖，向我點點頭。
        </p>
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
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.finger-rhymes-components-container {
  div.btn {
  }
}
</style>
