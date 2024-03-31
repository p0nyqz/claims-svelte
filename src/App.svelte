<script>
  import Table from "./components/Table.svelte";
  import DataLoader from "./components/DataLoader.svelte";

  let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
	  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
	  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
  ];
</script>

<Table />
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

<main>
  <h1>Data Table Example</h1>
  <DataLoader />
</main>

<pre>{JSON.stringify(users, null, 2)}</pre>