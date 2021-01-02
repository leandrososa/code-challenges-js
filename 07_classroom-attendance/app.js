'use strict';

const classroom = {
    hasTeachingAssistant: true,
    classList: [
        "Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"
    ]
}

const getStudents = function(classroom) {

    let {hasTeachingAssistant, classList} = classroom;

    let teacher = '';
    let assistant = '';
    let attendance = [];

    if (hasTeachingAssistant) {
        [teacher, assistant, ...attendance] = classList;
    } else {
        [teacher, ...attendance] = classList;
    }

    return attendance;
}

console.log(getStudents(classroom));