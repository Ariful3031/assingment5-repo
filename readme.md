## ASSIGNMENT-005

### answer to the question no : 1

 getElementById, getElementsByClassName, and querySelector / querySelectorAll এর মধ্যে পার্থক্য দেওয়া হলো ।
  getElementById:
  এটি দ্বারা dom এর ভিতরর কোনো নিদিষ্ট নামের একটি উপাদান পাওয়া যায় । 
  এটি একটা element/ উপাদান রিটার্ন করে 
 যদি উপাদান না পায় তাহলে  null রিটার্ন করে।
 দ্রুত কাজ করে।

 getElementsByClassName:
 এটি দ্বারা dom এর ভিতরর একই নামের একাধিক উপাদান কে খুজে বের করা যায়। 
 একাধিক উপাদান/element রিটার্ন করে।
যদি কোনো element না পায় তাহলে খালি collection রিটার্ন করে।

querySelector:
শুধু প্রথম matching element রিটার্ন করে।
যদি না পায় তাহলে null রিটার্ন করে।

querySelectorAll:
সকল matching element রিটার্ন করে
NodeList রিটার্ন করে
যদি কিছু না পায় তাহলে খালি NodeList রিটার্ন করে।


### answer to the question no : 2
 
1st. Create a element .
2nd. setAttributes .
3rd. appendChild()


### answer to the question no : 3

প্রথমে একটা বাটন এর ভেতরে ক্লিক করলে, তখন event প্রথমে ওই বাটনে  এ trigger হবে।

তারপর সেই event bubble হতে হতে তার parent <div> এ যাবে।

তারপর <body>, তারপর <html>,  সব শেষে document পর্যন্ত পৌঁছাবে।


### answer to the question no : 4
Event Delegation: 
Event Delegation হলো একটি উপায় যেখানে আমরা অনেকগুলো child element এ আলাদা আলাদা event listener না দিয়ে, তাদের parent element এ একটি event listener বসাই, আর event bubbling ব্যবহার করে child কে শনাক্ত করি।
Why is it useful:
কোড কম 
পারফরম্যান্স ভালো 
Dynamic elements handle করা যায় 


### answer to the question no : 5

event.preventDefault():
Form submit হলে reload হওয়া আটকায়।

event.stopPropagation():
Event bubbling বন্ধ করে ।




 







