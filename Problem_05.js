function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }
    if (students.length === 0) {
        return "Invalid";
    }
    for (let i = 0; i < students.length; i++) {
        let element = students[i]
        if (typeof element !== "object" || element === null) {
            return "Invalid"
        }
        if (!("name" in element) || !("score" in element) || typeof element.score != "number") {
            return "Invalid";
        }
    }
    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}
