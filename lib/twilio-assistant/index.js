const createAssistantFully = require('./createAssistantFully'),
      gitTemplates = require('./get-templates');

module.exports = Object.assign({},
  createAssistantFully,
  gitTemplates
);