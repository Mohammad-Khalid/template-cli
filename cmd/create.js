const path = require('path');
const ora = require('ora')
const ta = require('../lib/twilio-assistant');

module.exports = async (args) => {

  // if (!args.hasOwnProperty('schema') || !args.hasOwnProperty('template')) {
  //   console.log(`The '--schema/--template' argument is required`)
  //   return
  // }

  //const spinner = ora().start()

  try {

    let schema = args.schema || '',
    profile = args.credentials || "default"
 
    let clonedAssistant = '';

    if(args.hasOwnProperty('template')){

      let url = 'https://raw.githubusercontent.com/Mohammad-Khalid/templates/master/templates.json';

      clonedAssistant = await ta.clone(url);


    }

    // let fullPath = `${path.resolve()}/${schema}`

    // const assistant = await ta.createAssistantFully(fullPath,profile)

    //spinner.stop()   

    console.log(`Assistant was cloned in "${clonedAssistant}"`);
    
  } catch (err) {
    //spinner.stop()

    console.error(`ERROR: ${err}`)
  }
}