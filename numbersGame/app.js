function computerChoice(n) {
    return Math.floor(Math.random() * n + 1);
  }
  
  //let computer = computerChoice();
  
  let total = 21;
  alert("Total Match Sticks are: 21.");
  
  do {
    let user = +prompt("enter a no: from 1 to 4:");
  
    if (user <= 4 || user >= 1) {
      total = total - user;
  
      if (total <= 1) {
        alert("Computer has lost");
        break;
      }
  
      alert(`no Match Sticks Left ${total}`);
      alert("It is now Computer's turn");
  
      let computer = computerChoice(4);
      total = total - computer;
  
      if (total <= 1) {
        alert("You have Lost");
        break;
      }
      alert(`no Match Sticks Left ${total}`);
    } 
  } while (total !== 1);
  