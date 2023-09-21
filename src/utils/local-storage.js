export const loadState = () => {
    try {
        const state = localStorage.getItem('items');
        if(!state) return undefined;
        
        return JSON.parse(state);
    } catch (error) {
        console.log(error);
    }
}

export const saveState = (items) => {
    try {
        const serializedData = JSON.stringify(items);
        localStorage.setItem('items', serializedData);
    } catch (error) {
        console.log(error);
    }
}