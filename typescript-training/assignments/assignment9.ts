/* Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
    *
   **
  ***
 ****
***** */
let rows:number=5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern += "*";
    }

    console.log(pattern);
}

/* 
*****
 ****
  ***
   **
    * */
for (let i = rows; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= rows-i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern += "*";
    }

    console.log(pattern);
}


/* 
    1
   12
  123
 1234
12345 */

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern += k;
    }
    console.log(pattern);
}

/* 
    1
   22
  333
 4444
55555 */

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern += i;
    }
    console.log(pattern);
}

/* 
*
**
***
****
*****    */

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

/* 
1
12
123
1234
12345 */

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}

/* 
1
22
333
4444
55555 */

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}

/* 
*
*  *
*  *  *
*  *  *  *
*  *  *  *  * */

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
    
  /* 
 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
 *  *  *  *
 *  *  *
 *  *
 * 
   */
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
for (let i = rows-1; i >=1 ; i--) {
    let pattern = "";
    for (let j = i; j >= 1; j--) {
        pattern += "* ";
    }
    console.log(pattern);
}
/* 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *    */

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2*i)-1; k++) {
        pattern += "*";
    }

    console.log(pattern);
}
for (let i = rows-1; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= rows-i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2*i)-1; k++) {
        pattern += "*";
    }

    console.log(pattern);
}

/* 
    1
   222
  33333
 4444444
555555555
 4444444
  33333
   222
    1 */

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2*i)-1; k++) {
        pattern += i;
    }

    console.log(pattern);
}
for (let i = rows-1; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= rows-i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2*i)-1; k++) {
        pattern += i;
    }

    console.log(pattern);
}
    