function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log('init-num-input = ', input);
    let result;
    let inpNum = input.replace(/[a-zA-Z]/g,'');
    if (!inpNum) { 
      result = 1
    } else if (inpNum.indexOf('/') >= 0) { 
      splitNum = inpNum.split('/');
      if (splitNum.length > 2) { return 'invalid number'  };
      result = parseFloat(splitNum[0] / splitNum[1]);
     } else {
      result = parseFloat(inpNum);
     }
    return result;
  };
  
  this.getUnit = function(input) {
    console.log('init-unit-input = ', input);
    let result;
    const units = [ 'kg', 'gal', 'mi', 'km', 'lbs', 'l' ];
    result = input.replace(/[^a-zA-Z]/g,'').toLowerCase();
    if (!units.includes(result))  { return result = 'invalid unit' };
    if (result === 'l') { result = 'L' };
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case 'kg':
        result = 'lbs'
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
        break;
      default:
        result = 'invalid unit';
        break;
      
    };
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit) {
      case 'kg':
        result = 'kilograms'
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'litres';
        break;
      case 'gal':
        result = 'gallons';
        break;
      default:
        result = 'invalid unit';
        break;
    };
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const conObj = {
    galToL: 3.78541,
    lbsTokg: 0.453592,
    miTokm: 1.60934
    }
    let result;
    let reg = new RegExp(initUnit);
    const conKey = Object.keys(conObj).find(key => key.match(reg));
    if (conKey.indexOf(initUnit) > 0) {
      result = parseFloat((initNum / conObj[conKey]).toFixed(5));
    } else {
      result = parseFloat((initNum * conObj[conKey]).toFixed(5));
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
