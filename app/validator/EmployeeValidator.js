module.exports.validateEmployee = function (employee) {
    if (isNaN(employee.salary)) {
        return "Salary must be a number"
    }

    if ((Number(employee.salary) < 20000 ) || (Number(employee.salary) > 200000)) {
        return "Salary must be at least £20,000 and below £200,000"
    }

    if (employee.bankNo.length != 8) {
        return "Invalid bank number"
    }

    if ((employee.phoneNo.length < 11) || (employee.phoneNo.length) > 13) {
        return "Please enter a valid phone number"
    }

    return null
}