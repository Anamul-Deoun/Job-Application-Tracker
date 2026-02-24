# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById দিয়ে আমরা HTML পেজের ডিফাইন করা ID ধরে কাজ করতে পারি। এটি একটাই element Return করে। এটি লেখার নিয়ম হলো document.getElementById("id");

getElementsByClassNameদিয়ে আমরা HTML পেজের ডিফাইন করা className ধরে কাজ করতে পারি. এটি HTMLCollection Return করে। এটি লেখার নিয়ম হলো document.getElementsByClassName("myClass");

querySelector ব্যবহার করলে প্রথম যে  element match হয়  সেটা ধরে কাজ করে। এটি লেখার নিয়ম হলো document.querySelector(".myClass")। element হিসাবে  CSS selector ব্যবহার করতে পারি।

querySelectorAll ব্যবহার করলে সমস্ত match element নিয়ে কাজ করে। এটি NodeList Return করে। এটি লেখার নিয়ম হলো document.querySelectorAll(".myClass")।

# 2. How do you create and insert a new element into the DOM?
// ১. নতুন element তৈরি করে
const newDiv = document.createElement("div");

// ২. content যোগ করে
newDiv.innerText = "Hello, world!";

// ৩. parent element select করে
const parent = document.getElementById("allCards");

// ৪. parent এর মধ্যে যোগ করে
parent.appendChild(newDiv);

# 3. What is Event Bubbling? And how does it work?
যখন একটি child element এ click বা অন্য event হয়, event parent এর দিকে উঠে যায়।
ইভেন্টটি প্রথমে তার হ্যান্ডলারগুলিকে টার্গেট এলিমেন্টে, তারপর তার প্যারেন্টে, তারপর প্যারেন্টের প্যারেন্টে, এবং এভাবেই চালায়, যতক্ষণ না এটি রুটে (ডকুমেন্ট) পৌঁছায়।

# 4. What is Event Delegation? Why is it useful?
Event Delegation: একটি parent element এ event listener বসানো এবং child elements এ event handle করা।
Why is it useful: অনেক child element থাকলে প্রতিটিতে আলাদা listener লাগবে না।

# 5. Difference between preventDefault() and stopPropagation()
preventDefault() Event এর default behavior বন্ধ করে।
stopPropagation() ইভেন্টটিকে DOM ট্রিতে বাবলিং হতে বাধা দেয়।

