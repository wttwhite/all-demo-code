<template>
  <div class="box">
    <div class="container">
      <div class="card">
        <div class="content">
          <h2>内森·德雷克</h2>
          <p>
            他是一个无赖的探险家，他永远被冒险、财富和荣耀的不可抗拒的承诺所吸引。
          </p>
          <a href="http://www.webqdkf.com">了解更多</a>
        </div>
        <img src="./img/01.png" />
      </div>
      <div class="card">
        <div class="content">
          <h2>山姆·德雷克</h2>
          <p>
            他是一个无赖的探险家，他永远被冒险、财富和荣耀的不可抗拒的承诺所吸引。
          </p>
          <a href="http://www.webqdkf.com">了解更多</a>
        </div>
        <img src="./img/02.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card2',
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  position: relative;
  width: 600px;
  height: 350px;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(45deg, #1a2f3f, #7094ce);
  transition: 0.5s;
}
.card img {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 400px;
  transition: 0.5s;
}
.card:hover img {
  left: 73%;
  height: 500px;
}
.content {
  position: relative;
  width: 50%;
  left: 20%;
  padding: 20px 20px 20px 40px;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
}
.card:hover .content {
  transition-delay: 0.5s;
  opacity: 1;
  visibility: visible;
  left: 0;
}
.content h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 2.2em;
  line-height: 1em;
}
.content p {
  color: #fff;
}
.content a {
  position: relative;
  color: #fff;
  padding: 10px 20px;
  background: #fff;
  color: #111;
  font-weight: 700;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
}
@media (max-width: 991px) {
  .card {
    width: auto;
    max-width: 600px;
    align-items: flex-start;
  }
  .card:hover {
    height: 600px;
  }
  .card:hover img {
    left: 50%;
    height: 350px;
  }
  .card .content {
    width: 100%;
    left: 0;
    padding: 40px;
  }
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .container .card {
    margin: 40px 20px;
  }
}
@media (max-width: 420px) {
  .card .content {
    padding: 30px;
  }
  .card:hover img {
    height: 300px;
  }
}
</style>
