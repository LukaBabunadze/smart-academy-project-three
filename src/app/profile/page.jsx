const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/users/3", {
    method: "GET",
  });
  const user = await resp.json();

  return <div>{user.email}</div>;
};

export default page;
