module.exports = (argv) => {
    if(argv.length < 7) {
        throw new Error("Not enough arguments!");
    }
    return {
        env: argv[2],
        project: argv[3],
        portainersystem: `${argv[7]}/api` || "http://localhost:9000/api",
        user: argv[4],
        password: argv[5],
        compose: argv[6]
    };
};