module.exports = (url) => {

    if(!url) url += "http://localhost:9000/api";

    if(!url.includes("api")) {
        if(url.endsWith("/")) url += "api"; 
        else url += "/api";
    } else if(url.endsWith("/")) {
        url = url.substring(0, (url.length-1));
    }

    if(!url.startsWith("http")) url = "http://" + url;

    return url;
};