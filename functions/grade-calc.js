// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

// ある条件分岐を満たした時点で、それより後の分岐は検討されないので、scoreRate >= 80 && scoreRate <= 89 とする必要はない
// 条件分岐のスコープから、外のスコープの値にはアクセスできるので、値を代入している
// gradeやreturnを1つにまとめることでチェックやメンテナンスをしやすくする

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    
    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade='B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let result = gradeCalc(10, 20)
console.log(result)

/*let gradeCalc = function (studentScore, totalPossibleScore) {
    let scoreRate = studentScore / totalPossibleScore * 100
    let grade = ''
    
    if (scoreRate >= 90 && scoreRate <= 100) {
        // A
        return `You got a ${grade[0]} (${scoreRate}%)!`
    } else if (scoreRate >= 80 && scoreRate <= 89) {
        // B
        return `You got a ${grade[1]} (${scoreRate}%)!`
    } else if (scoreRate >= 70 && scoreRate <= 79) {
        // C
        return `You got a ${grade[2]} (${scoreRate}%)!`
    } else if (scoreRate >= 60 && scoreRate <= 69) {
        // D
        return `You got a ${grade[3]} (${scoreRate}%)!`
    } else {
        // E
        return `You got a ${grade[4]} (${scoreRate}%)!`
    }
    
}*/

