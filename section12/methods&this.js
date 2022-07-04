// The secret life of objects => goals and methods
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Mat.min(...arr);
    const sum = arr.reduce((a, b) => a + b);
    const avg = sum / arr.length;
    return {
        max, 
        min, 
        sum,
        avg
    }
}