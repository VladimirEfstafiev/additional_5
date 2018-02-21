module.exports =function check(str, brackets) {
    let stack = [];
    for (let i in str) {
        let currentEl = str[i];
        for (let j in brackets) {
                if (currentEl == brackets[j][1]) {
                    if (brackets[j][0] != brackets[j][1]) {
                    if (stack[stack.length - 1] == brackets[j][0]) {
                        stack.pop();
                    } else {
                        return false;}
                    }else{
                        if (stack[stack.length - 1] == brackets[j][0]) {
                                stack.pop();
                            }else{
                                stack.push(currentEl);
                            }
                        }
                } else if (currentEl == brackets[j][0]) {
                    stack.push(currentEl);
                }
            }
    }
    if (stack.length == 0) {
        return true
    };
    return false;
}