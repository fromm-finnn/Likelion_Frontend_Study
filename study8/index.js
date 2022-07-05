const me = {
  name : "유예빈",
  age : 26,
  gender : 'male',
};

const someone = {
  name : "홍길순",
  age : 27,
  gender : "female",
}

function addMilitaryStateIfMale(person){
  if (person.gender === 'male') {
    person.militaryState = false;
  }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

console.log(me);
console.log(someone);

function parseBoolean(value) {
  if (value === true) {
    return "참";
  } else {
    return "거짓";
  }
}

me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));