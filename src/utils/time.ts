export interface TimePoint {
    hours: number,
    minutes: number,
    seconds: number
}


export const getTimeValues = (value: number, ms: boolean): TimePoint => {
    if(ms) value = value/1000;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    hours = Math.floor(value / 3600);
    value -= hours * 3600;

    minutes = Math.floor(value / 60);
    value -= 60 * minutes;

    seconds = value;

    return {
        hours,
        minutes,
        seconds
    };
}



export interface TimeAgoPoint {
    time: number,
    text: string
}

export const getTimeAgo =(num: number, ms: boolean): TimeAgoPoint=>{
    const givenTime: TimePoint = getTimeValues(num, ms);
    let time: number;
    let text: string;
    if(givenTime.hours > 0){
        time = givenTime.hours;
        if(givenTime.hours >= 2){
            text = 'hours';
        }else{
            text = 'hour';
        }
    }else if(givenTime.minutes > 0){
        time = givenTime.minutes;
        if(givenTime.minutes >= 2){
            text = 'minutes';
        }else{
            text = 'minute';
        }
        
    }else{
        console.log(givenTime);
        time = givenTime.seconds;
        if(givenTime.seconds >= 2){
            text = 'seconds';
        }else{
            text = 'second';
        }
        console.log(text);
    }
    time = Math.floor(time);
    return  {
        time,
        text
    }
}


export default {getTimeAgo, getTimeValues}