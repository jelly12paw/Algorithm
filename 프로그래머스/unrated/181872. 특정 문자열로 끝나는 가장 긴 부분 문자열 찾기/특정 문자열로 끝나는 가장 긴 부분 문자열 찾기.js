function solution(myString, pat) {
  var answer = "";

  const last = myString.lastIndexOf(pat);

  answer = myString.substr(0, last + pat.length);

  return answer;
}