function createPreprocessor(logger) {
  var log = logger.create('preprocessor.null');

  function preprocess(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);

    done(null, ' ');
  }

  return preprocess;
}

createPreprocessor.$inject = ['logger'];

module.exports = {
  'preprocessor:null': ['factory', createPreprocessor]
};
