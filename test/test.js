const Parser = require('../index.js');

async function test(ex) {
    let parser = new Parser(ex);

    try {
        let res = await parser.fromPath(__dirname + `/data/${ex}.csv`);
        console.log(res);
    } catch (err) {
        console.log(`Error parsing ${ex}`);
    }
}

test('poloniex');