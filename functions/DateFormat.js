const date = (d) => {
    const eventDate = new Date(Date.now() - d);
    const today = new Date();
    const diffTime = Math.abs(today - eventDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(
        today.getDate() === eventDate.getDay() &&
        today.getMonth() === eventDate.getMonth() &&
        today.getFullYear() === eventDate.getFullYear()
    ) {
        return "Aujourd'hui";
    } else if (
        today.getDate() -1 === eventDate.getDay() &&
        today.getMonth() === eventDate.getMonth() &&
        today.getFullYear() === eventDate.getFullYear()
    ) {
        return 'Hier';
    } else {
        return `Il y a ${diffDays} jours`;
    }
}

module.exports = date;