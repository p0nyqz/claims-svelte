<script>
  let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
  ];
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
		/* border-radius: 10px; */
		/* border: 1px solid #dddddd; */
		/* overflow: hidden; */
  }

  th, td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
		/* border-radius: 0; сбрасываем скругление для ячеек */
  }

  th {
    background-color: #f2f2f2;
		/* border-radius: 10px 10px 0 0; скругляем верхние углы заголовков */
  }
</style>

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

<pre>{JSON.stringify(users, null, 2)}</pre>