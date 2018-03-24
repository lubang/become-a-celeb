<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-dark" id="mainNav">
      <div class="container">
        <router-link class="navbar-brand" to="/">셀럽이 되고 싶어!</router-link>
        <button class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="text-white">:D</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/history">My Hisotry</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <footer>Copyright (c) DONGGEUN BANG. <a href="https://blog.lulab.net">https://blog.lulab.net</a></footer>
  </div>
</template>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  color: white;
}

nav a:hover, nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  border-top: #eeeeee solid 1px;
  padding: 10px;
  color: #cccccc;
  text-align: center;
  font-size: 0.7em;
}
</style>
