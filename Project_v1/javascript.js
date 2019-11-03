let money, time;

function start() {
    money = +prompt("Jusu biudzetas menesiui", "");
    time = prompt("Iveskite data YYYY-MM-DD", "");
    while (isNaN(money) || money == "" || money == null) {
        alert("Blogai ivestas biudzetas", "");
        money = +prompt("Jusu biudzetas menesiui", "");
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function () {
        for (i = 0; i < 2; i++) {
            let a = prompt("Iveskite ka turite nusipirkti", "");
            let b = +prompt("Kiek tai kainuos", "");

            if (a != "" && b != "" && !isNaN(b) && typeof (a) != null &&
                typeof (b) != null & a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("error");
                i--;
                alert("Klaida, iveskite is naujo");
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Dienos biudzetas: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Minimalus pajamu dydis");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 1000) {
            console.log("Vidutinis pajamu dydis");
        } else if (appData.moneyPerDay > 1000) {
            console.log("Aukstas pajamu dydis");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Kokia indelio suma", ""),
                percent = +prompt("Koks procentas", "");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Pajamos per menesi nuo indelio: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            opt = prompt("iveskite nebutiniausias islaidas", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Kokios Jusu papildomos pajamos(veskite jas po kablelio", "");
        while (items == "" || items == null) {
            items = prompt("Kokios Jusu papildomos pajamos(veskite jas po kablelio)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Ar kazkuo nepamirsuote?", ""));
        appData.income.sort();
        document.write("Papildomos pajamos:" + "<br/>");
        appData.income.forEach(function (item, index) {
            let number = index + 1;
            document.write(number + ". " + item + "<br/>");
        });

    }
};
for (let key in appData) {
  console.log(key + ": " + appData[key]);
}
