<!-- Content.svelte -->

<script>
  export let pageTitle = ''; // Заголовок страницы
</script>

<section>
  <h1>{pageTitle}</h1> <!-- Заголовок страницы -->
  <slot></slot> <!-- Содержимое страницы -->
</section>

<style>
</style>