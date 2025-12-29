const page = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const contacts = await response.json();

  return (
    <div>
      <ul>
        {contacts.map((person) => (
          <li key={person.id}>{person.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
