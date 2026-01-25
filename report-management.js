import {
  collection,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { db } from "/firebase.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
const storage = getStorage();

const form = document.getElementById("report-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("upload");
  let imageUrl = null;

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];

    const storageRef = ref(storage, `itemId/${Date.now()}_${file.name}`);

    await uploadBytes(storageRef, file);
    imageUrl = await getDownloadURL(storageRef);
  }

  const tags = Array.from(
    document.querySelectorAll(".tag-checkbox:checked"),
  ).map((cb) => cb.value);

  const item = {
    name: document.getElementById("name").value.trim(),
    description: document.getElementById("description").value.trim(),
    tags: tags,
    dateFound: Timestamp.fromDate(
      new Date(document.getElementById("date").value),
    ),
    location: document.getElementById("location").value.trim(),

    reporter: document.getElementById("username").value.trim(),
    email: document.getElementById("email").value.trim(),

    status: "pending",
    imageUrl: imageUrl,
  };

  // basic validation
  if (
    !item.name ||
    !item.description ||
    !tags.length === 0 ||
    !item.dateFound ||
    !item.location ||
    !item.reporter ||
    !item.email
  ) {
    alert("Please fill all required fields.");
    return;
  }

  await addDoc(collection(db, "itemId"), item);

  alert("Item reported successfully!");
  form.reset();
});
