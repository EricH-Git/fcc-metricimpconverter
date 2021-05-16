function ConvertHandler() {
  
  this.getNum = function(input) {
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
    let result;
    const units = [ 'kg', 'gal', 'mi', 'km', 'lbs', 'l' ];
    result = input.replace(/[^a-zA-Z]/g,'').toLowerCase();
    if (!units.includes(result))  { return result = 'invalid unit' };
    switch (result) {
      case 'l':
      case 'kg':
      case 'km':
        result = result.charAt(0).toUpperCase() + result.slice(1);
        break;
      }


    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch (initUnit) {
      case 'Kg':
        result = 'lbs'
        break;
      case 'lbs':
        result = 'Kg';
        break;
      case 'Km':
        result = 'mi';
        break;
      case 'mi':
        result = 'Km';
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
      case 'Kg':
        result = 'kilograms'
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'Km':
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
    lbsToKg: 0.453592,
    miToKm: 1.60934
    }
    let result;
    let reg = new RegExp(initUnit);
    const conKey = Object.keys(conObj).find(key => key.match(reg));
    if (conKey.indexOf(initUnit) > 0) {
      result = parseFloat(initNum / conObj[conKey]).toFixed(6);
    } else {
      result = parseFloat(initNum * conObj[conKey]).toFixed(6);
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
