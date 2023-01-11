<template>
  <div class="wrapper">
    <div class="login">
      <div class="login-form">
        <a href="#" class="logo">
          <span class="logo-text">web前端开发</span>
        </a>
        <h1 class="login-title">欢迎回来，请登录您的帐户</h1>
        <form action="#" class="form-wrapper">
          <div class="input-wrapper">
            <label class="label" for="email">邮箱地址</label>
            <input class="input" type="text" id="email" autocomplete="off" />
          </div>
          <div class="input-wrapper">
            <label class="label" for="password">密码</label>
            <input class="input" type="password" id="password" />
          </div>

          <div class="actions-help">
            <label class="check-wrapper"
              ><input class="checkbox" type="checkbox" />记住我</label
            >
            <a class="help-link" href="#">忘记密码</a>
          </div>

          <div class="actions">
            <a href="#" class="action m--login">登录</a>
            <a href="#" class="action">注册</a>
          </div>
        </form>

        <span class="aclaration"
          >注册即表示您同意我们的服务条款和条件以及隐私政策</span
        >
      </div>

      <div class="login-decoration"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      label: '登录样式',
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  /** width: 100vw;
  min-height: 100vh; **/
  background-color: #f7f6fb;
  background: linear-gradient(45deg, #0077b6, #90e0ef);
  padding: 30px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
}
.login .login-form {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  max-width: 50%;
  background-color: #fff;
  padding: 60px 45px;
}
@media only screen and (max-width: 767.98px) {
  .login .login-form {
    max-width: 100%;
  }
}
@media only screen and (max-width: 575.98px) {
  .login .login-form {
    padding: 40px 20px;
  }
}
.login .login-form .logo {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 1.4rem;
}
.login .login-form .logo .logo-text {
  font-weight: bold;
}
.login .login-form .login-title {
  font-size: 1.4em;
  font-weight: 400;
  color: #767676;
  margin-bottom: 25px;
}

@media only screen and (max-width: 575.98px) {
  .login .login-form .social-buttons {
    flex-direction: column;
  }
}
@media only screen and (max-width: 575.98px) {
  .login .login-form .social-buttons .social-button {
    max-width: 100%;
    margin-bottom: 10px;
  }
}

.login .login-form .form-wrapper .input-wrapper:not(:last-child) {
  margin-bottom: 10px;
}
.login .login-form .form-wrapper .input-wrapper .label,
.login .login-form .form-wrapper .input-wrapper .input {
  display: block;
  width: 100%;
}
.login .login-form .form-wrapper .input-wrapper .label {
  padding-bottom: 3px;
  font-size: 0.9rem;
  color: #666;
}
.login .login-form .form-wrapper .input-wrapper .input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #0077b6;
}
.login .login-form .form-wrapper .actions-help {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 30px;
}
@media only screen and (max-width: 575.98px) {
  .login .login-form .form-wrapper .actions-help {
    flex-direction: column;
  }
}
.login .login-form .form-wrapper .actions-help .check-wrapper {
  display: inline-flex;
  align-items: center;
}
@media only screen and (max-width: 575.98px) {
  .login .login-form .form-wrapper .actions-help .check-wrapper {
    margin-bottom: 15px;
  }
}
.login .login-form .form-wrapper .actions-help .check-wrapper .checkbox {
  margin-right: 5px;
}
.login .login-form .form-wrapper .actions-help .help-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
.login .login-form .form-wrapper .actions-help .help-link:hover {
  color: #0077b6;
}
.login .login-form .form-wrapper .actions .action {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #0077b6;
  color: #333;
  text-decoration: none;
  background-color: #fff;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.login .login-form .form-wrapper .actions .action:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 25px -15px rgba(0, 0, 0, 0.5);
}
.login .login-form .form-wrapper .actions .action:not(:last-child) {
  margin-right: 20px;
}
.login .login-form .form-wrapper .actions .action.m--login {
  background: linear-gradient(to right, #0077b6, #00b4d8, #48cae4);
  border: 0;
  color: #fff;
}
.login .login-form .aclaration {
  color: #666;
  padding-top: 40px;
  display: block;
  line-height: 1.4rem;
}
.login .login-form .aclaration .link {
  color: #4a89d8;
  text-decoration: none;
}
.login .login-decoration {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  background-image: url('../img-rotate-3d/img/1.jpg');
  background-position: center;
  background-size: cover;
}
@media only screen and (max-width: 767.98px) {
  .login .login-decoration {
    display: none;
  }
}
</style>
