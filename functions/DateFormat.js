const date = (d) => {
    const eventDate = new Date(Date.now() + d);
    const today = new Date();
    const year = eventDate.getFullYear();
    let day = eventDate.getDay();
    let month = eventDate.getMonth();
    if(
        today.getDay() === eventDate.getDay() &&
        today.getMonth() === eventDate.getMonth() &&
        today.getFullYear() === eventDate.getFullYear()
    ) {
        return "Aujourd'hui";
    } else if (
        today.getDay() -1 === eventDate.getDay() &&
        today.getMonth() === eventDate.getMonth() &&
        today.getFullYear() === eventDate.getFullYear()
    ) {
        return 'Hier';
    } else {
        return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}`: month}/${year}`;
    }
}

module.exports = date;