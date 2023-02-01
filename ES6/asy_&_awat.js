async function abc() {
    console.log("1");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("4");
    const users = await response.json();
    console.log("5");
    return users;
  }
  
  const a = abc();