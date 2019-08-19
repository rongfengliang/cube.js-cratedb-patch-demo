cube(`joinapp`, {
    sql: `select a.id,a.appname,a.appversion, a.flags from doc.userapps a join doc.users b on a.id=b.id limit 100`,

    measures: {
      count: {
        type: `count`,
        drillMembers: [id, appname]
      }
    },
    
    dimensions: {
      id: {
        sql: `id`,
        type: `number`
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
  