<template>
  <div class="hot-songs-container" id="hot-songs">
    <SubSectionTitle title="熱門歌單 Hot! Songs" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="熱門歌單logo" />

    <div class="leaderboard-song-row-wrap">
      <LeaderboardSongCard v-for="(leaderboardSong, leaderboardSongNo) in leaderboards" :key="leaderboardSongNo"
        :rankNo="leaderboardSong.rankNo" :name="leaderboardSong.name" :singer="leaderboardSong.singer"
        :time="leaderboardSong.time" :color="leaderboardSong.color" />
    </div>

    <div class="hot-songs-row-wrap" v-for="(hotSongsRow, hotSongsRowNo) in arrangedHotSongList" :key="hotSongsRowNo">
      <HotSongsCard v-for="(hotSong, hotSongNo) in hotSongsRow" :key="hotSongNo" :name="hotSong.name"
        :singer="hotSong.singer" :time="hotSong.time" :color="hotSong.color" :isFinal="hotSong.isFinal" />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/SubSectionTitle.vue";
import LeaderboardSongCard from "@/components/physical-fitness-and-rhythm-movement/LeaderboardSongCard.vue";
import HotSongsCard from "@/components/physical-fitness-and-rhythm-movement/HotSongsCard.vue";

export default {
  components: { SubSectionTitle, LeaderboardSongCard, HotSongsCard },
  data() {
    return {
      rowLen: 4,
      hotSongs: [
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "red",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "green",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "yellow",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "blue",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "yellow",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "blue",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "red",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "green",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "blue",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "red",
        },
        {
          name: "黑桃A",
          singer: "DJ小魚兒",
          time: "約3分",
          color: "yellow",
        },
        {
          name: "",
          singer: "",
          time: "",
          color: "",
          isFinal: true,
        },
      ],
      leaderboards: [
        {
          rankNo: "2",
          name: "See you tomorrow",
          singer: "MOMO歡樂谷",
          time: "約4分",
          color: "red",
        },
        {
          rankNo: "1",
          name: "數星星",
          singer: "謝欣芷",
          time: "約4分",
          color: "yellow",
        },
        {
          rankNo: "3",
          name: "卡加布列島",
          singer: "YOYO點點名",
          time: "約2分半",
          color: "blue",
        },
      ],
    };
  },
  computed: {
    arrangedHotSongList() {
      var finalRowLen = this.hotSongs.length % this.rowLen;
      var completeRowCount = (this.hotSongs.length - finalRowLen) / this.rowLen;
      var arr = [];
      for (var i = 0; i < completeRowCount; i++) {
        // var row = [
        //   this.subLabelList[i * this.rowLen],
        //   this.subLabelList[i * this.rowLen + 1],
        //   this.subLabelList[i * this.rowLen + 2]
        // ];

        var row = [];
        for (var j = 0; j < this.rowLen; j++) {
          row.push(this.hotSongs[i * this.rowLen + j]);
        }
        arr.push(row);
      }
      if (finalRowLen != 0) {
        var finalRow = [];
        while (finalRowLen != 0) {
          finalRow.push(this.hotSongs[this.hotSongs.length - finalRowLen]);
          finalRowLen--;
        }
        arr.push(finalRow);
      }
      return arr;
    },
  },
  mounted() {
    console.log(this.arrangedHotSongList);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.hot-songs-container {
  @include vm();
  margin-bottom: 30px;
  width: 100%;

  div.leaderboard-song-row-wrap {
    width: 100%;
    @include hm();
    padding: 80px 0 50px;
  }

  div.hot-songs-row-wrap {
    width: 100%;
    @include hm();
    gap: 10px;
  }
}
</style>
