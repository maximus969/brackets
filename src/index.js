module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];

    let object = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        object[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    for (let j = 0; j < str.length; j++) {
      // console.log(`j=${j}, ${stack}`)
        let char = str[j];
        let len = stack.length;

        if (char === object[char]) {
            if (stack[len - 1] !== char) {
                stack.push(char);
            } else {
                stack.pop();
            }
        } else if (object[char] !== undefined) {
            stack.push(char);
        } else if (Object.values(object).includes(char)) {
            if (object[stack.pop()] !== char) {return false;}
        }
    }
    return stack.length === 0;
};
