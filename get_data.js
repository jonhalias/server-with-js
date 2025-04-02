const getData = async() => {
  const res = await fetch("https://8080-idx-my-app-1732331556927.cluster-duylic2g3fbzerqpzxxbw6helm.cloudworkstations.dev/api");
  const data = await res.json();
  console.log(data);
}

getData();
