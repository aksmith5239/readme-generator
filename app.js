const readmeDataArgs = process.argv.slice(2, process.argv.length);

const printReadmeData = readmeDataArr => {
    readmeDataArr.forEach(readmeItem => console.log(readmeItem));   
};

printReadmeData(readmeDataArgs);