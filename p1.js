function splitStringToWords (string) {

  let res = string.split(' ');
  for (let i = 0; i < res.length; i++){
    if(res[i] === ''){
      res.splice(i,1);
      i--;
    }
  }
  return res
}

module.exports.splitStringToWords = splitStringToWords;
