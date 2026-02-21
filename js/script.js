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

// const allFilterBtn = document.getElementById('all-filter-btn');
// allFilterBtn.addEventListener('click', function(){
//     alert('click')
// })

function calculateCount(){
    total.innerText = allCardSection.children.length;
    
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-btn', 'btn-color')
    interviewFilterBtn.classList.remove('bg-btn', 'btn-color')
    rejectedFilterBtn.classList.remove('bg-btn', 'btn-color')
    
    allFilterBtn.classList.add('bg-base-100', 'btn-black')
    interviewFilterBtn.classList.add('bg-base-100', 'btn-black')
    rejectedFilterBtn.classList.add('bg-base-100', 'btn-black')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-base-100', 'btn-black')
    selected.classList.add('bg-btn', 'btn-color')
}