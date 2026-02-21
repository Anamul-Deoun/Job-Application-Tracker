let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards')
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section')

// const allFilterBtn = document.getElementById('all-filter-btn');
// allFilterBtn.addEventListener('click', function(){
//     alert('click')
// })

function calculateCount() {
    total.innerText = allCardSection.children.length;

    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-btn', 'btn-color')
    interviewFilterBtn.classList.remove('bg-btn', 'btn-color')
    rejectedFilterBtn.classList.remove('bg-btn', 'btn-color')

    allFilterBtn.classList.add('bg-base-100', 'btn-black')
    interviewFilterBtn.classList.add('bg-base-100', 'btn-black')
    rejectedFilterBtn.classList.add('bg-base-100', 'btn-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-base-100', 'btn-black')
    selected.classList.add('bg-btn', 'btn-color')

    if (id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
    }else if (id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
}

mainContainer.addEventListener('click', function (event) {

    // console.log(event.target.classList.contains('interview-btn'))

    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        const cardTitle = parentNode.querySelector('.card-title').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const deleteBtn = parentNode.querySelector('.delete').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const subText = parentNode.querySelector('.sub-text').innerText;
        const interRejeBtn = parentNode.querySelector('.inter-reje-btn').innerText;

        parentNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            cardTitle,
            position,
            deleteBtn,
            salary,
            status:'Interview',
            subText,
            interRejeBtn
        }

        const companyExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle)

        if (!companyExist) {
            interviewList.push(cardInfo)
        }
        calculateCount()

        renderInterview()
    }

})

function renderInterview() {
    filterSection.innerHTML = ''

    for (let interview of interviewList) {
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'card-body card-border bg-base-100 rounded-lg p-4 sm:p-6 mb-5'
        div.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                        <div>
                            <h2 class="card-title text-color">
                               ${interview.cardTitle}
                            </h2>
                            <p class="position text-neutral/50 text-base mb-2">
                                React Native Developer
                            </p>
                        </div>
                        <img class="delete cursor-pointer w-6" src="./assets/delete.png" alt="">
                    </div>
                    <p class="salary text-neutral/50 mb-4">
                        Remote • Full-time • $130,000 - $175,000
                    </p>
                    <button class="status btn w-29 bg-[#EEF4FF] text-color mb-2">
                        ${interview.status}
                    </button>
                    <p class="sub-text text-neutral/70 mb-5">
                        Build cross-platform mobile applications using React Native.
                        Work on products used by millions of users worldwide.
                    </p>

                    <div class="inter-reje-btn flex flex-wrap gap-2">
                        <button class="interview-btn btn bg-base-100 border-green-500 text-green-500">
                            INTERVIEW
                        </button>
                        <button class="rejected-btn btn bg-base-100 border-red-500 text-red-500">
                            REJECTED
                        </button>
                    </div>
        `
        filterSection.appendChild(div)
    }
}