function generateRandomEmail(){
    const randomString = Math.random().toString(36).sunstring(2,10)
    const randomEmail = randomString + "@gmail.com"
    return randomEmail
}

module.exports = generateRandomEmail;