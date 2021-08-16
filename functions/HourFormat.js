const hour = (d) => {
    const eventDate = new Date(Date.now() + d);
    let hour = eventDate.getHours();
    let minutes = eventDate.getMinutes();
    return `${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`
}   

module.exports = hour;