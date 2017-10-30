var me = {};
console.log(me);
console.log(typeof me);

// Creating an Object with data
me = {
  eyes: "blue",
  name: "Adi",
  hight: 176,

  },

console.log(JSON.stringify(me));

// Changing eyes color in object
me.eyes = "brownish";

console.log(me.eyes);
me.location= {               // Object inside an object
    isIsrael: true,
    city: "Kfar Yona"
};

console.log(JSON.stringify(me));
me.language= {               // Object inside an object
    hebrew: true,
    english: true,
    Russien: false,
};
console.log(typeof me.language.hebrew ); // the type of the key language
