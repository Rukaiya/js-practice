let x = 1;
try {
    // Reference error
    x = y + 1;
} catch (error) {
    console.log(error.name);
}