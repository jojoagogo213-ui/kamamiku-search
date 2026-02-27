const fs = require('fs');
const Papa = require('papaparse');

const csvFile = '../../comments_mokuji.csv';  // リポジトリ直下
const jsonFile = '../public/data/comments.json';

try {
    const csvContent = fs.readFileSync(csvFile, 'utf8');
    const results = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true
    });
    
    fs.writeFileSync(jsonFile, JSON.stringify(results.data, null, 2));
    console.log(`✅ 変換完了: ${results.data.length}件`);
} catch (error) {
    console.error('❌ エラー:', error.message);
    process.exit(1);
}
