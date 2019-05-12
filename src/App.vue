<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Kenvector Future;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: Kenvector Future;
  src: url(../src/assets/fonts/kenvector_future.ttf);
}

.blinking{
	animation:blinkingText 0.8s infinite;
}
@keyframes blinkingText {
	0%{		color: rgb(255, 8, 8);	}
	49%{	color: transparent;	}
	50%{	color: transparent;	}
	99%{	color:transparent;	}
	100%{	color: rgb(255, 0, 0);	}
}

.location {
  font-size: 50px;
  position:absolute;
  top:250px;
  left:250px;
  }

.container {
  display: inline;
}
.abs-center {
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.option {
  left: 100px;
  height: 40px;
  width: 210px;
  margin: 10px auto;
  line-height: 36px;
  letter-spacing: 3px;
  border: 2px solid #aaa;
  color: #aaa;
  cursor: pointer;
  overflow: hidden;
}
.option:hover {
  border: 2px solid #000;
}
.option:hover div {
  color: #000;
  margin-top: -37px;
}

@keyframes play {
  100% { background-position: -1900px; }
}

.orpheus {
	position:absolute;
	top:0px;
  right:0px;
  bottom: 400px;
  left:0px;
	width:50px;
	height:50px;
	image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  -ms-interpolation-mode: nearest-neighbor;
  background: url('assets/images/orpheus_idle.png');
  animation: play 0.8s steps(2) infinite;
}
</style>
