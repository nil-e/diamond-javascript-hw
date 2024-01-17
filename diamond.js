// PSEUDOCODE HERE
// 4 blanks 1 asteriks 4 blanks
// Put a space i times then (length-1)/2 times asteriks then i times space again.
// We keep decreasing the i number until it hits 0
// Then we increase it one by one till it's back at 4. 

function topDiamond (width) {
  let emptySpace=" ";
  let asterisk="*";
  let j=(width-1)/2;
  while (j>=0) {
    let text= "";
    for(let i=j; i>0; i--) {
      text+=emptySpace;
    }
    for(let i=width-2*j; i>0; i--)    {
      text+=asterisk;
    }
    for(let i=j; i>0; i--) {
      text+=emptySpace;
    }
    console.log(text);
    j-=1;
  }

}


function bottomDiamond (width) {
  let emptySpace=" ";
  let asterisk="*";
  let j=1;
  // let width=9;
   while (j<5) {
    let text= "";
    for(let i=j; i>0; i--) {
      text+=emptySpace;
    }
    for(let i=width-2*j; i>0; i--)    {
      text+=asterisk;
    }
    for(let i=j; i>0; i--) {
      text+=emptySpace;
    }
    console.log(text);
    j+=1;
  }
}


topDiamond(9);
bottomDiamond(9);
