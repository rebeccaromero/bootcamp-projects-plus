"""students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
def student_names(arr):
    for value in arr:
        print value['first_name'], value['last_name']
student_names(students)"""

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def user_names(dic):
    for user_type in dic.keys():
        print user_type
        for index in range(0, len(dic[user_type])):
            first = dic[user_type][index]['first_name']
            last = dic[user_type][index]['last_name']
            length = len(first + last)
            print index + 1, "-", first.upper(), last.upper(), "-", length
            

            

user_names(users)

#print users['Students'][0]['first_name']