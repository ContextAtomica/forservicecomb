// Write JSON array to a file
fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON array is saved.");
});
