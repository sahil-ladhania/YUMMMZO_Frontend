
export const convertTo12HourFormat = (time) => {
    const date = new Date(`1970-01-01T${time}:00Z`);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', options);
    return formattedTime;
}