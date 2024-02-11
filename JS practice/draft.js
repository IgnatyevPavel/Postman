// Задания /user_info_3 :
// 1. Отправить запрос
// 2. Статус код 200
pm.test("Код ответа сервера 200", function () {
    pm.response.to.have.status(200);
});

// 3. Спарсить response body (тело ответа сервера) в json.
let resp_body_json = pm.response.json();

// 4. Проверить, что name в ответе равно name из request (name вбить руками.)
pm.test("Check name response = name request", function () {
    pm.expect(resp_body_json.name).to.eql("Pavel");
});

// 5. Проверить, что age в ответе равно age s request (age вбить руками.)
pm.test("Check age response = age request", function () {
    pm.expect(+resp_body_json.age).to.eql(29);
});

// 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)
pm.test("Check salary response = salary request", function () {
    pm.expect(+resp_body_json.salary).to.eql(500);
});
// 7. Спарсить request.
let jsonDataReq = JSON.parse(responseBody);
// 8. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test("Check name response = name request", function () {
    pm.expect(resp_body_json.name).to.eql(jsonDataReq.name);
});

// 9. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test("Check name response = name request", function () {
    pm.expect(resp_body_json.age).to.eql(jsonDataReq.age);
});

// 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test("Check name response = name request", function () {
    pm.expect(resp_body_json.salary).to.eql(jsonDataReq.salary);
});

// 11. Вывести в консоль параметр family из response.
console.log(resp_body_json.family)
// 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test("Your test name", function () {
    pm.expect(resp_body_json.family.u_salary_1_5_year).to.eql(jsonDataReq.salary*4);
});
//---------------------------------------------------------------------------------------------------------

// Задания /user_info_3 :
// 1. Отправить запрос
// 2. Статус код 200
pm.test("Код ответа сервера 200", function () {
    pm.response.to.have.status(200);
});

// 3. Спарсить response body (тело ответа сервера) в json.
var respData = pm.response.json(); // парсим ответ от сервера
console.log(respData); // дебаг

// 4. Проверить, что name в ответе равно name из request (name вбить руками.)
let resp_name = respData.name; 
console.log(resp_name); 

pm.test("Имя в ответе такое же как в запросе", function () {
    pm.expect(resp_name).to.eql("Pavel");
});

// 5. Проверить, что age в ответе равно age s request (age вбить руками.)
let resp_age = respData.age; 
// console.log(resp_age); 
// console.log(typeof(resp_age)); //в ответе приходит стринг

pm.test("Возраст в ответе такой же как в запросе", function () {
    pm.expect(+resp_age).to.eql(29);
});

// 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)
let resp_salary = respData.salary; 
// console.log(resp_salary); 

pm.test("Зарплата в ответе такая же как в запросе", function () {
    pm.expect(resp_salary).to.eql(500);
});

// 7. Спарсить request.
let reqData = request.data
// console.log('данные запроса: ',request.data); 

// 8. Проверить, что name в ответе равно name s request (name забрать из request.)
let req_name = reqData.name; // имя в запросе
// console.log('Имя в запросе: ',req_name); 
pm.test("автоматическая проверка равенства имён ответа и запроса", function () {
    pm.expect(resp_name).to.eql(req_name);
});

// 9. Проверить, что age в ответе равно age s request (age забрать из request.)
let req_age = reqData.age;
// console.log('возраст в запросе: ',req_age); 

pm.test("автоматическая проверка равенства возраста в ответе и запросе", function () {
    pm.expect(resp_age === req_age).to.be.ok;
});
// 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
let req_salary = reqData.salary;
console.log('зарплата в запросе: ',req_salary); 

pm.test("автоматическая проверка равенства зарплат в ответе и запросе", function () {
    pm.expect(resp_salary == req_salary).to.be.ok;
});
// 11. Вывести в консоль параметр family из response.
console.log()
// 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
