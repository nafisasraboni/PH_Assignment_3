function filterActiveUsers(users) {
    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid"
    }

    for (let i = 0; i < users.length; i++) {
        if (typeof users[i] != "object" || users[i] === null || Array.isArray(users[i]) || !("isActive" in users[i])) {
            return "Invalid";
        }
    }
    let activeUser = users.filter(user => {
        if ((user.isActive === true)) {
            return true
        }
    })
    return activeUser;
}
console.log(filterActiveUsers([
    { name: "A", isActive: true },
    { name: "B", isActive: false }
]
))
