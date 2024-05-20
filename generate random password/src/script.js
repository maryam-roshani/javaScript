/* Function to generate combination of password */
function generatePass() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const str2 = 'abcdefghijklmnopqrstuvwxyz'
    const str3 = '0123456789'
    const str4 = '!@#$%'

    let char1 = Math.floor(Math.random() * str1.length + 1);
    pass += str1.charAt(char1)

    let char2 = Math.floor(Math.random() * str2.length + 1);
    pass += str2.charAt(char2)

    let char3 = Math.floor(Math.random() * str3.length + 1);
    pass += str3.charAt(char3)

    let char4 = Math.floor(Math.random() * str4.length + 1);
    pass += str4.charAt(char4)

    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() *
            str.length + 1);

        pass += str.charAt(char)
    }
    return pass;
}

console.log(generatePass());