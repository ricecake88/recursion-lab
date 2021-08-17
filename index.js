// Code your solution here!

function printString(string) {
   if (string.length > 1) {
        printString(string.substr(1, string.length));
   } else {
       return(0);
   }
}

function reverseString2(input_str, i=1, newstr="") {
    if (i <= input_str.length) {
        newstr+=input_str[input_str.length-i];
        i+=1;
        return reverseString(input_str, i, newstr);
    } else {
        return newstr;
    }
}


function reverseString(input_str, newstr="") {
    newstr += input_str.substring(input_str.length-1, input_str.length);
    let new_input_str = input_str.substring(0, input_str.length-1);
    if (input_str.length > 0) {
        return reverseString(new_input_str, newstr);
    } else {
        return newstr;
    }


}

function isPalindrome(input_str, beg=0, palindromeState=true) {
    if (beg < Math.floor(input_str.length/2)) {
        if (input_str[beg] === input_str[input_str.length-beg-1]) {
            beg++;
            return isPalindrome(input_str, beg, palindromeState)
        } else {
            palindromeState = false
        }
    }
    return palindromeState;
}

function addUpTo(intArray, maxIndex, sum=0) {
    sum += intArray[maxIndex]
    maxIndex-=1
    if (maxIndex >= 0) {
        return addUpTo(intArray, maxIndex, sum)
    }
    return sum;
}

function maxOf(arrInt, largestNum=0, idx=0) {
    if (arrInt[idx] > largestNum) {
        largestNum = arrInt[idx];
    }
    idx++;
    if (idx < arrInt.length) {
        return maxOf(arrInt, largestNum, idx);
    } else {
        return largestNum;
    }
}

function includesNumber(intArray, num, i=0) {
    if (i < intArray.length) {
        if (num === intArray[i]) {
            return true;
        } else {
            i++;
            return includesNumber(intArray, num, i);
        }
    } else {
        return false;
    }
}