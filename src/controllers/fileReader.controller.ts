const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const maxLineFile = Number(process.env.FILE_MAX_READ);
class FileReaderController {
  public buildDocument(data: Array<Object>) {
    var arrayNames = Object.keys(data[0]);
    var headers = new Array();
    arrayNames.forEach(function (value) {
      headers.push({ id: value, title: value })
    });
    this.recursiveExport(0, maxLineFile, data, headers)
  }
  private recursiveExport(ini: number, fin: number, data: Array<Object>, headers: Array<Object>) {
    var csvWriter = createCsvWriter({
      path: './src/outputs/api' + ini + '-' + fin + '.csv',
      header: headers
    });
    csvWriter
      .writeRecords(data.slice(ini, fin < data.length ? fin : data.length - 1))
      .then(() => console.log('The CSV from positions ' + ini + '-' + fin + ' was created'));

    if (fin < data.length)
      this.recursiveExport(fin, fin + maxLineFile, data, headers)
  }
}

export const fileReaderController = new FileReaderController(); 