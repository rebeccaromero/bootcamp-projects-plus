class Animal(object):

    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print self.name
        print "Health is at:", self.health

animal1 = Animal("cheetah", 100)

#animal1.walk().walk().walk().run().run().display_health()

class Dog(Animal):
    def __init__(self, name, health):
        super(Dog, self).__init__(name, health)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

dog1 = Dog("Dalmation", 90)

#dog1.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):
    def __init__(self,name,health):
        super(Dragon, self).__init__(name,health)
        self.health = 170

    def fly(self):
        self.health += 10
        return self

    def display_health(self):
        print "I am a Dragon"
        super(Dragon, self).display_health()

dragon3 = Dragon("Norwegian Ridgeback", 0)

dragon3.walk().fly().display_health()
animal1.display_health()