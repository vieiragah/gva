const beds = [
    {
      _id: "198234nsdduy-298735nasdf789367",
      leito_name: "leito1",
      value: "good",
    },
    {
      _id: "198234nsdduy-298735nasdf789368",
      leito_name: "leito2",
      value: "everage",
    },
    {
      _id: "198234nsdduy-298735nasdf789369",
      leito_name: "leito3",
      value: "critical",
    },
    {
      _id: "198234nsdduy-298735nasdf789362",
      leito_name: "leito4",
      value: "good",
    },
];

const sectors = [
  {
    setor: "uti1",
    leitos: beds
  },
];

const mapData = sectors.forEach((data) => {
    console.log(data)
})
