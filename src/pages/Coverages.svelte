<!-- src/pages/Home.svelte -->
<script>
  let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
	  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
	  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
  ];
</script>

<h1>My Coverages</h1>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    {/each}
  </tbody>
</table>