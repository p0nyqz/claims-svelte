<!-- DataLoader.svelte -->
<!-- Компонент для управления загрузкой данных -->

<script>
  import { onMount } from 'svelte';
  import DataTable from './DataTable.svelte';
  let users = [];
  let isLoading = false;

  async function fetchData() {
    isLoading = true;
    // Здесь вы можете выполнить запрос к вашему API или любому другому источнику данных
    // Например:
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    isLoading = false;
  }

  onMount(fetchData);
</script>

<style>
  /* Стили для управления загрузкой данных */
</style>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <DataTable {users} />
{/if}