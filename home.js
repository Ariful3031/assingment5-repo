

const historyData = [];
// history Data container function
function historyDataInput(college) {
    const historyContainer = document.getElementById("history-container")
    historyContainer.innerText = "";
    for (const data of historyData) {
        const createDiv = document.createElement("div")
        createDiv.innerHTML = `
          <div class="flex justify-between items-center  bg-[#FAFAFA] mt-3 px-3 py-2 rounded-xl">
                <div class="p-3 rounded-full">
                    <h1 class="text-[20px] text-[#111111] font-semibold">${data.name}</h1>
                    <p class="text-[#5C5C5C]">${data.number}</p>
                </div>
                <p class="text-[#111111]">${data.date}</p>

            </div>
      
            `
        historyContainer.appendChild(createDiv)
    }
}
// button History Clear
document.getElementById('btn-history-clear').addEventListener('click', function (event) {
    event.preventDefault()
    document.getElementById('history-container').innerText = "";
})


// service-tittle-name-function


function serviceTittleName(input7) {
    const economic = document.getElementById(input7).innerText;
    return (economic);
}


// Heart Button Section Starts
// button one Heart
document.getElementById("btn-heart-one").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button two Heart
document.getElementById("btn-heart-two").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})



// button three Heart
document.getElementById("btn-heart-three").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button five Heart
document.getElementById("btn-heart-five").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button six Heart
document.getElementById("btn-heart-six").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button seven Heart
document.getElementById("btn-heart-seven").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button eight Heart
document.getElementById("btn-heart-eight").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button nine Heart
document.getElementById("btn-heart-nine").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// button ten Heart
document.getElementById("btn-heart-ten").addEventListener("click", function (event) {
    event.preventDefault()
    const mainAmount = parseInt(document.getElementById("heart-main-amount").innerText)
    const newAmount = mainAmount + 1;
    document.getElementById('heart-main-amount').innerText = newAmount;

})


// call button  all function
function callOfficeNumber(callInput) {
    const officeNumber = document.getElementById(callInput).innerText
    return (officeNumber);
}

// btn-call-one
document.getElementById("btn-call-one").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-one");
    const helpline = callOfficeNumber("office-number-one");

    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin
    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-one");


})

// btn-call-two
document.getElementById("btn-call-two").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-two");
    const helpline = callOfficeNumber("office-number-two");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-two");


})

// btn-call-three
document.getElementById("btn-call-three").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-three");
    const helpline = callOfficeNumber("office-number-three");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-three");


})

// btn-call-five
document.getElementById("btn-call-five").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-five");
    const helpline = callOfficeNumber("office-number-five");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-five");
})

// btn-call-six
document.getElementById("btn-call-six").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-six");
    const helpline = callOfficeNumber("office-number-six");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-six");


})

// btn-call-seven
document.getElementById("btn-call-seven").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-seven");
    const helpline = callOfficeNumber("office-number-seven");
    alert("Calling " + serviceTittle + helpline + " ......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-seven");


})

// btn-call-eight
document.getElementById("btn-call-eight").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-eight");
    const helpline = callOfficeNumber("office-number-eight");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-eight");


})

// btn-call-nine
document.getElementById("btn-call-nine").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-nine");
    const helpline = callOfficeNumber("office-number-nine");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-nine");


})

// btn-call-ten
document.getElementById("btn-call-ten").addEventListener("click", function (event) {
    event.preventDefault()
    const countMainCoin = parseInt(document.getElementById("count-main-coin").innerText)
    if (countMainCoin < 20) {
        alert("আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে 20 টা কয়েন লাগবে")
        return;
    }
    const serviceTittle = serviceTittleName("service-tittle-ten");
    const helpline = callOfficeNumber("office-number-ten");
    alert("Calling " + serviceTittle + helpline + "......")
    const newCountMainCoin = countMainCoin - 20;
    document.getElementById("count-main-coin").innerText = newCountMainCoin

    const data = {
        name: serviceTittle,
        number: helpline,
        date: new Date().toLocaleTimeString()
    };
    historyData.push(data);
    historyDataInput("btn-call-ten");


})

// btn copy section starts
// function btn copy + count copy

function selectToCopy(inputPaste) {
    const callNumber = document.getElementById(inputPaste).innerText
    const createTextarea = document.createElement("textarea");
    createTextarea.value = callNumber;
    createTextarea.setAttribute("readonly", "");
    document.body.appendChild(createTextarea);
    createTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(createTextarea);
    alert("নাম্বার কপি হয়েছে: " + callNumber)
    const addedCopyBalance = countMainCopyCall("count-main-copy")
}
//  countMainCopyCall
function countMainCopyCall(inputCopy) {
    const countMainCopy = parseInt(document.getElementById(inputCopy).innerText)
    const newCountMainCopy = countMainCopy + 1;
    document.getElementById("count-main-copy").innerText = newCountMainCopy;
    return (countMainCopy);
}
// btn copy one
document.getElementById('btn-copy-one').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-one");
})
// btn-copy-two
document.getElementById('btn-copy-two').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-two");
})
// btn-copy-three
document.getElementById('btn-copy-three').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-three");
})
// btn-copy-five
document.getElementById('btn-copy-five').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-five");
})
// btn-copy-six
document.getElementById('btn-copy-six').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-six");
})
// btn-copy-seven
document.getElementById('btn-copy-seven').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-seven");
})
// btn-copy-eight
document.getElementById('btn-copy-eight').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-eight");
})
// btn-copy-nine
document.getElementById('btn-copy-nine').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-nine");
})
// btn-copy-ten
document.getElementById('btn-copy-ten').addEventListener('click', function (event) {
    const callNumber = selectToCopy("office-number-ten");
})




