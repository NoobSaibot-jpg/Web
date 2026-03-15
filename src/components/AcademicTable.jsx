import React from 'react';

const AcademicTable = () => {
  const courses = [
    { name: "Математична логіка", teacher: "Татарінова О.А.", grade: 82 },
    { name: "Організація баз данних", teacher: "Мартиненко Г.Ю.", grade: 93 },
    { name: "Технології програмування", teacher: "Шаповалова М.І.", grade: 88 },
    { name: "Іноземна мова", teacher: "Нетецька Т.М.", grade: 90 },
    { name: "Правознавство", teacher: "Кузьменко О.В.", grade: 90 },
    { name: "Програмування комп'ютерної графіки", teacher: "Марусенко О.М.", grade: 95 },
    { name: "Програмування GUI", teacher: "Дашкевич А.О.", grade: 60 },
    { name: "Фізична культура", teacher: "Азаренкова Л.Л.", grade: 65 },
  ];

  return (

    <div className="section">
      <h3>Мої успіхи у навчанні</h3>
      <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Назва предмета</th>
            <th>Прізвище викладача</th>
            <th>Оцінка</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.teacher}</td>
              <td>{course.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AcademicTable;
