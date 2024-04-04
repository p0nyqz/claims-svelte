<!-- Layout.svelte -->
<script>
  import Nav from "../components/Nav.svelte";
  import Content from "./Content.svelte";

  // export let title; // заголовок страницы
  export let pageTitle = '';
</script>

<main id="app">
  <Nav />
  <Content {pageTitle}/>
</main>

<style>
</style>



    <!-- Содержимое страницы -->
  <!-- <header> -->
    <!-- Здесь можете добавить вашу навигацию, хедер и т.д. -->
  <!-- </header> -->

  <!-- <section> -->
    <!-- Содержимое страницы будет отображаться здесь -->
    <!-- <slot></slot> -->
  <!-- </section> -->

  <!-- <footer> -->
    <!-- Здесь можете добавить ваш футер -->
  <!-- </footer> -->