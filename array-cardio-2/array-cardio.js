
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  const date = new Date;
  const year = date.getFullYear();

  // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const result = people.some((person) => {
        const age = year - person.year;
        return age >= 19
    });
    console.log(result);
    // Array.prototype.every() // is everyone 19 or older?
    const response = people.every((person) => {
        const age = year - person.year;
        return age >= 19;
    });
    console.log(response);
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const cmnt = comments.find(comment => comment.id === 823423);
    if(cmnt)
        console.log(cmnt);
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const cIndex = comments.findIndex(comment => comment.id === 823423);
    if(cIndex !== -1)
        delete comments[cIndex];
    console.log(comments);