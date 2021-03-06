const assert = require('assert');
const expect = require('chai').expect;
const path = require('path');
const files = require('../lib/files');

const ta = require("../lib/twilio-assistant");

describe('Twilio Autopilot CLI Module Tests', () => {
  let assistant = {}, profile = 'default';
  before(() => {
    
  })
  after(() => {
    files.removeFile(path.join(process.cwd(),`${assistant.uniqueName}.json`));
    files.removeFile(path.join(process.cwd(),`Twilio-Basic-Starter.json`));
  })
  describe('#createAssistant()', () => {
    it('create assistant', async () => {
      let fullPath = `${path.resolve('test/test_assistant.json')}`
      assistant = await ta.createAssistantFully(fullPath,profile);
      expect(assistant).to.have.property('sid');
    });
  });

  describe('#getAssistants()', () => {
    it('list assistants', async () => {
      const assistants = await ta.listAssistants(profile);
      expect(assistants.length).to.be.greaterThan(0, 'no assistants found');
    });
  });

  describe('#exportAssistant()', () => {
    it('export assistant', async () => {
      const export_assistant = await ta.exportAssistant(assistant.sid, profile);
      expect(export_assistant).to.have.property('sid');
    });
  });

  describe('#updateAssistant()', () => {
    it('update assistant', async () => {

      const schemaPath = path.join(process.cwd(),`${assistant.uniqueName}.json`);
      const update_assistant = await ta.updateAssistant(schemaPath, profile);
      expect(update_assistant).to.have.property('sid');
    });
  });

  describe('#deleteAssistant()', () => {
    it('delete assistant', async () => {

      const delete_assistant = await ta.deleteAssistantFully(assistant.sid, profile);
      expect(delete_assistant).to.be.true;
    });
  });

  describe('#importAssistant()', () => {
    it("import DialogFlow Assistant", async () => {

      let fullPath = `${path.resolve('test/Twilio-Basic-Starter.zip')}`,
          name = `Twilio-Basic-Starter`;
      const filename = await ta.importAssistant(fullPath,name);
      expect(filename).to.be.eq('Twilio-Basic-Starter.json');
    })
  })


});