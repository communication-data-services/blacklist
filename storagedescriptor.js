module.exports = {
  primaryKey: 'recipient',
  record:{
    fields:[{
      name: 'recipient',
      type: 'string'
    },{
      name: 'sendingsystem',
      type: 'string'
    },{
      name: 'created',
      type: 'integer',
      default: '{{Date.now()}}'
    },{
      name: 'reason',
      type: 'number'
    }]
  }
};
