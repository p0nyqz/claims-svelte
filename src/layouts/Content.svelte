<!-- Content.svelte -->

<script>
  export let pageTitle = ''; // Заголовок страницы
</script>

<main>
  <h1>{pageTitle}</h1> <!-- Заголовок страницы -->
  <slot></slot> <!-- Содержимое страницы -->
</main>

<style>
  main {
    max-width: 800px; /* Максимальная ширина контента */
    margin: 0 auto; /* Центрирование контента */
    padding: 20px; /* Отступы вокруг контента */
  }

  h1 {
    font-size: 24px; /* Размер заголовка */
    margin-bottom: 20px; /* Отступ после заголовка */
  }
</style>