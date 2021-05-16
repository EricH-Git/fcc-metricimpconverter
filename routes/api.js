'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');


module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get( async (req, res) => {
    const { input } = req.query;
    const initNum = await convertHandler.getNum(input);
    const initUnit = await convertHandler.getUnit(input);
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
        return res.send('invalid number and unit');
      } else if(initUnit === 'invalid unit') {
        return res.send(initUnit);
      } else if (initNum === 'invalid number') {
        return res.send(initNum);
      } else {
        const returnNum = await convertHandler.convert(initNum, initUnit);
        const returnUnit = await convertHandler.getReturnUnit(initUnit);
        const string = await convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        return res.json({ initNum, initUnit, returnNum, returnUnit, string })
      
      };

  });




};
