<!-- src/pages/MyCoverages.svelte -->
<script>
  import Content from "../layouts/Content.svelte";

  let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
	  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
	  { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
  ];
</script>

<Content pageTitle="Contact Us">
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
</Content>