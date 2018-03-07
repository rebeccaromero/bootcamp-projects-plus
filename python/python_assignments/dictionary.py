my_info = {"name": "Gigi", "age": "almost 3", "country of birth": "country of KiKi", "favorite language": "meowmeow"}

def get_info(dic):
    for key in dic:
        print "My", key, "is", dic[key]

    """key_list = my_info.keys()
    value_list = my_info.values()
    for index1 in range(0, len(key_list)):
        key = key_list[index1]
    for index2 in range(0,len(value_list)):
        value = value_list[index2]
    print "My", key, "is", value"""

get_info(my_info)
    