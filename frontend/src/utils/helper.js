export const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

const sortArrayByKeyAsc = (array, key) => {
  return array.sort((item1, item2) => {
    return (item1[key] < item2[key]) ? -1 : ((item1[key] > item2[key]) ? 1 : 0);
  })
}

const sortArrayByKeyDesc = (array, key) => {
  return array.sort((item1, item2) => {
    return (item1[key] < item2[key]) ? 1 : ((item1[key] > item2[key]) ? -1 : 0);
  })
}

export const sortContent = {
  'ascending': sortArrayByKeyAsc,
  'descending': sortArrayByKeyDesc
}
