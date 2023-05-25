<template>
  <div class="all-books-sort-row-container">
    <div class="sort-row-wrap">
      <div class="sort-label">依{{ labelName }}分類</div>

      <div class="sort-items">
        <div v-if="!showAll" class="sort-items-all">
          點擊展開{{ labelName }}一覽
        </div>
        <!-- TODO: 第四個折行的寬度調整 -->
        <div v-else>
          <div
            v-for="(subLabelRow, rowNo) in arrangedSubLabelList"
            :key="rowNo"
            class="sort-item-wrap"
          >
            <div
              v-for="(subLabel, subLabelNoInRow) in subLabelRow"
              :key="subLabelNoInRow"
              class="sort-item"
            >
              {{ subLabel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelName: String,
    subLabelList: Array,
    showAll: Boolean,
  },
  components: {},
  data() {
    return {
      rowLen: 3,
    };
  },
  computed: {
    arrangedSubLabelList() {
      var finalRowLen = this.subLabelList.length % this.rowLen;
      var completeRowCount =
        (this.subLabelList.length - finalRowLen) / this.rowLen;
      var arr = [];
      for (var i = 0; i < completeRowCount; i++) {
        // var row = [
        //   this.subLabelList[i * this.rowLen],
        //   this.subLabelList[i * this.rowLen + 1],
        //   this.subLabelList[i * this.rowLen + 2]
        // ];

        var row = [];
        for (var j = 0; j < this.rowLen; j++) {
          row.push(this.subLabelList[i * this.rowLen + j]);
        }
        arr.push(row);
      }
      if (finalRowLen != 0) {
        var finalRow = [];
        while (finalRowLen != 0) {
          finalRow.push(
            this.subLabelList[this.subLabelList.length - finalRowLen]
          );
          finalRowLen--;
        }
        arr.push(finalRow);
      }
      return arr;
    },
  },
  mounted() {
    console.log(this.arrangedSubLabelList);
  },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.all-books-sort-row-container {
  width: 65%;

  div.sort-row-wrap {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 10px;

    div.sort-label {
      width: 20%;
      background-color: $primary-yellow;
      border-radius: 30px;
      color: $primary-white;
      padding: 10px;
      text-align: center;
      border: 5px solid $primary-yellow;
    }

    div.sort-items {
      width: 80%;

      div.sort-items-all,
      div.sort-item {
        text-align: center;
        border: 5px solid $primary-yellow;
        border-radius: 30px;
        padding: 10px;
        margin-bottom: 10px;
        cursor: pointer;

        &:hover {
          background-color: $secondary-yellow;
          border: 5px solid $secondary-yellow;
        }
      }

      div.sort-item-wrap {
        display: flex;
        align-items: center;
        gap: 5px;

        div.sort-item {
          width: 33.333333%;
        }
      }
    }
  }
}
</style>
