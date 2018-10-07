export const INCREASE='INCREASE';
export const DECREASE='DECREASE';
 
export function increaseActionFunc(){
    return {
        type:INCREASE,
    }
}
 
export function decreaseActionFunc(){
    return {
        type:DECREASE,
    }
}
