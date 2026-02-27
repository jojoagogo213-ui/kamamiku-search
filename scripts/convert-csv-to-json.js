const fs = require('fs');
const Papa = require('papaparse');

const csvFile = '../comments_mokuji.csv';  // リポジトリ直下に置くCSV
const jsonFile = '../public/data/comments.json';

Papa.parse(fs.readFileSync(csvFile, 'utf8'), {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
        fs.writeFileSync(jsonFile, JSON.stringify(results.data, null, 2));
        console.log(`✅ 変換完了: ${results.data.length}件`);
    }
});
