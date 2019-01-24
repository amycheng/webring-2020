const yaml = require('js-yaml');
const fs   = require('fs');
const pageList = yaml.safeLoad(fs.readFileSync('list.yaml', 'utf8'));

//TODO: remove any trailing slashes found in the member url and members' url

function getIndex(index){
  if (index > pageList.length) {
    return pageList.length-1
  } else if (index < 0) {
    return 0;
  } else {
    return index;
  }
}

function random(){
  return pageList[Math.floor(Math.random() * pageList.length)];
};

function next(memberPage){
  const memberIndex = pageList.indexOf(memberPage);
  console.log(memberPage);
  console.log(memberIndex);

  if (memberIndex !== -1) {
    return pageList[getIndex(memberIndex+1)];
  } else{
    return pageList[0];
  }
}

function prev(memberPage){
  const memberIndex = pageList.indexOf(memberPage);

  if (memberIndex) {
    return pageList[getIndex(memberIndex-1)];
  } else{
    return pageList[0];
  }
}

module.exports = {
  random: random,
  next: next,
  prev: prev
}
