var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for (var i in students){
    console.log(students[i].first_name + " " + students[i].last_name)
}

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
}
console.log(" ")
for (var x in users){
    console.log(x)
    for (var y in users[x]){
        var l = users[x][y].first_name.length + users[x][y].last_name.length;
        console.log(users[x][y].first_name + " " + users[x][y].last_name + " " + l)
    }
}
