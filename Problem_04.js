function bonusScore(scores) {
    let bonus = 10;
    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid";
    }
    for (let i = 0; i < scores.length; i++) {
        if (typeof scores[i] != "number") {
            return "Invalid"
        }
    }
    let bonusScoreStore = scores.map(score => {
        return score += bonus;
    })

    let totalScore = bonusScoreStore.reduce((accumulator, element) => {
        return accumulator += element;
    })

    return totalScore;
}
console.log(bonusScore([80, 65, 90, 75]))
