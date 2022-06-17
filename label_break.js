outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        if (i + j == 5) {
            break outer;
        }

        console.log(i, j);
    }
}