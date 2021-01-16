const fs = require('fs');

const ICONS_LIST_DIRECTORY = 'src/structure/icons/';
const FILE_NAME = 'icons-list.json';
const GENERATED_JSON_PATH = 'src/structure/icons/';

const object = {
  icons: [],
};

fs.readdir(ICONS_LIST_DIRECTORY, (err, files) => {
  files.forEach((file) => {
    if (file != FILE_NAME && file.substr(0, 1) !== '.') {
      const fileName = file.replace('.js', '');
      object.icons.push({ file: file, name: fileName });
    }
  });
  const json = JSON.stringify(object);
  fs.writeFile(GENERATED_JSON_PATH + FILE_NAME, json, 'utf8', (err) => {
    console.log(
      `\nSVG list successfully generated in ${
        GENERATED_JSON_PATH + FILE_NAME
      }\n`,
    );
  });
});
