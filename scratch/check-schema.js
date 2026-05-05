async function checkSchema() {
  const query = `
    query {
      __type(name: "Project") {
        fields {
          name
        }
      }
    }
  `;
  try {
    const res = await fetch('http://orbiko.local/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    if (json.errors) console.log("Errors:", json.errors);
    console.log("Data:", JSON.stringify(json.data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

checkSchema();
