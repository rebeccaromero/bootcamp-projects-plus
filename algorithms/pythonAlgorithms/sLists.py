class SLNode(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class SList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def find_node(self, val):
        node = self.head
        while node:
            if node.value == val:
                return node
            node = node.next
        return None

    def find_previous_node(self, val):
        node = self.head
        while node:
            if node.next.value == val:
                return node
            node = node.next
        return None

    def print_all_vals(self):
        node = self.head
        while node:
            print node.value
            node = node.next
        print '\n'

    def add_back(self, val):
        node = SLNode(val)
        list.tail.next = node
        # self.print_all_vals()
        list.tail = node

    def add_front(self, val): 
        node = SLNode(val)
        node.next = self.head
        self.head = node
        return self
        # self.print_all_vals()

    def insert_before(self, next_val, val):
        self.print_all_vals()
        new_node = SLNode(val)
        node = self.find_previous_node(next_val)
        new_node.next = node.next
        node.next = new_node
        self.print_all_vals()
        

    def insert_after(self, pre_val, val):
        new_node = SLNode(val)
        node = self.find_node(pre_val)
        if node == None:
            return None
        new_node.next = node.next
        node.next = new_node
        self.print_all_vals()

    def remove_node(self, val):
        previous_node = self.find_previous_node(val)
        node = self.find_node(val)
        previous_node.next = node.next
        self.print_all_vals()

    def reverse_list(self):
        new_list = SList()
        new_list.head = self.head
        new_list.tail = self.head
        node = self.head.next
        new_list.tail.next = None                             
        print self.head.next
        while node:
            print node.value
            new_list.add_front(node.value)
            node = node.next
        print '********NEW LIST********'
        new_list.print_all_vals()
        return new_list

    #     self.print_all_vals()

list = SList()
alexa = SLNode('Alexa')
list.head = alexa
chelsea = SLNode('Chelsea')
alexa.next = chelsea
denise = SLNode('Denise')
chelsea.next = denise
emma = SLNode('Emma')
denise.next = emma
list.tail = emma

# list.print_all_vals()

# list.add_back('Fernanda')

# list.add_front('Abby')

# list.insert_before('Chelsea','Bernice')

# list.insert_after('Bernice','Bonnie')

# list.remove_node('Bernice')

print '*****REVERSE*****'
print 'ORIGINAL LIST'
list.print_all_vals()
print'***************'

list.reverse_list()

