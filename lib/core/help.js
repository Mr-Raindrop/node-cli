const helpOptions = (program) => {
    program.option('-w|--why', 'a why cli');
    program.option('-d, --dest <dest>', 'a destination folder, 例如： -d /src/componets');
    program.option('-f --framework <framework>', 'your framework');
    program.on('--help', function () {
        console.log("");
        console.log("Other:");
        console.log("   other options");
    });
}

module.exports = helpOptions;