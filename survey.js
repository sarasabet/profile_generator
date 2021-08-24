const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

rl.question('What is your favorite food? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Oh, so your favorite food is ${answer}`);
  const a1 = answer
  rl.question(' What\'s your name? Nicknames are also acceptable :)', (answer) => {
    console.log(`${answer} is a great naem `);
    const a2 = answer
    rl.question(' What\'s an activity you like doing?', (answer) => {
      console.log(`${answer} is so fun`);
      const a3 = answer
      rl.question(' What do you listen to while doing that?', (answer) => {
        console.log(`${answer} is intresting!`);
        const a4 = answer
        rl.question(' Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
          console.log(`${answer} is a great  choice!`);
          const a5 = answer
          rl.question(' What\'s your favourite thing to eat for that meal?)', (answer) => {
            console.log(`${answer} is deliciouse!`);
            const a6 = answer
            rl.question(' Which sport is your absolute favourite?', (answer) => {
              console.log(`${answer} is a such a great  sport!`);
              const a7 = answer
              rl.question(' What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                const a8 = answer
                console.log(`You are ${a1}, your favoriate activity is${a2},you listen to ${a3},and you do ${a4}, your favourit meal is ${a5},and uour favourit thing to eat is ${a6},your sport is ${a7},and your supperPower is ${a8}!`);

                rl.close();
              });  
            });
          });      
        });
      });
    });
  });
});


