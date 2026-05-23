let darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = function(){

    document.body.classList.toggle("dark-mode");

}
const ctx = document.getElementById('myChart');

if(ctx){

    new Chart(ctx, {

        type: 'bar',

        data: {

            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

            datasets: [{

                label: 'Revenue',

                data: [12, 19, 8, 15, 22],

                borderWidth: 1

            }]
        }

    });

}