import { collection, getDocs } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "/firebase.js";

const querySnapshot = await getDocs(collection(db, "itemId"));

querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
});

async function loadItems() {
  const itemsRef = collection(db, "itemId");
  const snapshot = await getDocs(itemsRef);

  snapshot.forEach((doc) => {
    const data = doc.data();

    console.log("ITEM ID:", doc.id);
    console.log("ITEM DATA:", data);

    renderItem(data);
  });
}


function renderItem(item) {
  const container = document.getElementById("items-container");

  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded shadow";

  div.innerHTML = `
    <p class="text-lg font-bold text-black">${item.name}</p>
    <p class="text-gray-600">${item.description}</p>
    <p class="text-sm text-gray-500">Found: ${item.dateFound}</p>
    <p class="text-sm text-black">Tags: ${item.tag?.join(", ")}</p>
  `;

  container.appendChild(div);
}

loadItems();