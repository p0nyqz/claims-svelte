<!-- DataTable.svelte -->
<!-- Компонент для таблицы -->

<script>
  export let users = [];

// Функция для вывода объекта в JSON
 function prettyPrint(obj) {
    return JSON.stringify(obj, null, 2);
 }
</script>

<style>
</style>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
      <th>Street</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
        <td>{user.address.street}</td>
      </tr>
    {/each}
  </tbody>
</table>

<pre>{prettyPrint(users)}</pre>