function onlyUnique(item, index, self) {
  return self.indexOf(item) === index;
}

export function unique(arry) {
  return arry.filter(onlyUnique);
}
