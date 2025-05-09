const { app } = require('@azure/functions');
const axios = require('axios');
app.timer('DailySleepCheck', {
    schedule: '0 0 0 * * *',  
    handler:async (myTimer, context) => {
        context.log('Timer function processed request.');
        try{   
        const respone=await axios.post("https://solara-azh3gzava8a0dvdr.canadacentral-01.azurewebsites.net/api/v1/Sleep/cron")
        const stake=await axios.post("https://solara-azh3gzava8a0dvdr.canadacentral-01.azurewebsites.net/api/v1/Step/cron");
        const sleep=await axios.post("https://solara-azh3gzava8a0dvdr.canadacentral-01.azurewebsites.net/api/v1/Stake/cron");
        console.log(respone.data);
        console.log(stake.data);
        console.log(sleep.data);
    }catch(err){
        console.log(err);
    }
    }
});
