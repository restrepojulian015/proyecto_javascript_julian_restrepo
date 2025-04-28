class myBody extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        /* styles omitted for brevity, keep as is */
        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 20vh;
            width: 100%;
            background-color: #0060b8;
            color: beige;
            text-align: center;
            padding: 10px;
        }
        main {
            background-color: beige;
            height: 75vh;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            align-items: center;
            padding: 20px;
        }
        main div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
        }
            
        button {
            background-color: #0060b8;
            color: beige;
            margin: 20px;
            width: 190px;
            height: 150px;
            border: 2px solid #93ffff;
            border-radius: 30px;
            font-weight: bold;
            font-size: 1.5rem;
            cursor: pointer;
            transition: font-size 0.3s ease;
        }
        button:hover {
            font-size: 2rem;
            animation: bigger 0.7s linear;
        }
        @keyframes bigger {
            to {
                font-size: 2.5rem;
            }
        }
        div h1 {
            font-size: 4rem;
            color: #0060b8;
            text-align: center;
        }
        footer {
            height: 5vh;
            width: 100%;
            background-color: #003564;
            color: beige;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            padding: 5px;
        }
        @media (max-width: 768px) {
            header {
                height: 15vh;
            }
            main {
                height: auto;
                flex-direction: column;
                padding: 10px;
            }
            button {
                width: 150px;
                height: 120px;
                font-size: 1.2rem;
            }
            div h1 {
                font-size: 3rem;
            }
        }
        @media (max-width: 480px) {
            header {
                height: 12vh;
                padding: 5px;
            }
            main {
                flex-direction: column;
                padding: 5px;
            }
            button {
                width: 130px;
                height: 100px;
                font-size: 1rem;
            }
            div h1 {
                font-size: 2.5rem;
            }
            footer {
                font-size: 0.8rem;
            }
        }
        </style>
        <header>
            <h1>Acme School</h1>
        </header>
        <main>
            <div>
                <h1>SHAPING THE FUTURE</h1>
                <h1>Acme School</h1>
            </div>
            <div id="buttonsContainer">
                <button class="buttonsC" id="enter">Enter</button>
                <button class="buttonsC" id="register">Register</button>
            </div>
        </main>
        <footer>
            <span>hecho por <strong>julian Ansdrés restrepo</strong></span>
        </footer>
        `;
    }

    connectedCallback() {
        this.showInitialMenu();
    }

    showInitialMenu() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = `
            <button id="enter">Enter</button>
            <button id="register">Register</button>
        `;
    }

    addEventListeners() {
        this.shadowRoot.addEventListener('click', (event) => {
            if (event.target.id === 'enter') {
                this.showLogin();
            } else if (event.target.id === 'register') {
                this.showRegister();
            }
        });

        this.shadowRoot.addEventListener('login-success', (event) => {
            this.currentUser = event.detail.user;
            this.showMainMenu();
        });

        this.shadowRoot.addEventListener('go-back', () => {
            this.showMainMenu();
        });
    }

    showLogin() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const loginComponent = document.createElement('button-enter');
        container.appendChild(loginComponent);
    }

    showRegister() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const registerComponent = document.createElement('button-register');
        container.appendChild(registerComponent);
    }

    showMainMenu() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = `
            <button id="registerStudent">Register Student</button>
            <button id="enter">Enter</button>
            <button id="register">Register</button>
            <button id="viewGrades">View Grades</button>
            <button id="createCourse">Create Course</button>
        `;
    }

    addEventListeners() {
        this.shadowRoot.addEventListener('click', (event) => {
            if (event.target.id === 'enter') {
                this.showLogin();
            } else if (event.target.id === 'register') {
                this.showRegister();
            } else if (event.target.id === 'registerStudent') {
                this.showStudentRegister();
            } else if (event.target.id === 'viewGrades') {
                this.showGradeCourse();
            } else if (event.target.id === 'createCourse') {
                this.showCourseCreate();
            }
        });

        this.shadowRoot.addEventListener('login-success', (event) => {
            this.currentUser = event.detail.user;
            this.showMainMenu();
        });

        this.shadowRoot.addEventListener('go-back', () => {
            if (this.currentUser) {
                this.showMainMenu();
            } else {
                this.showInitialMenu();
            }
        });
    }

    showCourseCreate() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const courseCreateComponent = document.createElement('course-create');
        container.appendChild(courseCreateComponent);
    }

    showGradeCourse() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const gradeCourseComponent = document.createElement('grade-course');
        container.appendChild(gradeCourseComponent);
    }

    showLogin() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const loginComponent = document.createElement('button-enter');
        container.appendChild(loginComponent);
    }

    showRegister() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const registerComponent = document.createElement('button-register');
        container.appendChild(registerComponent);
    }

    showStudentRegister() {
        const container = this.shadowRoot.getElementById('buttonsContainer');
        container.innerHTML = '';
        const studentRegisterComponent = document.createElement('student-register');
        container.appendChild(studentRegisterComponent);
    }
}

class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 400px;
                margin: 0 auto;
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            label {
                margin-top: 10px;
                font-weight: bold;
                color: #0060b8;
            }
            input, select, textarea {
                margin-top: 5px;
                padding: 8px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            button {
                margin-top: 20px;
                background-color: #0060b8;
                color: beige;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #004080;
            }
            #goBack {
                background-color: #003564;
                margin-top: 10px;
            }
            #message {
                margin-top: 10px;
                color: red;
                font-weight: bold;
                text-align: center;
            }
        </style>
        <form id="RegisterForm">
            <label for="id">ID</label>
            <input type="text" id="id" required>
            <label for="name">NAME</label>
            <input type="text" id="name" required>
            <label for="role">ROLE</label>
            <select id="role" name="role" required>
                <option value="administrative">Administrative</option>
                <option value="teacher">Teacher</option>
            </select>
            <label for="email">EMAIL</label>
            <input type="email" id="email" required>
            <label for="password">PASSWORD</label>
            <input type="password" id="password" required>
            <button type="submit">SAVE</button>
        </form>
        <button id="goBack" type="button">GO BACK</button>
        <div id="message"></div>
        `;

        this.shadowRoot.getElementById('RegisterForm').addEventListener('submit', this.handleSubmit.bind(this));
        this.shadowRoot.getElementById('goBack').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('go-back', { bubbles: true, composed: true }));
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const id = this.shadowRoot.getElementById('id').value.trim();
        const name = this.shadowRoot.getElementById('name').value.trim();
        const role = this.shadowRoot.getElementById('role').value;
        const email = this.shadowRoot.getElementById('email').value.trim();
        const password = this.shadowRoot.getElementById('password').value;

        const messageDiv = this.shadowRoot.getElementById('message');

        if (!id || !name || !role || !email || !password) {
            messageDiv.textContent = 'Please fill in all fields.';
            return;
        }

        // Check if user is authenticated (simple check, can be improved)
        if (!window.currentUser) {
            messageDiv.textContent = 'You must be logged in to create users.';
            return;
        }

        try {
            // Check if email already exists
            const db = await openDatabase();
            const transaction = db.transaction('users', 'readonly');
            const store = transaction.objectStore('users');
            const index = store.index('email');
            const request = index.get(email);

            request.onsuccess = async () => {
                if (request.result) {
                    messageDiv.textContent = 'Email already registered.';
                } else {
                    // Save new user
                    const newUser = { id, name, role, email, password };
                    await putData('users', newUser);
                    messageDiv.textContent = 'User registered successfully.';
                    this.shadowRoot.getElementById('RegisterForm').reset();
                }
            };

            request.onerror = () => {
                messageDiv.textContent = 'Error checking email.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error registering user: ' + error.message;
        }
    }
};
// class Register extends HTMLElement{};

class Enter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 400px;
                margin: 0 auto;
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            label {
                margin-top: 10px;
                font-weight: bold;
                color: #0060b8;
            }
            input, select, textarea {
                margin-top: 5px;
                padding: 8px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            button {
                margin-top: 20px;
                background-color: #0060b8;
                color: beige;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #004080;
            }
            #goBack {
                background-color: #003564;
                margin-top: 10px;
            }
            #message {
                margin-top: 10px;
                color: red;
                font-weight: bold;
                text-align: center;
            }
        </style>
        <form id="loginForm">
            <label for="email">EMAIL</label>
            <input type="email" id="email" required>
            <label for="password">PASSWORD</label>
            <input type="password" id="password" required>
            <button type="submit">LOGIN</button>
        </form>
        <button id="goBack" type="button">GO BACK</button>
        <div id="message"></div>
        `;

        this.shadowRoot.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.login();
        });

        this.shadowRoot.getElementById('goBack').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('go-back', { bubbles: true, composed: true }));
        });
    }

    async login() {
        const email = this.shadowRoot.getElementById('email').value.trim();
        const password = this.shadowRoot.getElementById('password').value;

        const messageDiv = this.shadowRoot.getElementById('message');

        if (!email || !password) {
            messageDiv.textContent = 'Please enter email and password.';
            return;
        }

        try {
            const db = await openDatabase();
            const transaction = db.transaction('users', 'readonly');
            const store = transaction.objectStore('users');
            const index = store.index('email');
            const request = index.get(email);

            request.onsuccess = () => {
                const user = request.result;
                if (user && user.password === password) {
                    messageDiv.textContent = 'Login successful. Welcome ' + user.name;
                    window.currentUser = user;
                    this.dispatchEvent(new CustomEvent('login-success', { detail: { user }, bubbles: true, composed: true }));
                } else {
                    messageDiv.textContent = 'Invalid email or password.';
                }
            };

            request.onerror = () => {
                messageDiv.textContent = 'Error during login.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error during login: ' + error.message;
        }
    }
}

const DB_NAME = 'acmeSchoolDB';
const DB_VERSION = 1;

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            if (!db.objectStoreNames.contains('users')) {
                const userStore = db.createObjectStore('users', { keyPath: 'id' });
                userStore.createIndex('email', 'email', { unique: true });
            }

            if (!db.objectStoreNames.contains('students')) {
                const studentStore = db.createObjectStore('students', { keyPath: 'id' });
                studentStore.createIndex('name', 'name', { unique: false });
                studentStore.createIndex('surname', 'surname', { unique: false });
                studentStore.createIndex('email', 'email', { unique: true });
            }

            if (!db.objectStoreNames.contains('courses')) {
                const courseStore = db.createObjectStore('courses', { keyPath: 'id', autoIncrement: true });
                courseStore.createIndex('name', 'name', { unique: true });
            }

            if (!db.objectStoreNames.contains('grades')) {
                const gradesStore = db.createObjectStore('grades', { keyPath: 'id', autoIncrement: true });
                gradesStore.createIndex('courseId', 'courseId', { unique: false });
                gradesStore.createIndex('studentId', 'studentId', { unique: false });
            }
        };

        request.onsuccess = async (event) => {
            const db = event.target.result;
            resolve(db);

            // Create default admin user if none exists
            const transaction = db.transaction('users', 'readonly');
            const store = transaction.objectStore('users');
            const countRequest = store.count();

            countRequest.onsuccess = async () => {
                if (countRequest.result === 0) {
                    const writeTransaction = db.transaction('users', 'readwrite');
                    const writeStore = writeTransaction.objectStore('users');
                    const defaultUser = {
                        id: 'admin1',
                        name: 'Admin User',
                        role: 'administrative',
                        email: 'admin@acmeschool.com',
                        password: 'admin123'
                    };
                    writeStore.add(defaultUser);
                }
            };
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}

// Utility function to add or update data in a store
async function putData(storeName, data) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readwrite');
        const store = transaction.objectStore(storeName);
        const request = store.put(data);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Utility function to get data by key
async function getData(storeName, key) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.get(key);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// Utility function to get all data from a store
async function getAllData(storeName) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

class StudentRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 400px;
                margin: 0 auto;
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            label {
                margin-top: 10px;
                font-weight: bold;
                color: #0060b8;
            }
            input, select, textarea {
                margin-top: 5px;
                padding: 8px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            button {
                margin-top: 20px;
                background-color: #0060b8;
                color: beige;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #004080;
            }
            #goBack {
                background-color: #003564;
                margin-top: 10px;
            }
            #message {
                margin-top: 10px;
                color: red;
                font-weight: bold;
                text-align: center;
            }
        </style>
        <form id="studentForm">
            <label for="id">ID</label>
            <input type="text" id="id" required>
            <label for="name">Name</label>
            <input type="text" id="name" required>
            <label for="surname">Surname</label>
            <input type="text" id="surname" required>
            <label for="email">Email</label>
            <input type="email" id="email" required>
            <label for="birthdate">Birthdate</label>
            <input type="date" id="birthdate" required>
            <label for="photo">Photo URL</label>
            <input type="url" id="photo" required>
            <button type="submit">Save</button>
        </form>
        <button id="goBack" type="button">Go Back</button>
        <div id="message"></div>
        `;

        this.shadowRoot.getElementById('studentForm').addEventListener('submit', this.handleSubmit.bind(this));
        this.shadowRoot.getElementById('goBack').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('go-back', { bubbles: true, composed: true }));
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const id = this.shadowRoot.getElementById('id').value.trim();
        const name = this.shadowRoot.getElementById('name').value.trim();
        const surname = this.shadowRoot.getElementById('surname').value.trim();
        const email = this.shadowRoot.getElementById('email').value.trim();
        const birthdate = this.shadowRoot.getElementById('birthdate').value;
        const photo = this.shadowRoot.getElementById('photo').value.trim();

        const messageDiv = this.shadowRoot.getElementById('message');

        if (!id || !name || !surname || !email || !birthdate || !photo) {
            messageDiv.textContent = 'Please fill in all fields.';
            return;
        }

        try {
            // Check if email already exists
            const db = await openDatabase();
            const transaction = db.transaction('students', 'readonly');
            const store = transaction.objectStore('students');
            const index = store.index('email');
            const request = index.get(email);

            request.onsuccess = async () => {
                if (request.result) {
                    messageDiv.textContent = 'Email already registered.';
                } else {
                    // Save new student
                    const newStudent = { id, name, surname, email, birthdate, photo };
                    await putData('students', newStudent);
                    messageDiv.textContent = 'Student registered successfully.';
                    this.shadowRoot.getElementById('studentForm').reset();
                }
            };

            request.onerror = () => {
                messageDiv.textContent = 'Error checking email.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error registering student: ' + error.message;
        }
    }
}


class CourseCreate extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            form {
                display: flex;
                flex-direction: column;
                max-width: 400px;
                margin: 0 auto;
                background-color: #f9f9f9;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            label {
                margin-top: 10px;
                font-weight: bold;
                color: #0060b8;
            }
            input, select, textarea {
                margin-top: 5px;
                padding: 8px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            button {
                margin-top: 20px;
                background-color: #0060b8;
                color: beige;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #004080;
            }
            #addStudentBtn {
                margin-top: 10px;
            }
            #goBack {
                background-color: #003564;
                margin-top: 10px;
            }
            #message {
                margin-top: 10px;
                color: red;
                font-weight: bold;
                text-align: center;
            }
            ul {
                list-style-type: none;
                padding: 0;
                max-height: 150px;
                overflow-y: auto;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-top: 10px;
            }
            ul li {
                padding: 5px;
                border-bottom: 1px solid #eee;
            }
            ul li:last-child {
                border-bottom: none;
            }
        </style>
        <form id="courseForm">
            <label for="name">Course Name</label>
            <input type="text" id="name" required>
            <label for="description">Description</label>
            <textarea id="description" required></textarea>
            <label for="image">Image URL</label>
            <input type="url" id="image" required>
            <button type="submit">Create Course</button>
        </form>
        <div>
            <h3>Add Students to Course</h3>
            <label for="searchStudent">Search Student (ID, Name, or Surname)</label>
            <input type="text" id="searchStudent" placeholder="Enter student ID, name or surname">
            <button id="addStudentBtn" type="button">Add Student</button>
            <ul id="studentList"></ul>
        </div>
        <button id="goBack" type="button">Go Back</button>
        <div id="message"></div>
        `;

        this.shadowRoot.getElementById('courseForm').addEventListener('submit', this.handleCreateCourse.bind(this));
        this.shadowRoot.getElementById('addStudentBtn').addEventListener('click', this.handleAddStudent.bind(this));
        this.shadowRoot.getElementById('goBack').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('go-back', { bubbles: true, composed: true }));
        });

        this.course = null;
        this.studentsAdded = [];
    }

    async handleCreateCourse(event) {
        event.preventDefault();
        const name = this.shadowRoot.getElementById('name').value.trim();
        const description = this.shadowRoot.getElementById('description').value.trim();
        const image = this.shadowRoot.getElementById('image').value.trim();

        const messageDiv = this.shadowRoot.getElementById('message');

        if (!name || !description || !image) {
            messageDiv.textContent = 'Please fill in all course fields.';
            return;
        }

        try {
            // Check if course name already exists
            const db = await openDatabase();
            const transaction = db.transaction('courses', 'readonly');
            const store = transaction.objectStore('courses');
            const index = store.index('name');
            const request = index.get(name);

            request.onsuccess = async () => {
                if (request.result) {
                    messageDiv.textContent = 'Course name already exists.';
                } else {
                    // Create new course
                    const newCourse = { name, description, image, students: [] };
                    const courseId = await putData('courses', newCourse);
                    this.course = { ...newCourse, id: courseId };
                    messageDiv.textContent = 'Course created successfully.';
                    this.shadowRoot.getElementById('courseForm').reset();
                    this.shadowRoot.getElementById('studentList').innerHTML = '';
                    this.studentsAdded = [];
                }
            };

            request.onerror = () => {
                messageDiv.textContent = 'Error checking course name.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error creating course: ' + error.message;
        }
    }

    async handleAddStudent() {
        const searchValue = this.shadowRoot.getElementById('searchStudent').value.trim().toLowerCase();
        const messageDiv = this.shadowRoot.getElementById('message');
        const studentList = this.shadowRoot.getElementById('studentList');

        if (!this.course) {
            messageDiv.textContent = 'Please create a course first.';
            return;
        }

        if (!searchValue) {
            messageDiv.textContent = 'Please enter a student ID, name, or surname to search.';
            return;
        }

        try {
            const db = await openDatabase();
            const transaction = db.transaction('students', 'readonly');
            const store = transaction.objectStore('students');
            const allStudents = await getAllData('students');

            const matchedStudents = allStudents.filter(student =>
                student.id.toLowerCase() === searchValue ||
                student.name.toLowerCase().includes(searchValue) ||
                student.surname.toLowerCase().includes(searchValue)
            );

            if (matchedStudents.length === 0) {
                messageDiv.textContent = 'No students found matching the search.';
                return;
            }

            matchedStudents.forEach(student => {
                if (!this.studentsAdded.find(s => s.id === student.id)) {
                    this.studentsAdded.push(student);
                }
            });

            // Update course students list in DB
            this.course.students = this.studentsAdded.map(s => s.id);
            await putData('courses', this.course);

            // Update UI list
            studentList.innerHTML = '';
            this.studentsAdded.forEach(student => {
                const li = document.createElement('li');
                li.textContent = `${student.name} ${student.surname} (ID: ${student.id})`;
                studentList.appendChild(li);
            });

            messageDiv.textContent = 'Students added to course.';
            this.shadowRoot.getElementById('searchStudent').value = '';
        } catch (error) {
            messageDiv.textContent = 'Error adding student: ' + error.message;
        }
    }
}

customElements.define("my-body", myBody);
customElements.define("button-register", Register);
customElements.define("button-enter", Enter);
customElements.define("student-register", StudentRegister);
customElements.define("course-create", CourseCreate);
class GradeCourse extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    async render() {
        this.shadowRoot.innerHTML = `
        <style>
            label {
                font-weight: bold;
                color: #0060b8;
            }
            select, input[type="number"] {
                margin-top: 5px;
                padding: 8px;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
            table {
                width: 100%;
                margin-top: 10px;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid #ccc;
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #0060b8;
                color: beige;
            }
            input[type="number"] {
                width: 60px;
            }
            .finalGrade {
                font-weight: bold;
                color: #003564;
            }
            button {
                margin-top: 10px;
                background-color: #0060b8;
                color: beige;
                border: none;
                padding: 10px;
                font-size: 1.2rem;
                border-radius: 10px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #004080;
            }
            #goBack {
                background-color: #003564;
            }
            #message {
                margin-top: 10px;
                color: red;
                font-weight: bold;
                text-align: center;
            }
        </style>
        <div>
            <label for="courseSelect">Select Course:</label>
            <select id="courseSelect">
                <option value="">--Select a course--</option>
            </select>
        </div>
        <table border="1" id="gradesTable" style="width: 100%; margin-top: 10px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>1st Partial (30%)</th>
                    <th>2nd Partial (30%)</th>
                    <th>3rd Partial (40%)</th>
                    <th>Final Grade</th>
                </tr>
            </thead>
            <tbody id="gradesBody">
            </tbody>
        </table>
        <button id="goBack" type="button">Go Back</button>
        <div id="message"></div>
        `;

        this.shadowRoot.getElementById('courseSelect').addEventListener('change', this.loadGrades.bind(this));
        this.shadowRoot.getElementById('goBack').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('go-back', { bubbles: true, composed: true }));
        });

        await this.loadCourses();
    }

    async loadCourses() {
        const courseSelect = this.shadowRoot.getElementById('courseSelect');
        courseSelect.innerHTML = '<option value="">--Select a course--</option>';
        const courses = await getAllData('courses');
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    }

    async loadGrades() {
        const courseId = this.shadowRoot.getElementById('courseSelect').value;
        const gradesBody = this.shadowRoot.getElementById('gradesBody');
        gradesBody.innerHTML = '';
        const messageDiv = this.shadowRoot.getElementById('message');
        messageDiv.textContent = '';

        if (!courseId) {
            return;
        }

        try {
            const db = await openDatabase();
            const course = await getData('courses', Number(courseId));
            if (!course) {
                messageDiv.textContent = 'Course not found.';
                return;
            }

            const students = [];
            for (const studentId of course.students) {
                const student = await getData('students', studentId);
                if (student) {
                    students.push(student);
                }
            }

            // Load grades for this course and students
            const transaction = db.transaction('grades', 'readonly');
            const store = transaction.objectStore('grades');
            const index = store.index('courseId');
            const request = index.getAll(Number(courseId));
            request.onsuccess = () => {
                const grades = request.result || [];
                this.renderGradesTable(students, grades, courseId);
            };
            request.onerror = () => {
                messageDiv.textContent = 'Error loading grades.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error loading grades: ' + error.message;
        }
    }

    renderGradesTable(students, grades, courseId) {
        const gradesBody = this.shadowRoot.getElementById('gradesBody');
        gradesBody.innerHTML = '';

        students.forEach(student => {
            const gradeRecord = grades.find(g => g.studentId === student.id) || {
                courseId: Number(courseId),
                studentId: student.id,
                partial1: 0,
                partial2: 0,
                partial3: 0,
                finalGrade: 0
            };

            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.surname}</td>
                <td><input type="number" min="0" max="100" value="${gradeRecord.partial1}" data-student-id="${student.id}" data-partial="partial1"></td>
                <td><input type="number" min="0" max="100" value="${gradeRecord.partial2}" data-student-id="${student.id}" data-partial="partial2"></td>
                <td><input type="number" min="0" max="100" value="${gradeRecord.partial3}" data-student-id="${student.id}" data-partial="partial3"></td>
                <td class="finalGrade">${gradeRecord.finalGrade.toFixed(2)}</td>
            `;

            gradesBody.appendChild(tr);
        });

        // Add event listeners for inputs
        gradesBody.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('input', this.handleGradeInput.bind(this));
        });
    }

    async handleGradeInput(event) {
        const input = event.target;
        let value = Number(input.value);
        const studentId = input.dataset.studentId;
        const partial = input.dataset.partial;
        const messageDiv = this.shadowRoot.getElementById('message');

        if (isNaN(value) || value < 0) {
            value = 0;
            input.value = 0;
        } else if (value > 100) {
            value = 100;
            input.value = 100;
        }

        try {
            const db = await openDatabase();
            const transaction = db.transaction('grades', 'readwrite');
            const store = transaction.objectStore('grades');
            const index = store.index('courseId');
            const courseId = Number(this.shadowRoot.getElementById('courseSelect').value);

            // Get all grades for this course
            const request = index.getAll(courseId);
            request.onsuccess = async () => {
                let grades = request.result || [];
                let gradeRecord = grades.find(g => g.studentId === studentId);

                if (!gradeRecord) {
                    gradeRecord = {
                        courseId,
                        studentId,
                        partial1: 0,
                        partial2: 0,
                        partial3: 0,
                        finalGrade: 0
                    };
                }

                gradeRecord[partial] = value;
                gradeRecord.finalGrade = this.calculateFinalGrade(gradeRecord.partial1, gradeRecord.partial2, gradeRecord.partial3);

                // Save updated grade
                await putData('grades', gradeRecord);

                // Update final grade in UI
                const row = input.closest('tr');
                const finalGradeCell = row.querySelector('.finalGrade');
                finalGradeCell.textContent = gradeRecord.finalGrade.toFixed(2);

                messageDiv.textContent = 'Grade updated.';
            };
            request.onerror = () => {
                messageDiv.textContent = 'Error updating grade.';
            };
        } catch (error) {
            messageDiv.textContent = 'Error updating grade: ' + error.message;
        }
    }

    calculateFinalGrade(p1, p2, p3) {
        return (p1 * 0.3) + (p2 * 0.3) + (p3 * 0.4);
    }
}

if (!customElements.get("my-body")) {
    customElements.define("my-body", myBody);
}
if (!customElements.get("button-register")) {
    customElements.define("button-register", Register);
}
if (!customElements.get("button-enter")) {
    customElements.define("button-enter", Enter);
}
if (!customElements.get("student-register")) {
    customElements.define("student-register", StudentRegister);
}
if (!customElements.get("course-create")) {
    customElements.define("course-create", CourseCreate);
}
if (!customElements.get("grade-course")) {
    customElements.define("grade-course", GradeCourse);
}
