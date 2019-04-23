const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

var _progress = require("cli-progress");
var _colors = require("colors");
var async = require("async");

var WRONG_WORDS = [];
var LOCAL_DIC_WORDS = [];
var TARGET_WORDS = [];
var ALL_WORDS = [];

const _localDictionaryFileName = "dictionary/local-dictionary.txt";
const _dictionaryFileName = "dictionary/en_US.txt";

const fileNames = process.argv.splice(2);

const gbProgressBar = (function() {
  // create new progress bar
  var b1 = new _progress.Bar({
    format:
      "Checking words |" +
      _colors.cyan("{bar}") +
      "| {percentage}% || {value}/{total} Words",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true
  });
  return {
    init: function(totalCount) {
      console.log("");
      b1.start(totalCount, 0);
    },
    update: function(value) {
      b1.update(value);
    },
    stop: function() {
      b1.stop();
    },
    getTotal: function() {
      return b1.getTotal();
    }
  };
})();

async function isExists(fs, fileName) {
  var valid = true;
  await fs.stat(fileName, function(err, fileStat) {
    if (err) {
      if (err.code == "ENOENT") {
        console.log(chalk.red(fileName + " Does not exist."));
        valid = false;
      }
    } else {
      if (fileStat.isFile()) {
        // resolve();
      } else if (fileStat.isDirectory()) {
        console.log(chalk.red(fileName + " Directory found."));
        valid = false;
      }
    }
    // resolve();
  });
  return valid;
}

console.log("fileNames " + fileNames.join(","));


var targetFileName = fileNames[0];

const readDictionary = async function() {
  var fs = require("fs");
  await isExists(fs, _dictionaryFileName);
  fs.readFile(_dictionaryFileName, "utf-8", function(err, buf) {
    var fileContents = buf.toString().toLocaleLowerCase();
    ALL_WORDS = fileContents.match(/\w+/gm);
    readLocalDictionary();
  });
};

const readLocalDictionary = async function() {
  var fs = require("fs");
  await isExists(fs, _localDictionaryFileName);
  fs.readFile(_localDictionaryFileName, "utf-8", function(err, buf) {
    var fileContents = buf.toString().toLocaleLowerCase();
    LOCAL_DIC_WORDS = fileContents.match(/\w+/gm);
    readTargetFile();
  });
};

const readTargetFile = function() {
  var fs = require("fs");
  fs.readFile(targetFileName, "utf-8", function(err, buf) {
    var fileContents = buf.toString().toLocaleLowerCase();
    TARGET_WORDS = fileContents.match(/\w+/gm);
    gbProgressBar.init(TARGET_WORDS.length);

    WRONG_WORDS = TARGET_WORDS.filter((item, index) => {
      gbProgressBar.update(index);
      //if it is a number
      if (/\d+/g.test(item)) {
        return false;
      }
      //if multiwords separated by underscore like key of a json
      if (item.indexOf("_") != -1) {
        return false;
      }
      // if it is in local dictionary
      if (LOCAL_DIC_WORDS.indexOf(item) != -1) {
        return false;
      }

      return ALL_WORDS.indexOf(item) == -1;
    });

    gbProgressBar.stop();
    var uniqueWords = new Set(WRONG_WORDS);
    console.log(chalk.red([...uniqueWords].length + " wrong words founds"));
    console.log(chalk.green([...uniqueWords]));
  });
};

async function spelCheckInFile() {
  clear();
  console.log(
    chalk.yellow(figlet.textSync("Glassbeam", { horizontalLayout: "full" }))
  );

  if (!fileNames.length) {
    console.log(chalk.red("Target file(s) does not found"));
    return false;
  } else if (fileNames.length > 1) {
    console.log(chalk.red("You can not test more than one file at a time!"));
    return false;
  } else {
    let fs = await require("fs");
    if (!(await isExists(fs, fileNames[0]))) {
      console.log(chalk.red("File not found!"));
      return false;
    }
  }

  readDictionary();
}

//startChecking();
module.export = spelCheckInFile;