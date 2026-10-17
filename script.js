const books = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    category: "Fantasy",
    description: "Bilbo Baggins joins a group of dwarves on a journey to reclaim their home from a dragon."
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    category: "Fantasy",
    description: "Harry discovers he is a wizard and begins a new life at Hogwarts, a school of magic."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-development",
    description: "Explore practical ways to build good habits, break bad ones and improve through small daily changes."
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    description: "Discover how emotions, personal experiences and behaviour influence the way people manage money."
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    category: "Programming",
    description: "Learn JavaScript through explanations, exercises and projects that explore programming and the web."
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    category: "Fantasy",
    description: "Frodo and his companions journey across Middle-earth to destroy a powerful and dangerous ring."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self-development",
    description: "Learn how to focus on demanding tasks and reduce distractions in your working life."
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    category: "Finance",
    description: "Stories set in ancient Babylon introduce lessons about saving, spending and building wealth."
  },
  {
    title: "You Don't Know JS Yet: Get Started",
    author: "Kyle Simpson",
    category: "Programming",
    description: "Explore the foundations of JavaScript and develop a deeper understanding of how the language works."
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    category: "Fiction",
    description: "A young prince travels between planets in a story about friendship, love and what matters in life."
  },
  {
  title: "The Alchemist",
  author: "Paulo Coelho",
  category: "Fiction",
  description: "A young shepherd follows his dream of finding treasure and discovers lessons about life along the way."
},
{
  title: "Pride and Prejudice",
  author: "Jane Austen",
  category: "Fiction",
  description: "Elizabeth Bennet navigates family expectations, first impressions and her changing feelings for Mr Darcy."
}
];

console.log(books);



// Find the book container
const bookList = document.getElementById("book-list");

function displayBooks() {
  bookList.textContent = "";

// Create a container and title with info for each book
for (const book of books) {
  const bookCard = document.createElement("article");
  bookCard.dataset.category = book.category;

  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = "By " + book.author;

  const bookCategory = document.createElement("p");
  bookCategory.textContent = "Category: " + book.category;

  const detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.textContent = "Show details";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "×";
  deleteButton.className = "delete-button";
  deleteButton.setAttribute("aria-label", "Delete " + book.title);

  // Create a hidden description
  const bookDescription = document.createElement("p");
  bookDescription.textContent = book.description;
  bookDescription.hidden = true;

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookCategory);
  bookCard.appendChild(detailsButton);
  bookCard.appendChild(bookDescription);
  bookCard.appendChild(deleteButton);

  // Show or hide details when clicked
  detailsButton.addEventListener("click", function () {
    if (bookDescription.hidden) {
      bookDescription.hidden = false;
      detailsButton.textContent = "Hide details";
    } else {
      bookDescription.hidden = true;
      detailsButton.textContent = "Show details";
    }
  });

  // Delete this book when clicked
    deleteButton.addEventListener("click", function () {
     const bookIndex = books.indexOf(book);
     books.splice(bookIndex, 1);
     displayBooks();
    });

  bookList.appendChild(bookCard);
  }
}

displayBooks();

const categoryFilter = document.querySelector("#category-filter");

// The function runs each time the user selects a different option.
categoryFilter.addEventListener("change", function () {
  const selectedCategory = categoryFilter.value;
  const bookCards = bookList.querySelectorAll("article");

  for (const card of bookCards) {
    if (
      selectedCategory === "all" ||
      card.dataset.category === selectedCategory
    ) {
      card.hidden = false;
    } else {
      card.hidden = true;
    }
  }
});

console.log(categoryFilter);

// Find the add-book form
const bookForm = document.getElementById("book-form");

// Run when the form is submitted
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

const titleInput = document.getElementById("book-title");
const title = titleInput.value;

const authorInput = document.getElementById("book-author");
const author = authorInput.value;

const categoryInput = document.getElementById("book-category");
const category = categoryInput.value;

const descriptionInput = document.getElementById("book-description");
const description = descriptionInput.value;

// Create a new book object
const newBook = {
  title: title, 
  author: author,
  category: category,
  description: description
};

books.push(newBook);
displayBooks();
bookForm.reset();

console.log(newBook);
});