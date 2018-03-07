class MathDojo(object):

    def __init__(self, init_num):
        self.init_num = 0

    def add(self, *items):
        for item in items:
            if type(item) == list or type(item) == tuple:
                for num in item:
                    self.init_num += num
            else: 
                self.init_num += item
        return self

    def subtract(self, *items):
        for item in items:
            if type(item) ==list or type(item) == tuple:
                for num in item:
                    self.init_num -= num
            else:
                self.init_num -= item
        return self

    def result(self):
        print "Total =", self.init_num

problem1 = MathDojo(0)

problem1.add(4,(5,6)).subtract(6).result()