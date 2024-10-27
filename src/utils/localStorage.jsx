const employees = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the dashboard design.",
          "date": "2024-08-15",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Fix bugs in the login module.",
          "date": "2024-07-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Write unit tests for the API.",
          "date": "2024-10-10",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,      // Task 1 and Task 2 are active
        "newTask": 1,     // Task 2 is a new task
        "failed": 0,      // No failed tasks
        "completed": 1    // Task 3 is completed
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Document the new authentication system.",
          "date": "2024-09-25",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Fix deployment issues.",
          "date": "2024-08-30",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Improve frontend performance.",
          "date": "2024-07-18",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,      // Task 2 and Task 3 are active
        "newTask": 1,     // Task 2 is a new task
        "failed": 0,      // No failed tasks
        "completed": 1    // Task 1 is completed
      }
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Create test cases for new features.",
          "date": "2024-09-01",
          "category": "Testing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true
        },
        {
          "title": "Task 2",
          "description": "Optimize database queries.",
          "date": "2024-07-29",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Update user interface elements.",
          "date": "2024-06-21",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,      // Task 2 and Task 3 are active
        "newTask": 1,     // Task 1 is a new task
        "failed": 1,      // Task 1 failed
        "completed": 0    // No completed tasks
      }
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Setup CI/CD pipelines.",
          "date": "2024-09-12",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Monitor production logs.",
          "date": "2024-08-05",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Develop new analytics dashboard.",
          "date": "2024-07-10",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,      // Task 1 and Task 3 are active
        "newTask": 1,     // Task 1 is a new task
        "failed": 0,      // No failed tasks
        "completed": 1    // Task 2 is completed
      }
    },
    {
      "id": 5,
      "name": "David Brown",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Run load tests on the system.",
          "date": "2024-09-22",
          "category": "Testing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update API documentation.",
          "date": "2024-06-28",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Enhance the security module.",
          "date": "2024-07-18",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ],
      "taskCount": {
        "active": 2,      // Task 1 and Task 3 are active
        "newTask": 1,     // Task 3 is a new task
        "failed": 0,      // No failed tasks
        "completed": 1    // Task 2 is completed
      }
    }
  ];
  
  

const admin = [
    {
      "id": 101,
      "name": "Admin User",
      "email": "admin@example.com",
      "password": "123"
    }
];

export const setLocalStorage =  () =>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}
export const getLocalStorage = ()  =>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees,admin};
}
