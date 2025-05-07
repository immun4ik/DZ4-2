export function sortHeroesByHealth(heroes) {
    if (!Array.isArray(heroes)) {
        return []; 
    }

    return [...heroes].sort((a, b) => b.health - a.health); 
}