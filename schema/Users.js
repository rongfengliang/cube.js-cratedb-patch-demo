cube(`Users`, {
  sql: `SELECT * FROM doc.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, username]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    username: {
      sql: `username`,
      type: `string`
    }
  }
});
