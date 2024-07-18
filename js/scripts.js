// Ini Js

function updateResult() {
    let weightValue = document.querySelector('#input-berat-badan').value;
    let heightValue = document.querySelector('#input-tinggi-badan').value;
    let result, category;

    if (weightValue != null && weightValue != '' && heightValue != null && heightValue != '') {
        let heightInMeters = parseFloat(heightValue) / 100;
        result = parseFloat(weightValue) / (heightInMeters * heightInMeters);
        result = result.toFixed(1);

        if (result < 18.5) {
            category = 'Kekurangan berat badan';
        } else if (result >= 18.5 && result <= 24.9) {
            category = 'Berat badan normal';
        } else if (result >= 25 && result <= 29.9) {
            category = 'Kelebihan berat badan';
        } else {
            category = 'Obesitas';
        }

        document.querySelector('#bmi-value').innerHTML = result;
        document.querySelector('#bmi-category').innerHTML = category;
    } else {
        alert('Pastikan isi semua data dengan benar!');
    }
}

function resetForm() {
    document.querySelector('#bmi-form').reset();
    document.querySelector('#bmi-value').innerHTML = '0';
    document.querySelector('#bmi-category').innerHTML = '';
}
