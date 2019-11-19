function createBlacklistService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function BlacklistService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(BlacklistService, factoryCreator, require('./storagedescriptor'));
  
  BlacklistService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  BlacklistService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return BlacklistService;
}

module.exports = createBlacklistService;
