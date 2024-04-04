<!-- Layout.svelte -->
<script>
  import Nav from "../components/Nav.svelte";
  import Content from "./Content.svelte";

  // export let title; // заголовок страницы
</script>

<!-- <main>
  <Nav />
  <Content pageTitle="Example Page">
    <p>Это содержимое страницы</p>
  </Content>
</main> -->
<Nav />
<Content />

<main>
  <!-- <h1>{title}</h1> -->
  <slot></slot>
</main>

<style>
  main {
    margin: 20px;
  }

  .content {
    /* margin-left: 250px; Отступ контента справа от навигации */
  }
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