class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print "Price:", self.price
        print "Max Speed:", self.max_speed, "mph"
        print "Miles:", self.miles
        return self

    def ride(self):
        print "Riding"
        self.miles += 10
        return self

    def reverse(self):
        print "Reversing"
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self

new_bike1 = Bike("$200", 25)
new_bike2 = Bike("$300", 30)
new_bike3 = Bike("$175", 20)

new_bike1.ride().ride().ride().reverse().displayInfo()

new_bike2.ride().ride().reverse().reverse().displayInfo()

new_bike3.reverse().reverse().reverse().displayInfo()



    
