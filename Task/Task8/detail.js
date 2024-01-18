 document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('submitBtn').addEventListener('click', function () {
                var name = document.getElementById('employeeName').value;
                var position = document.getElementById('employeePosition').value;
                var salary = document.getElementById('employeeSalary').value;

                if (name && position && salary) {
                    var xhr = new XMLHttpRequest();
                   
                    xhr.setRequestHeader('Content-Type', 'application/json');

                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            document.getElementById('response').innerHTML = xhr.responseText;
                        } else {
                            document.getElementById('response').innerHTML = 'Error submitting employee details. Please try again.';
                        }
                    };

                    xhr.onerror = function () {
                        document.getElementById('response').innerHTML = 'Error submitting employee details. Please try again.';
                    };

                   
                } else {
                    alert('Please fill out all fields.');
                }
            });
        });