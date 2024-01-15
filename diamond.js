let text = {
    1:" ",2:" ",3:" ",
    4:" ",5:"*",6:" ",7:" ",8:" ",
    9:" "
  };
  
  function topDiamond (i,j) {
  
    while (i<10 && j>0 && i<=j) {
          // console.log(i,j);
      console.log(`${text[1]}${text[2]}${text[3]}${text[4]}${text[5]}${text[6]}${text[7]}${text[8]}${text[9]}`);
      text[5+i]="*"
      text[j-5]="*"
      i +=1;
      j -=1;
  }
  }
  
  function bottomDiamond (i,j) {
  
    while (i<10 && j>0 && i!= j) {
          // console.log(i,j);
      text[i]=" "
      text[j]=" "
    console.log(`${text[1]}${text[2]}${text[3]}${text[4]}${text[5]}${text[6]}${text[7]}${text[8]}${text[9]}`);
      i +=1;
      j -=1;
  }
  }
  
  topDiamond(0,10);
  bottomDiamond(1,9);
  