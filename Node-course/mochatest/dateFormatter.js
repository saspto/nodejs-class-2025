module.exports.formatDate = function (date) {

    if (!(date instanceof Date) || isNaN(date)) {
    
    return "Error: Invalid date.";
    
    }
    
    const year = date.getFullYear();
    
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
    
    };