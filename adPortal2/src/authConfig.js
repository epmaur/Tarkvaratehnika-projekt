var configForDevelopment = {
    providers: {
        google: {
            url: 'http://localhost:8080/googleauth',
            clientId: '661115396114-g2gskun6b0l7cuit2978rs51p21hpjp7.apps.googleusercontent.com'
        }
        
    }
};
/*
var configForProduction = {
    providers: {
        google: {
            clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
        }
        ,
        linkedin:{
            clientId:'7561959vdub4x1'
        },
        facebook:{
            clientId:'1653908914832509'
        }

    }
};*/
var config ;
if (window.location.hostname==='localhost') {
    config = configForDevelopment;
}
/*
else{
    config = configForProduction;
}*/


export default config;