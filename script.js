const dateInput = document.getElementById('date');
const timeSelect = document.getElementById('time');

// Példa időpontok
const availableTimes = {
    '2024-10-01': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-02': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-03': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-04': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-07': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-08': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    '2024-10-09': ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
};

// Flatpickr inicializálása
flatpickr(dateInput, {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
        timeSelect.innerHTML = '<option value="">Válasszon időpontot</option>'; // Reset
        if (availableTimes[dateStr]) {
            availableTimes[dateStr].forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    }
});

