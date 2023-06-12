<template>
  <div v-if="$store.state.isLoggingIn" class="login-prompt-container">
    <div class="light-box">
      <div class="login-container">
        <div @click="closeLoginPrompt" class="cancel-btn">x</div>
        <img :src="require('@/assets/icons/func-items/login-prompt.svg')" alt="" />
        <div class="login">
          <label for="user-id">帳號：</label>
          <input type="text" placeholder="請輸入帳號（預設:111）" v-model="inputAccount" />
          <br />
          <label for="userPsw">密碼：</label>
          <input type="password" placeholder="請輸入密碼（預設:222）" v-model="inputPassword" />
          <br />
        </div>

        <div class="btn-wrap">
          <button @click="login" class="login-btn">登入</button>
          <button class="sign-up-btn">註冊會員</button>
        </div>

        <div class="third-party">
          <a class="fb" href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a class="google" href="#">
            <i class="fa-brands fa-google"></i>
          </a>
          <a class="line" href="#">
            <i class="fa-brands fa-line"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      inputAccount: "",
      inputPassword: "",
    };
  },
  computed: {},
  mounted() { },
  watch: {},
  methods: {
    closeLoginPrompt() {
      this.inputAccount = "";
      this.inputPassword = "";
      this.$store.commit("CLOSE_LOGIN_PROMPT");
    },

    login() {
      var users = this.$store.state.defaultUsers;
      for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (
          user.account == this.inputAccount &&
          user.password == this.inputPassword
        ) {
          this.$store.commit("SET_USER_ACCOUNT", user.account);
          this.$store.commit("SET_USER_NAME", user.userName);
          this.$store.commit("SET_USER_PROFILE", user.profile);
          this.closeLoginPrompt();
          return;
        }
      }
      window.alert("帳號或密碼錯誤!");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.login-prompt-container {

  div.light-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(66, 66, 66, 0.6);
    z-index: 999;

    div.login-container {
      width: 35vw;
      height: 30vw;
      background-color: $primary-white;
      padding: 2vw 1vw;
      border-radius: 3vw;
      text-align: center;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 55vh;
      left: 50%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      div.cancel-btn {
        font-size: 2vw;
        cursor: pointer;
        width: 3vw;
        height: 3vw;
        top: 5%;
        right: 5%;
        position: absolute;
        color: $primary-grey;
        border: 0.2vw solid $primary-grey;
        border-radius: $border-radius-circle;

        &:hover {
          background-color: $primary-black;
          color: $primary-white;
          border: 0.2vw solid $primary-black;

        }

        &:active {
          transform: translate(2px, 2px);
        }
      }

      img {
        width: 50%;
      }

      div.login {


        label {
          font-size: 1.5vw;
        }

        input {
          width: 18vw;
          margin-top: 1vw;
          padding: 1vw;
          border: 0.1vw solid $primary-black;
          border-radius: 0.5vw
        }

        input::placeholder{
          font: 1.25vw FakePearl-Light;
        }

        input[type="text"],  input[type="password"]{
          font-size: 1.25vw;
        }


      }


      div.btn-wrap {
        @include hm();

        button {
          padding: 0.5vw 1.5vw;
          margin: 1vw;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          box-sizing: border-box;
          border-radius: 1vw;
          font-size: 1.5vw;
          border: 0.15vw solid $primary-blue ;


          &:hover {
            opacity: 0.7;
          }

          &:active {
            transform: translate(2px, 2px);
          }
        }


        button.login-btn {
          background-color: $primary-blue ;
          color: $primary-white ;
        }

        button.sign-up-btn {
          background-color: $primary-white ;
         
          color: $primary-blue ;

        }
      }

      div.third-party {
        border-top: 0.1vw solid $primary-grey;
        width: 75%;
        padding: 2vw 0 0;
        @include hm();
        gap: 3vw;

        a.fb,
        a.google,
        a.line {
          border-radius: 1vw;
          width: 4vw;
          height: 4vw;
          background: $primary-white;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
          @include hm();


          i {
            font-size: 2.5vw;
          }

          &:hover {
            box-shadow: 2px 2px 2px $primary-grey;
          }

          &:active {
            transform: translate(2px, 2px);
          }
        }

        a.fb i {
          color: $primary-blue;
        }

        a.google i {
          background: conic-gradient(from -45deg,
              #ea4335 110deg,
              #4285f4 90deg 180deg,
              #34a853 180deg 270deg,
              #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        a.line i {
          color: $primary-green;
        }
      }
    }
  }
}
</style>
