cube(`Userapps`, {
  sql: `SELECT * FROM doc.userapps`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, appname]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    appname: {
      sql: `appname`,
      type: `string`
    },
    
    appversion: {
      sql: `appversion`,
      type: `string`
    },
    
    flags: {
      sql: `flags`,
      type: `string`
    }
  }
});
