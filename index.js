// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var out = [];
  for (let i=0; i < musiciansArr.length; i++) {
    out.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }
  return out;
}
