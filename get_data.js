fetch("https://8600-idx-my-app-1732331556927.cluster-duylic2g3fbzerqpzxxbw6helm.cloudworkstations.dev/api")
.then(res => res.json())
.then(data => {
  console.log(data)
})
.catch(err => {
  console.error("Error", err);
})
