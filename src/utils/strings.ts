export function capsizeFirst(string: string){
    return string.split('')[0].toLocaleUpperCase() + string.split('').slice(1).join('');
}